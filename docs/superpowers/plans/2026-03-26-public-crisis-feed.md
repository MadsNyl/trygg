# Public Crisis Feed & Detail Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build two public, mobile-first routes — a crisis feed at `/` and a crisis detail page at `/[crisisId]` — so anyone can view crisis information without logging in.

**Architecture:** RSC-first approach. Feed page server-renders the crisis list using URL search params for filters. Detail page server-renders all crisis data and passes it to a client component that handles the notification-to-detail swap and tab switching. No client-side tRPC calls.

**Tech Stack:** Next.js 15 App Router, Prisma 6, tRPC 11, Leaflet, shadcn/ui, Tailwind CSS v4

**Spec:** `docs/superpowers/specs/2026-03-26-public-crisis-feed-design.md`

---

### Task 1: Add `location` field to Crisis model

**Files:**
- Modify: `prisma/schema.prisma:79-98`

- [ ] **Step 1: Add `location` field to Crisis model**

In `prisma/schema.prisma`, add `location` as an optional string field to the Crisis model:

```prisma
model Crisis {
  id             String   @id @default(cuid())
  title          String
  description    String   @db.Text
  what           String
  how            String
  when           DateTime
  severity       Severity @default(LOW)
  location       String?

  createdBy      User     @relation(fields: [createdById], references: [id])
  createdById    String

  allowedEtater  Etat[]
  timelineEntries TimelineEntry[]
  measures        Measure[]
  mapMarkers      MapMarker[]

  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

- [ ] **Step 2: Generate migration and Prisma client**

Run:
```bash
pnpm db:generate
```
Expected: Prisma client regenerated with `location` field, migration created.

- [ ] **Step 3: Push schema to database**

Run:
```bash
pnpm db:push
```
Expected: Database updated with nullable `location` column on Crisis table.

- [ ] **Step 4: Commit**

```bash
git add prisma/schema.prisma generated/
git commit -m "feat: add location field to Crisis model"
```

---

### Task 2: Add `location` to crisis create/edit form

**Files:**
- Modify: `src/app/dashbord/krise/_components/crisis-form.tsx`
- Modify: `src/server/api/routers/crisis.ts`

- [ ] **Step 1: Add location input to the crisis form**

In `src/app/dashbord/krise/_components/crisis-form.tsx`, add `location` to the `CrisisFormProps` type's `defaultValues` and state:

Add to the type at the top:
```typescript
type CrisisFormProps = {
  onSubmit: (values: {
    title: string;
    description: string;
    what: string;
    how: string;
    when: Date;
    severity: "LOW" | "MEDIUM" | "HIGH";
    location: string;
    allowedEtatIds: string[];
  }) => void;
  defaultValues?: {
    title?: string;
    description?: string;
    what?: string;
    how?: string;
    when?: Date;
    severity?: "LOW" | "MEDIUM" | "HIGH";
    location?: string;
    allowedEtatIds?: string[];
  };
  etater: { id: string; title: string }[];
  isSubmitting?: boolean;
};
```

Add state:
```typescript
const [location, setLocation] = useState(defaultValues?.location ?? "");
```

Add a text input field in the "Detaljer" section, after the severity toggle:
```tsx
<div className="space-y-2">
  <Label htmlFor="location">Sted</Label>
  <Input
    id="location"
    placeholder="F.eks. Trondheim"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
    required
  />
</div>
```

Update the `handleSubmit` function to include `location` in the submitted values:
```typescript
onSubmit({
  title,
  description,
  what,
  how,
  when: whenDate,
  severity,
  location,
  allowedEtatIds: accessAll ? [] : selectedEtatIds,
});
```

- [ ] **Step 2: Update tRPC create and update mutations to accept `location`**

In `src/server/api/routers/crisis.ts`, update the `create` mutation's input schema:

Find:
```typescript
severity: z.enum(["LOW", "MEDIUM", "HIGH"]).default("LOW"),
```
Add after it:
```typescript
location: z.string().min(1),
```

And include `location` in the `db.crisis.create` data:
```typescript
data: {
  title: input.title,
  description: input.description,
  what: input.what,
  how: input.how,
  when: input.when,
  severity: input.severity,
  location: input.location,
  createdById: ctx.session.user.id,
  allowedEtater: etatConnect,
},
```

Do the same for the `update` mutation — add `location: z.string().min(1)` to its input schema and include it in the update data.

- [ ] **Step 3: Update callers to pass location**

In `src/app/dashbord/krise/ny/page.tsx`, update the `onSubmit` call to pass `location` through.

In `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`, pass `location` in `defaultValues` and in the `onSubmit` call.

- [ ] **Step 4: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/dashbord/krise/_components/crisis-form.tsx src/server/api/routers/crisis.ts src/app/dashbord/krise/ny/page.tsx src/app/dashbord/krise/\[crisisId\]/rediger/page.tsx
git commit -m "feat: add location field to crisis create/edit flow"
```

---

### Task 3: Add public service functions

**Files:**
- Modify: `src/services/crisis.ts`

- [ ] **Step 1: Add `getPublicCrises` service function**

In `src/services/crisis.ts`, add after the existing functions:

```typescript
export async function getPublicCrises(filters?: {
  search?: string;
  severity?: "LOW" | "MEDIUM" | "HIGH";
  location?: string;
}) {
  const where: Parameters<typeof db.crisis.findMany>[0]["where"] = {};

  if (filters?.search) {
    where.OR = [
      { title: { contains: filters.search, mode: "insensitive" } },
      { description: { contains: filters.search, mode: "insensitive" } },
    ];
  }

  if (filters?.severity) {
    where.severity = filters.severity;
  }

  if (filters?.location) {
    where.location = filters.location;
  }

  return db.crisis.findMany({
    where,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      severity: true,
      location: true,
      when: true,
      createdAt: true,
    },
  });
}
```

- [ ] **Step 2: Add `getPublicCrisisById` service function**

```typescript
export async function getPublicCrisisById(id: string) {
  const crisis = await db.crisis.findUnique({
    where: { id },
    include: {
      timelineEntries: {
        orderBy: { createdAt: "desc" },
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
      measures: {
        orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
      mapMarkers: {
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
    },
  });

  return crisis;
}
```

- [ ] **Step 3: Add `getDistinctLocations` service function**

This fetches unique location values for the location filter dropdown:

```typescript
export async function getDistinctLocations() {
  const results = await db.crisis.findMany({
    where: { location: { not: null } },
    select: { location: true },
    distinct: ["location"],
    orderBy: { location: "asc" },
  });

  return results
    .map((r) => r.location)
    .filter((l): l is string => l !== null);
}
```

- [ ] **Step 4: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 5: Commit**

```bash
git add src/services/crisis.ts
git commit -m "feat: add public service functions for crisis feed and detail"
```

---

### Task 4: Build the feed page (`/`)

**Files:**
- Modify: `src/app/page.tsx` (replace content)
- Create: `src/app/_components/crisis-list-item.tsx`
- Create: `src/app/_components/feed-filters.tsx`
- Create: `src/app/_components/feed-footer.tsx`

- [ ] **Step 1: Create `crisis-list-item.tsx`**

Create `src/app/_components/crisis-list-item.tsx`:

```tsx
import Link from "next/link";

type CrisisListItemProps = {
  crisis: {
    id: string;
    title: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    location: string | null;
    when: Date;
  };
};

const severityDot = {
  LOW: "bg-green-500",
  MEDIUM: "bg-amber-500",
  HIGH: "bg-red-500",
} as const;

export function CrisisListItem({ crisis }: CrisisListItemProps) {
  return (
    <Link
      href={`/${crisis.id}`}
      className="flex items-start gap-3 border-b px-4 py-3 transition-colors hover:bg-muted/50"
    >
      <span
        className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${severityDot[crisis.severity]}`}
      />
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{crisis.title}</p>
        <p className="text-sm text-muted-foreground">
          {crisis.location ?? "Ukjent sted"} ·{" "}
          {crisis.when.toLocaleDateString("nb-NO", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Create `feed-filters.tsx`**

Create `src/app/_components/feed-filters.tsx`:

```tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Input } from "~/components/ui/input";

type FeedFiltersProps = {
  locations: string[];
};

export function FeedFilters({ locations }: FeedFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <div className="space-y-3 px-4">
      <Input
        placeholder="Sok etter krise..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => updateParams("q", e.target.value)}
      />
      <div className="flex gap-2">
        <select
          className="flex-1 rounded-md border px-3 py-2 text-sm"
          defaultValue={searchParams.get("severity") ?? ""}
          onChange={(e) => updateParams("severity", e.target.value)}
        >
          <option value="">Alle alvorlighetsgrader</option>
          <option value="HIGH">Hoy</option>
          <option value="MEDIUM">Middels</option>
          <option value="LOW">Lav</option>
        </select>
        <select
          className="flex-1 rounded-md border px-3 py-2 text-sm"
          defaultValue={searchParams.get("location") ?? ""}
          onChange={(e) => updateParams("location", e.target.value)}
        >
          <option value="">Alle steder</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create `feed-footer.tsx`**

Create `src/app/_components/feed-footer.tsx`:

```tsx
import Link from "next/link";

import { Button } from "~/components/ui/button";

export function FeedFooter() {
  return (
    <footer className="border-t px-4 py-6 text-center">
      <Button variant="outline" size="sm" asChild>
        <Link href="/logg-inn">Logg inn</Link>
      </Button>
    </footer>
  );
}
```

- [ ] **Step 4: Replace the homepage (`src/app/page.tsx`)**

Replace the contents of `src/app/page.tsx`:

```tsx
import { Suspense } from "react";

import { CrisisListItem } from "~/app/_components/crisis-list-item";
import { FeedFilters } from "~/app/_components/feed-filters";
import { FeedFooter } from "~/app/_components/feed-footer";
import { getDistinctLocations, getPublicCrises } from "~/services/crisis";

type SearchParams = Promise<{
  q?: string;
  severity?: string;
  location?: string;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const severity =
    params.severity === "LOW" ||
    params.severity === "MEDIUM" ||
    params.severity === "HIGH"
      ? params.severity
      : undefined;

  const [crises, locations] = await Promise.all([
    getPublicCrises({
      search: params.q,
      severity,
      location: params.location,
    }),
    getDistinctLocations(),
  ]);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-white">
      <header className="px-4 pt-6 pb-4">
        <h1 className="font-heading text-2xl font-bold">Trygg</h1>
        <p className="text-sm text-muted-foreground">Kriseoversikt</p>
      </header>

      <Suspense>
        <FeedFilters locations={locations} />
      </Suspense>

      <div className="mt-4">
        {crises.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted-foreground">
            Ingen kriser funnet.
          </p>
        ) : (
          crises.map((crisis) => (
            <CrisisListItem key={crisis.id} crisis={crisis} />
          ))
        )}
      </div>

      <FeedFooter />
    </main>
  );
}
```

- [ ] **Step 5: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx src/app/_components/crisis-list-item.tsx src/app/_components/feed-filters.tsx src/app/_components/feed-footer.tsx
git commit -m "feat: build public crisis feed page at /"
```

---

### Task 5: Build the crisis detail page — notification card

**Files:**
- Create: `src/app/[crisisId]/page.tsx`
- Create: `src/app/[crisisId]/_components/crisis-view.tsx`
- Create: `src/app/[crisisId]/_components/crisis-notification.tsx`

- [ ] **Step 1: Create `crisis-notification.tsx`**

Create `src/app/[crisisId]/_components/crisis-notification.tsx`:

```tsx
import { Button } from "~/components/ui/button";

type CrisisNotificationProps = {
  crisis: {
    title: string;
    description: string;
    when: Date;
    severity: "LOW" | "MEDIUM" | "HIGH";
  };
  onReadMore: () => void;
};

export function CrisisNotification({
  crisis,
  onReadMore,
}: CrisisNotificationProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          <span className="text-sm font-semibold tracking-wide uppercase">
            Nodvarsel
          </span>
        </div>

        <h1 className="mb-2 text-xl font-bold">{crisis.title}</h1>

        <p className="mb-3 text-muted-foreground">{crisis.description}</p>

        <p className="mb-6 text-sm text-muted-foreground">
          {crisis.when.toLocaleDateString("nb-NO", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <Button
          variant="outline"
          className="w-full"
          onClick={onReadMore}
        >
          Les mer
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `crisis-view.tsx`** (client wrapper managing notification/detail swap)

Create `src/app/[crisisId]/_components/crisis-view.tsx`:

```tsx
"use client";

import { useState } from "react";

import { CrisisNotification } from "./crisis-notification";

import type { CrisisDetailData } from "./types";

export function CrisisView({ crisis }: { crisis: CrisisDetailData }) {
  const [showDetail, setShowDetail] = useState(false);

  if (!showDetail) {
    return (
      <CrisisNotification
        crisis={crisis}
        onReadMore={() => setShowDetail(true)}
      />
    );
  }

  // Detail view will be added in Task 6
  return <div>Detail placeholder</div>;
}
```

- [ ] **Step 3: Create shared types file**

Create `src/app/[crisisId]/_components/types.ts`:

```typescript
export type TimelineEntryData = {
  id: string;
  text: string;
  createdAt: Date;
  etat: { id: string; title: string; themeColor: string };
};

export type MeasureData = {
  id: string;
  text: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  etat: { id: string; title: string; themeColor: string };
};

export type MapMarkerData = {
  id: string;
  type: "RADIUS" | "SHELTER";
  label: string;
  lat: number;
  lng: number;
  radius: number | null;
  etat: { id: string; title: string; themeColor: string };
};

export type CrisisDetailData = {
  id: string;
  title: string;
  description: string;
  what: string;
  how: string;
  when: Date;
  severity: "LOW" | "MEDIUM" | "HIGH";
  location: string | null;
  timelineEntries: TimelineEntryData[];
  measures: MeasureData[];
  mapMarkers: MapMarkerData[];
};
```

- [ ] **Step 4: Create the page**

Create `src/app/[crisisId]/page.tsx`:

```tsx
import { notFound } from "next/navigation";

import { getPublicCrisisById } from "~/services/crisis";

import { CrisisView } from "./_components/crisis-view";

type Params = Promise<{ crisisId: string }>;

export default async function CrisisPage({ params }: { params: Params }) {
  const { crisisId } = await params;
  const crisis = await getPublicCrisisById(crisisId);

  if (!crisis) {
    notFound();
  }

  return <CrisisView crisis={crisis} />;
}
```

- [ ] **Step 5: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/\[crisisId\]/
git commit -m "feat: add crisis detail page with notification card"
```

---

### Task 6: Build the crisis detail view with tabs

**Files:**
- Modify: `src/app/[crisisId]/_components/crisis-view.tsx`
- Create: `src/app/[crisisId]/_components/crisis-detail.tsx`
- Create: `src/app/[crisisId]/_components/crisis-tabs.tsx`
- Create: `src/app/[crisisId]/_components/public-timeline.tsx`
- Create: `src/app/[crisisId]/_components/public-measures.tsx`
- Create: `src/app/[crisisId]/_components/share-button.tsx`

- [ ] **Step 1: Create `share-button.tsx`**

Create `src/app/[crisisId]/_components/share-button.tsx`:

```tsx
"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleShare}>
      {copied ? "Kopiert!" : "Del"}
    </Button>
  );
}
```

- [ ] **Step 2: Create `public-timeline.tsx`**

Create `src/app/[crisisId]/_components/public-timeline.tsx`:

```tsx
import type { TimelineEntryData } from "./types";

export function PublicTimeline({
  entries,
}: {
  entries: TimelineEntryData[];
}) {
  if (entries.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-muted-foreground">
        Ingen oppdateringer enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {entries.map((entry) => (
        <div key={entry.id} className="flex gap-3 px-4 py-3">
          <div className="pt-1">
            <span className="text-sm font-medium text-muted-foreground">
              {entry.createdAt.toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <span
              className="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white"
              style={{ backgroundColor: entry.etat.themeColor }}
            >
              {entry.etat.title}
            </span>
            <p className="mt-1 text-sm">{entry.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create `public-measures.tsx`**

Create `src/app/[crisisId]/_components/public-measures.tsx`:

```tsx
import type { MeasureData } from "./types";

const measureIcons: Record<number, string> = {
  0: "🏠",
  1: "🚫",
  2: "📡",
  3: "📞",
  4: "⚠️",
};

export function PublicMeasures({ measures }: { measures: MeasureData[] }) {
  if (measures.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-muted-foreground">
        Ingen tiltak enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {measures.map((measure, index) => (
        <div key={measure.id} className="flex gap-3 px-4 py-4">
          <span className="text-2xl">
            {measureIcons[index % Object.keys(measureIcons).length]}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{measure.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create `crisis-tabs.tsx`**

Create `src/app/[crisisId]/_components/crisis-tabs.tsx`:

```tsx
"use client";

import { useState } from "react";

import type { MapMarkerData, MeasureData, TimelineEntryData } from "./types";
import { PublicTimeline } from "./public-timeline";
import { PublicMeasures } from "./public-measures";
import { PublicMap } from "./public-map";

type Tab = "siste-nytt" | "tiltak" | "kart";

const tabs: { id: Tab; label: string }[] = [
  { id: "siste-nytt", label: "Siste nytt" },
  { id: "tiltak", label: "Tiltak" },
  { id: "kart", label: "Kart" },
];

export function CrisisTabs({
  timelineEntries,
  measures,
  mapMarkers,
}: {
  timelineEntries: TimelineEntryData[];
  measures: MeasureData[];
  mapMarkers: MapMarkerData[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("siste-nytt");

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        {activeTab === "siste-nytt" && (
          <PublicTimeline entries={timelineEntries} />
        )}
        {activeTab === "tiltak" && <PublicMeasures measures={measures} />}
        {activeTab === "kart" && <PublicMap markers={mapMarkers} />}
      </div>

      <nav className="sticky bottom-0 flex border-t bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-t-2 border-blue-500 text-blue-600"
                : "text-muted-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
```

- [ ] **Step 5: Create `crisis-detail.tsx`**

Create `src/app/[crisisId]/_components/crisis-detail.tsx`:

```tsx
import Link from "next/link";

import { ShareButton } from "./share-button";
import { CrisisTabs } from "./crisis-tabs";

import type { CrisisDetailData } from "./types";

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <Link
          href="/"
          className="text-xl text-muted-foreground hover:text-foreground"
        >
          &lt;
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-bold">{crisis.title}</h1>
          <p className="text-sm text-muted-foreground">
            {crisis.location ?? "Ukjent sted"}
          </p>
        </div>
        <ShareButton />
      </header>

      {/* Info block */}
      <section className="mx-4 mb-4 border-l-2 border-gray-200 pl-4">
        <div className="space-y-2 py-2">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              HVA
            </p>
            <p className="text-sm">{crisis.what}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              HVORDAN
            </p>
            <p className="text-sm">{crisis.how}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              NAR
            </p>
            <p className="text-sm">
              {crisis.when.toLocaleDateString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <CrisisTabs
        timelineEntries={crisis.timelineEntries}
        measures={crisis.measures}
        mapMarkers={crisis.mapMarkers}
      />
    </div>
  );
}
```

- [ ] **Step 6: Update `crisis-view.tsx` to show the detail view**

Replace the placeholder in `src/app/[crisisId]/_components/crisis-view.tsx`:

```tsx
"use client";

import { useState } from "react";

import { CrisisNotification } from "./crisis-notification";
import { CrisisDetail } from "./crisis-detail";

import type { CrisisDetailData } from "./types";

export function CrisisView({ crisis }: { crisis: CrisisDetailData }) {
  const [showDetail, setShowDetail] = useState(false);

  if (!showDetail) {
    return (
      <CrisisNotification
        crisis={crisis}
        onReadMore={() => setShowDetail(true)}
      />
    );
  }

  return <CrisisDetail crisis={crisis} />;
}
```

- [ ] **Step 7: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 8: Commit**

```bash
git add src/app/\[crisisId\]/
git commit -m "feat: add crisis detail view with tabs, timeline, measures, and share"
```

---

### Task 7: Build the read-only public map

**Files:**
- Create: `src/app/[crisisId]/_components/public-map.tsx`

- [ ] **Step 1: Create `public-map.tsx`**

Create `src/app/[crisisId]/_components/public-map.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";

import type { MapMarkerData } from "./types";

const PublicMapContent = dynamic(() => import("./public-map-content"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <p className="text-sm text-muted-foreground">Laster kart...</p>
    </div>
  ),
});

export function PublicMap({ markers }: { markers: MapMarkerData[] }) {
  return (
    <div className="flex flex-col">
      <div className="h-[60vh]">
        <PublicMapContent markers={markers} />
      </div>
      {markers.some((m) => m.type === "RADIUS") && (
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-300" />
          <span className="text-sm text-muted-foreground">
            Sperret omrade — hold deg unna
          </span>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create `public-map-content.tsx`** (read-only Leaflet map)

Create `src/app/[crisisId]/_components/public-map-content.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import type { MapMarkerData } from "./types";

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

function FitBounds({ markers }: { markers: MapMarkerData[] }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) return;
    const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 13 });
  }, [markers, map]);

  return null;
}

export default function PublicMapContent({
  markers,
}: {
  markers: MapMarkerData[];
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
      {markers.length > 0 && <FitBounds markers={markers} />}

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
                  Apne i Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ),
      )}
    </MapContainer>
  );
}
```

- [ ] **Step 3: Verify**

Run:
```bash
pnpm check
```
Expected: No lint or type errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/\[crisisId\]/_components/public-map.tsx src/app/\[crisisId\]/_components/public-map-content.tsx
git commit -m "feat: add read-only public map for crisis detail page"
```

---

### Task 8: Final verification and cleanup

**Files:**
- Modify: `src/app/dashbord/_components/crisis-card.tsx` (update link to use new route)

- [ ] **Step 1: Update crisis card link**

In `src/app/dashbord/_components/crisis-card.tsx`, the "Se detaljer" link already points to `/krise/${crisis.id}`. Update it to point to the new public route `/${crisis.id}`:

Find:
```tsx
<Link href={`/krise/${crisis.id}`}>Se detaljer</Link>
```
Replace with:
```tsx
<Link href={`/${crisis.id}`}>Se detaljer</Link>
```

- [ ] **Step 2: Run full build**

Run:
```bash
pnpm build
```
Expected: Build succeeds with no errors.

- [ ] **Step 3: Manual smoke test**

Run:
```bash
pnpm dev
```

Test:
1. Visit `/` — should see the crisis feed with search and filters
2. Click a crisis — should navigate to `/[crisisId]` and show notification card
3. Click "Les mer" — should swap to detail view with tabs
4. Check all three tabs work: Siste nytt, Tiltak, Kart
5. Click "Del" — should copy URL to clipboard
6. Click back arrow — should return to feed
7. Footer "Logg inn" link — should go to `/logg-inn`

- [ ] **Step 4: Commit**

```bash
git add src/app/dashbord/_components/crisis-card.tsx
git commit -m "fix: update crisis card detail link to new public route"
```
