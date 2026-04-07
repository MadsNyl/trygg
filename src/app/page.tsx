import Link from "next/link";
import { Suspense } from "react";

import { Button } from "~/components/ui/button";
import { HeaderUserMenu } from "~/app/_components/header-user-menu";
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
      <header className="bg-background border-b">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 lg:px-0">
          <div>
            <h1 className="font-heading text-xl font-bold tracking-tight">
              trygg
            </h1>
          </div>
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
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-0 lg:py-10">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Kriseoversikt</h2>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Aktive krisesituasjoner i ditt område
          </p>
        </div>

        <Suspense>
          <FeedFilters locations={locations} />
        </Suspense>

        <div className="mt-4 space-y-3">
          {crises.length === 0 ? (
            hasFilters ? (
              <Empty className="py-16">
                <EmptyMedia>
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={32}
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
              <Empty className="py-16">
                <EmptyMedia>
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={32}
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
