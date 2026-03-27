import { HugeiconsIcon } from "@hugeicons/react";
import { TaskEdit01Icon, Alert02Icon } from "@hugeicons/core-free-icons";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty";
import type { MeasureData } from "./types";

export function PublicMeasures({ measures }: { measures: MeasureData[] }) {
  if (measures.length === 0) {
    return (
      <Empty className="py-20">
        <EmptyMedia>
          <HugeiconsIcon
            icon={TaskEdit01Icon}
            size={36}
            className="text-muted-foreground"
          />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle className="text-base">Ingen tiltak enda</EmptyTitle>
          <EmptyDescription className="text-sm">
            Tiltak og anbefalinger fra myndighetene vil vises her.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="space-y-3">
      {measures.map((measure, index) => (
        <div
          key={measure.id}
          className="flex items-start gap-4 rounded-lg border p-4"
        >
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: measure.etat.themeColor }}
          >
            <HugeiconsIcon icon={Alert02Icon} size={18} />
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium leading-relaxed">
              {measure.text}
            </p>
            <p className="text-muted-foreground mt-1 text-xs">
              {measure.etat.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
