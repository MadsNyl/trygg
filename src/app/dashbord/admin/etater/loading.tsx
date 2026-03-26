import { Skeleton } from "~/components/ui/skeleton";

export default function EtaterLoading() {
  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-6 w-20" />
          <Skeleton className="mt-1 h-4 w-44" />
        </div>
        <Skeleton className="h-9 w-28" />
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-3 rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-24" />
          </div>
        ))}
      </div>
    </main>
  );
}
