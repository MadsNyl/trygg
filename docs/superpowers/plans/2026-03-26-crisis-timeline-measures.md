# Crisis Timeline & Measures — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add TimelineEntry and Measure models to the crisis system with tRPC mutations and server-side query services.

**Architecture:** Two new Prisma models (TimelineEntry, Measure) linked to Crisis, Etat, and User. Two new mutations in the existing crisisRouter. Two new service functions for server-side data fetching.

**Tech Stack:** Prisma, tRPC, Zod

**Spec:** `docs/superpowers/specs/2026-03-26-crisis-timeline-measures-design.md`

---

## File Structure

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `prisma/schema.prisma` | Add TimelineEntry and Measure models, reverse relations |
| Modify | `src/server/api/routers/crisis.ts` | Add addTimelineEntry and addMeasure mutations |
| Modify | `src/services/crisis.ts` | Add getTimelineEntries and getMeasures functions |

---

### Task 1: Prisma Schema — Add TimelineEntry and Measure Models

**Files:**
- Modify: `prisma/schema.prisma`

- [ ] **Step 1: Add TimelineEntry and Measure models and update relations**

Add the two new models after the `Crisis` model in `prisma/schema.prisma`:

```prisma
model TimelineEntry {
  id          String   @id @default(cuid())
  text        String   @db.Text

  crisis      Crisis   @relation(fields: [crisisId], references: [id], onDelete: Cascade)
  crisisId    String

  etat        Etat     @relation(fields: [etatId], references: [id])
  etatId      String

  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById String

  createdAt   DateTime @default(now())
}

model Measure {
  id          String   @id @default(cuid())
  text        String   @db.Text
  severity    Severity

  crisis      Crisis   @relation(fields: [crisisId], references: [id], onDelete: Cascade)
  crisisId    String

  etat        Etat     @relation(fields: [etatId], references: [id])
  etatId      String

  createdBy   User     @relation(fields: [createdById], references: [id])
  createdById String

  createdAt   DateTime @default(now())
}
```

Add reverse relations to the `Crisis` model (after `allowedEtater`):

```prisma
timelineEntries TimelineEntry[]
measures        Measure[]
```

Add reverse relations to the `User` model (after `crises`):

```prisma
timelineEntries TimelineEntry[]
measures        Measure[]
```

Add reverse relations to the `Etat` model (after `crises`):

```prisma
timelineEntries TimelineEntry[]
measures        Measure[]
```

- [ ] **Step 2: Run the migration**

Run:
```bash
pnpm migrate dev --name add-timeline-and-measures
```
Expected: Migration created and applied, Prisma client regenerated.

- [ ] **Step 3: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No new errors (only the pre-existing spinner.tsx error).

---

### Task 2: tRPC Mutations — addTimelineEntry and addMeasure

**Files:**
- Modify: `src/server/api/routers/crisis.ts`

- [ ] **Step 1: Add a helper to validate etat membership**

Add this helper function after the existing `checkEditAccess` function in `src/server/api/routers/crisis.ts`:

```typescript
const validateUserEtat = (userEtatIds: string[], etatId: string) => {
  if (!userEtatIds.includes(etatId)) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You do not belong to this etat",
    });
  }
};
```

- [ ] **Step 2: Add addTimelineEntry mutation**

Add this procedure inside the `crisisRouter` (after the `listEtater` procedure):

```typescript
addTimelineEntry: protectedProcedure
  .input(
    z.object({
      crisisId: z.string().min(1),
      text: z.string().trim().min(1),
      etatId: z.string().min(1),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const userEtatIds = await ensureVerifiedEtatMember(ctx);
    await checkEditAccess(ctx, input.crisisId, userEtatIds);
    validateUserEtat(userEtatIds, input.etatId);

    return ctx.db.timelineEntry.create({
      data: {
        text: input.text,
        crisis: { connect: { id: input.crisisId } },
        etat: { connect: { id: input.etatId } },
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    });
  }),
```

- [ ] **Step 3: Add addMeasure mutation**

Add this procedure inside the `crisisRouter` (after `addTimelineEntry`):

```typescript
addMeasure: protectedProcedure
  .input(
    z.object({
      crisisId: z.string().min(1),
      text: z.string().trim().min(1),
      severity: z.enum(["LOW", "MEDIUM", "HIGH"]),
      etatId: z.string().min(1),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    const userEtatIds = await ensureVerifiedEtatMember(ctx);
    await checkEditAccess(ctx, input.crisisId, userEtatIds);
    validateUserEtat(userEtatIds, input.etatId);

    return ctx.db.measure.create({
      data: {
        text: input.text,
        severity: input.severity,
        crisis: { connect: { id: input.crisisId } },
        etat: { connect: { id: input.etatId } },
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    });
  }),
```

- [ ] **Step 4: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No new errors.

---

### Task 3: Service Functions — getTimelineEntries and getMeasures

**Files:**
- Modify: `src/services/crisis.ts`

- [ ] **Step 1: Add getTimelineEntries function**

Add this function to `src/services/crisis.ts` after the existing `getCrises` function:

```typescript
export async function getTimelineEntries(crisisId: string) {
  return db.timelineEntry.findMany({
    where: { crisisId },
    orderBy: { createdAt: "desc" },
    include: {
      etat: { select: { id: true, title: true, themeColor: true } },
      createdBy: { select: { id: true, name: true } },
    },
  });
}
```

- [ ] **Step 2: Add getMeasures function**

Add this function to `src/services/crisis.ts` after `getTimelineEntries`:

```typescript
export async function getMeasures(crisisId: string) {
  return db.measure.findMany({
    where: { crisisId },
    orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
    include: {
      etat: { select: { id: true, title: true, themeColor: true } },
      createdBy: { select: { id: true, name: true } },
    },
  });
}
```

Note: Prisma orders enums by their declaration order. In our schema, the Severity enum is declared as `LOW`, `MEDIUM`, `HIGH`, so `desc` ordering gives HIGH first, then MEDIUM, then LOW — which is what we want.

- [ ] **Step 3: Verify typecheck passes**

Run:
```bash
pnpm typecheck
```
Expected: No new errors.

---

### Task 4: End-to-End Verification

- [ ] **Step 1: Run full lint and typecheck**

Run:
```bash
pnpm check
```
Expected: No new lint or type errors.
