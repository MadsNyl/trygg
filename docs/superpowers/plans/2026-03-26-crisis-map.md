# Crisis Map — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive Leaflet map to the crisis edit page with danger zone radius circles and shelter location markers.

**Architecture:** New `MapMarker` Prisma model with a `MarkerType` enum (RADIUS/SHELTER). Three new tRPC procedures. A new `MapSection` client component using `react-leaflet` that renders markers/circles and provides a click-to-add workflow.

**Tech Stack:** Prisma, tRPC, Zod, Leaflet, react-leaflet, Next.js dynamic import (SSR disabled)

**Spec:** `docs/superpowers/specs/2026-03-26-crisis-map-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `prisma/schema.prisma` | Add MarkerType enum and MapMarker model |
| Modify | `src/server/api/routers/crisis.ts` | Add addMapMarker, removeMapMarker, listMapMarkers procedures |
| Create | `src/app/dashbord/krise/_components/map-section.tsx` | Map section container with Leaflet map and add-marker form |
| Modify | `src/app/dashbord/krise/[crisisId]/rediger/page.tsx` | Add MapSection below measures |

---

### Task 1: Install Leaflet Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install leaflet and react-leaflet**

Run:
```bash
pnpm add leaflet react-leaflet
pnpm add -D @types/leaflet
```

- [ ] **Step 2: Verify installation**

Run:
```bash
pnpm ls leaflet react-leaflet
```
Expected: Both packages listed.

---

### Task 2: Prisma Schema — Add MarkerType Enum and MapMarker Model

**Files:**
- Modify: `prisma/schema.prisma`

- [ ] **Step 1: Add the MarkerType enum and MapMarker model**

Add the `MarkerType` enum after the existing `Severity` enum:

```prisma
enum MarkerType {
  RADIUS
  SHELTER
}
```

Add the `MapMarker` model after the `Measure` model:

```prisma
model MapMarker {
  id          String     @id @default(cuid())
  type        MarkerType
  label       String
  lat         Float
  lng         Float
  radius      Int?

  crisis      Crisis     @relation(fields: [crisisId], references: [id], onDelete: Cascade)
  crisisId    String

  etat        Etat       @relation(fields: [etatId], references: [id])
  etatId      String

  createdBy   User       @relation(fields: [createdById], references: [id])
  createdById String

  createdAt   DateTime   @default(now())
}
```

Add reverse relation to the `Crisis` model (after `measures`):
```prisma
mapMarkers      MapMarker[]
```

Add reverse relation to the `User` model (after `measures`):
```prisma
mapMarkers      MapMarker[]
```

Add reverse relation to the `Etat` model (after `measures`):
```prisma
mapMarkers      MapMarker[]
```

- [ ] **Step 2: Run migration**

Run:
```bash
pnpm migrate dev --name add-map-markers
```
Expected: Migration created and applied, Prisma client regenerated.

- [ ] **Step 3: Verify typecheck**

Run:
```bash
pnpm typecheck
```
Expected: No new errors.

---

### Task 3: tRPC Procedures — addMapMarker, removeMapMarker, listMapMarkers

**Files:**
- Modify: `src/server/api/routers/crisis.ts`

- [ ] **Step 1: Add listMapMarkers query**

Add inside the `crisisRouter` object, after `addMeasure`:

```typescript
listMapMarkers: protectedProcedure
  .input(z.object({ crisisId: z.string().min(1) }))
  .query(async ({ ctx, input }) => {
    await ensureVerifiedEtatMember(ctx);

    return ctx.db.mapMarker.findMany({
      where: { crisisId: input.crisisId },
      orderBy: { createdAt: "desc" },
      include: {
        etat: { select: { id: true, title: true, themeColor: true } },
        createdBy: { select: { id: true, name: true } },
      },
    });
  }),
```

- [ ] **Step 2: Add addMapMarker mutation**

Add after `listMapMarkers`:

```typescript
addMapMarker: protectedProcedure
  .input(
    z.object({
      crisisId: z.string().min(1),
      type: z.enum(["RADIUS", "SHELTER"]),
      label: z.string().trim().min(1),
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
      radius: z.number().int().min(1).optional(),
      etatId: z.string().min(1),
    }).refine(
      (data) => data.type !== "RADIUS" || (data.radius != null && data.radius > 0),
      { message: "Radius is required for RADIUS type", path: ["radius"] },
    ),
  )
  .mutation(async ({ ctx, input }) => {
    const userEtatIds = await ensureVerifiedEtatMember(ctx);
    await checkEditAccess(ctx, input.crisisId, userEtatIds);
    validateUserEtat(userEtatIds, input.etatId);

    return ctx.db.mapMarker.create({
      data: {
        type: input.type,
        label: input.label,
        lat: input.lat,
        lng: input.lng,
        radius: input.type === "RADIUS" ? input.radius : null,
        crisis: { connect: { id: input.crisisId } },
        etat: { connect: { id: input.etatId } },
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    });
  }),
```

- [ ] **Step 3: Add removeMapMarker mutation**

Add after `addMapMarker`:

```typescript
removeMapMarker: protectedProcedure
  .input(z.object({ id: z.string().min(1) }))
  .mutation(async ({ ctx, input }) => {
    const userEtatIds = await ensureVerifiedEtatMember(ctx);

    const marker = await ctx.db.mapMarker.findUnique({
      where: { id: input.id },
      select: { crisisId: true },
    });

    if (!marker) {
      throw new TRPCError({ code: "NOT_FOUND" });
    }

    await checkEditAccess(ctx, marker.crisisId, userEtatIds);

    return ctx.db.mapMarker.delete({
      where: { id: input.id },
    });
  }),
```

- [ ] **Step 4: Verify typecheck**

Run:
```bash
pnpm typecheck
```
Expected: No new errors.

---

### Task 4: MapSection Component

**Files:**
- Create: `src/app/dashbord/krise/_components/map-section.tsx`

This is the largest task. The component uses `react-leaflet` with dynamic import (Leaflet doesn't support SSR). It renders existing markers, handles click-to-add, and provides a form for marker details.

- [ ] **Step 1: Create the MapSection component**

Create `src/app/dashbord/krise/_components/map-section.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { api } from "~/trpc/react";

// Dynamically import the map to avoid SSR issues with Leaflet
const MapContent = dynamic(() => import("./map-content"), { ssr: false });

type Etat = { id: string; title: string };

type MapMarker = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
  createdBy: { id: string; name: string };
};

type PendingClick = { lat: number; lng: number };

export function MapSection({
  crisisId,
  userEtater,
  markers,
  onMarkersChanged,
}: {
  crisisId: string;
  userEtater: Etat[];
  markers: MapMarker[];
  onMarkersChanged: () => void;
}) {
  const [pendingClick, setPendingClick] = useState<PendingClick | null>(null);
  const [type, setType] = useState<"RADIUS" | "SHELTER">("RADIUS");
  const [label, setLabel] = useState("");
  const [radius, setRadius] = useState("500");
  const [etatId, setEtatId] = useState(userEtater[0]?.id ?? "");

  useEffect(() => {
    if (!etatId && userEtater[0]) setEtatId(userEtater[0].id);
  }, [userEtater, etatId]);

  const addMarker = api.crisis.addMapMarker.useMutation({
    onSuccess: () => {
      setPendingClick(null);
      setLabel("");
      setRadius("500");
      onMarkersChanged();
    },
  });

  const removeMarker = api.crisis.removeMapMarker.useMutation({
    onSuccess: () => {
      onMarkersChanged();
    },
  });

  const handleMapClick = (lat: number, lng: number) => {
    setPendingClick({ lat, lng });
  };

  const handleSubmit = () => {
    if (!pendingClick || !label.trim() || !etatId) return;

    addMarker.mutate({
      crisisId,
      type,
      label: label.trim(),
      lat: pendingClick.lat,
      lng: pendingClick.lng,
      radius: type === "RADIUS" ? parseInt(radius, 10) : undefined,
      etatId,
    });
  };

  const handleCancel = () => {
    setPendingClick(null);
    setLabel("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-semibold">Kart</h2>
      <p className="text-xs text-muted-foreground">
        Klikk på kartet for å legge til en markør.
      </p>

      <div className="overflow-hidden rounded-lg border" style={{ height: 400 }}>
        <MapContent
          markers={markers}
          pendingClick={pendingClick}
          pendingType={type}
          pendingRadius={type === "RADIUS" ? parseInt(radius, 10) || 500 : 0}
          onMapClick={handleMapClick}
          onRemoveMarker={(id) => removeMarker.mutate({ id })}
        />
      </div>

      {pendingClick ? (
        <div className="space-y-3 rounded-lg border p-4">
          <p className="text-sm font-medium">
            Ny markør ({pendingClick.lat.toFixed(5)}, {pendingClick.lng.toFixed(5)})
          </p>

          <ToggleGroup
            type="single"
            value={type}
            onValueChange={(v) => {
              if (v) setType(v as "RADIUS" | "SHELTER");
            }}
          >
            <ToggleGroupItem value="RADIUS" className="data-[state=on]:bg-red-500/15 data-[state=on]:text-red-500">
              Faresone
            </ToggleGroupItem>
            <ToggleGroupItem value="SHELTER" className="data-[state=on]:bg-blue-500/15 data-[state=on]:text-blue-500">
              Tilfluktssted
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex gap-2">
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder={type === "RADIUS" ? "Navn på faresone..." : "Navn på tilfluktssted..."}
              className="flex-1"
            />
            {type === "RADIUS" ? (
              <Input
                type="number"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                placeholder="Radius (meter)"
                className="w-32"
                min={1}
              />
            ) : null}
          </div>

          {userEtater.length > 1 ? (
            <Select value={etatId} onValueChange={setEtatId}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {userEtater.map((etat) => (
                  <SelectItem key={etat.id} value={etat.id}>
                    {etat.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : null}

          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleCancel}
            >
              Avbryt
            </Button>
            <Button
              type="button"
              size="sm"
              disabled={!label.trim() || !etatId || addMarker.isPending}
              onClick={handleSubmit}
            >
              {addMarker.isPending ? "Legger til..." : "Legg til markør"}
            </Button>
          </div>
        </div>
      ) : null}

      {markers.length > 0 ? (
        <div className="space-y-2">
          {markers.map((marker) => (
            <div
              key={marker.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: marker.etat.themeColor }}
                />
                <span className="text-sm">{marker.label}</span>
                <Badge
                  variant="outline"
                  className={
                    marker.type === "RADIUS"
                      ? "bg-red-500/15 text-red-500 border-red-500/30"
                      : "bg-blue-500/15 text-blue-500 border-blue-500/30"
                  }
                >
                  {marker.type === "RADIUS"
                    ? `Faresone (${marker.radius}m)`
                    : "Tilfluktssted"}
                </Badge>
                {marker.type === "SHELTER" ? (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Åpne i Google Maps
                  </a>
                ) : null}
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeMarker.mutate({ id: marker.id })}
                disabled={removeMarker.isPending}
              >
                Fjern
              </Button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run:
```bash
pnpm typecheck
```
Expected: Will fail because `./map-content` doesn't exist yet. That's Task 5.

---

### Task 5: MapContent Component (Leaflet Rendering)

**Files:**
- Create: `src/app/dashbord/krise/_components/map-content.tsx`

This is the actual Leaflet map rendering component. It's imported dynamically (no SSR) by MapSection.

- [ ] **Step 1: Create the MapContent component**

Create `src/app/dashbord/krise/_components/map-content.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with webpack/next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

type MapMarker = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
};

function ClickHandler({ onClick }: { onClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

function FitBounds({ markers }: { markers: MapMarker[] }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) return;

    const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
  }, [markers, map]);

  return null;
}

export default function MapContent({
  markers,
  pendingClick,
  pendingType,
  pendingRadius,
  onMapClick,
  onRemoveMarker,
}: {
  markers: MapMarker[];
  pendingClick: { lat: number; lng: number } | null;
  pendingType: "RADIUS" | "SHELTER";
  pendingRadius: number;
  onMapClick: (lat: number, lng: number) => void;
  onRemoveMarker: (id: string) => void;
}) {
  return (
    <MapContainer
      center={[63.4, 10.4]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler onClick={onMapClick} />
      {markers.length > 0 ? <FitBounds markers={markers} /> : null}

      {markers.map((marker) =>
        marker.type === "RADIUS" && marker.radius ? (
          <Circle
            key={marker.id}
            center={[marker.lat, marker.lng]}
            radius={marker.radius}
            pathOptions={{
              color: marker.etat.themeColor,
              fillColor: marker.etat.themeColor,
              fillOpacity: 0.15,
            }}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-medium">{marker.label}</p>
                <p className="text-xs text-gray-500">
                  {marker.etat.title} · {marker.radius}m radius
                </p>
                <button
                  onClick={() => onRemoveMarker(marker.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Fjern
                </button>
              </div>
            </Popup>
          </Circle>
        ) : (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>
              <div className="space-y-1">
                <p className="font-medium">{marker.label}</p>
                <p className="text-xs text-gray-500">{marker.etat.title}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${marker.lat},${marker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline"
                >
                  Åpne i Google Maps
                </a>
                <br />
                <button
                  onClick={() => onRemoveMarker(marker.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Fjern
                </button>
              </div>
            </Popup>
          </Marker>
        ),
      )}

      {/* Preview of pending click */}
      {pendingClick ? (
        pendingType === "RADIUS" ? (
          <Circle
            center={[pendingClick.lat, pendingClick.lng]}
            radius={pendingRadius}
            pathOptions={{
              color: "#ef4444",
              fillColor: "#ef4444",
              fillOpacity: 0.1,
              dashArray: "5 5",
            }}
          />
        ) : (
          <Marker position={[pendingClick.lat, pendingClick.lng]} opacity={0.6} />
        )
      ) : null}
    </MapContainer>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run:
```bash
pnpm typecheck
```
Expected: No new errors (only pre-existing spinner.tsx).

---

### Task 6: Add MapSection to Edit Page

**Files:**
- Modify: `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`

- [ ] **Step 1: Add map marker query and MapSection import**

Add the import at the top of the file:

```typescript
import { MapSection } from "~/app/dashbord/krise/_components/map-section";
```

Add the map markers query after the existing `measures` query:

```typescript
const { data: mapMarkers } = api.crisis.listMapMarkers.useQuery({
  crisisId: params.crisisId,
});
```

- [ ] **Step 2: Add MapSection to the JSX**

Add the MapSection after the MeasuresSection, inside the `<div className="mt-10 space-y-10 border-t pt-10">`:

```tsx
<MapSection
  crisisId={params.crisisId}
  userEtater={userEtater ?? []}
  markers={mapMarkers ?? []}
  onMarkersChanged={() => {
    void utils.crisis.listMapMarkers.invalidate({
      crisisId: params.crisisId,
    });
  }}
/>
```

- [ ] **Step 3: Verify typecheck**

Run:
```bash
pnpm typecheck
```
Expected: No new errors.

---

### Task 7: End-to-End Verification

- [ ] **Step 1: Run full lint and typecheck**

Run:
```bash
pnpm check
```
Expected: No new errors.

- [ ] **Step 2: Verify in dev server**

Run:
```bash
pnpm dev
```

Test flow:
1. Navigate to an existing crisis edit page
2. Scroll to the Kart section
3. See the Leaflet map centered on Norway
4. Click on the map — see the add marker form appear with coordinates
5. Select Faresone, enter label and radius, click "Legg til markør" — see a red circle on the map
6. Click again, select Tilfluktssted, enter label — see a marker pin on the map
7. Click "Åpne i Google Maps" on a shelter — opens Google Maps directions in new tab
8. Click "Fjern" on a marker — marker removed from map and list
