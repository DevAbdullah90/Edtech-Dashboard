import * as React from "react";

import { cn } from "@/lib/utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar"
      data-size="default"
      className={cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-foreground/10 data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<"img">) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      data-slot="avatar-image"
      className={cn("aspect-square size-full rounded-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full text-xs font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };