import { CalendarCheck2, UserCheck, UserX, Clock, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type AttendanceReport = {
  class: string;
  totalStudents: string;
  present: string;
  absent: string;
  late: string;
  rate: string;
  status: string;
};

const reports: AttendanceReport[] = [
  { class: "Class 5-A", totalStudents: "32", present: "30", absent: "1", late: "1", rate: "94%", status: "Good" },
  { class: "Class 5-B", totalStudents: "31", present: "29", absent: "1", late: "1", rate: "94%", status: "Good" },
  { class: "Class 6-A", totalStudents: "35", present: "33", absent: "1", late: "1", rate: "94%", status: "Good" },
  { class: "Class 6-B", totalStudents: "33", present: "30", absent: "2", late: "1", rate: "91%", status: "Average" },
  { class: "Class 7-A", totalStudents: "31", present: "28", absent: "2", late: "1", rate: "90%", status: "Average" },
  { class: "Class 7-B", totalStudents: "29", present: "26", absent: "2", late: "1", rate: "90%", status: "Average" },
  { class: "Class 8-A", totalStudents: "30", present: "28", absent: "1", late: "1", rate: "93%", status: "Good" },
  { class: "Class 8-C", totalStudents: "28", present: "24", absent: "3", late: "1", rate: "86%", status: "Needs Attention" },
];

const columns: Column<AttendanceReport>[] = [
  { key: "class", header: "Class", render: (r) => <span className="font-medium">{r.class}</span> },
  { key: "totalStudents", header: "Students", render: (r) => r.totalStudents },
  { key: "present", header: "Present", render: (r) => <span className="text-green-600 dark:text-green-400">{r.present}</span> },
  { key: "absent", header: "Absent", render: (r) => <span className="text-red-600 dark:text-red-400">{r.absent}</span> },
  { key: "late", header: "Late", render: (r) => <span className="text-amber-600 dark:text-amber-400">{r.late}</span> },
  { key: "rate", header: "Rate", render: (r) => <span className="font-medium">{r.rate}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AttendanceReportsPage() {
  return (
    <StaticPageLayout
      title="Attendance Reports"
      description="Class-wise attendance reports and trends."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={CalendarCheck2} label="Avg. Attendance" value="94.2%" />
        <StatCard icon={UserCheck} label="Present Today" value="1,176" color="bg-green-500/10" />
        <StatCard icon={UserX} label="Absent Today" value="72" color="bg-red-500/10" />
        <StatCard icon={Clock} label="Late Today" value="18" color="bg-amber-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Class-wise Attendance"
            description="Today's attendance report by class"
            columns={columns}
            data={reports}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Attendance by Class"
              description="Today's attendance rate per class"
              items={[
                { label: "Class 5", value: 94, display: "94%", color: "bg-green-500" },
                { label: "Class 6", value: 92, display: "92%", color: "bg-blue-500" },
                { label: "Class 7", value: 90, display: "90%", color: "bg-amber-500" },
                { label: "Class 8", value: 89, display: "89%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Weekly Trend"
              description="This week's attendance summary"
              items={[
                { label: "Best Day", value: "Mon 96%", icon: TrendingUp, color: "bg-green-500/10" },
                { label: "Worst Day", value: "Fri 91%", icon: AlertTriangle, color: "bg-red-500/10" },
                { label: "Avg. Rate", value: "94.2%", icon: CheckCircle2, color: "bg-blue-500/10" },
                { label: "Total Absences", value: "86", icon: UserX, color: "bg-amber-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}