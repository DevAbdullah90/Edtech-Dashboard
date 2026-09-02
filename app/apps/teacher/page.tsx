import { Presentation, BookOpen, ClipboardCheck, Users } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type TeacherTask = {
  task: string;
  class: string;
  subject: string;
  dueDate: string;
  progress: string;
  status: string;
};

const tasks: TeacherTask[] = [
  { task: "Grade Mid-Term Papers", class: "Class 5-A", subject: "Mathematics", dueDate: "2026-09-05", progress: "75%", status: "Active" },
  { task: "Prepare Lesson Plan", class: "Class 6-B", subject: "English", dueDate: "2026-09-04", progress: "50%", status: "Active" },
  { task: "Mark Attendance", class: "Class 7-A", subject: "Science", dueDate: "2026-09-02", progress: "100%", status: "Completed" },
  { task: "Upload Assignment", class: "Class 8-C", subject: "Urdu", dueDate: "2026-09-06", progress: "25%", status: "Active" },
  { task: "Parent Meeting Notes", class: "Class 5-B", subject: "Mathematics", dueDate: "2026-09-03", progress: "100%", status: "Completed" },
  { task: "Create Quiz", class: "Class 6-A", subject: "English", dueDate: "2026-09-08", progress: "0%", status: "Pending" },
];

const columns: Column<TeacherTask>[] = [
  { key: "task", header: "Task", render: (t) => <span className="font-medium">{t.task}</span> },
  { key: "class", header: "Class", render: (t) => <Badge variant="outline">{t.class}</Badge> },
  { key: "subject", header: "Subject", render: (t) => t.subject },
  { key: "dueDate", header: "Due Date", render: (t) => t.dueDate },
  { key: "progress", header: "Progress", render: (t) => t.progress },
  { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
];

export default function TeacherAppPage() {
  return (
    <StaticPageLayout
      title="Teacher App"
      description="Tools and tasks for teachers to manage classes and grading."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Presentation} label="My Classes" value="4" />
        <StatCard icon={BookOpen} label="Subjects Taught" value="2" color="bg-green-500/10" />
        <StatCard icon={ClipboardCheck} label="Pending Tasks" value="8" color="bg-amber-500/10" />
        <StatCard icon={Users} label="Students" value="128" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="My Tasks"
        description="Current teaching tasks and assignments"
        columns={columns}
        data={tasks}
      />
    </StaticPageLayout>
  );
}