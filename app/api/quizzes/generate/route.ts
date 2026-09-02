import { NextResponse } from "next/server";

import { buildUserPrompt, SYSTEM_PROMPT } from "@/components/quizzes/prompt";
import type { GeneratedQuiz, QuizConfig, QuizQuestion } from "@/components/quizzes/types";

const VALID_DIFFICULTIES = ["easy", "medium", "hard", "mixed"];
const VALID_QUESTION_TYPES = ["multiple_choice", "true_false", "short_answer", "mixed"];
const VALID_QUESTION_COUNTS = [5, 10, 15, 20, 25, 30];

function validateConfig(body: unknown): QuizConfig | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;

  const className = typeof b.className === "string" ? b.className.trim() : "";
  const subject = typeof b.subject === "string" ? b.subject.trim() : "";
  const topic = typeof b.topic === "string" ? b.topic.trim() : "";
  const questionCount = Number(b.questionCount);
  const difficulty = typeof b.difficulty === "string" ? b.difficulty : "";
  const questionType = typeof b.questionType === "string" ? b.questionType : "";
  const instructions = typeof b.instructions === "string" ? b.instructions : "";

  if (!className) return null;
  if (!subject) return null;
  if (!topic) return null;
  if (!VALID_QUESTION_COUNTS.includes(questionCount)) return null;
  if (!VALID_DIFFICULTIES.includes(difficulty)) return null;
  if (!VALID_QUESTION_TYPES.includes(questionType)) return null;

  return {
    className,
    subject,
    topic,
    questionCount,
    difficulty: difficulty as QuizConfig["difficulty"],
    questionType: questionType as QuizConfig["questionType"],
    instructions,
  };
}

function extractJson(text: string): string {
  // Strip markdown code fences if present
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) return fenced[1].trim();

  // Find the first { and last } to extract the JSON object
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    return text.slice(start, end + 1);
  }

  return text.trim();
}

function validateQuiz(data: unknown, config: QuizConfig): GeneratedQuiz {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid quiz structure");
  }

  const d = data as Record<string, unknown>;

  const title = typeof d.title === "string" ? d.title : `${config.topic} Quiz`;
  const className = typeof d.class === "string" ? d.class : config.className;
  const subject = typeof d.subject === "string" ? d.subject : config.subject;
  const topic = typeof d.topic === "string" ? d.topic : config.topic;
  const difficulty = typeof d.difficulty === "string" ? d.difficulty : config.difficulty;

  if (!Array.isArray(d.questions) || d.questions.length === 0) {
    throw new Error("No questions in quiz");
  }

  const questions: QuizQuestion[] = d.questions
    .slice(0, config.questionCount)
    .map((q, i) => {
      if (!q || typeof q !== "object") {
        throw new Error("Invalid question");
      }
      const qq = q as Record<string, unknown>;
      const question = typeof qq.question === "string" ? qq.question : "";
      const correctAnswer = typeof qq.correctAnswer === "string" ? qq.correctAnswer : "";
      const explanation = typeof qq.explanation === "string" ? qq.explanation : "";
      const qType = typeof qq.type === "string" ? qq.type : "multiple_choice";
      const qDifficulty = typeof qq.difficulty === "string" ? qq.difficulty : "medium";

      if (!question || !correctAnswer) {
        throw new Error("Question missing text or answer");
      }

      const options = Array.isArray(qq.options)
        ? qq.options.filter((o): o is string => typeof o === "string")
        : undefined;

      return {
        questionNumber: i + 1,
        question,
        type: qType as QuizQuestion["type"],
        options: options && options.length > 0 ? options : undefined,
        correctAnswer,
        explanation,
        difficulty: qDifficulty as QuizQuestion["difficulty"],
      };
    });

  return {
    title,
    class: className,
    subject,
    topic,
    difficulty: difficulty as GeneratedQuiz["difficulty"],
    questions,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const config = validateConfig(body);
  if (!config) {
    return NextResponse.json(
      { error: "Missing or invalid quiz configuration. Please provide class, subject, topic, question count, difficulty, and question type." },
      { status: 400 }
    );
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI service is not configured. Please set the GROQ_API_KEY environment variable." },
      { status: 500 }
    );
  }

  const model = process.env.GROQ_MODEL || "openai/gpt-oss-120b";
  const baseUrl = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(config) },
        ],
        temperature: 0.7,
        max_tokens: 4096,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded. Please wait a moment and try again." },
          { status: 429 }
        );
      }
      if (status === 401 || status === 403) {
        return NextResponse.json(
          { error: "AI service authentication failed. Please check the API key." },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: "AI service returned an error. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "AI service returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(extractJson(content));
    } catch {
      return NextResponse.json(
        { error: "AI returned an invalid response format. Please try again." },
        { status: 502 }
      );
    }

    const quiz = validateQuiz(parsed, config);

    return NextResponse.json({ quiz });
  } catch (error) {
    console.error("Quiz generation error:", error);
    return NextResponse.json(
      { error: "Something went wrong while generating your quiz. Please try again." },
      { status: 500 }
    );
  }
}