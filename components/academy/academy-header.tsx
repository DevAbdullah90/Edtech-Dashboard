"use client";

import * as React from "react";
import { Bell, ChevronsUpDown, Moon, Palette, PanelLeftClose } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function AcademyHeader() {
  return (
    <header className="bg-background/40 sticky top-0 z-50 flex h-14 shrink-0 items-center border-b backdrop-blur-xl">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2">
        <button
          type="button"
          className="group/button inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
          aria-label="Toggle sidebar"
        >
          <PanelLeftClose className="size-4" />
        </button>
        <button
          type="button"
          className="group/button inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-[min(var(--radius-md),12px)] border border-transparent bg-clip-padding px-2.5 text-[0.8rem] font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
        >
          <span className="size-4 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
          <span className="hidden font-medium md:inline">Shadcn Outlet</span>
          <ChevronsUpDown className="size-3.5 text-muted-foreground" />
        </button>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://shadcnuikit.com/pricing"
            className="group/button relative inline-flex h-7 shrink-0 animate-pulse items-center justify-center gap-1 rounded-[min(var(--radius-md),12px)] border border-transparent bg-clip-padding bg-linear-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text px-2.5 text-[0.8rem] font-medium whitespace-nowrap text-transparent transition-all outline-none select-none underline-offset-4 hover:bg-transparent hover:underline"
          >
            Download
          </a>
          <button
            type="button"
            className="group/button inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell className="size-4" />
          </button>
          <button
            type="button"
            className="group/button inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Moon className="size-4" />
            <span className="sr-only">Toggle theme</span>
          </button>
          <button
            type="button"
            className="group/button inline-flex size-7 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
            aria-label="Theme settings"
          >
            <Palette className="size-4" />
          </button>
          <Separator orientation="vertical" className="h-4" />
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Toby Belhome" />
          </Avatar>
        </div>
      </div>
    </header>
  );
}