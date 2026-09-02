import { UserRound, Users, Award, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
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
      <DataTable
        title="Teaching Staff"
        description="All faculty members and their assignments"
        columns={columns}
        data={teachers}
      />
    </StaticPageLayout>
  );
}