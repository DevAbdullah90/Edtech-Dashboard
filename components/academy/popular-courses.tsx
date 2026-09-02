import { ChevronLeft, ChevronRight, ChevronRight as ChevronRightIcon, Ellipsis, ListFilter, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { courses } from "./course-data";

export function PopularCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Courses</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex min-h-14 items-center gap-2 border-b px-4 py-3">
          <div className="relative flex h-8 w-full max-w-56 min-w-0 items-center rounded-lg border border-input">
            <Search className="pointer-events-none absolute left-2 size-4 text-muted-foreground" />
            <input
              className="h-8 w-full min-w-0 rounded-none border-0 bg-transparent pl-8 pr-2.5 text-sm outline-none placeholder:text-muted-foreground"
              placeholder="Search courses"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-0">
            <div role="toolbar" aria-label="Filters" aria-orientation="horizontal" className="flex flex-wrap items-center gap-1.5">
              <Button variant="outline" size="sm">
                <ListFilter className="size-3.5" />
                Filters
              </Button>
            </div>
          </div>
        </div>
        <Table className="min-w-[700px] table-fixed [&_td:first-child]:ps-4 [&_td:last-child]:pe-4 [&_th:first-child]:ps-4 [&_th:last-child]:pe-4">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[67px]">
                <Checkbox aria-label="Select all" />
              </TableHead>
              <TableHead>Course name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="text-end" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.name}>
                <TableCell>
                  <Checkbox aria-label="Select row" />
                </TableCell>
                <TableCell>
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md border p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="size-full object-contain" src={course.icon} alt={course.alt} />
                    </div>
                    <div className="truncate font-medium">{course.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{course.category}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 tabular-nums">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    {course.score}
                  </div>
                </TableCell>
                <TableCell>
                  {course.progress != null ? (
                    <div className="flex items-center gap-2">
                      <Progress value={course.progress} className="h-2 w-full max-w-40" />
                      <span className="text-muted-foreground text-xs tabular-nums">
                        {course.progress}%
                      </span>
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-xs">Not started</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="text-end whitespace-nowrap">
                    {course.action === "continue" ? (
                      <Button variant="outline" size="sm">
                        Continue
                        <ChevronRightIcon className="size-3.5" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                        <Ellipsis className="size-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end gap-2 border-t px-4 py-3">
          <div className="text-muted-foreground flex-1 text-sm">6 courses</div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon-sm" aria-label="Previous page">
              <ChevronLeft className="size-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="icon-sm" aria-label="Next page">
              <ChevronRight className="size-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}