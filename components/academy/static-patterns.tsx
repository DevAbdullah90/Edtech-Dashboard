import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// ===== Progress List Card =====
export function ProgressListCard({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { label: string; value: number; display: string; color?: string; sub?: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.label} className="rounded-lg border p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="font-medium">{item.label}</div>
                {item.sub && <div className="text-muted-foreground text-xs">{item.sub}</div>}
              </div>
              <span className="font-semibold tabular-nums">{item.display}</span>
            </div>
            <Progress value={item.value} className="mt-3 h-1.5">
              <div
                className={cn("size-full flex-1", item.color ?? "bg-primary")}
                style={{ transform: `translateX(-${100 - item.value}%)` }}
              />
            </Progress>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ===== Leaderboard Card =====
export function LeaderboardCard({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { rank: number; name: string; value: string; img?: string; rankClass?: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((entry) => (
            <li key={entry.rank} className="flex items-center gap-3">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums",
                  entry.rankClass ?? "bg-muted text-muted-foreground"
                )}
              >
                {entry.rank}
              </span>
              {entry.img ? (
                <Avatar>
                  <AvatarImage src={entry.img} alt={entry.name} />
                </Avatar>
              ) : (
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  {entry.name.charAt(0)}
                </span>
              )}
              <span className="flex-1 truncate font-medium">{entry.name}</span>
              <Badge variant="outline" className="tabular-nums">
                {entry.value}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// ===== Big Number Card =====
export function BigNumberCard({
  title,
  description,
  value,
  sub,
  icon: Icon,
  color = "bg-blue-500/10",
}: {
  title: string;
  description?: string;
  value: string;
  sub?: string;
  icon: LucideIcon;
  color?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg", color)}>
            <Icon className="size-5" />
          </div>
          <span className="font-display text-4xl">{value}</span>
        </div>
        {sub && <div className="text-muted-foreground text-sm">{sub}</div>}
      </CardContent>
    </Card>
  );
}

// ===== Info Grid Card =====
export function InfoGridCard({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { label: string; value: string; icon?: LucideIcon; color?: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border p-3">
              {item.icon && (
                <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", item.color ?? "bg-blue-500/10")}>
                  <item.icon className="size-4" />
                </div>
              )}
              <div className="min-w-0">
                <div className="text-muted-foreground text-xs">{item.label}</div>
                <div className="font-semibold">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ===== Two Column Layout =====
export function TwoColumnLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
      <div className="space-y-4 lg:col-span-2">{left}</div>
      <div className="space-y-4">{right}</div>
    </div>
  );
}

// ===== Timeline Card =====
export function TimelineCard({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { title: string; date: string; description: string; status?: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {items.map((item, i) => (
            <li key={i} className="relative">
              <span className="absolute top-1 -left-[31px] flex size-4 items-center justify-center rounded-full border border-border bg-background">
                <span className="size-2 rounded-full bg-primary" />
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-medium">{item.title}</div>
                <span className="text-muted-foreground text-xs">{item.date}</span>
              </div>
              <div className="text-muted-foreground text-sm">{item.description}</div>
              {item.status && (
                <div className="mt-1">
                  <Badge variant={item.status === "Completed" ? "success" : "outline"}>{item.status}</Badge>
                </div>
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

// ===== Stat Row Card =====
export function StatRowCard({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: { label: string; value: string; icon?: LucideIcon; color?: string }[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border p-3">
              {item.icon && (
                <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", item.color ?? "bg-blue-500/10")}>
                  <item.icon className="size-4" />
                </div>
              )}
              <div className="min-w-0">
                <div className="text-2xl font-bold leading-tight tabular-nums">{item.value}</div>
                <div className="text-muted-foreground truncate text-xs">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}