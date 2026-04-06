# Profile Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full account management profile page with tabbed layout (Profil, Sikkerhet, Medlemskap) at `/dashbord/profile`.

**Architecture:** Server component shell fetches user data, sessions, and etat memberships. Client tab components receive pre-fetched data as props. Mutations use tRPC for name updates and Better Auth client APIs for password change, email change, session management, and account deletion.

**Tech Stack:** Next.js 15 (App Router, RSC), tRPC 11, Prisma 6, Better Auth 1.3, shadcn/ui, Tailwind CSS v4, HugeiconsIcon

---

### Task 1: Add tRPC profile query

**Files:**
- Modify: `src/server/api/routers/users.ts`

- [ ] **Step 1: Add getProfile query to users router**

Add this procedure to the existing `usersRouter` in `src/server/api/routers/users.ts`:

```typescript
getProfile: protectedProcedure.query(async ({ ctx }) => {
  const user = await ctx.db.user.findUnique({
    where: { id: ctx.session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      isVerified: true,
      isAdmin: true,
      createdAt: true,
      etater: {
        select: {
          id: true,
          title: true,
          themeColor: true,
          contactEmail: true,
          contactPhone: true,
        },
      },
    },
  });

  if (!user) {
    throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
  }

  return user;
}),
```

- [ ] **Step 2: Add updateName mutation to users router**

Add this procedure to the same router:

```typescript
updateName: protectedProcedure
  .input(z.object({ name: z.string().min(1).max(255) }))
  .mutation(async ({ ctx, input }) => {
    return ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: { name: input.name },
      select: { id: true, name: true },
    });
  }),
```

- [ ] **Step 3: Add deleteAccount mutation to users router**

Add this procedure to the same router:

```typescript
deleteAccount: protectedProcedure
  .input(z.object({ confirmEmail: z.string().email() }))
  .mutation(async ({ ctx, input }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: { email: true },
    });

    if (!user || user.email !== input.confirmEmail) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "E-postadressen stemmer ikke overens",
      });
    }

    await ctx.db.user.delete({
      where: { id: ctx.session.user.id },
    });

    return { success: true };
  }),
```

- [ ] **Step 4: Verify the router compiles**

Run: `pnpm typecheck`
Expected: No errors in `src/server/api/routers/users.ts`

- [ ] **Step 5: Commit**

```bash
git add src/server/api/routers/users.ts
git commit -m "feat: add profile query, updateName, and deleteAccount to users router"
```

---

### Task 2: Build the profile tabs client component

**Files:**
- Create: `src/app/dashbord/profile/_components/profile-tabs.tsx`

- [ ] **Step 1: Create the profile tabs component**

Create `src/app/dashbord/profile/_components/profile-tabs.tsx`:

```typescript
"use client";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserIcon,
  SecurityLockIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

import { ProfileTab } from "./profile-tab";
import { SecurityTab } from "./security-tab";
import { MembershipTab } from "./membership-tab";

type Tab = "profil" | "sikkerhet" | "medlemskap";

type EtatData = {
  id: string;
  title: string;
  themeColor: string;
  contactEmail: string;
  contactPhone: string;
};

type ProfileData = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  etater: EtatData[];
};

type SessionData = {
  id: string;
  token: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

const tabs: { id: Tab; label: string; icon: typeof UserIcon }[] = [
  { id: "profil", label: "Profil", icon: UserIcon },
  { id: "sikkerhet", label: "Sikkerhet", icon: SecurityLockIcon },
  { id: "medlemskap", label: "Medlemskap", icon: UserGroupIcon },
];

export function ProfileTabs({
  profile,
  sessions,
  currentSessionToken,
}: {
  profile: ProfileData;
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  const [activeTab, setActiveTab] = useState<Tab>("profil");

  return (
    <div>
      <nav
        role="tablist"
        aria-label="Profilinnstillinger"
        className="bg-muted mb-8 flex gap-1 rounded-lg p-1"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <HugeiconsIcon icon={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </nav>

      <div
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === "profil" && <ProfileTab profile={profile} />}
        {activeTab === "sikkerhet" && (
          <SecurityTab
            profile={profile}
            sessions={sessions}
            currentSessionToken={currentSessionToken}
          />
        )}
        {activeTab === "medlemskap" && (
          <MembershipTab etater={profile.etater} />
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify the icons exist**

Run: `grep -r "UserIcon\|SecurityLockIcon\|UserGroupIcon" node_modules/@hugeicons/core-free-icons/src --include="*.ts" -l | head -5`

If icons are not found, search for alternatives and update the imports. Common alternatives: `User02Icon`, `LockIcon`, `UserMultipleIcon`.

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/profile/_components/profile-tabs.tsx
git commit -m "feat: add profile tabs component with pill-style tab bar"
```

---

### Task 3: Build the Profil tab content

**Files:**
- Create: `src/app/dashbord/profile/_components/profile-tab.tsx`

- [ ] **Step 1: Create the Profil tab component**

Create `src/app/dashbord/profile/_components/profile-tab.tsx`:

```typescript
"use client";

import { useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Field, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";

type ProfileData = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  etater: {
    id: string;
    title: string;
    themeColor: string;
    contactEmail: string;
    contactPhone: string;
  }[];
};

export function ProfileTab({ profile }: { profile: ProfileData }) {
  const [name, setName] = useState(profile.name);
  const [successMessage, setSuccessMessage] = useState("");

  const utils = api.useUtils();
  const updateName = api.users.updateName.useMutation({
    onSuccess: () => {
      setSuccessMessage("Endringene er lagret");
      void utils.users.getProfile.invalidate();
      setTimeout(() => setSuccessMessage(""), 3000);
    },
  });

  const hasChanges = name !== profile.name;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasChanges) return;
    updateName.mutate({ name });
  };

  const formattedDate = new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(profile.createdAt));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Personlig informasjon</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field>
              <FieldLabel htmlFor="name">Navn</FieldLabel>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                disabled={!hasChanges || updateName.isPending}
              >
                {updateName.isPending ? "Lagrer..." : "Lagre endringer"}
              </Button>
              {successMessage && (
                <p className="text-sm text-green-600">{successMessage}</p>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Kontoinformasjon</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium">E-post</p>
            <p className="text-muted-foreground text-sm">{profile.email}</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Endre e-post under Sikkerhet-fanen
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Konto opprettet</p>
            <p className="text-muted-foreground text-sm">{formattedDate}</p>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Status</p>
            <div className="flex gap-2">
              {profile.isVerified ? (
                <Badge>Verifisert</Badge>
              ) : (
                <div>
                  <Badge variant="outline">Ikke verifisert</Badge>
                  <p className="text-muted-foreground mt-1 text-xs">
                    En administrator må verifisere kontoen din
                  </p>
                </div>
              )}
              {profile.isAdmin && <Badge>Administrator</Badge>}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm typecheck`
Expected: No type errors

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/profile/_components/profile-tab.tsx
git commit -m "feat: add Profil tab with name editing and account info display"
```

---

### Task 4: Build the Sikkerhet tab content

**Files:**
- Create: `src/app/dashbord/profile/_components/security-tab.tsx`

- [ ] **Step 1: Create the Security tab component**

Create `src/app/dashbord/profile/_components/security-tab.tsx`:

```typescript
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Field, FieldError, FieldLabel } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { authClient } from "~/server/better-auth/client";
import { api } from "~/trpc/react";

type ProfileData = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  isVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  etater: {
    id: string;
    title: string;
    themeColor: string;
    contactEmail: string;
    contactPhone: string;
  }[];
};

type SessionData = {
  id: string;
  token: string;
  ipAddress: string | null;
  userAgent: string | null;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

function ChangeEmailCard({ currentEmail }: { currentEmail: string }) {
  const [newEmail, setNewEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await authClient.changeEmail({
      newEmail,
    });

    if (error) {
      setErrorMessage(error.message ?? "Noe gikk galt");
    } else {
      setSuccessMessage("E-postadressen din er oppdatert");
      setNewEmail("");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Endre e-post</CardTitle>
        <CardDescription className="text-sm">
          Nåværende e-post: {currentEmail}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="new-email">Ny e-postadresse</FieldLabel>
            <Input
              id="new-email"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="ny@epost.no"
            />
            {errorMessage && <FieldError>{errorMessage}</FieldError>}
          </Field>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={!newEmail}>
              Oppdater e-post
            </Button>
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function ChangePasswordCard() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const mismatch =
    confirmPassword !== "" && newPassword !== confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mismatch) return;
    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await authClient.changePassword({
      currentPassword,
      newPassword,
    });

    if (error) {
      setErrorMessage(error.message ?? "Noe gikk galt");
    } else {
      setSuccessMessage("Passordet ditt er oppdatert");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Endre passord</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Field>
            <FieldLabel htmlFor="current-password">
              Nåværende passord
            </FieldLabel>
            <Input
              id="current-password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="new-password">Nytt passord</FieldLabel>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm-password">
              Bekreft nytt passord
            </FieldLabel>
            <Input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {mismatch && (
              <FieldError>Passordene stemmer ikke overens</FieldError>
            )}
          </Field>
          <div className="flex items-center gap-3">
            <Button
              type="submit"
              disabled={
                !currentPassword || !newPassword || !confirmPassword || mismatch
              }
            >
              Oppdater passord
            </Button>
            {successMessage && (
              <p className="text-sm text-green-600">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-destructive text-sm">{errorMessage}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function parseUserAgent(ua: string | null): string {
  if (!ua) return "Ukjent enhet";

  const browserMatch = ua.match(
    /(Chrome|Firefox|Safari|Edge|Opera|Brave)[/\s](\d+)/i,
  );
  const osMatch = ua.match(
    /(Windows|Mac OS X|Linux|Android|iOS|iPhone OS)[/\s]?([\d._]*)/i,
  );

  const browser = browserMatch ? `${browserMatch[1]} ${browserMatch[2]}` : "Ukjent nettleser";
  const os = osMatch ? osMatch[1]?.replace(/_/g, ".") : "Ukjent OS";

  return `${browser} på ${os}`;
}

function SessionsCard({
  sessions,
  currentSessionToken,
}: {
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  const [revokingId, setRevokingId] = useState<string | null>(null);

  const handleRevoke = async (sessionToken: string) => {
    setRevokingId(sessionToken);
    await authClient.revokeSession({ token: sessionToken });
    setRevokingId(null);
    window.location.reload();
  };

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("nb-NO", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Aktive økter</CardTitle>
        <CardDescription className="text-sm">
          Enheter som er logget inn på kontoen din
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sessions.map((session) => {
          const isCurrent = session.token === currentSessionToken;
          return (
            <div
              key={session.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">
                    {parseUserAgent(session.userAgent)}
                  </p>
                  {isCurrent && <Badge variant="secondary">Denne enheten</Badge>}
                </div>
                <p className="text-muted-foreground text-xs">
                  IP: {session.ipAddress ?? "Ukjent"}
                </p>
                <p className="text-muted-foreground text-xs">
                  Sist aktiv: {formatDate(session.updatedAt)}
                </p>
              </div>
              {!isCurrent && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleRevoke(session.token)}
                  disabled={revokingId === session.token}
                >
                  {revokingId === session.token ? "Logger ut..." : "Logg ut"}
                </Button>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

function DeleteAccountCard({ email }: { email: string }) {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const deleteAccount = api.users.deleteAccount.useMutation({
    onSuccess: () => {
      void authClient.signOut();
      router.push("/logg-inn");
    },
  });

  const handleDelete = () => {
    deleteAccount.mutate({ confirmEmail });
  };

  return (
    <Card className="border-destructive/50">
      <CardHeader>
        <CardTitle className="text-destructive text-base">
          Slett konto
        </CardTitle>
        <CardDescription className="text-sm">
          Denne handlingen er permanent og kan ikke angres. All data knyttet til
          kontoen din vil bli slettet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive">Slett kontoen min</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Er du sikker på at du vil slette kontoen?</DialogTitle>
              <DialogDescription>
                Denne handlingen kan ikke angres. All data knyttet til kontoen
                din, inkludert innlegg og bidrag, vil bli permanent slettet.
              </DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="confirm-email">
                Skriv inn e-postadressen din for å bekrefte
              </FieldLabel>
              <Input
                id="confirm-email"
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder={email}
              />
            </Field>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Avbryt
              </Button>
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={
                  confirmEmail !== email || deleteAccount.isPending
                }
              >
                {deleteAccount.isPending ? "Sletter..." : "Slett konto"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export function SecurityTab({
  profile,
  sessions,
  currentSessionToken,
}: {
  profile: ProfileData;
  sessions: SessionData[];
  currentSessionToken: string;
}) {
  return (
    <div className="space-y-6">
      <ChangeEmailCard currentEmail={profile.email} />
      <ChangePasswordCard />
      <SessionsCard
        sessions={sessions}
        currentSessionToken={currentSessionToken}
      />
      <DeleteAccountCard email={profile.email} />
    </div>
  );
}
```

- [ ] **Step 2: Verify the Dialog imports work**

Check that all Dialog subcomponents (`DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogTitle`, `DialogTrigger`) are exported from `src/components/ui/dialog.tsx`. If `DialogFooter` is missing, it may be defined inline in the file — read the full dialog component to confirm exports.

- [ ] **Step 3: Verify it compiles**

Run: `pnpm typecheck`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/app/dashbord/profile/_components/security-tab.tsx
git commit -m "feat: add Sikkerhet tab with email/password change, sessions, and account deletion"
```

---

### Task 5: Build the Medlemskap tab content

**Files:**
- Create: `src/app/dashbord/profile/_components/membership-tab.tsx`

- [ ] **Step 1: Create the Membership tab component**

Create `src/app/dashbord/profile/_components/membership-tab.tsx`:

```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserGroupIcon } from "@hugeicons/core-free-icons";

type EtatData = {
  id: string;
  title: string;
  themeColor: string;
  contactEmail: string;
  contactPhone: string;
};

export function MembershipTab({ etater }: { etater: EtatData[] }) {
  if (etater.length === 0) {
    return (
      <Empty className="py-20">
        <EmptyMedia>
          <HugeiconsIcon
            icon={UserGroupIcon}
            size={36}
            className="text-muted-foreground"
          />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle className="text-base">
            Ingen medlemskap ennå
          </EmptyTitle>
          <EmptyDescription className="text-sm">
            Du er ikke tilknyttet noen etater. Kontakt en administrator for å
            bli lagt til.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {etater.map((etat) => (
        <Card key={etat.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span
                className="h-3.5 w-3.5 shrink-0 rounded-full"
                style={{ backgroundColor: etat.themeColor }}
                aria-hidden="true"
              />
              {etat.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {etat.contactEmail}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            <p>Telefon: {etat.contactPhone}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/dashbord/profile/_components/membership-tab.tsx
git commit -m "feat: add Medlemskap tab with etat cards and empty state"
```

---

### Task 6: Build the server component profile page

**Files:**
- Modify: `src/app/dashbord/profile/page.tsx`

- [ ] **Step 1: Replace the empty profile page with the server component**

Replace the contents of `src/app/dashbord/profile/page.tsx` with:

```typescript
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";
import { ProfileTabs } from "./_components/profile-tabs";

export default async function ProfilePage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/logg-inn");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      emailVerified: true,
      isVerified: true,
      isAdmin: true,
      createdAt: true,
      etater: {
        select: {
          id: true,
          title: true,
          themeColor: true,
          contactEmail: true,
          contactPhone: true,
        },
      },
    },
  });

  if (!user) {
    redirect("/logg-inn");
  }

  const sessions = await db.session.findMany({
    where: { userId: session.user.id },
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      token: true,
      ipAddress: true,
      userAgent: true,
      expiresAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("better-auth.session_token");
  const currentSessionToken = sessionCookie?.value ?? "";

  return (
    <main className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          {user.name}
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">{user.email}</p>
      </div>

      <ProfileTabs
        profile={user}
        sessions={sessions}
        currentSessionToken={currentSessionToken}
      />
    </main>
  );
}
```

- [ ] **Step 2: Update the redirect page**

The `src/app/profile/page.tsx` already redirects to `/dashbord/profile`, so no changes needed there.

- [ ] **Step 3: Verify the page compiles**

Run: `pnpm typecheck`
Expected: No type errors

- [ ] **Step 4: Commit**

```bash
git add src/app/dashbord/profile/page.tsx
git commit -m "feat: build profile page server component with data fetching"
```

---

### Task 7: Verify icons and fix imports

**Files:**
- Modify: `src/app/dashbord/profile/_components/profile-tabs.tsx` (if needed)
- Modify: `src/app/dashbord/profile/_components/membership-tab.tsx` (if needed)

- [ ] **Step 1: Verify HugeiconsIcon imports**

Run: `pnpm build` to check the full build compiles.

If icon imports fail, search for available alternatives:

```bash
ls node_modules/@hugeicons/core-free-icons/src/ | grep -i "user\|security\|lock\|group"
```

Update the imports in `profile-tabs.tsx` and `membership-tab.tsx` accordingly.

- [ ] **Step 2: Fix any build errors**

Address any type errors or import issues found during the build.

- [ ] **Step 3: Commit fixes if any**

```bash
git add -A
git commit -m "fix: correct icon imports for profile page"
```

---

### Task 8: Run format and lint checks

**Files:**
- All files created/modified in previous tasks

- [ ] **Step 1: Run Prettier format**

Run: `pnpm format:write`

- [ ] **Step 2: Run lint check**

Run: `pnpm check`
Expected: No errors

- [ ] **Step 3: Fix any lint issues**

Address any ESLint or TypeScript issues found.

- [ ] **Step 4: Commit formatting/lint fixes if any**

```bash
git add -A
git commit -m "style: format and lint profile page components"
```

---

### Task 9: Manual smoke test

- [ ] **Step 1: Start the dev server**

Run: `pnpm dev`

- [ ] **Step 2: Test the profile page**

Navigate to `/dashbord/profile` and verify:
- Page header shows user name and email
- Three tabs are visible: Profil, Sikkerhet, Medlemskap
- Tab switching works
- Profil tab: name field is editable, save button enables on change
- Profil tab: account info card shows email, creation date, badges
- Sikkerhet tab: email change form is visible
- Sikkerhet tab: password change form validates confirm field
- Sikkerhet tab: sessions list shows current session with "Denne enheten" badge
- Sikkerhet tab: delete account dialog requires email confirmation
- Medlemskap tab: shows etat cards or empty state

- [ ] **Step 3: Fix any issues found during testing**

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: address issues found during profile page smoke test"
```
