export type QuizDifficulty = "easy" | "medium" | "hard" | "mixed";

export type QuizQuestionType = "multiple_choice" | "true_false" | "short_answer" | "mixed";

export type QuizQuestion = {
  questionNumber: number;
  question: string;
  type: QuizQuestionType;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
};

export type GeneratedQuiz = {
  title: string;
  class: string;
  subject: string;
  topic: string;
  difficulty: QuizDifficulty;
  questions: QuizQuestion[];
};

export type QuizConfig = {
  className: string;
  subject: string;
  topic: string;
  questionCount: number;
  difficulty: QuizDifficulty;
  questionType: QuizQuestionType;
  instructions: string;
};

export type RecentQuiz = {
  id: string;
  title: string;
  className: string;
  subject: string;
  questions: number;
  difficulty: QuizDifficulty;
  created: string;
};