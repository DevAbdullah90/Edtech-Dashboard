import { LayoutDashboard, Users, Wallet, ShieldCheck, BarChart3, Settings, Megaphone, FileText } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Module = {
  module: string;
  description: string;
  users: string;
  lastAccess: string;
  status: string;
};

const modules: Module[] = [
  { module: "Dashboard", description: "Overview of school metrics", users: "4", lastAccess: "2026-09-02", status: "Active" },
  { module: "Student Management", description: "Manage student records", users: "4", lastAccess: "2026-09-02", status: "Active" },
  { module: "Finance", description: "Fees and payments", users: "3", lastAccess: "2026-09-01", status: "Active" },
  { module: "Admissions", description: "Process applications", users: "2", lastAccess: "2026-09-01", status: "Active" },
  { module: "Reports", description: "Generate reports", users: "4", lastAccess: "2026-08-31", status: "Active" },
  { module: "Settings", description: "System configuration", users: "2", lastAccess: "2026-08-28", status: "Active" },
];

const columns: Column<Module>[] = [
  { key: "module", header: "Module", render: (r) => <span className="font-medium">{r.module}</span> },
  { key: "description", header: "Description", render: (r) => <span className="text-muted-foreground">{r.description}</span> },
  { key: "users", header: "Users", render: (r) => <Badge variant="outline">{r.users}</Badge> },
  { key: "lastAccess", header: "Last Access", render: (r) => <span className="text-muted-foreground">{r.lastAccess}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AdminAppPage() {
  return (
    <StaticPageLayout
      title="Admin App"
      description="Full-featured admin application for school management."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={LayoutDashboard} label="Modules" value="12" />
        <StatCard icon={Users} label="Admin Users" value="4" color="bg-green-500/10" />
        <StatCard icon={Wallet} label="Finance Access" value="Full" color="bg-amber-500/10" />
        <StatCard icon={ShieldCheck} label="Permissions" value="Full" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Admin Capabilities"
        description="Key features available to administrators"
        items={[
          { label: "Dashboard", value: "Full metrics", icon: LayoutDashboard, color: "bg-blue-500/10" },
          { label: "User Management", value: "All roles", icon: Users, color: "bg-green-500/10" },
          { label: "Reports", value: "All types", icon: BarChart3, color: "bg-amber-500/10" },
          { label: "Announcements", value: "Publish", icon: Megaphone, color: "bg-purple-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Admin Modules"
            description="Modules accessible in the admin application"
            columns={columns}
            data={modules}
          />
        }
        right={
          <InfoGridCard
            title="Admin Tools"
            description="Administrative tools and controls"
            items={[
              { label: "System Settings", value: "Full access", icon: Settings, color: "bg-blue-500/10" },
              { label: "Security", value: "Manage", icon: ShieldCheck, color: "bg-green-500/10" },
              { label: "Reports", value: "Generate", icon: FileText, color: "bg-amber-500/10" },
              { label: "User Roles", value: "Manage", icon: Users, color: "bg-purple-500/10" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}