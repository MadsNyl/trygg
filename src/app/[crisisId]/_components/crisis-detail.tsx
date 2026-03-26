import Link from "next/link";

import { ShareButton } from "./share-button";
import { CrisisTabs } from "./crisis-tabs";

import type { CrisisDetailData } from "./types";

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <Link
          href="/"
          className="text-xl text-muted-foreground hover:text-foreground"
        >
          &lt;
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-bold">{crisis.title}</h1>
          <p className="text-sm text-muted-foreground">
            {crisis.location ?? "Ukjent sted"}
          </p>
        </div>
        <ShareButton />
      </header>

      {/* Info block */}
      <section className="mx-4 mb-4 border-l-2 border-gray-200 pl-4">
        <div className="space-y-2 py-2">
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              HVA
            </p>
            <p className="text-sm">{crisis.what}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              HVORDAN
            </p>
            <p className="text-sm">{crisis.how}</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              NÅR
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
