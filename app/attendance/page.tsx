import { ClipboardCheck, UserCheck, UserX, Clock, CalendarCheck2, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type AttendanceRecord = {
  student: string;
  rollNo: string;
  class: string;
  date: string;
  status: string;
  time: string;
};

const records: AttendanceRecord[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", date: "2026-09-02", status: "Present", time: "08:02 AM" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", date: "2026-09-02", status: "Present", time: "07:58 AM" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", date: "2026-09-02", status: "Late", time: "08:25 AM" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", date: "2026-09-02", status: "Absent", time: "—" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", date: "2026-09-02", status: "Present", time: "08:00 AM" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", date: "2026-09-02", status: "Present", time: "07:55 AM" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7-B", date: "2026-09-02", status: "Present", time: "08:05 AM" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8-A", date: "2026-09-02", status: "Absent", time: "—" },
];

const columns: Column<AttendanceRecord>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "date", header: "Date", render: (r) => r.date },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  { key: "time", header: "Time", render: (r) => <span className="text-muted-foreground">{r.time}</span> },
];

export default function AttendancePage() {
  return (
    <StaticPageLayout
      title="Attendance"
      description="Track daily student attendance and generate reports."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ClipboardCheck} label="Today's Attendance" value="94.2%" />
        <StatCard icon={UserCheck} label="Present" value="1,176" color="bg-green-500/10" />
        <StatCard icon={UserX} label="Absent" value="72" color="bg-red-500/10" />
        <StatCard icon={Clock} label="Late Arrivals" value="18" color="bg-amber-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Today's Attendance"
            description="Attendance records for September 2, 2026"
            columns={columns}
            data={records}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Attendance by Class"
              description="Today's attendance rate per class"
              items={[
                { label: "Class 5", value: 97, display: "97%", color: "bg-green-500" },
                { label: "Class 6", value: 95, display: "95%", color: "bg-blue-500" },
                { label: "Class 7", value: 92, display: "92%", color: "bg-amber-500" },
                { label: "Class 8", value: 89, display: "89%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Weekly Summary"
              description="This week's attendance"
              items={[
                { label: "Avg Attendance", value: "94.2%", icon: CalendarCheck2, color: "bg-green-500/10" },
                { label: "Total Absences", value: "86", icon: UserX, color: "bg-red-500/10" },
                { label: "Late Arrivals", value: "24", icon: Clock, color: "bg-amber-500/10" },
                { label: "Needs Attention", value: "12", icon: AlertTriangle, color: "bg-orange-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}