import { CheckCircle2, Lightbulb } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { QuizQuestion } from "./types";

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const typeLabel: Record<string, string> = {
  multiple_choice: "Multiple Choice",
  true_false: "True / False",
  short_answer: "Short Answer",
  mixed: "Mixed",
};

export function QuizQuestionCard({
  question,
  index,
}: {
  question: QuizQuestion;
  index: number;
}) {
  const isShortAnswer = question.type === "short_answer";

  return (
    <Card>
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <span className="font-medium">Question {index + 1}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="outline">{typeLabel[question.type] ?? "Question"}</Badge>
            <Badge variant="outline">{difficultyLabel[question.difficulty] ?? "Medium"}</Badge>
          </div>
        </div>

        <p className="text-sm font-medium leading-relaxed">{question.question}</p>

        {question.options && question.options.length > 0 && (
          <div className="grid gap-1.5 sm:grid-cols-2">
            {question.options.map((option, i) => {
              const isCorrect = option === question.correctAnswer;
              return (
                <div
                  key={i}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
                    isCorrect
                      ? "border-green-400 bg-green-50 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                      : "border-border bg-background"
                  )}
                >
                  <span className="text-muted-foreground text-xs font-medium">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="min-w-0 flex-1">{option}</span>
                  {isCorrect && <CheckCircle2 className="size-4 shrink-0 text-green-600 dark:text-green-400" />}
                </div>
              );
            })}
          </div>
        )}

        {isShortAnswer && (
          <div className="rounded-lg border border-green-400 bg-green-50 px-3 py-2 text-sm text-green-800 dark:bg-green-900/40 dark:text-green-300">
            <span className="font-medium">Expected Answer: </span>
            {question.correctAnswer}
          </div>
        )}

        {question.explanation && (
          <div className="flex items-start gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" />
            <span>
              <span className="font-medium text-foreground">Explanation: </span>
              {question.explanation}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}