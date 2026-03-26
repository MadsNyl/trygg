# Crisis Feed — Phase 1 Design

Phase 1 of the crisis/scenario system (GitHub issue #1). Covers the core crisis data model, dashboard feed, create page, and edit page. Detail view (`/krise/[id]`), timeline, measures, and map are deferred to later phases.

## Data Model

### Severity Enum

```prisma
enum Severity {
  LOW
  MEDIUM
  HIGH
}
```

### Crisis Model

```prisma
model Crisis {
  id             String    @id @default(cuid())
  title          String
  description    String    @db.Text
  what           String
  how            String
  when           DateTime
  severity       Severity  @default(LOW)

  createdBy      User      @relation(fields: [createdById], references: [id])
  createdById    String
  allowedEtater  Etat[]    // empty = all etater can edit

  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}
```

Requires adding a `crises` relation on the `User` model and an implicit many-to-many join table between `Crisis` and `Etat`.

## Access Control

- **View**: All verified users who belong to at least one etat can view all crises.
- **Create**: Same as view — any verified etat member.
- **Edit**: The creator can always edit. Other users can edit if:
  - `allowedEtater` is empty (all etater can edit), OR
  - The user belongs to at least one etat in `allowedEtater`.
- **Auth enforcement**: tRPC `protectedProcedure` checks that user is verified and belongs to at least one etat. Edit mutations additionally check edit access.

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/dashbord` | Authenticated | Crisis feed list — main dashboard content |
| `/dashbord/krise/ny` | Authenticated | Full-page create form |
| `/dashbord/krise/[crisisId]/rediger` | Authenticated | Full-page edit form (same form, pre-filled) |
| `/krise/[crisisId]` | Public | Detail view — **deferred, not built in Phase 1** |

The "Se detaljer" button in the feed links to `/krise/[crisisId]` but that page is not implemented yet.

## tRPC Router: `crisis`

Added to `src/server/api/root.ts` as `crisis: crisisRouter`.

### Procedures

| Procedure | Type | Input | Description |
|-----------|------|-------|-------------|
| `list` | query | none | Returns all crises ordered by `createdAt` desc. Includes creator name, allowed etater, and a computed `canEdit` boolean per crisis for the current user. |
| `create` | mutation | `{ title, description, what, how, when, severity, allowedEtaterIds? }` | Creates a crisis. Sets `createdById` from session. Connects `allowedEtater` if provided. |
| `getById` | query | `{ id }` | Returns a single crisis with creator and allowed etater. Used by the edit page. |
| `update` | mutation | `{ id, title?, description?, what?, how?, when?, severity?, allowedEtaterIds? }` | Updates a crisis. Checks edit access before allowing. |

All procedures require verified user + etat membership. `update` additionally checks edit access.

## UI Components

### Dashboard Feed (`/dashbord/page.tsx`)

- Server component, fetches crisis list via tRPC server helpers.
- Header: "Kriseoversikt" title + "Ny krise" link button to `/dashbord/krise/ny`.
- Crisis cards in a vertical list, each showing:
  - Severity color: left border (red/amber/green) + badge (Høy/Middels/Lav).
  - Title and description (truncated).
  - Metadata: when date, creator name, allowed etater (or "Alle etater").
  - "Se detaljer" button linking to `/krise/[crisisId]`.
  - "Rediger" button linking to `/dashbord/krise/[crisisId]/rediger` — only shown if user has edit access.
- Sorted by `createdAt` descending.

### Create Page (`/dashbord/krise/ny/page.tsx`)

- Client component with form state.
- "Tilbake til oversikt" link back to `/dashbord`.
- Form sections:
  1. **Grunnleggende**: Title (input), Description (textarea).
  2. **Detaljer**: Hva (input), Hvordan (input), Når (date picker), Alvorlighetsgrad (toggle buttons: Lav/Middels/Høy).
  3. **Tilgang**: Redigeringstilgang — toggle chips for "Alle etater" or individual etater. "Alle etater" is default and deselects individuals; selecting any individual deselects "Alle etater".
- Submit calls `api.crisis.create` mutation, redirects to `/dashbord` on success.
- All fields except `allowedEtaterIds` are required.

### Edit Page (`/dashbord/krise/[crisisId]/rediger/page.tsx`)

- Same form component as create, pre-filled with existing data from `api.crisis.getById`.
- Submit calls `api.crisis.update` mutation, redirects to `/dashbord` on success.
- Page checks edit access — redirects to `/dashbord` if user cannot edit.

### Shared Form Component

A `CrisisForm` client component used by both create and edit pages. Accepts optional `defaultValues` prop and an `onSubmit` callback. This avoids duplicating the form layout and validation.

## Service Layer

`src/services/crisis.ts` with a `getCrises()` function for server-side data fetching in the dashboard page, following the existing pattern in `src/services/etater.ts`.

## Validation (Zod)

- `title`: string, min 1, max 200
- `description`: string, min 1
- `what`: string, min 1
- `how`: string, min 1
- `when`: date
- `severity`: enum (LOW, MEDIUM, HIGH)
- `allowedEtaterIds`: optional array of strings (etat IDs)

## Norwegian Labels

| English | Norwegian |
|---------|-----------|
| Crisis overview | Kriseoversikt |
| New crisis | Ny krise |
| Create new crisis | Opprett ny krise |
| Title | Tittel |
| Description | Beskrivelse |
| What | Hva |
| How | Hvordan |
| When | Når |
| Severity | Alvorlighetsgrad |
| Low | Lav |
| Medium | Middels |
| High | Høy |
| Edit access | Redigeringstilgang |
| All etater | Alle etater |
| View details | Se detaljer |
| Edit | Rediger |
| Edit crisis | Rediger krise |
| Cancel | Avbryt |
| Create crisis | Opprett krise |
| Save changes | Lagre endringer |
| Back to overview | Tilbake til oversikt |
| Created by | Opprettet av |
