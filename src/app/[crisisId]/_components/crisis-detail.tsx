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
import { formatDateTime } from "~/lib/format";
import { severityConfig } from "~/lib/severity";

import type { CrisisDetailData } from "./types";

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  const severity = severityConfig[crisis.severity];

  return (
    <div
      className={`bg-background mx-auto flex min-h-screen max-w-md flex-col border-t-4 ${severity.topBorder}`}
    >
      {/* Header */}
      <header className="flex items-center gap-3 px-4 pt-4 pb-2">
        <Link
          href="/"
          aria-label="Tilbake til kriseoversikt"
          className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-md p-1"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="font-heading text-lg font-bold">{crisis.title}</h1>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="outline" className={severity.badge}>
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
      <section className="bg-muted mx-4 my-4 rounded-lg p-4">
        <div className="space-y-3">
          <div className="flex gap-3">
            <HugeiconsIcon
              icon={InformationCircleIcon}
              size={18}
              className="text-primary mt-0.5 shrink-0"
            />
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
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
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
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
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Når
              </p>
              <p className="text-sm">{formatDateTime(crisis.when)}</p>
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
