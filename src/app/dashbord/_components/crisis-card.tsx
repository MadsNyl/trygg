import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type CrisisCardProps = {
  crisis: {
    id: string;
    title: string;
    description: string;
    when: Date;
    severity: "LOW" | "MEDIUM" | "HIGH";
    createdBy: { name: string };
    allowedEtater: { title: string }[];
    canEdit: boolean;
  };
};

const severityConfig = {
  LOW: { label: "Lav", className: "bg-green-500/15 text-green-500 border-green-500/30" },
  MEDIUM: { label: "Middels", className: "bg-amber-500/15 text-amber-500 border-amber-500/30" },
  HIGH: { label: "Høy", className: "bg-red-500/15 text-red-500 border-red-500/30" },
} as const;

const severityBorderColor = {
  LOW: "border-l-green-500",
  MEDIUM: "border-l-amber-500",
  HIGH: "border-l-red-500",
} as const;

export function CrisisCard({ crisis }: CrisisCardProps) {
  const severity = severityConfig[crisis.severity];
  const borderColor = severityBorderColor[crisis.severity];

  const etaterLabel =
    crisis.allowedEtater.length === 0
      ? "Alle etater"
      : crisis.allowedEtater.map((e) => e.title).join(", ");

  return (
    <Card className={`border-l-4 ${borderColor}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-base">{crisis.title}</CardTitle>
          <Badge variant="outline" className={severity.className}>
            {severity.label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {crisis.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>
            {crisis.when.toLocaleDateString("nb-NO", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>{crisis.createdBy.name}</span>
          <span>{etaterLabel}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/krise/${crisis.id}`}>Se detaljer</Link>
          </Button>
          {crisis.canEdit ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashbord/krise/${crisis.id}/rediger`}>Rediger</Link>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
