import { ClipboardCheck, UserCheck, UserX, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
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
      <DataTable
        title="Today's Attendance"
        description="Attendance records for September 2, 2026"
        columns={columns}
        data={records}
      />
    </StaticPageLayout>
  );
}