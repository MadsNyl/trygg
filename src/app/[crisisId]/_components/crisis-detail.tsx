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
  Location01Icon,
} from "@hugeicons/core-free-icons";
import { formatDateTime } from "~/lib/format";
import { severityConfig } from "~/lib/severity";

import type { CrisisDetailData } from "./types";

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  const severity = severityConfig[crisis.severity];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-4xl items-center gap-3 px-6 lg:px-10">
          <Link
            href="/"
            aria-label="Tilbake til kriseoversikt"
            className="text-muted-foreground hover:text-foreground flex items-center justify-center rounded-md p-1"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
          </Link>
          <div className="min-w-0 flex-1">
            <h1 className="font-heading truncate text-lg font-bold tracking-tight">
              {crisis.title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={severity.badge}>
              {severity.label}
            </Badge>
            <ShareButton />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        {/* Hero section */}
        <div className="py-8 pb-6">
          {/* Info grid */}
          <div className="bg-border grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1 bg-white p-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={14}
                  className="text-primary"
                />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Hvor
                </span>
              </div>
              <p className="text-sm font-medium">
                {crisis.location ?? "Ukjent sted"}
              </p>
            </div>

            <div className="flex flex-col gap-1 bg-white p-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <HugeiconsIcon
                  icon={InformationCircleIcon}
                  size={14}
                  className="text-primary"
                />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Hva
                </span>
              </div>
              <p className="text-sm font-medium">{crisis.what}</p>
            </div>

            <div className="flex flex-col gap-1 bg-white p-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <HugeiconsIcon
                  icon={Settings02Icon}
                  size={14}
                  className="text-primary"
                />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Hvordan
                </span>
              </div>
              <p className="text-sm font-medium">{crisis.how}</p>
            </div>

            <div className="flex flex-col gap-1 bg-white p-4">
              <div className="text-muted-foreground flex items-center gap-2">
                <HugeiconsIcon
                  icon={Calendar03Icon}
                  size={14}
                  className="text-primary"
                />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Når
                </span>
              </div>
              <p className="text-sm font-medium">
                {formatDateTime(crisis.when)}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <CrisisTabs
          timelineEntries={crisis.timelineEntries}
          measures={crisis.measures}
          mapMarkers={crisis.mapMarkers}
        />
      </div>
    </div>
  );
}
