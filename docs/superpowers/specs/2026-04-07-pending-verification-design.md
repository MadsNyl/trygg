# Pending Verification Flow

## Problem

Two related issues with the current signup/verification UX:

1. After signup, users are redirected to `/` with no indication that their account is pending admin verification.
2. On the home page header, every logged-in user sees an avatar+name link to `/dashbord` regardless of `isVerified`. Unverified users can click through into the backoffice and only then see a "Venter på tilgang" empty state.

## Goals

- After successful signup, send users to a dedicated pending-verification page that explains the state and lets them log out.
- Hide the dashbord ("backoffice") link from unverified users on the home page header, while still letting them browse the public crisis feed and log out.
- Login flow (existing users) is unchanged.
- Public (logged-out) users keep current behavior.

## Non-goals

- No email verification, no admin notification flow, no changes to how admins verify users.
- No changes to `/dashbord` itself — the existing "Venter på tilgang" empty state stays as a fallback for unverified users who navigate there directly.

## Behavior

### Header on `/` (`src/app/page.tsx`)

| State | Header right side |
|---|---|
| Not logged in | "Logg inn" button (unchanged) |
| Logged in + verified | Avatar + name, links to `/dashbord` (unchanged) |
| Logged in + not verified | Plain name (no avatar) + small text "Logg ut" button. No link to `/dashbord`. |

### Signup

After `authClient.signUp.email` succeeds, redirect to `/venter-verifisering` instead of `/`. The `callbackURL` field passed to `signUp.email` is updated to `/venter-verifisering` to keep Better-Auth's internal redirect consistent with the client-side push.

Login flow (`handleLoggInn`) is unchanged.

### `/venter-verifisering` page

Server component. Guards:

- No session → `redirect("/logg-inn")`
- Session present and `isVerified === true` → `redirect("/dashbord")`
- Otherwise render the page

Layout matches `src/app/page.tsx`:

- Same `<header>` markup: `bg-background border-b`, `mx-auto flex h-16 max-w-3xl items-center justify-between px-4 lg:px-0`. Left: "trygg" wordmark. Right: a "Til forsiden" outline button (`h-9 px-4 text-sm`) linking to `/`.
- Body: `mx-auto max-w-3xl px-4 py-6 lg:px-0 lg:py-10` with an `<Empty className="py-20">` block:
  - `EmptyMedia`: `ShieldKeyIcon` from `@hugeicons/core-free-icons`, size 36, `text-muted-foreground` (matches the existing dashbord empty state)
  - `EmptyTitle`: "Venter på verifisering"
  - `EmptyDescription`: "Kontoen din må verifiseres av en administrator før du får tilgang til etatsverktøyene. Du kan fortsatt se den offentlige kriseoversikten."
  - `EmptyContent`: "Logg ut" button (client component)

## Components

### New: `src/app/_components/header-user-menu.tsx` (client)

Receives `{ name: string; isVerified: boolean }`. Renders the verified variant (avatar + name link to `/dashbord`) or the unverified variant (plain `<span>` with the name + small "Logg ut" text button).

The logout handler calls `authClient.signOut()` then `router.push("/")` and `router.refresh()`.

`src/app/page.tsx` reads `isVerified` from the session (Better-Auth exposes the additional `isVerified` field on `session.user`). If for some reason it's not present on the session shape, fall back to a `db.user.findUnique` for that field. Verified during implementation.

### New: `src/app/venter-verifisering/_components/logg-ut-knapp.tsx` (client)

Tiny client component: a `Button` that calls `authClient.signOut()` then redirects to `/`. Used inside the `EmptyContent` slot.

(Could be merged with `header-user-menu`'s logout handler via a shared hook, but the duplication is two lines — not worth abstracting.)

### New: `src/app/venter-verifisering/page.tsx` (server)

As described under Behavior.

### Modified: `src/app/_components/innlogging-kort.tsx`

`handleRegistrer`: change `callbackURL` and post-success redirect from `/` to `/venter-verifisering`. `handleLoggInn` is untouched.

### Modified: `src/app/page.tsx`

Replace the inline conditional in the header with `<HeaderUserMenu name={...} isVerified={...} />` when there's a session. Pass `session.user.isVerified === true`.

## Files touched

- `src/app/page.tsx` — use new HeaderUserMenu
- `src/app/_components/header-user-menu.tsx` — NEW
- `src/app/_components/innlogging-kort.tsx` — change signup redirect
- `src/app/venter-verifisering/page.tsx` — NEW
- `src/app/venter-verifisering/_components/logg-ut-knapp.tsx` — NEW

## Edge cases

- Verified user manually navigating to `/venter-verifisering` → redirected to `/dashbord`.
- Logged-out user navigating to `/venter-verifisering` → redirected to `/logg-inn`.
- User who logs out from the pending page → redirected to `/`, sees the public feed with the "Logg inn" button in the header.
- Admin who verifies the user while they sit on the pending page: next navigation will pick up the new `isVerified` state. No realtime update needed.
