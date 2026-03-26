import Link from "next/link";

import { Badge } from "~/components/ui/badge";

type CrisisListItemProps = {
  crisis: {
    id: string;
    title: string;
    description?: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    location: string | null;
    when: Date;
  };
};

const severityConfig = {
  LOW: {
    label: "Lav",
    className: "bg-green-500/15 text-green-700 border-green-500/30",
    border: "border-l-green-500",
  },
  MEDIUM: {
    label: "Middels",
    className: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    border: "border-l-amber-500",
  },
  HIGH: {
    label: "Høy",
    className: "bg-red-500/15 text-red-700 border-red-500/30",
    border: "border-l-red-500",
  },
} as const;

export function CrisisListItem({ crisis }: CrisisListItemProps) {
  const severity = severityConfig[crisis.severity];

  return (
    <Link
      href={`/${crisis.id}`}
      className={`block rounded-lg border border-l-4 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${severity.border}`}
    >
      <div className="mb-2">
        <Badge variant="outline" className={severity.className}>
          {severity.label}
        </Badge>
      </div>
      <h3 className="font-heading text-base font-bold">{crisis.title}</h3>
      {crisis.description ? (
        <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
          {crisis.description}
        </p>
      ) : null}
      <p className="text-muted-foreground mt-1 text-sm">
        {crisis.location ?? "Ukjent sted"} ·{" "}
        {crisis.when.toLocaleDateString("nb-NO", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </Link>
  );
}
