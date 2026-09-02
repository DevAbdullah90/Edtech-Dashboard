import { BookOpen, ClipboardList, Users, CalendarClock, FileText, MessageSquare, Award, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Class = {
  className: string;
  subject: string;
  students: string;
  avgScore: string;
  attendance: string;
  status: string;
};

const classes: Class[] = [
  { className: "Class 5-A", subject: "Mathematics", students: "32", avgScore: "82%", attendance: "94%", status: "Active" },
  { className: "Class 6-B", subject: "English", students: "33", avgScore: "79%", attendance: "91%", status: "Active" },
  { className: "Class 7-A", subject: "Science", students: "31", avgScore: "76%", attendance: "90%", status: "Active" },
  { className: "Class 8-C", subject: "Urdu", students: "28", avgScore: "74%", attendance: "86%", status: "Needs Attention" },
];

const columns: Column<Class>[] = [
  { key: "className", header: "Class", render: (r) => <span className="font-medium">{r.className}</span> },
  { key: "subject", header: "Subject", render: (r) => <Badge variant="outline">{r.subject}</Badge> },
  { key: "students", header: "Students", render: (r) => r.students },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "attendance", header: "Attendance", render: (r) => r.attendance },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function TeacherAppPage() {
  return (
    <StaticPageLayout
      title="Teacher App"
      description="Teacher application for managing classes and assignments."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpen} label="My Classes" value="4" />
        <StatCard icon={Users} label="My Students" value="124" color="bg-green-500/10" />
        <StatCard icon={ClipboardList} label="Assignments" value="12" color="bg-amber-500/10" />
        <StatCard icon={CalendarClock} label="Today's Periods" value="6" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="My Classes"
            description="Classes assigned to this teacher"
            columns={columns}
            data={classes}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Class Performance"
              description="Average score by class"
              items={[
                { label: "Class 5-A", value: 82, display: "82%", color: "bg-green-500" },
                { label: "Class 6-B", value: 79, display: "79%", color: "bg-blue-500" },
                { label: "Class 7-A", value: 76, display: "76%", color: "bg-amber-500" },
                { label: "Class 8-C", value: 74, display: "74%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Teacher Tools"
              description="Features available to teachers"
              items={[
                { label: "Attendance", value: "Mark", icon: Clock, color: "bg-blue-500/10" },
                { label: "Grades", value: "Enter", icon: Award, color: "bg-green-500/10" },
                { label: "Assignments", value: "Create", icon: FileText, color: "bg-amber-500/10" },
                { label: "Messages", value: "Send", icon: MessageSquare, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}