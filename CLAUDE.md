# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trygg is a Norwegian full-stack T3 app (Next.js 15, tRPC 11, Prisma 6, Better-Auth 1.3) with admin capabilities for managing organizations ("etater") and users. UI text is in Norwegian.

## Commands

```bash
pnpm dev          # Start dev server (Turbo mode)
pnpm build        # Production build
pnpm check        # Lint + typecheck combined
pnpm lint         # ESLint only
pnpm lint:fix     # ESLint with auto-fix
pnpm typecheck    # TypeScript check only
pnpm format:check # Prettier check
pnpm format:write # Prettier auto-format

# Database
pnpm db:generate  # Generate Prisma client + run migrations
pnpm db:push      # Push schema to database
pnpm db:migrate   # Run pending migrations
pnpm db:studio    # Open Prisma Studio

# Docker database (alternative to start-database.sh)
make db-create    # Create PostgreSQL container
make db-start     # Start container
make db-stop      # Stop container
make db-destroy   # Remove container and volume
```

## Architecture

### Backend Stack
- **tRPC** handles all API calls. Routers live in `src/server/api/routers/` and are combined in `src/server/api/root.ts`. Two procedure types: `publicProcedure` and `protectedProcedure` (requires session).
- **Better-Auth** handles authentication (email/password). Config in `src/server/better-auth/config.ts`, catch-all route at `/api/auth/[...all]`. Session includes custom `isVerified` and `isAdmin` fields on User.
- **Prisma** with PostgreSQL. Schema at `prisma/schema.prisma`. Client is generated to `generated/prisma/` (not the default location). Singleton instance in `src/server/db.ts`.

### Frontend Stack
- **Next.js App Router** with RSC. tRPC is consumed via React Query (`src/trpc/react.tsx`) on the client and cached server helpers (`src/trpc/server.ts`) in RSCs.
- **shadcn/ui** with Radix UI components in `src/components/ui/`. Config in `components.json` (style: radix-mira, icons: hugeicons).
- **Tailwind CSS v4** via PostCSS plugin. Global styles in `src/styles/globals.css`.

### Key Patterns
- Path alias: `~/` maps to `src/`
- Environment validation via Zod in `src/env.js`
- Admin routes under `src/app/dashbord/admin/` check `isAdmin` flag
- User verification flow: signup → admin verifies → user gains access
- Services in `src/services/` provide server-side data fetching with pagination

### Data Model
- **User** extends Better-Auth user with `isVerified`, `isAdmin`, relations to posts and etater (many-to-many)
- **Etat** (organization) has title, contact info, theme color, and associated users
- **Post** is a basic example entity tied to a user

## Code Style
- ESLint v9 flat config with TypeScript strict rules
- Prettier with tailwindcss plugin for class sorting
- Consistent type imports enforced (inline style)
- Unused variables must be prefixed with `_`
- Package manager: pnpm 10.28.0
