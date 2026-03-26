# Public Crisis Feed & Detail Pages

**Issue:** #3 — Feed and user flow
**Date:** 2026-03-26
**Approach:** RSC-first with minimal client interactivity

## Overview

Two new public, mobile-first routes that let anyone view crisis information without logging in:

- `/` — Crisis feed with search and filters
- `/[crisisId]` — Crisis detail with notification card → tabbed detail view

## Data Model Changes

### Crisis model addition

Add `location: String?` to the Crisis model — a city/municipality name (e.g. "Trondheim", "Oslo") set by admin when creating/editing a crisis. Optional at the database level to avoid breaking existing rows, but required in the create/edit form going forward. The feed can filter out crises without a location or show them with "Ukjent sted".

No other schema changes. Timeline entries, measures, and map markers already exist.

### New public tRPC procedures

Create a new `publicCrisis` router using `publicProcedure` (no auth required):

- `publicCrisis.list` — Returns crises with title, severity, location, timestamp. Supports text search (title/description), severity filter, and location filter.
- `publicCrisis.getById` — Returns full crisis data including timeline entries (with etat info), measures, and map markers.

These are separate from the existing protected procedures.

### New service functions

In `src/services/crisis.ts`:

- `getPublicCrises(search?, severity?, location?)` — Queries with optional filters, returns minimal fields for feed display.
- `getPublicCrisisById(id)` — Returns full crisis with timeline, measures, markers, and etat info for the detail page.

## Routes & Pages

### `/` — Feed page

Server-rendered page. Reads `searchParams` for filter state.

**URL pattern:** `/?q=granat&severity=HIGH&location=Trondheim`

**Layout (top to bottom):**
1. Header with app name/logo
2. Search text input
3. Filter row: severity dropdown + location dropdown
4. Crisis list: minimal items — severity badge (colored dot), title, location, relative timestamp. Each item links to `/[crisisId]`.
5. Footer with "Logg inn" link button pointing to `/logg-inn`

### `/[crisisId]` — Detail page

Server-rendered with all crisis data pre-fetched and passed as props.

**Two states managed by a client component (no page navigation):**

**Notification state (initial):**
- Warning triangle icon + "NODVARSEL" uppercase label
- Bold title
- Short description
- Timestamp
- "Les mer" button — swaps to detail state

**Detail state (after "Les mer"):**
- Back arrow (`<`) top-left → navigates to `/`
- Title (bold) + location (subtitle, muted)
- Info block: HVA, HVORDAN, NAR — labeled sections with subtle dividers
- Share button (copies URL to clipboard)
- Sticky tab bar at bottom with three tabs:
  - **Siste nytt** — Timeline entries, newest first. Each: timestamp, etat badge (colored with theme color), text.
  - **Tiltak** — Measures list. Each: contextual icon, bold title, description text.
  - **Kart** — Read-only Leaflet map with radius circles (red/pink) and shelter pins. Legend: "Sperret omrade — hold deg unna".

## Components

### New components

| Component | Type | Location | Purpose |
|---|---|---|---|
| `crisis-list-item.tsx` | Server | Feed page | Minimal list item: severity dot, title, location, timestamp |
| `crisis-view.tsx` | Client | Detail page | Wraps notification + detail, manages state swap |
| `crisis-notification.tsx` | Client | Detail page | Notification card with "Les mer" trigger |
| `crisis-detail.tsx` | Client | Detail page | Full detail view with header, info block, tabs, share |
| `crisis-tabs.tsx` | Client | Detail page | Tab switcher: Siste nytt / Tiltak / Kart |
| `public-timeline.tsx` | Client | Detail page | Read-only timeline with etat colors (no add form) |
| `public-measures.tsx` | Client | Detail page | Read-only measures list with icons (no add form) |
| `public-map.tsx` | Client | Detail page | Read-only map wrapper (no click-to-place, no remove) |
| `share-button.tsx` | Client | Detail page | Copies URL to clipboard with confirmation |
| `feed-filters.tsx` | Client | Feed page | Search + severity + location dropdowns, updates URL params |
| `feed-footer.tsx` | Server | Feed page | Footer with "Logg inn" link |

### Reused existing

- `map-content.tsx` — Leaflet map component, rendered in read-only mode (no click handlers, no remove buttons)
- Severity badge color mapping from existing components

## Data Flow & Server/Client Boundary

### Feed page

- `page.tsx` (server component): reads `searchParams`, calls `getPublicCrises()`, renders list.
- `feed-filters.tsx` (client component): updates URL search params via `useRouter` + `useSearchParams`, triggering server re-render.
- `feed-footer.tsx` (server component): static.

### Detail page

- `page.tsx` (server component): calls `getPublicCrisisById(crisisId)`, fetches all data in one call, passes as props.
- `crisis-view.tsx` (client component): receives all data as props, manages notification/detail swap state. No client-side tRPC fetching.
- `public-map.tsx` (client component): Leaflet requires client-side rendering. Receives markers as props.
- `share-button.tsx` (client component): needs `navigator.clipboard`.

**No client-side tRPC calls** for public pages. Everything server-fetched and passed as props.

## UI & Styling

### Feed list items
- Severity: small colored dot — green (LOW), amber (MEDIUM), red (HIGH)
- Title in semibold, location and relative timestamp in muted text
- Clean dividers between items
- Mobile-first single column layout

### Notification card
- White card on light gray background, centered on mobile
- Warning icon + "NODVARSEL" in uppercase, small font
- Title bold and large, description in muted regular weight
- Timestamp small and muted
- "Les mer" as outlined button, full width

### Detail view
- Back arrow top-left navigates to `/`
- Title bold, location as muted subtitle
- Info block: HVA/HVORDAN/NAR with small uppercase muted labels, subtle dividers
- Tab bar sticky at bottom: active tab highlighted in blue
- Share button as icon button in header area

### Timeline (Siste nytt)
- Entries newest first
- Each: timestamp + colored etat badge + text
- Simple vertical list

### Tiltak
- Each measure: contextual icon, bold title, description
- Ordered list

### Kart
- Full-width map filling tab content
- Read-only: red/pink radius circles, pin markers for shelters
- Legend at bottom with colored dot explanation

## Admin-side updates

- Add `location` field to the crisis create/edit form (`crisis-form.tsx`)
- Location is a required text input
