"use client";

import * as React from "react";
import {
  Check,
  Copy,
  Download,
  FileQuestion,
  Pencil,
  RefreshCw,
  Save,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { QuizQuestionCard } from "./quiz-question";
import type { GeneratedQuiz } from "./types";

type QuizPreviewProps = {
  quiz: GeneratedQuiz | null;
  isLoading: boolean;
  onRegenerate: () => void;
};

const difficultyLabel: Record<string, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  mixed: "Mixed",
};

export function QuizPreview({ quiz, isLoading, onRegenerate }: QuizPreviewProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!quiz) return;
    const text = quiz.questions
      .map(
        (q, i) =>
          `${i + 1}. ${q.question}\n` +
          (q.options ? q.options.map((o, j) => `   ${String.fromCharCode(65 + j)}. ${o}`).join("\n") + "\n" : "") +
          `   ✓ Correct Answer: ${q.correctAnswer}\n` +
          (q.explanation ? `   Explanation: ${q.explanation}` : "")
      )
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <Card className="h-[692px]">
      <CardHeader>
        <CardTitle>Quiz Preview</CardTitle>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-col overflow-hidden">
        {!quiz && !isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <FileQuestion className="size-6 text-muted-foreground" />
            </div>
            <div className="font-medium">No quiz generated yet</div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Configure your quiz and click &ldquo;Generate Quiz&rdquo; to create questions with AI.
            </p>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            </div>
            <div className="font-medium">Generating your quiz...</div>
            <p className="max-w-xs text-sm text-muted-foreground">
              The AI is creating curriculum-based questions. This may take a few seconds.
            </p>
          </div>
        )}

        {quiz && !isLoading && (
          <div className="flex min-h-0 flex-1 flex-col">
            {/* Quiz meta */}
            <div className="space-y-3">
              <div>
                <div className="font-heading text-base font-semibold">{quiz.title}</div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">{quiz.class}</Badge>
                <Badge variant="outline">{quiz.subject}</Badge>
                <Badge variant="outline">{quiz.topic}</Badge>
                <Badge variant="outline">{quiz.questions.length} Questions</Badge>
                <Badge variant="outline">
                  {difficultyLabel[quiz.difficulty] ?? "Medium"} Difficulty
                </Badge>
              </div>
            </div>

            {/* Questions — scrollable */}
            <div className="no-scrollbar mt-4 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
              {quiz.questions.map((q, i) => (
                <QuizQuestionCard key={q.questionNumber} question={q} index={i} />
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 border-t pt-4">
              <Button variant="outline" onClick={onRegenerate}>
                <RefreshCw className="size-4" />
                Regenerate Quiz
              </Button>
              <Button variant="outline">
                <Pencil className="size-4" />
                Edit Quiz
              </Button>
              <Button variant="outline">
                <Save className="size-4" />
                Save Quiz
              </Button>
              <Button variant="outline">
                <Download className="size-4" />
                Export Quiz
              </Button>
              <Button variant="outline" onClick={handleCopy}>
                {copied ? <Check className="size-4 text-green-600" /> : <Copy className="size-4" />}
                {copied ? "Copied!" : "Copy Quiz"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}