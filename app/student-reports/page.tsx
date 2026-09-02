import { FileBarChart, FileText, Download, Printer } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Report = {
  student: string;
  rollNo: string;
  reportType: string;
  period: string;
  generated: string;
  status: string;
};

const reports: Report[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", reportType: "Progress Report", period: "Term 1", generated: "2026-08-30", status: "Generated" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", reportType: "Progress Report", period: "Term 1", generated: "2026-08-30", status: "Generated" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", reportType: "Progress Report", period: "Term 1", generated: "2026-08-30", status: "Generated" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", reportType: "Conduct Report", period: "Term 1", generated: "2026-08-29", status: "Generated" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", reportType: "Progress Report", period: "Term 1", generated: "2026-08-30", status: "Generated" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", reportType: "Progress Report", period: "Term 1", generated: "2026-08-30", status: "Generated" },
];

const columns: Column<Report>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "reportType", header: "Report Type", render: (r) => <Badge variant="outline">{r.reportType}</Badge> },
  { key: "period", header: "Period", render: (r) => r.period },
  { key: "generated", header: "Generated", render: (r) => r.generated },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function StudentReportsPage() {
  return (
    <StaticPageLayout
      title="Student Reports"
      description="Generate and manage individual student reports."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileBarChart} label="Reports Generated" value="1,248" />
        <StatCard icon={FileText} label="This Term" value="1,248" color="bg-green-500/10" />
        <StatCard icon={Download} label="Downloads" value="842" color="bg-amber-500/10" />
        <StatCard icon={Printer} label="Printed" value="356" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Generated Reports"
        description="Recently generated student reports"
        columns={columns}
        data={reports}
      />
    </StaticPageLayout>
  );
}