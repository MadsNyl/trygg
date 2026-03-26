import type { TimelineEntryData } from "./types";

export function PublicTimeline({
  entries,
}: {
  entries: TimelineEntryData[];
}) {
  if (entries.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-muted-foreground">
        Ingen oppdateringer enda.
      </p>
    );
  }

  return (
    <div className="divide-y">
      {entries.map((entry) => (
        <div key={entry.id} className="flex gap-3 px-4 py-3">
          <div className="pt-1">
            <span className="text-sm font-medium text-muted-foreground">
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
