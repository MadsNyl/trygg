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
