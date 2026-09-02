import { TrendingUp, Award, Target, BarChart3, Star, AlertTriangle, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { LeaderboardCard, ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type PerformanceRecord = {
  student: string;
  rollNo: string;
  class: string;
  avgScore: string;
  grade: string;
  rank: string;
  status: string;
};

const records: PerformanceRecord[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", avgScore: "92%", grade: "A+", rank: "1", status: "Excellent" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", avgScore: "88%", grade: "A", rank: "3", status: "Excellent" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", avgScore: "76%", grade: "B+", rank: "12", status: "Good" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", avgScore: "65%", grade: "C", rank: "28", status: "Average" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", avgScore: "84%", grade: "A", rank: "5", status: "Good" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", avgScore: "90%", grade: "A+", rank: "2", status: "Excellent" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7-B", avgScore: "58%", grade: "D", rank: "35", status: "Needs Improvement" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8-A", avgScore: "79%", grade: "B+", rank: "9", status: "Good" },
];

const columns: Column<PerformanceRecord>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "grade", header: "Grade", render: (r) => <Badge variant="outline">{r.grade}</Badge> },
  { key: "rank", header: "Rank", render: (r) => <span className="text-muted-foreground">#{r.rank}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function PerformancePage() {
  return (
    <StaticPageLayout
      title="Performance"
      description="Monitor student academic performance and progress."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={TrendingUp} label="Class Average" value="78.5%" />
        <StatCard icon={Award} label="A+ Students" value="124" color="bg-green-500/10" />
        <StatCard icon={Target} label="Above Average" value="68%" color="bg-amber-500/10" />
        <StatCard icon={BarChart3} label="Needs Support" value="86" color="bg-red-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Performance Overview"
            description="Student performance across all subjects for Term 1"
            columns={columns}
            data={records}
          />
        }
        right={
          <>
            <LeaderboardCard
              title="Top Performers"
              description="Highest average scores this term"
              items={[
                { rank: 1, name: "Ahmed Khan", value: "92%", img: "https://i.pravatar.cc/150?img=8", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
                { rank: 2, name: "Zainab Fatima", value: "90%", img: "https://i.pravatar.cc/150?img=16", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
                { rank: 3, name: "Fatima Bibi", value: "88%", img: "https://i.pravatar.cc/150?img=26", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
                { rank: 4, name: "Hassan Abbas", value: "84%", img: "https://i.pravatar.cc/150?img=31" },
                { rank: 5, name: "Maryam Noor", value: "79%", img: "https://i.pravatar.cc/150?img=47" },
              ]}
            />
            <ProgressListCard
              title="Grade Distribution"
              description="Percentage of students per grade"
              items={[
                { label: "A+ (90-100%)", value: 10, display: "10%", color: "bg-green-500" },
                { label: "A (80-89%)", value: 25, display: "25%", color: "bg-blue-500" },
                { label: "B (70-79%)", value: 35, display: "35%", color: "bg-amber-500" },
                { label: "C (60-69%)", value: 20, display: "20%", color: "bg-orange-500" },
                { label: "D (Below 60%)", value: 10, display: "10%", color: "bg-red-500" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}