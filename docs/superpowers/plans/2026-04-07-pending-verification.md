# Pending Verification Flow Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** After signup, send users to a dedicated pending-verification page; hide the dashbord link from unverified users on the home header.

**Architecture:** A new server-rendered route `/venter-verifisering` with the same shell as `/`. A small client component `HeaderUserMenu` replaces the inline header logic in `src/app/page.tsx` and renders a no-link "name + Logg ut" variant for unverified users. The signup handler is repointed at the new route.

**Tech Stack:** Next.js 15 App Router (RSC), Better-Auth, shadcn/ui, Hugeicons, Tailwind v4. No test framework in the app, so verification is via `pnpm check` and manual smoke tests.

**Spec:** `docs/superpowers/specs/2026-04-07-pending-verification-design.md`

---

### Task 1: Add the `HeaderUserMenu` client component

**Files:**
- Create: `src/app/_components/header-user-menu.tsx`

This component renders the right side of the header on `/`. For verified users it matches the current behavior (avatar + name link to `/dashbord`). For unverified users it renders a plain name span and a small "Logg ut" text button.

- [ ] **Step 1: Create the component file**

Write `src/app/_components/header-user-menu.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";

type HeaderUserMenuProps = {
  name: string;
  isVerified: boolean;
};

export function HeaderUserMenu({ name, isVerified }: HeaderUserMenuProps) {
  const router = useRouter();
  const [loggerUt, setLoggerUt] = useState(false);

  const handleLoggUt = async () => {
    setLoggerUt(true);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  if (isVerified) {
    return (
      <Link
        href="/dashbord"
        className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
      >
        <Avatar>
          <AvatarFallback className="text-sm">
            {name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span>{name}</span>
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">{name}</span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-9 px-3 text-sm"
        onClick={handleLoggUt}
        disabled={loggerUt}
      >
        {loggerUt ? "Logger ut..." : "Logg ut"}
      </Button>
    </div>
  );
}
```

- [ ] **Step 2: Verify it typechecks**

Run: `pnpm typecheck`
Expected: PASS (no errors).

- [ ] **Step 3: Commit**

```bash
git add src/app/_components/header-user-menu.tsx
git commit -m "feat: add HeaderUserMenu client component"
```

---

### Task 2: Use `HeaderUserMenu` in the home page header

**Files:**
- Modify: `src/app/page.tsx` (the `nav` block inside `<header>`, lines ~63-81)

- [ ] **Step 1: Import the new component**

Add to the existing imports at the top of `src/app/page.tsx`:

```tsx
import { HeaderUserMenu } from "~/app/_components/header-user-menu";
```

The existing `Avatar`/`AvatarFallback` imports can stay — they're harmless if unused after the change. Remove them only if `pnpm lint` complains; the project's lint config flags unused imports as errors, so likely you'll need to drop them. Specifically remove:

```tsx
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
```

- [ ] **Step 2: Replace the inline conditional**

Find this block in `src/app/page.tsx`:

```tsx
<nav className="hidden items-center gap-3 sm:flex">
  {session?.user ? (
    <Link
      href="/dashbord"
      className="flex items-center gap-2 text-sm transition-opacity hover:opacity-80"
    >
      <Avatar>
        <AvatarFallback className="text-sm">
          {session.user.name.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <span>{session.user.name}</span>
    </Link>
  ) : (
    <Button asChild variant="outline" className="h-9 px-4 text-sm">
      <Link href="/logg-inn">Logg inn</Link>
    </Button>
  )}
</nav>
```

Replace with:

```tsx
<nav className="hidden items-center gap-3 sm:flex">
  {session?.user ? (
    <HeaderUserMenu
      name={session.user.name}
      isVerified={session.user.isVerified === true}
    />
  ) : (
    <Button asChild variant="outline" className="h-9 px-4 text-sm">
      <Link href="/logg-inn">Logg inn</Link>
    </Button>
  )}
</nav>
```

- [ ] **Step 3: Verify lint + types**

Run: `pnpm check`
Expected: PASS. If lint complains about an unused `Avatar`/`AvatarFallback` import, remove it as noted in Step 1 and rerun.

- [ ] **Step 4: Manual smoke test**

Run: `pnpm dev`
- Open `/` while logged out → see "Logg inn" button (unchanged).
- Log in with a verified account → header shows avatar+name linking to `/dashbord` (unchanged).
- Log in with an unverified account → header shows plain name + "Logg ut" button. Clicking "Logg ut" returns to `/` logged out.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: hide dashbord link from unverified users on home header"
```

---

### Task 3: Create the `/venter-verifisering` page

**Files:**
- Create: `src/app/venter-verifisering/page.tsx`
- Create: `src/app/venter-verifisering/_components/logg-ut-knapp.tsx`

The page is a server component that mirrors `src/app/page.tsx`'s shell. The logout button is a tiny client component because it needs `onClick`.

- [ ] **Step 1: Create the logout button client component**

Write `src/app/venter-verifisering/_components/logg-ut-knapp.tsx`:

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";

export function LoggUtKnapp() {
  const router = useRouter();
  const [loggerUt, setLoggerUt] = useState(false);

  const handleLoggUt = async () => {
    setLoggerUt(true);
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="h-10 px-5 text-sm"
      onClick={handleLoggUt}
      disabled={loggerUt}
    >
      {loggerUt ? "Logger ut..." : "Logg ut"}
    </Button>
  );
}
```

- [ ] **Step 2: Create the page**

Write `src/app/venter-verifisering/page.tsx`:

```tsx
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "~/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShieldKeyIcon } from "@hugeicons/core-free-icons";
import { LoggUtKnapp } from "~/app/venter-verifisering/_components/logg-ut-knapp";
import { getSession } from "~/server/better-auth/server";

export default async function VenterVerifiseringSide() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/logg-inn");
  }

  if (session.user.isVerified === true) {
    redirect("/dashbord");
  }

  return (
    <main className="bg-background min-h-screen">
      <header className="bg-background border-b">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 lg:px-0">
          <div>
            <h1 className="font-heading text-xl font-bold tracking-tight">
              trygg
            </h1>
          </div>
          <nav className="hidden items-center gap-3 sm:flex">
            <Button asChild variant="outline" className="h-9 px-4 text-sm">
              <Link href="/">Til forsiden</Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-0 lg:py-10">
        <Empty className="py-20">
          <EmptyMedia>
            <HugeiconsIcon
              icon={ShieldKeyIcon}
              size={36}
              className="text-muted-foreground"
            />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle className="text-base">
              Venter på verifisering
            </EmptyTitle>
            <EmptyDescription className="text-sm">
              Kontoen din må verifiseres av en administrator før du får tilgang
              til etatsverktøyene. Du kan fortsatt se den offentlige
              kriseoversikten.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <LoggUtKnapp />
          </EmptyContent>
        </Empty>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Verify lint + types**

Run: `pnpm check`
Expected: PASS.

- [ ] **Step 4: Manual smoke test**

Run: `pnpm dev` (if not already running).
- Visit `/venter-verifisering` while logged out → redirected to `/logg-inn`.
- Visit `/venter-verifisering` while logged in as a verified user → redirected to `/dashbord`.
- Visit `/venter-verifisering` while logged in as an unverified user → page renders with the "Til forsiden" header button and the "Logg ut" button. "Til forsiden" navigates to `/`. "Logg ut" signs out and returns to `/`.

- [ ] **Step 5: Commit**

```bash
git add src/app/venter-verifisering/page.tsx src/app/venter-verifisering/_components/logg-ut-knapp.tsx
git commit -m "feat: add pending verification page"
```

---

### Task 4: Redirect newly registered users to the pending page

**Files:**
- Modify: `src/app/_components/innlogging-kort.tsx` (the `handleRegistrer` function, lines ~55-85)

Only the signup flow changes. Login is untouched.

- [ ] **Step 1: Update the signup handler**

Find this block in `src/app/_components/innlogging-kort.tsx`:

```tsx
const result = await authClient.signUp.email({
  name: navn,
  email: epost,
  password: passord,
  callbackURL: "/",
});

if (result.error) {
  setFeilmelding(
    hentFeilmelding(
      result.error,
      "Kunne ikke registrere bruker. Prøv igjen.",
    ),
  );
  setLasterInn(false);
  return;
}

router.push("/");
router.refresh();
```

Replace with:

```tsx
const result = await authClient.signUp.email({
  name: navn,
  email: epost,
  password: passord,
  callbackURL: "/venter-verifisering",
});

if (result.error) {
  setFeilmelding(
    hentFeilmelding(
      result.error,
      "Kunne ikke registrere bruker. Prøv igjen.",
    ),
  );
  setLasterInn(false);
  return;
}

router.push("/venter-verifisering");
router.refresh();
```

`handleLoggInn` is left untouched.

- [ ] **Step 2: Verify lint + types**

Run: `pnpm check`
Expected: PASS.

- [ ] **Step 3: Manual smoke test of the full flow**

Run: `pnpm dev` (if not already running).
1. Open `/logg-inn` while logged out.
2. Switch to the "Registrer" tab and create a new account.
3. After submission you should land on `/venter-verifisering` (NOT `/`).
4. Click "Til forsiden" — you arrive at `/` and the header shows the unverified state (plain name + "Logg ut").
5. Use Prisma Studio (`pnpm db:studio`) to flip `isVerified` to `true` for that user.
6. Reload `/` — the header now shows the avatar+name link to `/dashbord` (verified state).
7. Visiting `/venter-verifisering` now redirects to `/dashbord`.

- [ ] **Step 4: Commit**

```bash
git add src/app/_components/innlogging-kort.tsx
git commit -m "feat: redirect new signups to pending verification page"
```

---

### Task 5: Final verification

- [ ] **Step 1: Run the full check**

Run: `pnpm check`
Expected: PASS (lint + typecheck clean).

- [ ] **Step 2: Run the build**

Run: `pnpm build`
Expected: PASS. Confirms the new route compiles in production mode.

- [ ] **Step 3: Confirm git status is clean**

Run: `git status`
Expected: "nothing to commit, working tree clean".
