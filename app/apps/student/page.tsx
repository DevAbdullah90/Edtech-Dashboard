import { BookOpen, Award, CalendarClock, ClipboardList, FileText, MessageSquare, TrendingUp, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Subject = {
  subject: string;
  teacher: string;
  score: string;
  grade: string;
  attendance: string;
  status: string;
};

const subjects: Subject[] = [
  { subject: "Mathematics", teacher: "Prof. Abdul Rahman", score: "92%", grade: "A+", attendance: "96%", status: "Excellent" },
  { subject: "English", teacher: "Ms. Sana Javed", score: "88%", grade: "A", attendance: "95%", status: "Excellent" },
  { subject: "Science", teacher: "Mr. Imran Qureshi", score: "84%", grade: "A", attendance: "94%", status: "Good" },
  { subject: "Urdu", teacher: "Mrs. Ayesha Malik", score: "79%", grade: "B+", attendance: "93%", status: "Good" },
  { subject: "Computer Science", teacher: "Mr. Hassan Sheikh", score: "90%", grade: "A+", attendance: "97%", status: "Excellent" },
  { subject: "Islamiat", teacher: "Ms. Rabia Khan", score: "85%", grade: "A", attendance: "95%", status: "Good" },
];

const columns: Column<Subject>[] = [
  { key: "subject", header: "Subject", render: (r) => <span className="font-medium">{r.subject}</span> },
  { key: "teacher", header: "Teacher", render: (r) => r.teacher },
  { key: "score", header: "Score", render: (r) => <span className="font-medium">{r.score}</span> },
  { key: "grade", header: "Grade", render: (r) => <Badge variant="outline">{r.grade}</Badge> },
  { key: "attendance", header: "Attendance", render: (r) => r.attendance },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function StudentAppPage() {
  return (
    <StaticPageLayout
      title="Student App"
      description="Student application for viewing grades and assignments."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpen} label="My Subjects" value="6" />
        <StatCard icon={Award} label="Overall Grade" value="A+" color="bg-green-500/10" />
        <StatCard icon={ClipboardList} label="Assignments" value="4 due" color="bg-amber-500/10" />
        <StatCard icon={CalendarClock} label="Upcoming Exams" value="2" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="My Subjects"
            description="Academic performance across all subjects"
            columns={columns}
            data={subjects}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Subject Scores"
              description="My scores by subject"
              items={[
                { label: "Mathematics", value: 92, display: "92%", color: "bg-green-500" },
                { label: "Computer Science", value: 90, display: "90%", color: "bg-blue-500" },
                { label: "English", value: 88, display: "88%", color: "bg-purple-500" },
                { label: "Islamiat", value: 85, display: "85%", color: "bg-amber-500" },
                { label: "Urdu", value: 79, display: "79%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Student Tools"
              description="Features available to students"
              items={[
                { label: "View Grades", value: "Live", icon: TrendingUp, color: "bg-blue-500/10" },
                { label: "Assignments", value: "Submit", icon: FileText, color: "bg-green-500/10" },
                { label: "Timetable", value: "View", icon: Clock, color: "bg-amber-500/10" },
                { label: "Message Teacher", value: "Available", icon: MessageSquare, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}