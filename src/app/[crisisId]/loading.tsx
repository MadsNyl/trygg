import { Skeleton } from "~/components/ui/skeleton";

export default function CrisisLoading() {
  return (
    <div className="bg-muted flex min-h-screen items-center justify-center px-4">
      <div className="bg-card w-full max-w-md rounded-2xl p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-5 w-28 rounded-full" />
        </div>
        <Skeleton className="mb-2 h-7 w-3/4" />
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="mb-3 h-4 w-2/3" />
        <Skeleton className="mb-6 h-4 w-40" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
}
