import { FileText, ClipboardList, CheckCircle2, Clock, CalendarClock, Send, AlertCircle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { TimelineCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Assignment = {
  title: string;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
  submissions: string;
  status: string;
};

const assignments: Assignment[] = [
  { title: "Fractions Worksheet", subject: "Mathematics", class: "Class 5-A", teacher: "Prof. Abdul Rahman", dueDate: "2026-09-05", submissions: "28/32", status: "Active" },
  { title: "Essay: My School", subject: "English", class: "Class 6-B", teacher: "Ms. Sana Javed", dueDate: "2026-09-07", submissions: "25/33", status: "Active" },
  { title: "Photosynthesis Lab Report", subject: "Science", class: "Class 7-A", teacher: "Mr. Imran Qureshi", dueDate: "2026-09-04", submissions: "30/31", status: "Active" },
  { title: "Urdu Poetry Recitation", subject: "Urdu", class: "Class 8-C", teacher: "Mrs. Ayesha Malik", dueDate: "2026-09-03", submissions: "28/28", status: "Completed" },
  { title: "HTML Basics Project", subject: "Computer Science", class: "Class 6-A", teacher: "Mr. Hassan Sheikh", dueDate: "2026-09-10", submissions: "20/35", status: "Active" },
  { title: "Islamic History Timeline", subject: "Islamiat", class: "Class 7-B", teacher: "Ms. Rabia Khan", dueDate: "2026-09-08", submissions: "15/29", status: "Active" },
];

const columns: Column<Assignment>[] = [
  { key: "title", header: "Assignment", render: (a) => <span className="font-medium">{a.title}</span> },
  { key: "subject", header: "Subject", render: (a) => <Badge variant="outline">{a.subject}</Badge> },
  { key: "class", header: "Class", render: (a) => a.class },
  { key: "teacher", header: "Teacher", render: (a) => a.teacher },
  { key: "dueDate", header: "Due Date", render: (a) => <span className="text-muted-foreground">{a.dueDate}</span> },
  { key: "submissions", header: "Submissions", render: (a) => a.submissions },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function AssignmentsPage() {
  return (
    <StaticPageLayout
      title="Assignments"
      description="Create, assign, and track homework and class assignments."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileText} label="Total Assignments" value="48" />
        <StatCard icon={ClipboardList} label="Active" value="32" color="bg-amber-500/10" />
        <StatCard icon={CheckCircle2} label="Completed" value="16" color="bg-green-500/10" />
        <StatCard icon={Clock} label="Due This Week" value="12" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Assignment List"
            description="Current and upcoming assignments across all classes"
            columns={columns}
            data={assignments}
          />
        }
        right={
          <>
            <TimelineCard
              title="Upcoming Deadlines"
              description="Assignments due in the next 7 days"
              items={[
                { title: "Urdu Poetry Recitation", date: "Sep 3", description: "Class 8-C - Mrs. Ayesha Malik", status: "Completed" },
                { title: "Photosynthesis Lab Report", date: "Sep 4", description: "Class 7-A - Mr. Imran Qureshi" },
                { title: "Fractions Worksheet", date: "Sep 5", description: "Class 5-A - Prof. Abdul Rahman" },
                { title: "Essay: My School", date: "Sep 7", description: "Class 6-B - Ms. Sana Javed" },
              ]}
            />
            <InfoGridCard
              title="Submission Stats"
              description="Assignment completion metrics"
              items={[
                { label: "Submitted", value: "1,024", icon: Send, color: "bg-green-500/10" },
                { label: "Pending", value: "224", icon: Clock, color: "bg-amber-500/10" },
                { label: "Overdue", value: "18", icon: AlertCircle, color: "bg-red-500/10" },
                { label: "Avg. Score", value: "82%", icon: CheckCircle2, color: "bg-blue-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}