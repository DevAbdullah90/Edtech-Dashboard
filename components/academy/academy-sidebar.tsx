"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { navSections, type NavItem } from "./nav-data";
import { useSidebar } from "./sidebar-context";

function SidebarNavItem({
  item,
  depth = 0,
  pathname,
}: {
  item: NavItem;
  depth?: number;
  pathname: string;
}) {
  const [open, setOpen] = React.useState(false);

  if (item.children) {
    return (
      <li data-slot="sidebar-menu-item" className="group/menu-item relative">
        <button
          type="button"
          data-slot="sidebar-menu-button"
          data-size="default"
          data-active="false"
          onClick={() => setOpen(!open)}
          className="peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm text-sidebar-foreground ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
        >
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
        </button>
        {open && (
          <div
            data-slot="sidebar-menu-sub"
            className="mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2 py-0.5 group-data-[collapsible=icon]:hidden"
          >
            {item.children.map((child) => (
              <SidebarNavItem key={child.title} item={child} depth={depth + 1} pathname={pathname} />
            ))}
          </div>
        )}
      </li>
    );
  }

  const isActive =
    item.href === pathname ||
    (item.href === "/dashboard" && pathname.startsWith("/dashboard"));

  return (
    <li data-slot="sidebar-menu-item" className="group/menu-item relative">
      <Link
        href={item.href ?? "#"}
        data-slot="sidebar-menu-button"
        data-size="default"
        data-active={isActive}
        className={cn(
          "peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm text-sidebar-foreground ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          depth > 0 &&
            "h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-hidden focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:hidden [&>span:last-child]:truncate"
        )}
      >
        {item.icon && <item.icon />}
        <span>{item.title}</span>
        {item.badge && (
          <span
            className={cn(
              "pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs font-medium tabular-nums",
              item.badgeVariant === "green"
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-400"
                : "bg-muted text-muted-foreground"
            )}
          >
            {item.badge}
          </span>
        )}
      </Link>
    </li>
  );
}

export function AcademySidebar() {
  const pathname = usePathname();
  const { collapsed, mobileOpen, setMobileOpen } = useSidebar();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Desktop sidebar */}
      <div className={cn("group peer hidden text-sidebar-foreground md:block", collapsed && "md:hidden")}>
        <div data-slot="sidebar-gap" className="relative w-64 bg-transparent transition-[width] duration-200 ease-linear" />
        <div className="fixed inset-y-0 z-10 hidden h-svh w-64 p-2 transition-[left,right,width] duration-200 ease-linear md:flex">
          <div className="flex size-full flex-col rounded-lg bg-sidebar shadow-sm ring-1 ring-sidebar-border">
            <div data-slot="sidebar-header" className="flex flex-col gap-2 p-2">
              <ul data-slot="sidebar-menu" className="flex w-full min-w-0 flex-col gap-0">
                <li data-slot="sidebar-menu-item" className="group/menu-item relative">
                  <a
                    href="#"
                    data-slot="sidebar-menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm text-sidebar-foreground ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/logo.png"
                      className="me-1 size-8 rounded-[5px]"
                      alt="Hamdard School logo"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className="text-foreground font-semibold leading-tight">Hamdard School</span>
                      <span className="text-xs leading-tight text-muted-foreground">
                        School Management System
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="relative flex w-full min-w-0 flex-col p-2 py-0">
                <div className="w-full text-sm relative">
                  <label className="sr-only" htmlFor="sidebar-search">
                    Search
                  </label>
                  <input
                    data-slot="sidebar-input"
                    className="h-8 w-full cursor-pointer rounded-lg border border-input bg-background pl-8 pr-8 text-sm shadow-none outline-none placeholder:text-muted-foreground"
                    id="sidebar-search"
                    placeholder="Search..."
                    readOnly
                  />
                  <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50" />
                  <kbd className="pointer-events-none absolute top-1/2 right-2 inline-flex -translate-y-1/2 items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 font-sans text-[10px] font-medium text-muted-foreground">
                    ⌘K
                  </kbd>
                </div>
              </div>
            </div>
            <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto">
              <div className="relative h-full">
                <div className="size-full">
                  <div className="relative flex w-full min-w-0 flex-col p-2">
                    <div className="w-full text-sm flex flex-col gap-2">
                      {navSections.map((section) => (
                        <div key={section.title} className="flex flex-col gap-1">
                          <div className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70">
                            {section.title}
                          </div>
                          <ul data-slot="sidebar-menu" className="flex w-full min-w-0 flex-col gap-0">
                            {section.items.map((item) => (
                              <SidebarNavItem key={item.title} item={item} pathname={pathname} />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 p-2 transition-transform duration-200 ease-linear md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex size-full flex-col rounded-lg bg-sidebar shadow-sm ring-1 ring-sidebar-border">
          <div data-slot="sidebar-header" className="flex flex-col gap-2 p-2">
            <ul data-slot="sidebar-menu" className="flex w-full min-w-0 flex-col gap-0">
              <li data-slot="sidebar-menu-item" className="group/menu-item relative">
                <a
                  href="#"
                  data-slot="sidebar-menu-button"
                  data-size="default"
                  data-active="false"
                  className="peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm text-sidebar-foreground ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.png"
                    className="me-1 size-8 rounded-[5px]"
                    alt="Hamdard School logo"
                  />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-foreground font-semibold leading-tight">Hamdard School</span>
                    <span className="text-xs leading-tight text-muted-foreground">
                      School Management System
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="relative flex w-full min-w-0 flex-col p-2 py-0">
              <div className="w-full text-sm relative">
                <label className="sr-only" htmlFor="sidebar-search-mobile">
                  Search
                </label>
                <input
                  data-slot="sidebar-input"
                  className="h-8 w-full cursor-pointer rounded-lg border border-input bg-background pl-8 pr-8 text-sm shadow-none outline-none placeholder:text-muted-foreground"
                  id="sidebar-search-mobile"
                  placeholder="Search..."
                  readOnly
                />
                <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50" />
                <kbd className="pointer-events-none absolute top-1/2 right-2 inline-flex -translate-y-1/2 items-center gap-1 rounded border border-border bg-muted px-1.5 py-0.5 font-sans text-[10px] font-medium text-muted-foreground">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>
          <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto">
            <div className="relative h-full">
              <div className="size-full">
                <div className="relative flex w-full min-w-0 flex-col p-2">
                  <div className="w-full text-sm flex flex-col gap-2">
                    {navSections.map((section) => (
                      <div key={section.title} className="flex flex-col gap-1">
                        <div className="flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70">
                          {section.title}
                        </div>
                        <ul data-slot="sidebar-menu" className="flex w-full min-w-0 flex-col gap-0">
                          {section.items.map((item) => (
                            <SidebarNavItem key={item.title} item={item} pathname={pathname} />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}