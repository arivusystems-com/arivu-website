function SkeletonBar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-surface-muted ${className ?? ''}`}
    />
  )
}

export function HelpEmbedSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-[28rem] flex-col gap-6 sm:min-h-[32rem]"
    >
      <div className="flex flex-wrap gap-2">
        <SkeletonBar className="h-3.5 w-12" />
        <SkeletonBar className="h-3.5 w-16" />
        <SkeletonBar className="h-3.5 w-24" />
      </div>

      <div className="grid grid-cols-1 gap-6 min-[960px]:grid-cols-[minmax(0,1fr)_17.5rem] min-[960px]:gap-10 min-[960px]:items-start">
        <div className="flex min-w-0 flex-col gap-6">
          <SkeletonBar className="h-48 w-full rounded-2xl sm:h-56" />

          <div className="space-y-3">
            <SkeletonBar className="h-7 w-3/4 max-w-md" />
            <SkeletonBar className="h-4 w-full max-w-sm" />
          </div>

          <div className="space-y-2.5 pt-2">
            <SkeletonBar className="h-3.5 w-full" />
            <SkeletonBar className="h-3.5 w-[92%]" />
            <SkeletonBar className="h-3.5 w-[88%]" />
            <SkeletonBar className="h-3.5 w-[95%]" />
            <SkeletonBar className="h-3.5 w-[70%]" />
          </div>
        </div>

        <div className="hidden flex-col gap-4 min-[960px]:flex">
          <SkeletonBar className="h-40 w-full rounded-xl" />
          <SkeletonBar className="h-32 w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}
