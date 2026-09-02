import { GraduationCap, BookOpen, ClipboardCheck, Award } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type StudentActivity = {
  activity: string;
  subject: string;
  date: string;
  details: string;
  status: string;
};

const activities: StudentActivity[] = [
  { activity: "Assignment", subject: "Mathematics", date: "2026-09-01", details: "Fractions Worksheet - Due Sep 5", status: "Pending" },
  { activity: "Quiz", subject: "English", date: "2026-09-02", details: "Grammar Quiz - Score 18/20", status: "Approved" },
  { activity: "Attendance", subject: "—", date: "2026-09-02", details: "Present - 08:02 AM", status: "Present" },
  { activity: "Exam Result", subject: "Science", date: "2026-08-30", details: "Mid-Term - 76/100", status: "Approved" },
  { activity: "Homework", subject: "Urdu", date: "2026-09-01", details: "Poetry recitation - Due Sep 3", status: "Pending" },
  { activity: "Certificate", subject: "Computer", date: "2026-08-25", details: "HTML Basics - Completed", status: "Approved" },
];

const columns: Column<StudentActivity>[] = [
  { key: "activity", header: "Activity", render: (a) => <span className="font-medium">{a.activity}</span> },
  { key: "subject", header: "Subject", render: (a) => a.subject !== "—" ? <Badge variant="outline">{a.subject}</Badge> : <span className="text-muted-foreground">—</span> },
  { key: "date", header: "Date", render: (a) => a.date },
  { key: "details", header: "Details", render: (a) => <span className="text-muted-foreground">{a.details}</span> },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function StudentAppPage() {
  return (
    <StaticPageLayout
      title="Student App"
      description="View your classes, assignments, grades, and activities."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={GraduationCap} label="My Class" value="Class 5-A" />
        <StatCard icon={BookOpen} label="Subjects" value="8" color="bg-green-500/10" />
        <StatCard icon={ClipboardCheck} label="Pending Work" value="3" color="bg-amber-500/10" />
        <StatCard icon={Award} label="Avg Score" value="92%" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="My Activities"
        description="Recent academic activities and assignments"
        columns={columns}
        data={activities}
      />
    </StaticPageLayout>
  );
}