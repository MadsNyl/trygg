import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { formatDateTime } from "~/lib/format";
import { severityConfig, type Severity } from "~/lib/severity";

type CrisisListItemProps = {
  crisis: {
    id: string;
    title: string;
    description?: string;
    severity: Severity;
    location: string | null;
    when: Date;
  };
};

export function CrisisListItem({ crisis }: CrisisListItemProps) {
  const severity = severityConfig[crisis.severity];

  return (
    <Link
      href={`/${crisis.id}`}
      className="block rounded-lg border p-5 transition-shadow hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold">{crisis.title}</h3>
            <Badge variant="outline" className={`shrink-0 ${severity.badge}`}>
              {severity.label}
            </Badge>
          </div>
          {crisis.description ? (
            <p className="text-muted-foreground mt-1.5 line-clamp-2 text-sm">
              {crisis.description}
            </p>
          ) : null}
        </div>
        <span className="text-muted-foreground shrink-0 text-sm">
          {formatDateTime(crisis.when, "short")}
        </span>
      </div>
      <p className="text-muted-foreground mt-4 text-sm">
        {crisis.location ?? "Ukjent sted"}
      </p>
    </Link>
  );
}
