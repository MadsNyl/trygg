import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { formatDateTime } from "~/lib/format";
import { severityConfig, type Severity } from "~/lib/severity";

type CrisisCardProps = {
  crisis: {
    id: string;
    title: string;
    description: string;
    when: Date;
    severity: Severity;
    createdBy: { name: string };
    allowedEtater: { title: string }[];
    canEdit: boolean;
  };
};

export function CrisisCard({ crisis }: CrisisCardProps) {
  const severity = severityConfig[crisis.severity];

  return (
    <div className="rounded-lg border p-5 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-base font-semibold">{crisis.title}</h3>
            <Badge variant="outline" className={`shrink-0 ${severity.badge}`}>
              {severity.label}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1.5 line-clamp-2 text-sm">
            {crisis.description}
          </p>
        </div>
        <span className="text-muted-foreground shrink-0 text-sm">
          {formatDateTime(crisis.when, "short")}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-muted-foreground text-sm">
          {crisis.createdBy.name}
        </span>
        <div className="flex gap-2">
          {crisis.canEdit ? (
            <Button variant="outline" asChild className="h-9 px-4 text-sm">
              <Link href={`/dashbord/krise/${crisis.id}/rediger`}>Rediger</Link>
            </Button>
          ) : null}
          <Button variant="ghost" asChild className="h-9 px-4 text-sm">
            <Link href={`/${crisis.id}`} target="_blank">
              Se offentlig
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
