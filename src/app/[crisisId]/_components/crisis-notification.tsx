import { Button } from "~/components/ui/button";
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
    <div className="bg-background flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md overflow-hidden rounded-lg border shadow-sm">
        <div className={`${config.bg} px-6 py-5`}>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${config.badge}`}
            >
              <HugeiconsIcon icon={Alert02Icon} size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase">
                Nødvarsel
              </p>
              <p className={`text-sm font-medium ${config.iconColor}`}>
                {config.labelLong}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {crisis.title}
          </h1>

          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            {crisis.description}
          </p>

          <p className="text-muted-foreground mt-4 text-xs">
            {formatDateTime(crisis.when)}
          </p>

          <Button className="mt-8 h-11 w-full text-sm" onClick={onReadMore}>
            Les mer
          </Button>
        </div>
      </div>
    </div>
  );
}
