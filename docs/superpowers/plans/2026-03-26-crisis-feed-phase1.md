# Crisis Feed Phase 1 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a crisis/scenario system to the dashboard where verified etat members can create, view, and edit crisis events.

**Architecture:** New `Crisis` Prisma model with many-to-many to `Etat` for edit access control. New `crisisRouter` added to tRPC. Dashboard page becomes the crisis feed. Create and edit are separate full pages sharing a `CrisisForm` component.

**Tech Stack:** Prisma, tRPC, Next.js App Router, React, Tailwind CSS, shadcn/ui components, Zod

**Spec:** `docs/superpowers/specs/2026-03-26-crisis-feed-phase1-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `prisma/schema.prisma` | Add `Severity` enum and `Crisis` model |
| Create | `src/server/api/routers/crisis.ts` | tRPC crisis router (list, create, getById, update) |
| Modify | `src/server/api/root.ts` | Register crisis router |
| Create | `src/services/crisis.ts` | Server-side `getCrises()` for dashboard page |
| Modify | `src/app/dashbord/page.tsx` | Crisis feed list (server component) |
| Create | `src/app/dashbord/_components/crisis-card.tsx` | Individual crisis card in the feed |
| Create | `src/app/dashbord/krise/ny/page.tsx` | Create crisis page |
| Create | `src/app/dashbord/krise/[crisisId]/rediger/page.tsx` | Edit crisis page |
| Create | `src/app/dashbord/krise/_components/crisis-form.tsx` | Shared form component for create/edit |

---

### Task 1: Prisma Schema — Add Severity Enum and Crisis Model

**Files:**
- Modify: `prisma/schema.prisma`

- [ ] **Step 1: Add the Severity enum and Crisis model to the schema**

Add before the `Session` model in `prisma/schema.prisma`:

```prisma
enum Severity {
  LOW
  MEDIUM
  HIGH
}

model Crisis {
  id             String   @id @default(cuid())
  title          String
  description    String   @db.Text
  what           String
  how            String
  when           DateTime
  severity       Severity @default(LOW)

  createdBy      User     @relation(fields: [createdById], references: [id])
  createdById    String

  allowedEtater  Etat[]

  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

Add a `crises` relation to the `User` model (alongside the existing `posts` field):

```prisma
crises        Crisis[]
```

Add a `crises` relation to the `Etat` model (alongside the existing `users` field):

```prisma
crises       Crisis[]
```

- [ ] **Step 2: Generate Prisma client and create migration**

Run:
```bash
pnpm db:generate
```
Expected: Prisma client regenerated in `generated/prisma/`, migration created and applied.

- [ ] **Step 3: Verify the migration applied**

Run:
```bash
pnpm db:push
```
Expected: "Your database is now in sync with your Prisma schema."

- [ ] **Step 4: Commit**

```bash
git add prisma/schema.prisma prisma/migrations/ generated/prisma/
git commit -m "feat: add Crisis model and Severity enum to Prisma schema"
```

---

### Task 2: tRPC Crisis Router

**Files:**
- Create: `src/server/api/routers/crisis.ts`
- Modify: `src/server/api/root.ts`

- [ ] **Step 1: Create the crisis router file**

Create `src/server/api/routers/crisis.ts`:

```typescript
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const severityEnum = z.enum(["LOW", "MEDIUM", "HIGH"]);

const ensureVerifiedEtatMember = async (
  db: Parameters<Parameters<typeof protectedProcedure.query>[0]>["ctx"]["db"],
  userId: string,
) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { isVerified: true, etater: { select: { id: true } } },
  });

  if (!user?.isVerified || user.etater.length === 0) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }

  return user.etater.map((e) => e.id);
};

const checkEditAccess = async (
  db: Parameters<Parameters<typeof protectedProcedure.query>[0]>["ctx"]["db"],
  crisisId: string,
  userEtatIds: string[],
  userId: string,
) => {
  const crisis = await db.crisis.findUnique({
    where: { id: crisisId },
    select: {
      createdById: true,
      allowedEtater: { select: { id: true } },
    },
  });

  if (!crisis) {
    throw new TRPCError({ code: "NOT_FOUND" });
  }

  if (crisis.createdById === userId) return crisis;

  const allowedIds = crisis.allowedEtater.map((e) => e.id);
  if (allowedIds.length === 0) return crisis;

  const hasAccess = userEtatIds.some((id) => allowedIds.includes(id));
  if (!hasAccess) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }

  return crisis;
};

export const crisisRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const userEtatIds = await ensureVerifiedEtatMember(
      ctx.db,
      ctx.session.user.id,
    );

    const crises = await ctx.db.crisis.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        createdBy: { select: { id: true, name: true } },
        allowedEtater: { select: { id: true, title: true } },
      },
    });

    return crises.map((crisis) => {
      const allowedIds = crisis.allowedEtater.map((e) => e.id);
      const canEdit =
        crisis.createdBy.id === ctx.session.user.id ||
        allowedIds.length === 0 ||
        userEtatIds.some((id) => allowedIds.includes(id));

      return { ...crisis, canEdit };
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().trim().min(1).max(200),
        description: z.string().trim().min(1),
        what: z.string().trim().min(1),
        how: z.string().trim().min(1),
        when: z.coerce.date(),
        severity: severityEnum,
        allowedEtaterIds: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx.db, ctx.session.user.id);

      return ctx.db.crisis.create({
        data: {
          title: input.title,
          description: input.description,
          what: input.what,
          how: input.how,
          when: input.when,
          severity: input.severity,
          createdById: ctx.session.user.id,
          allowedEtater:
            input.allowedEtaterIds && input.allowedEtaterIds.length > 0
              ? { connect: input.allowedEtaterIds.map((id) => ({ id })) }
              : undefined,
        },
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx.db, ctx.session.user.id);

      const crisis = await ctx.db.crisis.findUnique({
        where: { id: input.id },
        include: {
          createdBy: { select: { id: true, name: true } },
          allowedEtater: { select: { id: true, title: true } },
        },
      });

      if (!crisis) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      return crisis;
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
        title: z.string().trim().min(1).max(200),
        description: z.string().trim().min(1),
        what: z.string().trim().min(1),
        how: z.string().trim().min(1),
        when: z.coerce.date(),
        severity: severityEnum,
        allowedEtaterIds: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(
        ctx.db,
        ctx.session.user.id,
      );

      await checkEditAccess(ctx.db, input.id, userEtatIds, ctx.session.user.id);

      return ctx.db.crisis.update({
        where: { id: input.id },
        data: {
          title: input.title,
          description: input.description,
          what: input.what,
          how: input.how,
          when: input.when,
          severity: input.severity,
          allowedEtater: {
            set: input.allowedEtaterIds
              ? input.allowedEtaterIds.map((id) => ({ id }))
              : [],
          },
        },
      });
    }),
});
```

- [ ] **Step 2: Register the crisis router in the app router**

In `src/server/api/root.ts`, add the import and register:

Add import:
```typescript
import { crisisRouter } from "~/server/api/routers/crisis";
```

Add to the `createTRPCRouter` call:
```typescript
crisis: crisisRouter,
```

The full router object becomes:
```typescript
export const appRouter = createTRPCRouter({
  crisis: crisisRouter,
  etat: etatRouter,
  post: postRouter,
  users: usersRouter,
});
```

- [ ] **Step 3: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/server/api/routers/crisis.ts src/server/api/root.ts
git commit -m "feat: add tRPC crisis router with list, create, getById, update"
```

---

### Task 3: Crisis Service for Server-Side Fetching

**Files:**
- Create: `src/services/crisis.ts`

- [ ] **Step 1: Create the crisis service**

Create `src/services/crisis.ts`:

```typescript
import "server-only";

import { db } from "~/server/db";

export async function getCrises(userId: string, userEtatIds: string[]) {
  const crises = await db.crisis.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      createdBy: { select: { id: true, name: true } },
      allowedEtater: { select: { id: true, title: true } },
    },
  });

  return crises.map((crisis) => {
    const allowedIds = crisis.allowedEtater.map((e) => e.id);
    const canEdit =
      crisis.createdBy.id === userId ||
      allowedIds.length === 0 ||
      userEtatIds.some((id) => allowedIds.includes(id));

    return { ...crisis, canEdit };
  });
}
```

- [ ] **Step 2: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/services/crisis.ts
git commit -m "feat: add getCrises server-side service"
```

---

### Task 4: Dashboard Feed Page

**Files:**
- Modify: `src/app/dashbord/page.tsx`
- Create: `src/app/dashbord/_components/crisis-card.tsx`

- [ ] **Step 1: Create the CrisisCard component**

Create `src/app/dashbord/_components/crisis-card.tsx`:

```tsx
import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type CrisisCardProps = {
  crisis: {
    id: string;
    title: string;
    description: string;
    when: Date;
    severity: "LOW" | "MEDIUM" | "HIGH";
    createdBy: { name: string };
    allowedEtater: { title: string }[];
    canEdit: boolean;
  };
};

const severityConfig = {
  LOW: { label: "Lav", className: "bg-green-500/15 text-green-500 border-green-500/30" },
  MEDIUM: { label: "Middels", className: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
  HIGH: { label: "Høy", className: "bg-red-500/15 text-red-500 border-red-500/30" },
} as const;

const severityBorderColor = {
  LOW: "border-l-green-500",
  MEDIUM: "border-l-amber-500",
  HIGH: "border-l-red-500",
} as const;

export function CrisisCard({ crisis }: CrisisCardProps) {
  const severity = severityConfig[crisis.severity];
  const borderColor = severityBorderColor[crisis.severity];

  const etaterLabel =
    crisis.allowedEtater.length === 0
      ? "Alle etater"
      : crisis.allowedEtater.map((e) => e.title).join(", ");

  return (
    <Card className={`border-l-4 ${borderColor}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-base">{crisis.title}</CardTitle>
          <Badge variant="outline" className={severity.className}>
            {severity.label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {crisis.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>
            {crisis.when.toLocaleDateString("nb-NO", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>{crisis.createdBy.name}</span>
          <span>{etaterLabel}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/krise/${crisis.id}`}>Se detaljer</Link>
          </Button>
          {crisis.canEdit ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashbord/krise/${crisis.id}/rediger`}>Rediger</Link>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: Update the dashboard page to show the crisis feed**

Replace `src/app/dashbord/page.tsx` with:

```tsx
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { CrisisCard } from "~/app/dashbord/_components/crisis-card";
import { getCrises } from "~/services/crisis";
import { getSession } from "~/server/better-auth/server";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export default async function DashbordPage() {
  const session = await getSession();
  if (!session?.user) redirect("/logg-inn");

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { isVerified: true, etater: { select: { id: true } } },
  });

  const isEtatMember = user?.isVerified && (user.etater.length ?? 0) > 0;
  const userEtatIds = user?.etater.map((e) => e.id) ?? [];

  const crises = isEtatMember
    ? await getCrises(session.user.id, userEtatIds)
    : [];

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Kriseoversikt</h1>
        {isEtatMember ? (
          <Button asChild>
            <Link href="/dashbord/krise/ny">Ny krise</Link>
          </Button>
        ) : null}
      </div>

      {!isEtatMember ? (
        <p className="text-sm text-muted-foreground">
          Du må være verifisert og medlem av en etat for å se kriser.
        </p>
      ) : crises.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Ingen kriser opprettet enda.
        </p>
      ) : (
        <div className="space-y-4">
          {crises.map((crisis) => (
            <CrisisCard key={crisis.id} crisis={crisis} />
          ))}
        </div>
      )}
    </main>
  );
}
```

- [ ] **Step 3: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 4: Verify the dev server renders the dashboard**

Run:
```bash
pnpm dev
```
Open `http://localhost:3000/dashbord` — should show "Kriseoversikt" header. If the user is not a verified etat member, it shows the appropriate message. If they are, it shows "Ingen kriser opprettet enda."

- [ ] **Step 5: Commit**

```bash
git add src/app/dashbord/page.tsx src/app/dashbord/_components/crisis-card.tsx
git commit -m "feat: add crisis feed to dashboard page"
```

---

### Task 5: Shared Crisis Form Component

**Files:**
- Create: `src/app/dashbord/krise/_components/crisis-form.tsx`

- [ ] **Step 1: Create the CrisisForm component**

Create `src/app/dashbord/krise/_components/crisis-form.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

type CrisisFormValues = {
  title: string;
  description: string;
  what: string;
  how: string;
  when: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  allowedEtaterIds: string[];
};

type Etat = {
  id: string;
  title: string;
};

type CrisisFormProps = {
  etater: Etat[];
  defaultValues?: CrisisFormValues;
  onSubmit: (values: CrisisFormValues) => void;
  isPending: boolean;
  submitLabel: string;
  pendingLabel: string;
};

const defaultInitialValues: CrisisFormValues = {
  title: "",
  description: "",
  what: "",
  how: "",
  when: "",
  severity: "LOW",
  allowedEtaterIds: [],
};

export function CrisisForm({
  etater,
  defaultValues,
  onSubmit,
  isPending,
  submitLabel,
  pendingLabel,
}: CrisisFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<CrisisFormValues>(
    defaultValues ?? defaultInitialValues,
  );

  const allEtaterSelected = form.allowedEtaterIds.length === 0;

  const toggleEtat = (etatId: string) => {
    setForm((prev) => {
      const ids = prev.allowedEtaterIds.includes(etatId)
        ? prev.allowedEtaterIds.filter((id) => id !== etatId)
        : [...prev.allowedEtaterIds, etatId];
      return { ...prev, allowedEtaterIds: ids };
    });
  };

  const selectAllEtater = () => {
    setForm((prev) => ({ ...prev, allowedEtaterIds: [] }));
  };

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      {/* Grunnleggende */}
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Tittel</label>
          <Input
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Kort, beskrivende tittel..."
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Beskrivelse</label>
          <Textarea
            value={form.description}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Detaljert beskrivelse av situasjonen..."
            rows={3}
            required
          />
        </div>
      </div>

      {/* Detaljer */}
      <div className="space-y-4 border-t pt-6">
        <h2 className="text-sm font-semibold">Detaljer</h2>

        <div className="space-y-1">
          <label className="text-sm font-medium">Hva</label>
          <Input
            value={form.what}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, what: e.target.value }))
            }
            placeholder="Hva har skjedd..."
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Hvordan</label>
          <Input
            value={form.how}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, how: e.target.value }))
            }
            placeholder="Hvordan skjedde det..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Når</label>
            <Input
              type="datetime-local"
              value={form.when}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, when: e.target.value }))
              }
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Alvorlighetsgrad</label>
            <ToggleGroup
              type="single"
              value={form.severity}
              onValueChange={(value) => {
                if (value) {
                  setForm((prev) => ({
                    ...prev,
                    severity: value as "LOW" | "MEDIUM" | "HIGH",
                  }));
                }
              }}
              className="justify-start"
            >
              <ToggleGroupItem value="LOW" className="data-[state=on]:bg-green-500/15 data-[state=on]:text-green-500">
                Lav
              </ToggleGroupItem>
              <ToggleGroupItem value="MEDIUM" className="data-[state=on]:bg-amber-500/15 data-[state=on]:text-amber-500">
                Middels
              </ToggleGroupItem>
              <ToggleGroupItem value="HIGH" className="data-[state=on]:bg-red-500/15 data-[state=on]:text-red-500">
                Høy
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

      {/* Tilgang */}
      <div className="space-y-4 border-t pt-6">
        <div>
          <h2 className="text-sm font-semibold">Redigeringstilgang</h2>
          <p className="text-xs text-muted-foreground">
            Velg hvilke etater som kan redigere denne krisen. Standard er alle.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant={allEtaterSelected ? "default" : "outline"}
            size="sm"
            onClick={selectAllEtater}
          >
            Alle etater
          </Button>
          {etater.map((etat) => (
            <Button
              key={etat.id}
              type="button"
              variant={
                form.allowedEtaterIds.includes(etat.id) ? "default" : "outline"
              }
              size="sm"
              onClick={() => toggleEtat(etat.id)}
            >
              {etat.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 border-t pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/dashbord")}
        >
          Avbryt
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? pendingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/krise/_components/crisis-form.tsx
git commit -m "feat: add shared CrisisForm component"
```

---

### Task 6: Create Crisis Page

**Files:**
- Create: `src/app/dashbord/krise/ny/page.tsx`

- [ ] **Step 1: Create the page**

Create `src/app/dashbord/krise/ny/page.tsx`:

```tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { api } from "~/trpc/react";

export default function NyKrisePage() {
  const router = useRouter();

  const { data: etater } = api.etat.list.useQuery(undefined, {
    select: (data) => data.map((e) => ({ id: e.id, title: e.title })),
  });

  const createCrisis = api.crisis.create.useMutation({
    onSuccess: () => {
      router.push("/dashbord");
      router.refresh();
    },
  });

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/dashbord"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="mb-1 text-xl font-semibold">Opprett ny krise</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Fyll inn informasjon om krisesituasjonen.
      </p>

      <CrisisForm
        etater={etater ?? []}
        onSubmit={(values) => {
          createCrisis.mutate({
            title: values.title,
            description: values.description,
            what: values.what,
            how: values.how,
            when: new Date(values.when),
            severity: values.severity,
            allowedEtaterIds:
              values.allowedEtaterIds.length > 0
                ? values.allowedEtaterIds
                : undefined,
          });
        }}
        isPending={createCrisis.isPending}
        submitLabel="Opprett krise"
        pendingLabel="Oppretter..."
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify the page renders**

Run dev server, navigate to `http://localhost:3000/dashbord/krise/ny`.
Expected: Form renders with all fields, severity toggles, and etat selection chips.

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/krise/ny/page.tsx
git commit -m "feat: add create crisis page at /dashbord/krise/ny"
```

---

### Task 7: Edit Crisis Page

**Files:**
- Create: `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`

- [ ] **Step 1: Create the edit page**

Create `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`:

```tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { Spinner } from "~/components/ui/spinner";
import { api } from "~/trpc/react";

export default function RedigerKrisePage() {
  const params = useParams<{ crisisId: string }>();
  const router = useRouter();

  const { data: crisis, isLoading: crisisLoading } =
    api.crisis.getById.useQuery({ id: params.crisisId });

  const { data: etater } = api.etat.list.useQuery(undefined, {
    select: (data) => data.map((e) => ({ id: e.id, title: e.title })),
  });

  const updateCrisis = api.crisis.update.useMutation({
    onSuccess: () => {
      router.push("/dashbord");
      router.refresh();
    },
  });

  if (crisisLoading) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <Spinner />
      </main>
    );
  }

  if (!crisis) {
    return (
      <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">Krise ikke funnet.</p>
      </main>
    );
  }

  const defaultValues = {
    title: crisis.title,
    description: crisis.description,
    what: crisis.what,
    how: crisis.how,
    when: new Date(crisis.when).toISOString().slice(0, 16),
    severity: crisis.severity,
    allowedEtaterIds: crisis.allowedEtater.map((e) => e.id),
  };

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/dashbord"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        ← Tilbake til oversikt
      </Link>

      <h1 className="mb-1 text-xl font-semibold">Rediger krise</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Oppdater informasjon om krisesituasjonen.
      </p>

      <CrisisForm
        etater={etater ?? []}
        defaultValues={defaultValues}
        onSubmit={(values) => {
          updateCrisis.mutate({
            id: params.crisisId,
            title: values.title,
            description: values.description,
            what: values.what,
            how: values.how,
            when: new Date(values.when),
            severity: values.severity,
            allowedEtaterIds:
              values.allowedEtaterIds.length > 0
                ? values.allowedEtaterIds
                : undefined,
          });
        }}
        isPending={updateCrisis.isPending}
        submitLabel="Lagre endringer"
        pendingLabel="Lagrer..."
      />
    </main>
  );
}
```

- [ ] **Step 2: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/krise/[crisisId]/rediger/page.tsx
git commit -m "feat: add edit crisis page at /dashbord/krise/[crisisId]/rediger"
```

---

### Task 8: Fix the etat.list Access for Non-Admin Users

The create and edit pages query `api.etat.list` to get the list of etater for the access control chips. Currently, `etat.list` requires admin access (`ensureAdmin`). We need a way for non-admin verified etat members to get the etat list.

**Files:**
- Modify: `src/server/api/routers/crisis.ts`

- [ ] **Step 1: Add a `listEtater` procedure to the crisis router**

Add this procedure to `crisisRouter` in `src/server/api/routers/crisis.ts`:

```typescript
listEtater: protectedProcedure.query(async ({ ctx }) => {
  await ensureVerifiedEtatMember(ctx.db, ctx.session.user.id);

  return ctx.db.etat.findMany({
    orderBy: { title: "asc" },
    select: { id: true, title: true },
  });
}),
```

- [ ] **Step 2: Update create and edit pages to use `api.crisis.listEtater` instead of `api.etat.list`**

In `src/app/dashbord/krise/ny/page.tsx`, change:
```typescript
const { data: etater } = api.etat.list.useQuery(undefined, {
  select: (data) => data.map((e) => ({ id: e.id, title: e.title })),
});
```
to:
```typescript
const { data: etater } = api.crisis.listEtater.useQuery();
```

In `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`, make the same change:
```typescript
const { data: etater } = api.crisis.listEtater.useQuery();
```

- [ ] **Step 3: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/server/api/routers/crisis.ts src/app/dashbord/krise/ny/page.tsx src/app/dashbord/krise/[crisisId]/rediger/page.tsx
git commit -m "feat: add listEtater procedure for non-admin etat list access"
```

---

### Task 9: End-to-End Verification

- [ ] **Step 1: Run full lint and typecheck**

Run:
```bash
pnpm check
```
Expected: No lint errors and no type errors.

- [ ] **Step 2: Run dev server and verify the full flow**

Run:
```bash
pnpm dev
```

Test flow:
1. Log in as a verified user with etat membership
2. Navigate to `/dashbord` — see "Kriseoversikt" and "Ny krise" button
3. Click "Ny krise" — see the create form at `/dashbord/krise/ny`
4. Fill in all fields, select severity, choose etat access
5. Submit — redirected to `/dashbord`, new crisis appears in feed
6. Click "Rediger" on the crisis — see pre-filled form at `/dashbord/krise/[id]/rediger`
7. Change a field, submit — redirected to `/dashbord`, changes reflected

- [ ] **Step 3: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: address issues found during e2e verification"
```
