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
