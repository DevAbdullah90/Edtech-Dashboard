import { Users, UserPlus, UserCheck, GraduationCap } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Student = {
  name: string;
  rollNo: string;
  class: string;
  section: string;
  guardian: string;
  contact: string;
  status: string;
};

const students: Student[] = [
  { name: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5", section: "A", guardian: "Imran Khan", contact: "0300-1234567", status: "Active" },
  { name: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6", section: "B", guardian: "Ali Raza", contact: "0301-2345678", status: "Active" },
  { name: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7", section: "A", guardian: "Hassan Ali", contact: "0302-3456789", status: "Active" },
  { name: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8", section: "C", guardian: "Usman Siddiqui", contact: "0303-4567890", status: "Inactive" },
  { name: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5", section: "B", guardian: "Abbas Raza", contact: "0304-5678901", status: "Active" },
  { name: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6", section: "A", guardian: "Kashif Ali", contact: "0305-6789012", status: "Active" },
  { name: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7", section: "B", guardian: "Ahmed Nawaz", contact: "0306-7890123", status: "Active" },
  { name: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8", section: "A", guardian: "Noor Ahmed", contact: "0307-8901234", status: "Inactive" },
];

const columns: Column<Student>[] = [
  { key: "name", header: "Student Name", render: (s) => <span className="font-medium">{s.name}</span> },
  { key: "rollNo", header: "Roll No", render: (s) => <span className="text-muted-foreground">{s.rollNo}</span> },
  { key: "class", header: "Class", render: (s) => <Badge variant="outline">{s.class}</Badge> },
  { key: "section", header: "Section", render: (s) => s.section },
  { key: "guardian", header: "Guardian", render: (s) => s.guardian },
  { key: "contact", header: "Contact", render: (s) => <span className="text-muted-foreground">{s.contact}</span> },
  { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
];

export default function StudentsPage() {
  return (
    <StaticPageLayout
      title="Students"
      description="Manage all student records, profiles, and enrollment information."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="Total Students" value="1,248" />
        <StatCard icon={UserCheck} label="Active Students" value="1,186" color="bg-green-500/10" />
        <StatCard icon={UserPlus} label="New This Term" value="86" color="bg-amber-500/10" />
        <StatCard icon={GraduationCap} label="Graduated" value="312" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Student Directory"
        description="All enrolled students in the current academic year"
        columns={columns}
        data={students}
      />
    </StaticPageLayout>
  );
}