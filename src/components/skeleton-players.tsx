import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonPlayers() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-6 w-1/2 my-6 mx-auto" />
      {[...Array(16)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
