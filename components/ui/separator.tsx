"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      data-slot="separator"
      data-orientation={orientation}
      role="none"
      className={cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch mx-2 data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center",
        className
      )}
      {...props}
    />
  );
}

export { Separator };