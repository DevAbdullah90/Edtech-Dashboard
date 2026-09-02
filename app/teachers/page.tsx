import { UserRound, Users, Award, Clock, BookOpen, GraduationCap, Star, HeartHandshake } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, LeaderboardCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Teacher = {
  name: string;
  employeeId: string;
  subject: string;
  classes: string;
  qualification: string;
  experience: string;
  status: string;
};

const teachers: Teacher[] = [
  { name: "Prof. Abdul Rahman", employeeId: "TCH-001", subject: "Mathematics", classes: "Class 5-8", qualification: "M.Sc. Mathematics", experience: "12 years", status: "Active" },
  { name: "Ms. Sana Javed", employeeId: "TCH-002", subject: "English", classes: "Class 6-8", qualification: "M.A. English", experience: "8 years", status: "Active" },
  { name: "Mr. Imran Qureshi", employeeId: "TCH-003", subject: "Science", classes: "Class 5-7", qualification: "M.Sc. Physics", experience: "15 years", status: "Active" },
  { name: "Mrs. Ayesha Malik", employeeId: "TCH-004", subject: "Urdu", classes: "Class 5-8", qualification: "M.A. Urdu", experience: "10 years", status: "Active" },
  { name: "Mr. Hassan Sheikh", employeeId: "TCH-005", subject: "Computer Science", classes: "Class 6-8", qualification: "B.Sc. CS", experience: "5 years", status: "Inactive" },
  { name: "Ms. Rabia Khan", employeeId: "TCH-006", subject: "Islamiat", classes: "Class 5-8", qualification: "M.A. Islamic Studies", experience: "7 years", status: "Active" },
  { name: "Mr. Faisal Ahmed", employeeId: "TCH-007", subject: "Social Studies", classes: "Class 5-8", qualification: "M.A. History", experience: "9 years", status: "Active" },
  { name: "Ms. Hina Shahid", employeeId: "TCH-008", subject: "Art & Craft", classes: "Class 5-8", qualification: "B.F.A.", experience: "4 years", status: "Active" },
];

const columns: Column<Teacher>[] = [
  { key: "name", header: "Teacher Name", render: (t) => <span className="font-medium">{t.name}</span> },
  { key: "employeeId", header: "Employee ID", render: (t) => <span className="text-muted-foreground">{t.employeeId}</span> },
  { key: "subject", header: "Subject", render: (t) => <Badge variant="outline">{t.subject}</Badge> },
  { key: "classes", header: "Classes", render: (t) => t.classes },
  { key: "qualification", header: "Qualification", render: (t) => t.qualification },
  { key: "experience", header: "Experience", render: (t) => t.experience },
  { key: "status", header: "Status", render: (t) => <StatusBadge status={t.status} /> },
];

export default function TeachersPage() {
  return (
    <StaticPageLayout
      title="Teachers"
      description="Manage teaching staff, assignments, and professional information."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UserRound} label="Total Teachers" value="84" />
        <StatCard icon={Users} label="Active Teachers" value="78" color="bg-green-500/10" />
        <StatCard icon={Award} label="Qualified (Masters+)" value="62" color="bg-amber-500/10" />
        <StatCard icon={Clock} label="Avg. Experience" value="8.5 yrs" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Staff Overview"
        description="Key staff metrics for the current academic year"
        items={[
          { label: "Full-time Teachers", value: "72", icon: UserRound, color: "bg-blue-500/10" },
          { label: "Part-time Teachers", value: "12", icon: Users, color: "bg-green-500/10" },
          { label: "Masters Degree", value: "62", icon: GraduationCap, color: "bg-amber-500/10" },
          { label: "PhD Holders", value: "8", icon: Award, color: "bg-purple-500/10" },
          { label: "Subjects Taught", value: "12", icon: BookOpen, color: "bg-cyan-500/10" },
          { label: "Avg. Rating", value: "4.6 / 5", icon: Star, color: "bg-orange-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Teaching Staff"
            description="All faculty members and their assignments"
            columns={columns}
            data={teachers}
          />
        }
        right={
          <LeaderboardCard
            title="Teacher of the Month"
            description="Top rated teachers"
            items={[
              { rank: 1, name: "Prof. Abdul Rahman", value: "4.9★", img: "https://i.pravatar.cc/150?img=12", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
              { rank: 2, name: "Ms. Sana Javed", value: "4.8★", img: "https://i.pravatar.cc/150?img=32", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
              { rank: 3, name: "Mr. Imran Qureshi", value: "4.7★", img: "https://i.pravatar.cc/150?img=15", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
              { rank: 4, name: "Mrs. Ayesha Malik", value: "4.6★", img: "https://i.pravatar.cc/150?img=44" },
              { rank: 5, name: "Ms. Rabia Khan", value: "4.5★", img: "https://i.pravatar.cc/150?img=49" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}