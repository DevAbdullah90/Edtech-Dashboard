import { AcademyHeader } from "@/components/academy/academy-header";
import { AcademySidebar } from "@/components/academy/academy-sidebar";
import { QuizGenerator } from "@/components/quizzes/quiz-generator";
import { QuizStats } from "@/components/quizzes/quiz-stats";
import { RecentQuizzes } from "@/components/quizzes/recent-quizzes";

export default function QuizzesPage() {
  return (
    <div className="group/sidebar-wrapper flex min-h-svh w-full bg-sidebar">
      <AcademySidebar />
      <main className="relative flex w-full flex-1 flex-col bg-background md:m-2 md:ml-0 md:rounded-xl md:shadow-sm">
        <AcademyHeader />
        <div className="flex flex-1 flex-col">
          <div className="p-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="mb-4">
                <h1 className="font-display text-2xl font-bold tracking-tight">
                  AI Quiz Generator
                </h1>
                <p className="text-muted-foreground mt-1 text-sm">
                  Create curriculum-based quizzes instantly with AI.
                </p>
              </div>
              <QuizStats />
              <QuizGenerator />
              <RecentQuizzes />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}