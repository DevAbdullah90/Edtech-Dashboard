import { BookOpen, BookMarked, Layers, Clock, Star, TrendingUp, Award, Users } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
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

      <InfoGridCard
        title="Subject Performance"
        description="Average scores by subject"
        items={[
          { label: "Mathematics", value: "82%", icon: TrendingUp, color: "bg-blue-500/10" },
          { label: "English", value: "78%", icon: BookOpen, color: "bg-green-500/10" },
          { label: "Science", value: "75%", icon: Award, color: "bg-amber-500/10" },
          { label: "Computer Science", value: "85%", icon: Star, color: "bg-purple-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Subject Catalog"
            description="All subjects offered across class levels"
            columns={columns}
            data={subjects}
          />
        }
        right={
          <ProgressListCard
            title="Weekly Period Allocation"
            description="Periods per subject per week"
            items={[
              { label: "Mathematics", value: 12, display: "5 / week", color: "bg-blue-500" },
              { label: "English", value: 12, display: "5 / week", color: "bg-green-500" },
              { label: "Science", value: 10, display: "4 / week", color: "bg-amber-500" },
              { label: "Urdu", value: 10, display: "4 / week", color: "bg-purple-500" },
              { label: "Computer", value: 7, display: "3 / week", color: "bg-cyan-500" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}