export function ReferralCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
      <div className="flex h-full flex-row sm:flex-col">
        <div className="aspect-square w-[38%] shrink-0 border-r border-white/10 bg-white/5 sm:w-full sm:border-r-0 sm:border-b">
          <div className="aspect-square h-full w-full animate-pulse bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
          <div className="h-6 w-20 animate-pulse rounded-full bg-white/8" />
          <div className="space-y-2">
            <div className="h-5 w-4/5 animate-pulse rounded bg-white/8" />
            <div className="h-4 w-full animate-pulse rounded bg-white/6" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-white/6" />
          </div>
          <div className="mt-auto h-4 w-28 animate-pulse rounded bg-white/8" />
        </div>
      </div>
    </div>
  );
}
