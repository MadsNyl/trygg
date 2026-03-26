import { Skeleton } from "~/components/ui/skeleton";

export default function BrukereLoading() {
  return (
    <main className="min-h-[calc(100vh-11.5rem)] space-y-4">
      <div>
        <Skeleton className="h-6 w-24" />
        <Skeleton className="mt-1 h-4 w-48" />
      </div>

      <div className="flex max-w-sm items-center gap-2">
        <Skeleton className="h-9 flex-1" />
        <Skeleton className="h-9 w-16" />
      </div>

      <div className="space-y-1">
        <div className="flex gap-4 border-b py-3">
          {["w-24", "w-36", "w-20", "w-16", "w-32"].map((w, i) => (
            <Skeleton key={i} className={`h-4 ${w}`} />
          ))}
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 py-3">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-28" />
            </div>
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-5 w-12 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
