import { GraduationCap, Award, TrendingUp, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type AcademicReport = {
  subject: string;
  class: string;
  avgScore: string;
  highest: string;
  lowest: string;
  passRate: string;
  status: string;
};

const reports: AcademicReport[] = [
  { subject: "Mathematics", class: "Class 5-8", avgScore: "82%", highest: "98%", lowest: "45%", passRate: "96%", status: "Good" },
  { subject: "English", class: "Class 5-8", avgScore: "78%", highest: "95%", lowest: "40%", passRate: "93%", status: "Good" },
  { subject: "Science", class: "Class 5-7", avgScore: "75%", highest: "94%", lowest: "38%", passRate: "90%", status: "Average" },
  { subject: "Urdu", class: "Class 5-8", avgScore: "80%", highest: "97%", lowest: "42%", passRate: "94%", status: "Good" },
  { subject: "Computer Science", class: "Class 6-8", avgScore: "85%", highest: "99%", lowest: "50%", passRate: "97%", status: "Excellent" },
  { subject: "Islamiat", class: "Class 5-8", avgScore: "88%", highest: "100%", lowest: "55%", passRate: "98%", status: "Excellent" },
];

const columns: Column<AcademicReport>[] = [
  { key: "subject", header: "Subject", render: (r) => <span className="font-medium">{r.subject}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "highest", header: "Highest", render: (r) => <span className="text-green-600">{r.highest}</span> },
  { key: "lowest", header: "Lowest", render: (r) => <span className="text-red-600">{r.lowest}</span> },
  { key: "passRate", header: "Pass Rate", render: (r) => r.passRate },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AcademicReportsPage() {
  return (
    <StaticPageLayout
      title="Academic Reports"
      description="Subject-wise academic performance analysis."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={GraduationCap} label="Overall Average" value="81.3%" />
        <StatCard icon={Award} label="Pass Rate" value="94.5%" color="bg-green-500/10" />
        <StatCard icon={TrendingUp} label="Improving Subjects" value="4" color="bg-amber-500/10" />
        <StatCard icon={AlertTriangle} label="Needs Attention" value="1" color="bg-red-500/10" />
      </div>
      <DataTable
        title="Subject Performance"
        description="Academic performance by subject for Term 1"
        columns={columns}
        data={reports}
      />
    </StaticPageLayout>
  );
}