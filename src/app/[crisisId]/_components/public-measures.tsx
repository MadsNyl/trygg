import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Cancel01Icon,
  Wifi01Icon,
  CallIcon,
  Alert02Icon,
} from "@hugeicons/core-free-icons";

import type { MeasureData } from "./types";

const measureIcons = [
  Home01Icon,
  Cancel01Icon,
  Wifi01Icon,
  CallIcon,
  Alert02Icon,
];

export function PublicMeasures({ measures }: { measures: MeasureData[] }) {
  if (measures.length === 0) {
    return (
      <p className="text-muted-foreground px-4 py-8 text-center text-sm">
        Ingen tiltak enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {measures.map((measure, index) => (
        <div key={measure.id} className="flex items-start gap-3 px-4 py-4">
          <div className="bg-primary/10 text-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <HugeiconsIcon
              icon={measureIcons[index % measureIcons.length]!}
              size={18}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{measure.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
