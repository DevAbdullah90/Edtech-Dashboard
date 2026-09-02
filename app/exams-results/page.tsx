import { FileCheck, ClipboardList, Award, CalendarClock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type ExamResult = {
  student: string;
  rollNo: string;
  exam: string;
  subject: string;
  score: string;
  grade: string;
  status: string;
};

const results: ExamResult[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", exam: "Mid-Term", subject: "Mathematics", score: "92/100", grade: "A+", status: "Passed" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", exam: "Mid-Term", subject: "English", score: "88/100", grade: "A", status: "Passed" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", exam: "Mid-Term", subject: "Science", score: "76/100", grade: "B+", status: "Passed" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", exam: "Mid-Term", subject: "Urdu", score: "65/100", grade: "C", status: "Passed" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", exam: "Mid-Term", subject: "Mathematics", score: "84/100", grade: "A", status: "Passed" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", exam: "Mid-Term", subject: "English", score: "90/100", grade: "A+", status: "Passed" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", exam: "Mid-Term", subject: "Science", score: "58/100", grade: "D", status: "Failed" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", exam: "Mid-Term", subject: "Urdu", score: "79/100", grade: "B+", status: "Passed" },
];

const columns: Column<ExamResult>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "exam", header: "Exam", render: (r) => <Badge variant="outline">{r.exam}</Badge> },
  { key: "subject", header: "Subject", render: (r) => r.subject },
  { key: "score", header: "Score", render: (r) => <span className="font-medium">{r.score}</span> },
  { key: "grade", header: "Grade", render: (r) => <Badge variant="outline">{r.grade}</Badge> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function ExamsResultsPage() {
  return (
    <StaticPageLayout
      title="Exams & Results"
      description="Manage exam schedules, results, and grade distributions."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileCheck} label="Exams Conducted" value="24" />
        <StatCard icon={ClipboardList} label="Results Published" value="22" color="bg-green-500/10" />
        <StatCard icon={Award} label="Pass Rate" value="94.5%" color="bg-amber-500/10" />
        <StatCard icon={CalendarClock} label="Upcoming Exams" value="3" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Exam Results"
        description="Mid-term examination results for all students"
        columns={columns}
        data={results}
      />
    </StaticPageLayout>
  );
}