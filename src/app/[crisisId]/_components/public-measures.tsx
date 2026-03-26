import type { MeasureData } from "./types";

const measureIcons: Record<number, string> = {
  0: "🏠",
  1: "🚫",
  2: "📡",
  3: "📞",
  4: "⚠️",
};

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
        <div key={measure.id} className="flex gap-3 px-4 py-4">
          <span className="text-2xl">
            {measureIcons[index % Object.keys(measureIcons).length]}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">{measure.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
