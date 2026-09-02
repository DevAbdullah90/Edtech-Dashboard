"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";

import { QuizConfiguration } from "./quiz-configuration";
import { QuizPreview } from "./quiz-preview";
import type { GeneratedQuiz, QuizConfig } from "./types";

const defaultConfig: QuizConfig = {
  className: "",
  subject: "",
  topic: "",
  questionCount: 10,
  difficulty: "medium",
  questionType: "multiple_choice",
  instructions: "",
};

export function QuizGenerator() {
  const [config, setConfig] = React.useState<QuizConfig>(defaultConfig);
  const [quiz, setQuiz] = React.useState<GeneratedQuiz | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const generateQuiz = React.useCallback(async () => {
    // Validate required fields
    if (!config.className) {
      setError("Please select a class.");
      return;
    }
    if (!config.subject) {
      setError("Please select a subject.");
      return;
    }
    if (!config.topic.trim()) {
      setError("Please enter a topic.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/quizzes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to generate quiz. Please try again.");
        return;
      }

      if (data.quiz) {
        setQuiz(data.quiz);
      } else {
        setError("Unable to generate quiz. Please try again.");
      }
    } catch {
      setError("Something went wrong while generating your quiz. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  return (
    <div className="space-y-4 lg:space-y-6">
      {error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        <QuizConfiguration
          config={config}
          onChange={setConfig}
          onGenerate={generateQuiz}
          isLoading={isLoading}
        />
        <QuizPreview
          quiz={quiz}
          isLoading={isLoading}
          onRegenerate={generateQuiz}
        />
      </div>
    </div>
  );
}