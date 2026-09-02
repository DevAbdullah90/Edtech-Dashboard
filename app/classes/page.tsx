import { School, Users, UserRound, BookOpen } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type ClassInfo = {
  className: string;
  section: string;
  teacher: string;
  students: string;
  subjects: string;
  room: string;
  status: string;
};

const classes: ClassInfo[] = [
  { className: "Class 5", section: "A", teacher: "Prof. Abdul Rahman", students: "32", subjects: "8", room: "Room 101", status: "Active" },
  { className: "Class 5", section: "B", teacher: "Ms. Sana Javed", students: "30", subjects: "8", room: "Room 102", status: "Active" },
  { className: "Class 6", section: "A", teacher: "Mr. Imran Qureshi", students: "35", subjects: "9", room: "Room 201", status: "Active" },
  { className: "Class 6", section: "B", teacher: "Mrs. Ayesha Malik", students: "33", subjects: "9", room: "Room 202", status: "Active" },
  { className: "Class 7", section: "A", teacher: "Mr. Hassan Sheikh", students: "31", subjects: "9", room: "Room 301", status: "Active" },
  { className: "Class 7", section: "B", teacher: "Ms. Rabia Khan", students: "29", subjects: "9", room: "Room 302", status: "Active" },
  { className: "Class 8", section: "A", teacher: "Mr. Faisal Ahmed", students: "34", subjects: "10", room: "Room 401", status: "Active" },
  { className: "Class 8", section: "B", teacher: "Ms. Hina Shahid", students: "28", subjects: "10", room: "Room 402", status: "Inactive" },
];

const columns: Column<ClassInfo>[] = [
  { key: "className", header: "Class", render: (c) => <Badge variant="outline">{c.className}</Badge> },
  { key: "section", header: "Section", render: (c) => c.section },
  { key: "teacher", header: "Class Teacher", render: (c) => <span className="font-medium">{c.teacher}</span> },
  { key: "students", header: "Students", render: (c) => c.students },
  { key: "subjects", header: "Subjects", render: (c) => c.subjects },
  { key: "room", header: "Room", render: (c) => <span className="text-muted-foreground">{c.room}</span> },
  { key: "status", header: "Status", render: (c) => <StatusBadge status={c.status} /> },
];

export default function ClassesPage() {
  return (
    <StaticPageLayout
      title="Classes"
      description="Manage class sections, teachers, and room assignments."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={School} label="Total Classes" value="16" />
        <StatCard icon={Users} label="Total Students" value="1,248" color="bg-green-500/10" />
        <StatCard icon={UserRound} label="Class Teachers" value="16" color="bg-amber-500/10" />
        <StatCard icon={BookOpen} label="Subjects Offered" value="12" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Class Sections"
        description="All class sections and their assigned teachers"
        columns={columns}
        data={classes}
      />
    </StaticPageLayout>
  );
}