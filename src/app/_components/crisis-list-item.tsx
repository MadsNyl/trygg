import Link from "next/link";

type CrisisListItemProps = {
  crisis: {
    id: string;
    title: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    location: string | null;
    when: Date;
  };
};

const severityDot = {
  LOW: "bg-green-500",
  MEDIUM: "bg-amber-500",
  HIGH: "bg-red-500",
} as const;

export function CrisisListItem({ crisis }: CrisisListItemProps) {
  return (
    <Link
      href={`/${crisis.id}`}
      className="flex items-start gap-3 border-b px-4 py-3 transition-colors hover:bg-muted/50"
    >
      <span
        className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${severityDot[crisis.severity]}`}
      />
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{crisis.title}</p>
        <p className="text-sm text-muted-foreground">
          {crisis.location ?? "Ukjent sted"} ·{" "}
          {crisis.when.toLocaleDateString("nb-NO", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </Link>
  );
}
