# Crisis Timeline & Measures — Phase 2 Design

Phase 2 of the crisis system (GitHub issue #1). Adds timeline entries and measures as data models and API only. No UI in this phase — the detail page comes later.

## Data Models

### TimelineEntry

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
```

### Measure

```prisma
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

Both models require adding reverse relations on Crisis, Etat, and User.

## Access Control

Same as crisis edit access:
- User must be verified and belong to at least one etat
- User must have edit access to the crisis (creator, or member of an allowed etat, or allowedEtater is empty)
- User picks which of their etater they are posting as — the `etatId` must be one of the user's etater

## tRPC Procedures

Added to the existing `crisisRouter`:

| Procedure | Type | Input | Description |
|-----------|------|-------|-------------|
| `addTimelineEntry` | mutation | `{ crisisId, text, etatId }` | Adds a timeline entry. Validates edit access and that etatId belongs to the user. |
| `addMeasure` | mutation | `{ crisisId, text, severity, etatId }` | Adds a measure. Same access checks. |

## Service Layer

Added to `src/services/crisis.ts`:

| Function | Description |
|----------|-------------|
| `getTimelineEntries(crisisId)` | Returns entries ordered by `createdAt` desc. Includes etat title and creator name. |
| `getMeasures(crisisId)` | Returns measures ordered by severity (HIGH, MEDIUM, LOW), then `createdAt` desc. Includes etat title and creator name. |

## Validation (Zod)

- `text`: string, trim, min 1
- `crisisId`: string, min 1
- `etatId`: string, min 1
- `severity` (measures only): enum (LOW, MEDIUM, HIGH)
