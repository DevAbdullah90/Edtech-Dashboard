import { FileText, Download, TrendingUp, Award, Star, AlertTriangle, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Report = {
  student: string;
  rollNo: string;
  class: string;
  term: string;
  avgScore: string;
  grade: string;
  status: string;
};

const reports: Report[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", term: "Term 1", avgScore: "92%", grade: "A+", status: "Published" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", term: "Term 1", avgScore: "88%", grade: "A", status: "Published" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", term: "Term 1", avgScore: "76%", grade: "B+", status: "Published" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", term: "Term 1", avgScore: "65%", grade: "C", status: "Draft" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", term: "Term 1", avgScore: "84%", grade: "A", status: "Published" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", term: "Term 1", avgScore: "90%", grade: "A+", status: "Published" },
];

const columns: Column<Report>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "term", header: "Term", render: (r) => r.term },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "grade", header: "Grade", render: (r) => <Badge variant="outline">{r.grade}</Badge> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function StudentReportsPage() {
  return (
    <StaticPageLayout
      title="Student Reports"
      description="Generate and manage individual student report cards."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileText} label="Reports Generated" value="1,248" />
        <StatCard icon={Download} label="Downloads" value="986" color="bg-green-500/10" />
        <StatCard icon={TrendingUp} label="Avg. Score" value="78.5%" color="bg-amber-500/10" />
        <StatCard icon={Award} label="A+ Students" value="124" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Report Cards"
            description="Term 1 report cards for all students"
            columns={columns}
            data={reports}
          />
        }
        right={
          <>
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
            <InfoGridCard
              title="Report Summary"
              description="Term 1 report statistics"
              items={[
                { label: "Published", value: "1,180", icon: CheckCircle2, color: "bg-green-500/10" },
                { label: "Draft", value: "68", icon: FileText, color: "bg-amber-500/10" },
                { label: "Needs Review", value: "24", icon: AlertTriangle, color: "bg-red-500/10" },
                { label: "Top Scorer", value: "98%", icon: Star, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}