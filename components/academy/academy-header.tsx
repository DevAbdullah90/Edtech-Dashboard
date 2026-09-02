"use client";

import * as React from "react";
import { Bell, ChevronsUpDown, Moon, Palette, PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "./sidebar-context";

export function AcademyHeader() {
  const { collapsed, toggle, setMobileOpen } = useSidebar();

  const handleToggle = () => {
    // On mobile, open the drawer; on desktop, toggle collapse
    if (window.innerWidth < 768) {
      setMobileOpen(true);
    } else {
      toggle();
    }
  };

  return (
    <header className="bg-background/40 sticky top-0 z-50 flex h-14 shrink-0 items-center border-b backdrop-blur-xl">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2">
        <button
          type="button"
          onClick={handleToggle}
          className="group/button inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <PanelLeftOpen className="size-4" /> : <PanelLeftClose className="size-4" />}
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
            <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Sana" />
          </Avatar>
        </div>
      </div>
    </header>
  );
}