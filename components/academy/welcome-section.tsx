import { Award, BookOpen, Clock, Flame } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: BookOpen, label: "courses in progress", value: "12" },
  { icon: Clock, label: "hours this month", value: "48" },
  { icon: Award, label: "certificates", value: "3" },
  { icon: Flame, label: "day streak", value: "5" },
];

export function WelcomeSection() {
  return (
    <div className="lg:col-span-12 xl:col-span-6">
      <Card>
        <CardContent className="p-4">
          <div className="grid w-full items-center pb-2 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <div className="font-display text-3xl">
                Welcome Sana <span className="text-4xl">👋</span>
              </div>
              <div className="text-2xl">What do you want to learn today?</div>
              <div className="text-muted-foreground">
                Discover courses, track progress, and achieve your learning goals seamlessly.
              </div>
              <div className="text-muted-foreground flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {stats.map((stat) => (
                  <span key={stat.label} className="flex items-center gap-1.5">
                    <stat.icon className="size-4" />
                    {stat.value} {stat.label}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="group/button inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg border bg-clip-padding px-2.5 text-sm font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground shadow-2xs hover:bg-primary/90"
                >
                  Explore Courses
                </button>
              </div>
            </div>
            <div className="hidden lg:col-span-1 lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="100px"
                height="50px"
                src="/academy-dashboard-light.svg"
                className="block w-full dark:hidden"
                alt="Student standing on a stack of books"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="100px"
                height="50px"
                src="/academy-dashboard-dark.svg"
                className="hidden w-full dark:block"
                alt="Student standing on a stack of books"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}