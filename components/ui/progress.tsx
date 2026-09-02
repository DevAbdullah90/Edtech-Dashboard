import * as React from "react";

import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<"div"> & { value?: number | null }) {
  return (
    <div
      data-slot="progress"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value ?? undefined}
      data-state={value == null ? "indeterminate" : "determinate"}
      data-max={100}
      className={cn(
        "relative flex w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      {children ?? (
        <div
          data-slot="progress-indicator"
          data-state={value == null ? "indeterminate" : "determinate"}
          data-max={100}
          className={cn(
            "size-full flex-1 bg-primary transition-all",
            value == null && "animate-pulse"
          )}
          style={value != null ? { transform: `translateX(-${100 - value}%)` } : undefined}
        />
      )}
    </div>
  );
}

export { Progress };