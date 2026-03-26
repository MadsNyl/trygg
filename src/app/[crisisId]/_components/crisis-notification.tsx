import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";
import { formatDateTime } from "~/lib/format";
import { severityConfig, type Severity } from "~/lib/severity";

type CrisisNotificationProps = {
  crisis: {
    title: string;
    description: string;
    severity: Severity;
    when: Date;
  };
  onReadMore: () => void;
};

export function CrisisNotification({
  crisis,
  onReadMore,
}: CrisisNotificationProps) {
  const config = severityConfig[crisis.severity];

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${config.bg} px-4`}
    >
      <div className="bg-card w-full max-w-md rounded-2xl p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <HugeiconsIcon
            icon={Alert02Icon}
            size={24}
            className={config.iconColor}
          />
          <Badge variant="outline" className={config.badge}>
            {config.labelLong}
          </Badge>
        </div>

        <h1 className="font-heading mb-2 text-xl font-bold">{crisis.title}</h1>

        <p className="text-muted-foreground mb-3">{crisis.description}</p>

        <p className="text-muted-foreground mb-6 text-sm">
          {formatDateTime(crisis.when)}
        </p>

        <Button className="w-full" onClick={onReadMore}>
          Les mer
        </Button>
      </div>
    </div>
  );
}
