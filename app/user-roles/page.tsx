import { Shield, ShieldCheck, Users, UserCog, KeyRound, Lock, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Role = {
  role: string;
  users: string;
  permissions: string;
  lastUpdated: string;
  status: string;
};

const roles: Role[] = [
  { role: "Administrator", users: "4", permissions: "Full access", lastUpdated: "2026-08-28", status: "Active" },
  { role: "Principal", users: "1", permissions: "All modules", lastUpdated: "2026-08-28", status: "Active" },
  { role: "Teacher", users: "48", permissions: "Classes, grades, attendance", lastUpdated: "2026-08-25", status: "Active" },
  { role: "Accountant", users: "3", permissions: "Finance module", lastUpdated: "2026-08-22", status: "Active" },
  { role: "Parent", users: "1,248", permissions: "View child's data", lastUpdated: "2026-08-20", status: "Active" },
  { role: "Student", users: "1,248", permissions: "View own data", lastUpdated: "2026-08-20", status: "Active" },
  { role: "Guest", users: "0", permissions: "Read-only", lastUpdated: "2026-08-15", status: "Inactive" },
];

const columns: Column<Role>[] = [
  { key: "role", header: "Role", render: (r) => <span className="font-medium">{r.role}</span> },
  { key: "users", header: "Users", render: (r) => <Badge variant="outline">{r.users}</Badge> },
  { key: "permissions", header: "Permissions", render: (r) => <span className="text-muted-foreground">{r.permissions}</span> },
  { key: "lastUpdated", header: "Last Updated", render: (r) => <span className="text-muted-foreground">{r.lastUpdated}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function UserRolesPage() {
  return (
    <StaticPageLayout
      title="User Roles"
      description="Manage roles and permissions for all system users."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Shield} label="Total Roles" value="7" />
        <StatCard icon={Users} label="Total Users" value="2,552" color="bg-green-500/10" />
        <StatCard icon={UserCog} label="Staff Accounts" value="56" color="bg-amber-500/10" />
        <StatCard icon={KeyRound} label="Active Sessions" value="312" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Role Definitions"
            description="System roles and their permission levels"
            columns={columns}
            data={roles}
          />
        }
        right={
          <>
            <ProgressListCard
              title="User Distribution"
              description="Percentage of users per role"
              items={[
                { label: "Students", value: 49, display: "49%", color: "bg-blue-500" },
                { label: "Parents", value: 49, display: "49%", color: "bg-green-500" },
                { label: "Teachers", value: 2, display: "2%", color: "bg-amber-500" },
                { label: "Admin Staff", value: 0.3, display: "0.3%", color: "bg-purple-500" },
              ]}
            />
            <InfoGridCard
              title="Access Control"
              description="Security and permission settings"
              items={[
                { label: "2FA Enabled", value: "100%", icon: ShieldCheck, color: "bg-green-500/10" },
                { label: "Role Changes", value: "12 this month", icon: UserCog, color: "bg-blue-500/10" },
                { label: "Locked Accounts", value: "3", icon: Lock, color: "bg-red-500/10" },
                { label: "Permission Alerts", value: "1", icon: AlertTriangle, color: "bg-amber-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}