# Profile Page Design

## Overview

Full account management page at `/dashbord/profile` with tabbed layout matching the crisis detail page pattern. Server component shell with client tab islands. All UI text in Norwegian.

## Architecture

- **Server component** (`/dashbord/profile/page.tsx`) fetches user data, sessions, and etat memberships via tRPC server helpers
- **Client component** (`profile-tabs.tsx`) renders the pill-style tab bar and tab content panels
- **Tab content components** are client components receiving pre-fetched data as props, handling mutations via tRPC

## Page Header

Displayed above the tabs (always visible):
- User name (`text-2xl font-bold tracking-tight font-heading`)
- User email (`text-sm text-muted-foreground`)

## Tab Bar

Same pill-style as crisis tabs:
- Container: `bg-muted rounded-lg p-1 flex gap-1`
- Active: `bg-background text-foreground shadow-sm`
- Inactive: `text-muted-foreground hover:text-foreground`
- Tabs: **Profil**, **Sikkerhet**, **Medlemskap**
- Each tab has a HugeiconsIcon (16px)

## Tab 1: Profil

### Card 1: Personlig informasjon
- Editable name field (Field component with FieldLabel)
- "Lagre endringer" button — disabled until field value differs from current
- Inline success message: "Endringene er lagret" (fades after a few seconds)
- Uses tRPC mutation to update user name

### Card 2: Kontoinformasjon (read-only)
- **E-post:** displayed as text with note "Endre e-post under Sikkerhet-fanen"
- **Konto opprettet:** formatted Norwegian date (e.g. "6. april 2026")
- **Status badges:**
  - "Verifisert" (default badge) or "Ikke verifisert" (outline badge) — if not verified, shows: "En administrator må verifisere kontoen din"
  - "Administrator" badge (only if isAdmin is true)

## Tab 2: Sikkerhet

### Card 1: Endre e-post
- Current email shown as read-only text above the form
- Input field for new email
- "Oppdater e-post" button
- Success: "E-postadressen din er oppdatert"
- Error: "Denne e-postadressen er allerede i bruk"

### Card 2: Endre passord
- Fields: "Nåværende passord", "Nytt passord", "Bekreft nytt passord"
- "Oppdater passord" button
- Validation: "Passordene stemmer ikke overens" inline under confirm field
- Success: "Passordet ditt er oppdatert"

### Card 3: Aktive økter
- Header text: "Enheter som er logget inn på kontoen din"
- List of sessions, each as a row within the card showing:
  - Browser/device info
  - IP address
  - Last active timestamp
  - Current session highlighted with "Denne enheten" badge
  - "Logg ut" button per non-current session
- Uses Better Auth session management APIs

### Card 4: Faresone
- Visually separated with destructive styling
- Title: "Slett konto"
- Description: "Denne handlingen er permanent og kan ikke angres. All data knyttet til kontoen din vil bli slettet."
- "Slett kontoen min" button (destructive variant)
- Confirmation dialog:
  - Restates consequences
  - Requires user to type their email to confirm
  - "Slett konto" (destructive) and "Avbryt" buttons

## Tab 3: Medlemskap

### Etat membership cards
- Card per etat (same card pattern as admin etater grid)
- Each card shows: theme color dot, etat name, contact email, contact phone
- Read-only — no edit/remove actions
- Grid layout: `md:grid-cols-2 xl:grid-cols-3`

### Empty state
- HugeiconsIcon + "Ingen medlemskap ennå"
- Description: "Du er ikke tilknyttet noen etater. Kontakt en administrator for å bli lagt til."
- No action button (not self-serve)

## tRPC API Requirements

New procedures needed in the users router:
- `getProfile` (query) — returns current user with etat memberships
- `updateName` (mutation) — updates user name
- `updateEmail` (mutation) — updates user email with uniqueness check
- `changePassword` (mutation) — validates current password, updates to new
- `getSessions` (query) — returns active sessions for current user
- `revokeSession` (mutation) — terminates a specific session by ID
- `deleteAccount` (mutation) — permanently deletes user account and all related data

Note: Some of these (password change, session management, account deletion) may be handled directly via Better Auth client APIs rather than custom tRPC procedures. Implementation should prefer Better Auth's built-in methods where available.

## Component Structure

```
src/app/dashbord/profile/
  page.tsx                    # Server component, data fetching
  _components/
    profile-tabs.tsx          # Client component, tab bar + switching
    profile-tab.tsx           # Profil tab content
    security-tab.tsx          # Sikkerhet tab content
    membership-tab.tsx        # Medlemskap tab content
```

## Design Patterns

- Follows existing dashboard page patterns (max-w-6xl container, consistent spacing)
- Cards use the project's Card component with CardHeader/CardContent
- Forms use Field/FieldGroup/FieldLabel/FieldError components
- Badges use existing Badge component (default/outline variants)
- Empty state uses existing Empty component
- Buttons use existing Button component variants (default, destructive)
- All mutations show loading state via isPending
