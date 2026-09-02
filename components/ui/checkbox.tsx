"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  checked,
  onCheckedChange,
  ...props
}: React.ComponentProps<"button"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  const [internalChecked, setInternalChecked] = React.useState(checked ?? false);
  const isChecked = checked ?? internalChecked;

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      value="on"
      data-slot="checkbox"
      onClick={() => {
        const next = !isChecked;
        setInternalChecked(next);
        onCheckedChange?.(next);
      }}
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      )}
      {...props}
    >
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3.5"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      )}
    </button>
  );
}

export { Checkbox };