import { HugeiconsIcon } from "@hugeicons/react";
import { News01Icon } from "@hugeicons/core-free-icons";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty";
import { formatTime } from "~/lib/format";

import type { TimelineEntryData } from "./types";

function getContrastTextColor(hexOrColor: string): string {
  const hex = hexOrColor.replace("#", "");
  if (hex.length !== 6) return "text-white";
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "text-foreground" : "text-white";
}

export function PublicTimeline({ entries }: { entries: TimelineEntryData[] }) {
  if (entries.length === 0) {
    return (
      <Empty className="py-20">
        <EmptyMedia>
          <HugeiconsIcon
            icon={News01Icon}
            size={36}
            className="text-muted-foreground"
          />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle className="text-base">
            Ingen oppdateringer enda
          </EmptyTitle>
          <EmptyDescription className="text-sm">
            Nye oppdateringer fra involverte etater vil vises her.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="relative space-y-0">
      {entries.map((entry, index) => {
        const isLast = index === entries.length - 1;

        return (
          <div key={entry.id} className="relative flex gap-5">
            {/* Timeline track */}
            <div className="flex flex-col items-center">
              <div
                className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-white"
                style={{ backgroundColor: entry.etat.themeColor }}
              />
              {!isLast && (
                <div className="bg-border w-0.5 flex-1 rounded-full" />
              )}
            </div>

            {/* Content */}
            <div className={`min-w-0 flex-1 ${isLast ? "pb-2" : "pb-8"}`}>
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getContrastTextColor(entry.etat.themeColor)}`}
                  style={{ backgroundColor: entry.etat.themeColor }}
                >
                  {entry.etat.title}
                </span>
                <span className="text-muted-foreground shrink-0 text-xs tabular-nums">
                  {formatTime(entry.createdAt)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed">{entry.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
