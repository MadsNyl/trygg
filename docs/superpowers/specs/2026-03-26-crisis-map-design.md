# Crisis Map — Phase 3 Design

Phase 3 of the crisis system (GitHub issue #1). Adds an optional interactive map to crises with danger zone radius circles and shelter location markers.

## Data Model

### MarkerType Enum

```prisma
enum MarkerType {
  RADIUS
  SHELTER
}
```

### MapMarker Model

```prisma
model MapMarker {
  id          String     @id @default(cuid())
  type        MarkerType
  label       String
  lat         Float
  lng         Float
  radius      Int?       // meters, only for RADIUS type

  crisis      Crisis     @relation(fields: [crisisId], references: [id], onDelete: Cascade)
  crisisId    String

  etat        Etat       @relation(fields: [etatId], references: [id])
  etatId      String

  createdBy   User       @relation(fields: [createdById], references: [id])
  createdById String

  createdAt   DateTime   @default(now())
}
```

Requires adding `mapMarkers MapMarker[]` reverse relations on Crisis, Etat, and User.

## Access Control

Same as crisis edit access — verified etat member with edit permission on the crisis. User picks which etat they're posting as.

## tRPC Procedures

Added to the existing `crisisRouter`:

| Procedure | Type | Input | Description |
|-----------|------|-------|-------------|
| `addMapMarker` | mutation | `{ crisisId, type, label, lat, lng, radius?, etatId }` | Adds a map marker. Validates edit access and etat membership. Radius required when type is RADIUS. |
| `removeMapMarker` | mutation | `{ id }` | Removes a map marker. Validates edit access on the parent crisis. |
| `listMapMarkers` | query | `{ crisisId }` | Returns all markers for a crisis, includes etat info. |

## Validation (Zod)

- `type`: enum (RADIUS, SHELTER)
- `label`: string, trim, min 1
- `lat`: number, min -90, max 90
- `lng`: number, min -180, max 180
- `radius`: number, int, min 1 — required when type is RADIUS, ignored for SHELTER
- `crisisId`: string, min 1
- `etatId`: string, min 1

## UI — Map Section on Edit Page

Added below the measures section on `/dashbord/krise/[crisisId]/rediger`.

**Map library:** Leaflet via `react-leaflet` (free, no API key, OpenStreetMap tiles).

**Packages to install:**
- `leaflet`
- `react-leaflet`
- `@types/leaflet` (dev)

**Components:**

### MapSection
Container component on the edit page. Shows the Leaflet map and controls. Fetches markers via `api.crisis.listMapMarkers`.

**Map behavior:**
- Default center: Norway (lat 63.4, lng 10.4, zoom 5). If markers exist, fit bounds to show all markers.
- Click on map opens a popover/form to add a marker at that location.
- RADIUS markers render as circles (semi-transparent red fill) with a center dot.
- SHELTER markers render as point markers with the label.
- Each shelter marker has a popup with the label and a "Åpne i Google Maps" link (`https://www.google.com/maps/dir/?api=1&destination={lat},{lng}`).
- Each marker (radius or shelter) has a delete button in its popup.

### AddMarkerForm
Shown when user clicks the map. Fields:
- Type toggle: Faresone (RADIUS) / Tilfluktssted (SHELTER)
- Label (text input)
- Radius in meters (number input, only shown when type is RADIUS)
- Etat selector (if user belongs to multiple)
- Confirm / Cancel buttons

Coordinates come from the map click, not manually entered.

## Norwegian Labels

| English | Norwegian |
|---------|-----------|
| Map | Kart |
| Danger zone | Faresone |
| Shelter | Tilfluktssted |
| Add marker | Legg til markør |
| Radius (meters) | Radius (meter) |
| Open in Google Maps | Åpne i Google Maps |
| Remove | Fjern |
| No markers yet | Ingen markører enda |
| Click on the map to add a marker | Klikk på kartet for å legge til en markør |
