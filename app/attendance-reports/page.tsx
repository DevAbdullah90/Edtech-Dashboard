import { CalendarCheck, UserCheck, UserX, TrendingUp } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type AttendanceReport = {
  student: string;
  rollNo: string;
  class: string;
  present: string;
  absent: string;
  rate: string;
  status: string;
};

const reports: AttendanceReport[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", present: "58", absent: "2", rate: "96.7%", status: "Good" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", present: "57", absent: "3", rate: "95.0%", status: "Good" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", present: "52", absent: "8", rate: "86.7%", status: "Average" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", present: "45", absent: "15", rate: "75.0%", status: "Poor" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", present: "56", absent: "4", rate: "93.3%", status: "Good" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", present: "59", absent: "1", rate: "98.3%", status: "Excellent" },
];

const columns: Column<AttendanceReport>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "present", header: "Present Days", render: (r) => r.present },
  { key: "absent", header: "Absent Days", render: (r) => <span className={Number(r.absent) > 10 ? "text-red-600" : "text-muted-foreground"}>{r.absent}</span> },
  { key: "rate", header: "Attendance Rate", render: (r) => <span className="font-medium">{r.rate}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AttendanceReportsPage() {
  return (
    <StaticPageLayout
      title="Attendance Reports"
      description="Generate and analyze attendance reports."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={CalendarCheck} label="Avg Attendance" value="94.2%" />
        <StatCard icon={UserCheck} label="Good (90%+)" value="1,086" color="bg-green-500/10" />
        <StatCard icon={UserX} label="Below 80%" value="86" color="bg-red-500/10" />
        <StatCard icon={TrendingUp} label="Improving" value="124" color="bg-amber-500/10" />
      </div>
      <DataTable
        title="Attendance Summary"
        description="Attendance rates for Term 1 (60 school days)"
        columns={columns}
        data={reports}
      />
    </StaticPageLayout>
  );
}