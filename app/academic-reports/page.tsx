import { BookOpen, TrendingUp, Award, Target, Star, AlertTriangle, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, LeaderboardCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type SubjectReport = {
  subject: string;
  teacher: string;
  students: string;
  avgScore: string;
  passRate: string;
  status: string;
};

const reports: SubjectReport[] = [
  { subject: "Mathematics", teacher: "Prof. Abdul Rahman", students: "248", avgScore: "82%", passRate: "94%", status: "Excellent" },
  { subject: "English", teacher: "Ms. Sana Javed", students: "248", avgScore: "79%", passRate: "92%", status: "Good" },
  { subject: "Science", teacher: "Mr. Imran Qureshi", students: "248", avgScore: "76%", passRate: "90%", status: "Good" },
  { subject: "Urdu", teacher: "Mrs. Ayesha Malik", students: "248", avgScore: "74%", passRate: "88%", status: "Average" },
  { subject: "Computer Science", teacher: "Mr. Hassan Sheikh", students: "248", avgScore: "85%", passRate: "96%", status: "Excellent" },
  { subject: "Islamiat", teacher: "Ms. Rabia Khan", students: "248", avgScore: "80%", passRate: "93%", status: "Good" },
];

const columns: Column<SubjectReport>[] = [
  { key: "subject", header: "Subject", render: (r) => <span className="font-medium">{r.subject}</span> },
  { key: "teacher", header: "Teacher", render: (r) => r.teacher },
  { key: "students", header: "Students", render: (r) => r.students },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "passRate", header: "Pass Rate", render: (r) => <Badge variant="outline">{r.passRate}</Badge> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AcademicReportsPage() {
  return (
    <StaticPageLayout
      title="Academic Reports"
      description="Subject-wise academic performance reports."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpen} label="Subjects" value="9" />
        <StatCard icon={TrendingUp} label="Overall Avg" value="79.3%" color="bg-green-500/10" />
        <StatCard icon={Award} label="Pass Rate" value="92.2%" color="bg-amber-500/10" />
        <StatCard icon={Target} label="Top Subject" value="Computer" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Subject Performance"
            description="Academic performance across all subjects"
            columns={columns}
            data={reports}
          />
        }
        right={
          <>
            <LeaderboardCard
              title="Top Subjects"
              description="Subjects with highest average scores"
              items={[
                { rank: 1, name: "Computer Science", value: "85%", img: "https://i.pravatar.cc/150?img=33", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
                { rank: 2, name: "Mathematics", value: "82%", img: "https://i.pravatar.cc/150?img=8", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
                { rank: 3, name: "Islamiat", value: "80%", img: "https://i.pravatar.cc/150?img=44", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
                { rank: 4, name: "English", value: "79%", img: "https://i.pravatar.cc/150?img=16" },
                { rank: 5, name: "Science", value: "76%", img: "https://i.pravatar.cc/150?img=12" },
              ]}
            />
            <ProgressListCard
              title="Pass Rate by Subject"
              description="Percentage of students passing per subject"
              items={[
                { label: "Computer Science", value: 96, display: "96%", color: "bg-green-500" },
                { label: "Mathematics", value: 94, display: "94%", color: "bg-blue-500" },
                { label: "Islamiat", value: 93, display: "93%", color: "bg-purple-500" },
                { label: "English", value: 92, display: "92%", color: "bg-amber-500" },
                { label: "Urdu", value: 88, display: "88%", color: "bg-red-500" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}