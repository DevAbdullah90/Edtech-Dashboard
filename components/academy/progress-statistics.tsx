import { CalendarCheck2, CalendarClock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProgressStatistics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Statistics</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="space-y-1 py-2 text-center">
          <div className="text-muted-foreground text-sm">Total Activity</div>
          <div className="font-display text-4xl">72.5%</div>
          <div className="text-muted-foreground text-xs">
            Average completion across all courses
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                <CalendarClock className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium">In Progress</div>
                <div className="text-muted-foreground text-xs">30 courses</div>
              </div>
              <span className="text-muted-foreground text-sm tabular-nums">65%</span>
            </div>
            <Progress value={65} className="mt-3 h-1.5">
              <div className="size-full flex-1 bg-orange-500" style={{ transform: "translateX(-35%)" }} />
            </Progress>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                <CalendarCheck2 className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium">Completed</div>
                <div className="text-muted-foreground text-xs">18 courses</div>
              </div>
              <span className="text-muted-foreground text-sm tabular-nums">50%</span>
            </div>
            <Progress value={50} className="mt-3 h-1.5">
              <div className="size-full flex-1 bg-green-500" style={{ transform: "translateX(-50%)" }} />
            </Progress>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}