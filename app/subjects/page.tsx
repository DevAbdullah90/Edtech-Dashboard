import { BookOpen, BookMarked, Layers, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Subject = {
  name: string;
  code: string;
  teacher: string;
  classes: string;
  periods: string;
  status: string;
};

const subjects: Subject[] = [
  { name: "Mathematics", code: "MATH-101", teacher: "Prof. Abdul Rahman", classes: "Class 5-8", periods: "5/week", status: "Active" },
  { name: "English", code: "ENG-101", teacher: "Ms. Sana Javed", classes: "Class 5-8", periods: "5/week", status: "Active" },
  { name: "Science", code: "SCI-101", teacher: "Mr. Imran Qureshi", classes: "Class 5-7", periods: "4/week", status: "Active" },
  { name: "Urdu", code: "URD-101", teacher: "Mrs. Ayesha Malik", classes: "Class 5-8", periods: "4/week", status: "Active" },
  { name: "Computer Science", code: "CS-101", teacher: "Mr. Hassan Sheikh", classes: "Class 6-8", periods: "3/week", status: "Inactive" },
  { name: "Islamiat", code: "ISL-101", teacher: "Ms. Rabia Khan", classes: "Class 5-8", periods: "3/week", status: "Active" },
  { name: "Social Studies", code: "SST-101", teacher: "Mr. Faisal Ahmed", classes: "Class 5-8", periods: "3/week", status: "Active" },
  { name: "Art & Craft", code: "ART-101", teacher: "Ms. Hina Shahid", classes: "Class 5-8", periods: "2/week", status: "Active" },
];

const columns: Column<Subject>[] = [
  { key: "name", header: "Subject", render: (s) => <span className="font-medium">{s.name}</span> },
  { key: "code", header: "Code", render: (s) => <Badge variant="outline">{s.code}</Badge> },
  { key: "teacher", header: "Teacher", render: (s) => s.teacher },
  { key: "classes", header: "Classes", render: (s) => s.classes },
  { key: "periods", header: "Periods", render: (s) => <span className="text-muted-foreground">{s.periods}</span> },
  { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
];

export default function SubjectsPage() {
  return (
    <StaticPageLayout
      title="Subjects"
      description="Manage subject offerings, codes, and assigned teachers."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={BookOpen} label="Total Subjects" value="12" />
        <StatCard icon={BookMarked} label="Active Subjects" value="11" color="bg-green-500/10" />
        <StatCard icon={Layers} label="Classes Covered" value="8" color="bg-amber-500/10" />
        <StatCard icon={Clock} label="Weekly Periods" value="42" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Subject Catalog"
        description="All subjects offered across class levels"
        columns={columns}
        data={subjects}
      />
    </StaticPageLayout>
  );
}