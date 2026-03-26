# Trygg Design Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Systematically enhance the Trygg crisis platform's design with a strong blue primary brand color, sidebar navigation for dashboard, card-based public feed, and hugeicons replacing emojis.

**Architecture:** Work outward from the theme layer: update CSS variables first, then build the sidebar navigation, then restyle each page surface (public feed, crisis detail, dashboard, admin, login). Each task produces a working, visually coherent state.

**Tech Stack:** Next.js 15 App Router, Tailwind CSS v4 with OKLch colors, shadcn/ui (radix-mira style), hugeicons (@hugeicons/react + @hugeicons/core-free-icons)

---

### Task 1: Update Color & Theme System

**Files:**
- Modify: `src/styles/globals.css`
- Modify: `src/app/layout.tsx` (metadata update)

- [ ] **Step 1: Update CSS variables for primary blue brand color**

In `src/styles/globals.css`, change the `:root` primary and accent colors from dark near-black to a strong blue, and update the sidebar primary to match:

```css
/* Replace these lines in :root */
--primary: oklch(0.55 0.15 250);
--primary-foreground: oklch(0.985 0.002 250);
--accent: oklch(0.55 0.15 250);
--accent-foreground: oklch(0.985 0.002 250);
--sidebar-primary: oklch(0.55 0.15 250);
--sidebar-primary-foreground: oklch(0.985 0.002 250);
```

Keep all other variables (secondary, muted, destructive, border, etc.) unchanged.

- [ ] **Step 2: Update root layout metadata**

In `src/app/layout.tsx`, update the metadata from the default T3 values:

```tsx
export const metadata: Metadata = {
  title: "Trygg",
  description: "Kriseinformasjon for innbyggere",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
```

Also change `lang="en"` to `lang="no"` on the `<html>` tag.

- [ ] **Step 3: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds with no errors. Primary color is now blue throughout.

- [ ] **Step 4: Commit**

```bash
git add src/styles/globals.css src/app/layout.tsx
git commit -m "style: update theme to blue primary brand color and fix metadata"
```

---

### Task 2: Create Dashboard Sidebar Component

**Files:**
- Create: `src/app/dashbord/_components/app-sidebar.tsx`
- Modify: `src/app/dashbord/layout.tsx`

- [ ] **Step 1: Create the sidebar component**

Create `src/app/dashbord/_components/app-sidebar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert02Icon,
  Add01Icon,
  UserMultipleIcon,
  BuildingOffice01Icon,
  UserIcon,
  Logout03Icon,
} from "@hugeicons/core-free-icons";
import { authClient } from "~/server/better-auth/client";

type AppSidebarProps = {
  user: {
    name: string;
    isAdmin: boolean;
  };
};

const mainNav = [
  { label: "Kriser", href: "/dashbord", icon: Alert02Icon },
  { label: "Ny krise", href: "/dashbord/krise/ny", icon: Add01Icon },
];

const adminNav = [
  { label: "Brukere", href: "/dashbord/admin/brukere", icon: UserMultipleIcon },
  {
    label: "Etater",
    href: "/dashbord/admin/etater",
    icon: BuildingOffice01Icon,
  },
];

export function AppSidebar({ user }: AppSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashbord") return pathname === "/dashbord";
    return pathname.startsWith(href);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-4">
        <Link
          href="/dashbord"
          className="font-heading text-lg font-bold tracking-tight"
        >
          Trygg
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Oversikt</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link href={item.href}>
                      <HugeiconsIcon icon={item.icon} size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {user.isAdmin ? (
          <SidebarGroup>
            <SidebarGroupLabel>Admin</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNav.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive(item.href)}>
                      <Link href={item.href}>
                        <HugeiconsIcon icon={item.icon} size={18} />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ) : null}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{user.name}</p>
            <button
              onClick={() => void authClient.signOut()}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              Logg ut
            </button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
```

- [ ] **Step 2: Rewrite the dashboard layout to use the sidebar**

Replace the full content of `src/app/dashbord/layout.tsx`:

```tsx
import { redirect } from "next/navigation";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "~/components/ui/sidebar";
import { AppSidebar } from "~/app/dashbord/_components/app-sidebar";
import { getSession } from "~/server/better-auth/server";

export default async function DashbordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/logg-inn");
  }

  return (
    <SidebarProvider>
      <AppSidebar
        user={{
          name: session.user.name,
          isAdmin: session.user.isAdmin === true,
        }}
      />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
        </header>
        <div className="flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
```

- [ ] **Step 3: Remove redundant session redirect from dashboard page**

In `src/app/dashbord/page.tsx`, remove the redirect logic since the layout now handles it. Remove these lines:

```tsx
// Remove this import:
import { redirect } from "next/navigation";

// Remove this line from the component body:
if (!session?.user) redirect("/logg-inn");
```

Keep the `getSession()` call since it's still needed for user data.

- [ ] **Step 4: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Dashboard now has a sidebar with navigation.

- [ ] **Step 5: Commit**

```bash
git add src/app/dashbord/_components/app-sidebar.tsx src/app/dashbord/layout.tsx src/app/dashbord/page.tsx
git commit -m "feat: add sidebar navigation to dashboard layout"
```

---

### Task 3: Remove Admin Tab Layout (Sidebar Replaces It)

**Files:**
- Modify: `src/app/dashbord/admin/layout.tsx`

- [ ] **Step 1: Simplify admin layout to a plain container**

Replace the full content of `src/app/dashbord/admin/layout.tsx`:

```tsx
export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
```

This removes the tab-based navigation since the sidebar now handles Brukere/Etater routing.

- [ ] **Step 2: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Admin pages render inside the sidebar layout without tabs.

- [ ] **Step 3: Commit**

```bash
git add src/app/dashbord/admin/layout.tsx
git commit -m "refactor: remove admin tab layout, sidebar handles navigation"
```

---

### Task 4: Redesign Public Feed with Card-Based Layout

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/_components/crisis-list-item.tsx`
- Modify: `src/app/_components/feed-filters.tsx`
- Modify: `src/app/_components/feed-footer.tsx`

- [ ] **Step 1: Redesign CrisisListItem as a card**

Replace the full content of `src/app/_components/crisis-list-item.tsx`:

```tsx
import Link from "next/link";

import { Badge } from "~/components/ui/badge";

type CrisisListItemProps = {
  crisis: {
    id: string;
    title: string;
    description?: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    location: string | null;
    when: Date;
  };
};

const severityConfig = {
  LOW: {
    label: "Lav",
    className: "bg-green-500/15 text-green-700 border-green-500/30",
    border: "border-l-green-500",
  },
  MEDIUM: {
    label: "Middels",
    className: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    border: "border-l-amber-500",
  },
  HIGH: {
    label: "Høy",
    className: "bg-red-500/15 text-red-700 border-red-500/30",
    border: "border-l-red-500",
  },
} as const;

export function CrisisListItem({ crisis }: CrisisListItemProps) {
  const severity = severityConfig[crisis.severity];

  return (
    <Link
      href={`/${crisis.id}`}
      className={`block rounded-lg border border-l-4 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${severity.border}`}
    >
      <div className="mb-2">
        <Badge variant="outline" className={severity.className}>
          {severity.label}
        </Badge>
      </div>
      <h3 className="font-heading text-base font-bold">{crisis.title}</h3>
      <p className="text-muted-foreground mt-1 text-sm">
        {crisis.location ?? "Ukjent sted"} ·{" "}
        {crisis.when.toLocaleDateString("nb-NO", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </Link>
  );
}
```

- [ ] **Step 2: Update the feed page to use card layout with gray background**

Replace the full content of `src/app/page.tsx`:

```tsx
import { Suspense } from "react";

import { CrisisListItem } from "~/app/_components/crisis-list-item";
import { FeedFilters } from "~/app/_components/feed-filters";
import { FeedFooter } from "~/app/_components/feed-footer";
import { getDistinctLocations, getPublicCrises } from "~/services/crisis";

type SearchParams = Promise<{
  q?: string;
  severity?: string;
  location?: string;
}>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const severity =
    params.severity === "LOW" ||
    params.severity === "MEDIUM" ||
    params.severity === "HIGH"
      ? params.severity
      : undefined;

  const [crises, locations] = await Promise.all([
    getPublicCrises({
      search: params.q,
      severity,
      location: params.location,
    }),
    getDistinctLocations(),
  ]);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-gray-50">
      <header className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <h1 className="font-heading text-2xl font-bold text-primary">Trygg</h1>
        <p className="text-muted-foreground text-sm">Kriseoversikt</p>
      </header>

      <Suspense>
        <FeedFilters locations={locations} />
      </Suspense>

      <div className="space-y-3 px-4 py-4">
        {crises.length === 0 ? (
          <p className="text-muted-foreground py-8 text-center text-sm">
            Ingen kriser funnet.
          </p>
        ) : (
          crises.map((crisis) => (
            <CrisisListItem key={crisis.id} crisis={crisis} />
          ))
        )}
      </div>

      <FeedFooter />
    </main>
  );
}
```

- [ ] **Step 3: Style the filters to match the new design**

Replace the full content of `src/app/_components/feed-filters.tsx`:

```tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Input } from "~/components/ui/input";

type FeedFiltersProps = {
  locations: string[];
};

export function FeedFilters({ locations }: FeedFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/?${params.toString()}`);
    },
    [router, searchParams],
  );

  return (
    <div className="space-y-3 bg-white px-4 pb-4">
      <Input
        placeholder="Sok etter krise..."
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => updateParams("q", e.target.value)}
      />
      <div className="flex gap-2">
        <select
          className="flex-1 rounded-md border bg-white px-3 py-2 text-sm"
          defaultValue={searchParams.get("severity") ?? ""}
          onChange={(e) => updateParams("severity", e.target.value)}
        >
          <option value="">Alle alvorlighetsgrader</option>
          <option value="HIGH">Hoy</option>
          <option value="MEDIUM">Middels</option>
          <option value="LOW">Lav</option>
        </select>
        <select
          className="flex-1 rounded-md border bg-white px-3 py-2 text-sm"
          defaultValue={searchParams.get("location") ?? ""}
          onChange={(e) => updateParams("location", e.target.value)}
        >
          <option value="">Alle steder</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Update FeedFooter styling**

Replace the full content of `src/app/_components/feed-footer.tsx`:

```tsx
import Link from "next/link";

import { Button } from "~/components/ui/button";

export function FeedFooter() {
  return (
    <footer className="bg-white px-4 py-6 text-center shadow-sm">
      <Button asChild>
        <Link href="/logg-inn">Logg inn</Link>
      </Button>
    </footer>
  );
}
```

- [ ] **Step 5: Update the CrisisListItem type to include description**

Check that `getPublicCrises` returns `description`. If the service already returns it, the type just needs to accept an optional `description` field (already done in step 1 as `description?: string`). The card won't render it yet but the type should be ready.

- [ ] **Step 6: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Public feed now shows cards on gray background.

- [ ] **Step 7: Commit**

```bash
git add src/app/page.tsx src/app/_components/crisis-list-item.tsx src/app/_components/feed-filters.tsx src/app/_components/feed-footer.tsx
git commit -m "style: redesign public feed with card-based layout and gray background"
```

---

### Task 5: Redesign Crisis Notification & Detail Header

**Files:**
- Modify: `src/app/[crisisId]/_components/crisis-notification.tsx`
- Modify: `src/app/[crisisId]/_components/crisis-detail.tsx`
- Modify: `src/app/[crisisId]/_components/share-button.tsx`

- [ ] **Step 1: Redesign crisis notification with hugeicons and severity styling**

Replace the full content of `src/app/[crisisId]/_components/crisis-notification.tsx`:

```tsx
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";

type CrisisNotificationProps = {
  crisis: {
    title: string;
    description: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    when: Date;
  };
  onReadMore: () => void;
};

const severityConfig = {
  LOW: {
    label: "Lav alvorlighet",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    badgeClass: "bg-green-500/15 text-green-700 border-green-500/30",
  },
  MEDIUM: {
    label: "Middels alvorlighet",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    badgeClass: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  },
  HIGH: {
    label: "Hoy alvorlighet",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    badgeClass: "bg-red-500/15 text-red-700 border-red-500/30",
  },
} as const;

export function CrisisNotification({
  crisis,
  onReadMore,
}: CrisisNotificationProps) {
  const config = severityConfig[crisis.severity];

  return (
    <div className={`flex min-h-screen items-center justify-center ${config.bg} px-4`}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <HugeiconsIcon
            icon={Alert02Icon}
            size={24}
            className={config.iconColor}
          />
          <Badge variant="outline" className={config.badgeClass}>
            {config.label}
          </Badge>
        </div>

        <h1 className="font-heading mb-2 text-xl font-bold">{crisis.title}</h1>

        <p className="text-muted-foreground mb-3">{crisis.description}</p>

        <p className="text-muted-foreground mb-6 text-sm">
          {crisis.when.toLocaleDateString("nb-NO", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <Button className="w-full" onClick={onReadMore}>
          Les mer
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Redesign crisis detail header and info block**

Replace the full content of `src/app/[crisisId]/_components/crisis-detail.tsx`:

```tsx
import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { ShareButton } from "./share-button";
import { CrisisTabs } from "./crisis-tabs";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  InformationCircleIcon,
  Settings02Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons";

import type { CrisisDetailData } from "./types";

const severityConfig = {
  LOW: {
    label: "Lav",
    className: "bg-green-500/15 text-green-700 border-green-500/30",
    topBorder: "border-t-green-500",
  },
  MEDIUM: {
    label: "Middels",
    className: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    topBorder: "border-t-amber-500",
  },
  HIGH: {
    label: "Hoy",
    className: "bg-red-500/15 text-red-700 border-red-500/30",
    topBorder: "border-t-red-500",
  },
} as const;

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  const severity = severityConfig[crisis.severity];

  return (
    <div
      className={`mx-auto flex min-h-screen max-w-md flex-col bg-white border-t-4 ${severity.topBorder}`}
    >
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-md p-1"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="font-heading text-lg font-bold">{crisis.title}</h1>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="outline" className={severity.className}>
              {severity.label}
            </Badge>
            <span className="text-muted-foreground text-sm">
              {crisis.location ?? "Ukjent sted"}
            </span>
          </div>
        </div>
        <ShareButton />
      </header>

      {/* Info block */}
      <section className="mx-4 my-4 rounded-lg bg-gray-50 p-4">
        <div className="space-y-3">
          <div className="flex gap-3">
            <HugeiconsIcon
              icon={InformationCircleIcon}
              size={18}
              className="text-primary mt-0.5 shrink-0"
            />
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Hva
              </p>
              <p className="text-sm">{crisis.what}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <HugeiconsIcon
              icon={Settings02Icon}
              size={18}
              className="text-primary mt-0.5 shrink-0"
            />
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Hvordan
              </p>
              <p className="text-sm">{crisis.how}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <HugeiconsIcon
              icon={Calendar03Icon}
              size={18}
              className="text-primary mt-0.5 shrink-0"
            />
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
                Nar
              </p>
              <p className="text-sm">
                {crisis.when.toLocaleDateString("nb-NO", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <CrisisTabs
        timelineEntries={crisis.timelineEntries}
        measures={crisis.measures}
        mapMarkers={crisis.mapMarkers}
      />
    </div>
  );
}
```

- [ ] **Step 3: Update ShareButton with hugeicon**

Replace the full content of `src/app/[crisisId]/_components/share-button.tsx`:

```tsx
"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Share01Icon, Tick02Icon } from "@hugeicons/core-free-icons";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleShare}>
      <HugeiconsIcon icon={copied ? Tick02Icon : Share01Icon} size={18} />
    </Button>
  );
}
```

- [ ] **Step 4: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Crisis notification and detail pages have the new design.

- [ ] **Step 5: Commit**

```bash
git add src/app/[crisisId]/_components/crisis-notification.tsx src/app/[crisisId]/_components/crisis-detail.tsx src/app/[crisisId]/_components/share-button.tsx
git commit -m "style: redesign crisis notification and detail with hugeicons and severity theming"
```

---

### Task 6: Redesign Crisis Tabs, Timeline & Measures (Replace Emojis)

**Files:**
- Modify: `src/app/[crisisId]/_components/crisis-tabs.tsx`
- Modify: `src/app/[crisisId]/_components/public-timeline.tsx`
- Modify: `src/app/[crisisId]/_components/public-measures.tsx`

- [ ] **Step 1: Restyle crisis tabs with primary blue active indicator**

Replace the full content of `src/app/[crisisId]/_components/crisis-tabs.tsx`:

```tsx
"use client";

import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  News01Icon,
  TaskEdit01Icon,
  MapsIcon,
} from "@hugeicons/core-free-icons";

import type { MapMarkerData, MeasureData, TimelineEntryData } from "./types";
import { PublicTimeline } from "./public-timeline";
import { PublicMeasures } from "./public-measures";
import { PublicMap } from "./public-map";

type Tab = "siste-nytt" | "tiltak" | "kart";

export function CrisisTabs({
  timelineEntries,
  measures,
  mapMarkers,
}: {
  timelineEntries: TimelineEntryData[];
  measures: MeasureData[];
  mapMarkers: MapMarkerData[];
}) {
  const hasMap = mapMarkers.length > 0;

  const tabs: { id: Tab; label: string; icon: typeof News01Icon }[] = [
    { id: "siste-nytt", label: "Siste nytt", icon: News01Icon },
    { id: "tiltak", label: "Tiltak", icon: TaskEdit01Icon },
    ...(hasMap
      ? [{ id: "kart" as Tab, label: "Kart", icon: MapsIcon }]
      : []),
  ];

  const [activeTab, setActiveTab] = useState<Tab>("siste-nytt");

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 overflow-y-auto">
        {activeTab === "siste-nytt" && (
          <PublicTimeline entries={timelineEntries} />
        )}
        {activeTab === "tiltak" && <PublicMeasures measures={measures} />}
        {activeTab === "kart" && hasMap && <PublicMap markers={mapMarkers} />}
      </div>

      <nav className="sticky bottom-0 flex border-t bg-white">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? "border-t-2 border-primary text-primary"
                : "text-muted-foreground"
            }`}
          >
            <HugeiconsIcon icon={tab.icon} size={18} />
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
```

- [ ] **Step 2: Update public timeline with refined styling**

Replace the full content of `src/app/[crisisId]/_components/public-timeline.tsx`:

```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

import type { TimelineEntryData } from "./types";

export function PublicTimeline({ entries }: { entries: TimelineEntryData[] }) {
  if (entries.length === 0) {
    return (
      <p className="text-muted-foreground px-4 py-8 text-center text-sm">
        Ingen oppdateringer enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {entries.map((entry) => (
        <div key={entry.id} className="flex gap-3 px-4 py-3">
          <div className="flex shrink-0 items-center gap-1.5 pt-1">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={14}
              className="text-muted-foreground"
            />
            <span className="text-muted-foreground text-sm font-medium">
              {entry.createdAt.toLocaleTimeString("nb-NO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <span
              className="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white"
              style={{ backgroundColor: entry.etat.themeColor }}
            >
              {entry.etat.title}
            </span>
            <p className="mt-1 text-sm">{entry.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Replace emoji measures with hugeicons**

Replace the full content of `src/app/[crisisId]/_components/public-measures.tsx`:

```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Cancel01Icon,
  Wifi01Icon,
  CallIcon,
  Alert02Icon,
} from "@hugeicons/core-free-icons";

import type { MeasureData } from "./types";

const measureIcons = [Home01Icon, Cancel01Icon, Wifi01Icon, CallIcon, Alert02Icon];

export function PublicMeasures({ measures }: { measures: MeasureData[] }) {
  if (measures.length === 0) {
    return (
      <p className="text-muted-foreground px-4 py-8 text-center text-sm">
        Ingen tiltak enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {measures.map((measure, index) => (
        <div key={measure.id} className="flex items-start gap-3 px-4 py-4">
          <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <HugeiconsIcon
              icon={measureIcons[index % measureIcons.length]!}
              size={18}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{measure.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. All emojis replaced with hugeicons in crisis detail views.

- [ ] **Step 5: Commit**

```bash
git add src/app/[crisisId]/_components/crisis-tabs.tsx src/app/[crisisId]/_components/public-timeline.tsx src/app/[crisisId]/_components/public-measures.tsx
git commit -m "style: replace emojis with hugeicons in crisis tabs, timeline and measures"
```

---

### Task 7: Polish Dashboard Pages

**Files:**
- Modify: `src/app/dashbord/page.tsx`
- Modify: `src/app/dashbord/_components/crisis-card.tsx`
- Modify: `src/app/dashbord/krise/ny/page.tsx`
- Modify: `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`
- Modify: `src/app/dashbord/krise/_components/crisis-form.tsx`

- [ ] **Step 1: Update dashboard page layout for sidebar context**

Replace the full content of `src/app/dashbord/page.tsx`:

```tsx
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { CrisisCard } from "~/app/dashbord/_components/crisis-card";
import { getCrises } from "~/services/crisis";
import { getSession } from "~/server/better-auth/server";
import { db } from "~/server/db";

export default async function DashbordPage() {
  const session = await getSession();

  const user = session?.user
    ? await db.user.findUnique({
        where: { id: session.user.id },
        select: { isVerified: true, etater: { select: { id: true } } },
      })
    : null;

  const isEtatMember = user?.isVerified && (user.etater.length ?? 0) > 0;
  const userEtatIds = user?.etater.map((e) => e.id) ?? [];

  const crises =
    isEtatMember && session?.user
      ? await getCrises(session.user.id, userEtatIds)
      : [];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold">Kriseoversikt</h1>
        {isEtatMember ? (
          <Button asChild>
            <Link href="/dashbord/krise/ny">Ny krise</Link>
          </Button>
        ) : null}
      </div>

      {!isEtatMember ? (
        <p className="text-muted-foreground text-sm">
          Du ma vaere verifisert og medlem av en etat for a se kriser.
        </p>
      ) : crises.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Ingen kriser opprettet enda.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {crises.map((crisis) => (
            <CrisisCard key={crisis.id} crisis={crisis} />
          ))}
        </div>
      )}
    </main>
  );
}
```

- [ ] **Step 2: Add hover effect to CrisisCard**

In `src/app/dashbord/_components/crisis-card.tsx`, update the Card element to add hover shadow. Change the Card line:

```tsx
// From:
<Card className={`border-l-4 ${borderColor}`}>
// To:
<Card className={`border-l-4 transition-shadow hover:shadow-md ${borderColor}`}>
```

- [ ] **Step 3: Update new crisis page — remove back link (sidebar handles nav)**

Replace the full content of `src/app/dashbord/krise/ny/page.tsx`:

```tsx
"use client";

import { useRouter } from "next/navigation";

import { CrisisForm } from "~/app/dashbord/krise/_components/crisis-form";
import { api } from "~/trpc/react";

export default function NyKrisePage() {
  const router = useRouter();

  const { data: etater } = api.crisis.listEtater.useQuery();

  const createCrisis = api.crisis.create.useMutation({
    onSuccess: (data) => {
      router.push(`/dashbord/krise/${data.id}/rediger`);
      router.refresh();
    },
  });

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-heading mb-1 text-xl font-bold">Opprett ny krise</h1>
      <p className="text-muted-foreground mb-8 text-sm">
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
            location: values.location,
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

- [ ] **Step 4: Update edit crisis page — remove back link**

In `src/app/dashbord/krise/[crisisId]/rediger/page.tsx`, remove the `Link` import and the back link element. Remove these lines:

```tsx
// Remove this import:
import Link from "next/link";

// Remove this element from the JSX:
<Link
  href="/dashbord"
  className="text-muted-foreground hover:text-foreground mb-6 inline-block text-sm"
>
  ← Tilbake til oversikt
</Link>
```

Update the h1 to use the heading font:

```tsx
// From:
<h1 className="mb-1 text-xl font-semibold">Rediger krise</h1>
// To:
<h1 className="font-heading mb-1 text-xl font-bold">Rediger krise</h1>
```

- [ ] **Step 5: Polish crisis form section headers**

In `src/app/dashbord/krise/_components/crisis-form.tsx`, update the section headers to use the heading font. Change:

```tsx
// From:
<h2 className="text-sm font-semibold">Detaljer</h2>
// To:
<h2 className="font-heading text-sm font-bold">Detaljer</h2>
```

And:

```tsx
// From:
<h2 className="text-sm font-semibold">Redigeringstilgang</h2>
// To:
<h2 className="font-heading text-sm font-bold">Redigeringstilgang</h2>
```

- [ ] **Step 6: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Dashboard pages use grid layout, heading fonts, no redundant back links.

- [ ] **Step 7: Commit**

```bash
git add src/app/dashbord/page.tsx src/app/dashbord/_components/crisis-card.tsx src/app/dashbord/krise/ny/page.tsx src/app/dashbord/krise/[crisisId]/rediger/page.tsx src/app/dashbord/krise/_components/crisis-form.tsx
git commit -m "style: polish dashboard pages with grid layout, heading fonts, and sidebar-aware navigation"
```

---

### Task 8: Polish Login Page

**Files:**
- Modify: `src/app/logg-inn/page.tsx`

- [ ] **Step 1: Update login page with brand presence**

Replace the full content of `src/app/logg-inn/page.tsx`:

```tsx
import { redirect } from "next/navigation";

import { InnloggingKort } from "~/app/_components/innlogging-kort";
import { getSession } from "~/server/better-auth/server";

export default async function LoggInnSide() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="font-heading mb-6 text-2xl font-bold text-primary">
        Trygg
      </h1>
      <InnloggingKort />
    </main>
  );
}
```

- [ ] **Step 2: Verify the build compiles**

Run: `pnpm build`
Expected: Build succeeds. Login page has Trygg branding above the card.

- [ ] **Step 3: Commit**

```bash
git add src/app/logg-inn/page.tsx
git commit -m "style: add brand presence to login page"
```

---

### Task 9: Run Format and Lint, Final Verification

**Files:**
- Potentially all modified files

- [ ] **Step 1: Run Prettier to format all code**

Run: `pnpm format:write`
Expected: Files formatted successfully.

- [ ] **Step 2: Run lint and typecheck**

Run: `pnpm check`
Expected: No errors.

- [ ] **Step 3: Fix any issues found**

If there are lint or type errors, fix them. Common issues might be:
- Unused imports from removed code
- Missing icon exports (some hugeicon names may differ — check actual exports)

- [ ] **Step 4: Run production build**

Run: `pnpm build`
Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit any formatting/fix changes**

```bash
git add -A
git commit -m "style: run prettier format and fix lint issues"
```
