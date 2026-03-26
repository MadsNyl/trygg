import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon, News01Icon } from "@hugeicons/core-free-icons";

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
      <Empty className="py-12">
        <EmptyMedia>
          <HugeiconsIcon
            icon={News01Icon}
            size={28}
            className="text-muted-foreground"
          />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>Ingen oppdateringer enda</EmptyTitle>
          <EmptyDescription>
            Nye oppdateringer fra involverte etater vil vises her.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
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
              {formatTime(entry.createdAt)}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getContrastTextColor(entry.etat.themeColor)}`}
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
