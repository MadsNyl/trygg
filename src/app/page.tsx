import Link from "next/link";
import { Suspense } from "react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { CrisisListItem } from "~/app/_components/crisis-list-item";
import { FeedFilters } from "~/app/_components/feed-filters";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { getDistinctLocations, getPublicCrises } from "~/services/crisis";
import { getSession } from "~/server/better-auth/server";

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

  const hasFilters = !!(params.q ?? severity ?? params.location);

  const [crises, locations, session] = await Promise.all([
    getPublicCrises({
      search: params.q,
      severity,
      location: params.location,
    }),
    getDistinctLocations(),
    getSession(),
  ]);

  return (
    <main className="bg-background min-h-screen">
      <header className="bg-background sticky top-0 z-10 border-b">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight"
          >
            trygg
          </Link>
          <nav className="flex items-center gap-3">
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
                <span className="hidden sm:inline">{session.user.name}</span>
              </Link>
            ) : (
              <Button asChild variant="outline" className="h-10 px-5 text-sm">
                <Link href="/logg-inn">Logg inn</Link>
              </Button>
            )}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Kriseoversikt
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Aktive krisesituasjoner i ditt område
          </p>
        </div>

        <Suspense>
          <FeedFilters locations={locations} />
        </Suspense>

        <div className="mt-6 space-y-4">
          {crises.length === 0 ? (
            hasFilters ? (
              <Empty className="py-20">
                <EmptyMedia>
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={36}
                    className="text-muted-foreground"
                  />
                </EmptyMedia>
                <EmptyHeader>
                  <EmptyTitle className="text-base">Ingen treff</EmptyTitle>
                  <EmptyDescription className="text-sm">
                    Prøv å endre søk eller fjern filtre for å se flere kriser.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            ) : (
              <Empty className="py-20">
                <EmptyMedia>
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={36}
                    className="text-green-600"
                  />
                </EmptyMedia>
                <EmptyHeader>
                  <EmptyTitle className="text-base">
                    Ingen aktive kriser
                  </EmptyTitle>
                  <EmptyDescription className="text-sm">
                    Alt er rolig. Det er ingen krisesituasjoner akkurat nå.
                  </EmptyDescription>
                </EmptyHeader>
              </Empty>
            )
          ) : (
            crises.map((crisis) => (
              <CrisisListItem key={crisis.id} crisis={crisis} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
