import { Skeleton } from "~/components/ui/skeleton";

export default function EtatDetailLoading() {
  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-9 w-24" />
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-6 w-40" />
        </div>
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-9 w-32" />
      </div>

      <div className="space-y-1">
        <div className="flex gap-4 border-b py-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-20" />
        </div>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>
    </main>
  );
}
