"use client";

import * as React from "react";
import { ChevronDown, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

import {
  classOptions,
  difficultyOptions,
  questionCountOptions,
  questionTypeOptions,
  subjectOptions,
} from "./data";
import type { QuizConfig, QuizDifficulty, QuizQuestionType } from "./types";

type QuizConfigurationProps = {
  config: QuizConfig;
  onChange: (config: QuizConfig) => void;
  onGenerate: () => void;
  isLoading: boolean;
};

const fieldLabel = "text-sm font-medium";
const fieldHint = "text-xs text-muted-foreground";

export function QuizConfiguration({
  config,
  onChange,
  onGenerate,
  isLoading,
}: QuizConfigurationProps) {
  const update = (patch: Partial<QuizConfig>) => {
    onChange({ ...config, ...patch });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate New Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Class */}
        <div className="space-y-1.5">
          <label htmlFor="quiz-class" className={fieldLabel}>
            Class
          </label>
          <div className="relative">
            <Select
              id="quiz-class"
              value={config.className}
              onChange={(e) => update({ className: e.target.value })}
              disabled={isLoading}
              className="pr-8"
            >
              <option value="" disabled>
                Select Class
              </option>
              {classOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label htmlFor="quiz-subject" className={fieldLabel}>
            Subject
          </label>
          <div className="relative">
            <Select
              id="quiz-subject"
              value={config.subject}
              onChange={(e) => update({ subject: e.target.value })}
              disabled={isLoading}
              className="pr-8"
            >
              <option value="" disabled>
                Select Subject
              </option>
              {subjectOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Topic */}
        <div className="space-y-1.5">
          <label htmlFor="quiz-topic" className={fieldLabel}>
            Topic
          </label>
          <Input
            id="quiz-topic"
            value={config.topic}
            onChange={(e) => update({ topic: e.target.value })}
            placeholder="Enter topic"
            disabled={isLoading}
          />
          <p className={fieldHint}>e.g. Fractions, Photosynthesis, Grammar, Algebra</p>
        </div>

        {/* Number of Questions */}
        <div className="space-y-1.5">
          <label htmlFor="quiz-count" className={fieldLabel}>
            Number of Questions
          </label>
          <div className="relative">
            <Select
              id="quiz-count"
              value={String(config.questionCount)}
              onChange={(e) => update({ questionCount: Number(e.target.value) })}
              disabled={isLoading}
              className="pr-8"
            >
              {questionCountOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-1.5">
          <span className={fieldLabel}>Difficulty</span>
          <div className="flex flex-wrap gap-1.5">
            {difficultyOptions.map((d) => (
              <button
                key={d.value}
                type="button"
                onClick={() => update({ difficulty: d.value as QuizDifficulty })}
                disabled={isLoading}
                className={cn(
                  "inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-lg border px-2.5 text-[0.8rem] font-medium whitespace-nowrap transition-all outline-none select-none",
                  config.difficulty === d.value
                    ? "border-transparent bg-primary text-primary-foreground shadow-2xs"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question Type */}
        <div className="space-y-1.5">
          <span className={fieldLabel}>Question Type</span>
          <div className="flex flex-wrap gap-1.5">
            {questionTypeOptions.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => update({ questionType: t.value as QuizQuestionType })}
                disabled={isLoading}
                className={cn(
                  "inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-lg border px-2.5 text-[0.8rem] font-medium whitespace-nowrap transition-all outline-none select-none",
                  config.questionType === t.value
                    ? "border-transparent bg-primary text-primary-foreground shadow-2xs"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Instructions */}
        <div className="space-y-1.5">
          <label htmlFor="quiz-instructions" className={fieldLabel}>
            Additional Instructions
          </label>
          <textarea
            id="quiz-instructions"
            value={config.instructions}
            onChange={(e) => update({ instructions: e.target.value })}
            placeholder="Add any additional instructions for the AI..."
            disabled={isLoading}
            rows={3}
            className="flex w-full min-w-0 resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
          />
        </div>

        {/* Generate Button */}
        <Button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Generating Quiz...
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              Generate Quiz
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}