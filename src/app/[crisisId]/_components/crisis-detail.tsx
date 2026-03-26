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
    label: "Høy",
    className: "bg-red-500/15 text-red-700 border-red-500/30",
    topBorder: "border-t-red-500",
  },
} as const;

export function CrisisDetail({ crisis }: { crisis: CrisisDetailData }) {
  const severity = severityConfig[crisis.severity];

  return (
    <div
      className={`mx-auto flex min-h-screen max-w-md flex-col border-t-4 bg-white ${severity.topBorder}`}
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
