import { Skeleton } from "~/components/ui/skeleton";

export default function DashbordLoading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
      <div className="mb-8 flex items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-10 w-28" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-40" />
                  <Skeleton className="h-5 w-14 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-4 w-36 shrink-0" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Skeleton className="h-4 w-24" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-20 rounded-md" />
                <Skeleton className="h-9 w-24 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
