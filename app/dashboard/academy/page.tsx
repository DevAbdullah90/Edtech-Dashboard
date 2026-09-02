import { AcademyHeader } from "@/components/academy/academy-header";
import { AcademySidebar } from "@/components/academy/academy-sidebar";
import { SidebarProvider } from "@/components/academy/sidebar-context";
import { CourseProgressChart } from "@/components/academy/course-progress-chart";
import { Leaderboard } from "@/components/academy/leaderboard";
import { LearningPath } from "@/components/academy/learning-path";
import { MostActivity } from "@/components/academy/most-activity";
import { PopularCourses } from "@/components/academy/popular-courses";
import { ProgressStatistics } from "@/components/academy/progress-statistics";
import { SuccessRate } from "@/components/academy/success-rate";
import { WelcomeSection } from "@/components/academy/welcome-section";

export default function AcademyDashboardPage() {
  return (
    <SidebarProvider>
      <div className="group/sidebar-wrapper flex min-h-svh w-full bg-sidebar">
        <AcademySidebar />
        <main className="relative flex w-full flex-1 flex-col bg-background md:m-2 md:ml-0 md:rounded-xl md:shadow-sm">
          <AcademyHeader />
          <div className="flex flex-1 flex-col">
            <div className="p-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="mb-4">
                  <h1 className="font-display text-2xl font-bold tracking-tight">
                    Academy/School Dashboard
                  </h1>
                </div>
                <div className="grid gap-4 lg:grid-cols-12 lg:gap-6">
                  <WelcomeSection />
                  <LearningPath />
                  <Leaderboard />
                </div>
                <div className="grid gap-4 xl:grid-cols-3 lg:gap-6">
                  <SuccessRate />
                  <ProgressStatistics />
                  <MostActivity />
                </div>
                <CourseProgressChart />
                <PopularCourses />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}