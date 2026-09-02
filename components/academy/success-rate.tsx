import { CircleCheckBig, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function SuccessRate() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student Overall Success Rate</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl">88%</span>
            <Badge variant="success">3%</Badge>
          </div>
          <div className="mt-4 space-y-1.5">
            <Progress value={88} className="h-1.5" />
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>Previous: 85%</span>
              <span>+3% this term</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Users className="size-4" />
            </div>
            <span className="flex-1 text-sm font-medium">Total Students</span>
            <span className="font-semibold tabular-nums">1,500</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg border p-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
              <CircleCheckBig className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium">Passing Students</div>
              <div className="text-muted-foreground text-xs">88.0% of total</div>
            </div>
            <span className="font-semibold tabular-nums">1,320</span>
          </div>
        </div>
        <Button variant="outline" className="mt-3 w-full">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}