import { Button } from "~/components/ui/button";

type CrisisNotificationProps = {
  crisis: {
    title: string;
    description: string;
    when: Date;
  };
  onReadMore: () => void;
};

export function CrisisNotification({
  crisis,
  onReadMore,
}: CrisisNotificationProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          <span className="text-sm font-semibold tracking-wide uppercase">
            Nødvarsel
          </span>
        </div>

        <h1 className="mb-2 text-xl font-bold">{crisis.title}</h1>

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

        <Button variant="outline" className="w-full" onClick={onReadMore}>
          Les mer
        </Button>
      </div>
    </div>
  );
}
