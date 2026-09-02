import type { QuizDifficulty, QuizQuestionType, RecentQuiz } from "./types";

export const classOptions = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];

export const subjectOptions = [
  "Mathematics",
  "English",
  "Science",
  "Computer Science",
  "Urdu",
  "Islamiyat",
  "Social Studies",
  "Physics",
  "Chemistry",
  "Biology",
];

export const questionCountOptions = [5, 10, 15, 20, 25, 30];

export const difficultyOptions: { value: QuizDifficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
  { value: "mixed", label: "Mixed" },
];

export const questionTypeOptions: { value: QuizQuestionType; label: string }[] = [
  { value: "multiple_choice", label: "Multiple Choice" },
  { value: "true_false", label: "True / False" },
  { value: "short_answer", label: "Short Answer" },
  { value: "mixed", label: "Mixed" },
];

export const quizStats = [
  { label: "Total Quizzes", value: "128", icon: "FileQuestion" },
  { label: "AI Generated", value: "96", icon: "Sparkles" },
  { label: "This Month", value: "24", icon: "Calendar" },
  { label: "Most Used Subject", value: "Mathematics", icon: "BookOpen" },
] as const;

export const recentQuizzes: RecentQuiz[] = [
  {
    id: "1",
    title: "Fractions Practice",
    className: "Class 5",
    subject: "Mathematics",
    questions: 10,
    difficulty: "medium",
    created: "Today",
  },
  {
    id: "2",
    title: "Photosynthesis Basics",
    className: "Class 7",
    subject: "Science",
    questions: 15,
    difficulty: "easy",
    created: "Yesterday",
  },
  {
    id: "3",
    title: "English Grammar",
    className: "Class 6",
    subject: "English",
    questions: 20,
    difficulty: "mixed",
    created: "2 days ago",
  },
  {
    id: "4",
    title: "Algebra Fundamentals",
    className: "Class 8",
    subject: "Mathematics",
    questions: 10,
    difficulty: "hard",
    created: "3 days ago",
  },
  {
    id: "5",
    title: "Computer Basics",
    className: "Class 4",
    subject: "Computer Science",
    questions: 15,
    difficulty: "easy",
    created: "4 days ago",
  },
];