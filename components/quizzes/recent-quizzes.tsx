import { Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { recentQuizzes } from "./data";

const difficultyVariant: Record<string, "default" | "outline" | "success"> = {
  easy: "success",
  medium: "outline",
  hard: "default",
  mixed: "outline",
};

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  mixed: "Mixed",
};

export function RecentQuizzes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Quizzes</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table className="min-w-[700px] [&_td:first-child]:ps-4 [&_td:last-child]:pe-4 [&_th:first-child]:ps-4 [&_th:last-child]:pe-4">
          <TableHeader>
            <TableRow>
              <TableHead>Quiz</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Questions</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-end">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentQuizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell>
                  <span className="font-medium">{quiz.title}</span>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{quiz.className}</span>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{quiz.subject}</span>
                </TableCell>
                <TableCell>
                  <span className="tabular-nums">{quiz.questions}</span>
                </TableCell>
                <TableCell>
                  <Badge variant={difficultyVariant[quiz.difficulty] ?? "outline"}>
                    {difficultyLabel[quiz.difficulty] ?? quiz.difficulty}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-muted-foreground">{quiz.created}</span>
                </TableCell>
                <TableCell>
                  <div className="text-end">
                    <Button variant="outline" size="sm">
                      <Eye className="size-3.5" />
                      View
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}