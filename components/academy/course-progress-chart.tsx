"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", progress: 35 },
  { month: "Feb", progress: 42 },
  { month: "Mar", progress: 44 },
  { month: "Apr", progress: 40 },
  { month: "May", progress: 45 },
  { month: "Jun", progress: 52 },
  { month: "Jul", progress: 55 },
  { month: "Aug", progress: 58 },
  { month: "Sep", progress: 62 },
  { month: "Oct", progress: 66 },
  { month: "Nov", progress: 70 },
  { month: "Dec", progress: 74 },
];

export function CourseProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Progress by Month</CardTitle>
        <CardDescription className="flex items-center gap-2">
          Average course completion across all students
          <Badge variant="success">+2.5%</Badge>
        </CardDescription>
        <CardAction>
          <div className="grid gap-2">
            <button
              type="button"
              className="group/button inline-flex h-8 shrink-0 items-center justify-start gap-1.5 rounded-lg border border-border bg-background px-2.5 text-left text-sm font-normal whitespace-nowrap transition-all outline-none select-none hover:bg-muted hover:text-foreground"
            >
              05 Aug 2026 - 01 Sep 2026
            </button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 12, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" strokeOpacity={0.5} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                width={40}
                domain={[0, 80]}
                ticks={[0, 20, 40, 60, 80]}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <Area
                type="monotone"
                dataKey="progress"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                fill="url(#fillProgress)"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}