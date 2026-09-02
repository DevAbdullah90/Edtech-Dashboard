import { ShieldCheck, UserCog, Users, KeyRound } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Role = {
  role: string;
  users: string;
  permissions: string;
  lastUpdated: string;
  status: string;
};

const roles: Role[] = [
  { role: "Principal / Admin", users: "2", permissions: "Full Access", lastUpdated: "2026-08-01", status: "Active" },
  { role: "Teacher", users: "84", permissions: "Classes, Grades, Attendance", lastUpdated: "2026-08-15", status: "Active" },
  { role: "Parent", users: "1,186", permissions: "View child, Pay fees", lastUpdated: "2026-08-20", status: "Active" },
  { role: "Student", users: "1,248", permissions: "View grades, Assignments", lastUpdated: "2026-08-20", status: "Active" },
  { role: "Accountant", users: "3", permissions: "Finance, Fees, Reports", lastUpdated: "2026-08-10", status: "Active" },
  { role: "Receptionist", users: "2", permissions: "Admissions, Attendance", lastUpdated: "2026-08-12", status: "Active" },
];

const columns: Column<Role>[] = [
  { key: "role", header: "Role", render: (r) => <span className="font-medium">{r.role}</span> },
  { key: "users", header: "Users", render: (r) => <Badge variant="outline">{r.users}</Badge> },
  { key: "permissions", header: "Permissions", render: (r) => r.permissions },
  { key: "lastUpdated", header: "Last Updated", render: (r) => r.lastUpdated },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function UserRolesPage() {
  return (
    <StaticPageLayout
      title="User Roles"
      description="Manage system roles and access permissions."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ShieldCheck} label="Total Roles" value="6" />
        <StatCard icon={UserCog} label="Admin Users" value="2" color="bg-green-500/10" />
        <StatCard icon={Users} label="Total Users" value="2,525" color="bg-amber-500/10" />
        <StatCard icon={KeyRound} label="Permission Sets" value="18" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Role Management"
        description="System roles and their access levels"
        columns={columns}
        data={roles}
      />
    </StaticPageLayout>
  );
}