import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { Alert02Icon } from "@hugeicons/core-free-icons";

type CrisisNotificationProps = {
  crisis: {
    title: string;
    description: string;
    severity: "LOW" | "MEDIUM" | "HIGH";
    when: Date;
  };
  onReadMore: () => void;
};

const severityConfig = {
  LOW: {
    label: "Lav alvorlighet",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    badgeClass: "bg-green-500/15 text-green-700 border-green-500/30",
  },
  MEDIUM: {
    label: "Middels alvorlighet",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    badgeClass: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  },
  HIGH: {
    label: "Høy alvorlighet",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    badgeClass: "bg-red-500/15 text-red-700 border-red-500/30",
  },
} as const;

export function CrisisNotification({
  crisis,
  onReadMore,
}: CrisisNotificationProps) {
  const config = severityConfig[crisis.severity];

  return (
    <div
      className={`flex min-h-screen items-center justify-center ${config.bg} px-4`}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <HugeiconsIcon
            icon={Alert02Icon}
            size={24}
            className={config.iconColor}
          />
          <Badge variant="outline" className={config.badgeClass}>
            {config.label}
          </Badge>
        </div>

        <h1 className="font-heading mb-2 text-xl font-bold">{crisis.title}</h1>

        <p className="text-muted-foreground mb-3">{crisis.description}</p>

        <p className="text-muted-foreground mb-6 text-sm">
          {crisis.when.toLocaleDateString("nb-NO", {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <Button className="w-full" onClick={onReadMore}>
          Les mer
        </Button>
      </div>
    </div>
  );
}
