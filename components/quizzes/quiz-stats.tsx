import { BookOpen, Calendar, FileQuestion, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: FileQuestion, label: "Total Quizzes", value: "128" },
  { icon: Sparkles, label: "AI Generated", value: "96" },
  { icon: Calendar, label: "This Month", value: "24" },
  { icon: BookOpen, label: "Most Used Subject", value: "Mathematics" },
];

export function QuizStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <stat.icon className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="text-muted-foreground text-xs">{stat.label}</div>
              <div className="truncate font-semibold tabular-nums">{stat.value}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}