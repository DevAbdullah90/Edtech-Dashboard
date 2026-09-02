import { Settings, School, Bell, Globe } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Setting = {
  setting: string;
  category: string;
  value: string;
  lastUpdated: string;
  status: string;
};

const settings: Setting[] = [
  { setting: "School Name", category: "General", value: "Hamdard School", lastUpdated: "2026-08-01", status: "Active" },
  { setting: "Academic Year", category: "General", value: "2026-2027", lastUpdated: "2026-08-01", status: "Active" },
  { setting: "Fee Reminder Days", category: "Finance", value: "3 days before due", lastUpdated: "2026-08-10", status: "Active" },
  { setting: "Late Fee Percentage", category: "Finance", value: "2%", lastUpdated: "2026-08-10", status: "Active" },
  { setting: "SMS Notifications", category: "Communication", value: "Enabled", lastUpdated: "2026-08-15", status: "Active" },
  { setting: "Email Notifications", category: "Communication", value: "Enabled", lastUpdated: "2026-08-15", status: "Active" },
];

const columns: Column<Setting>[] = [
  { key: "setting", header: "Setting", render: (s) => <span className="font-medium">{s.setting}</span> },
  { key: "category", header: "Category", render: (s) => <Badge variant="outline">{s.category}</Badge> },
  { key: "value", header: "Value", render: (s) => s.value },
  { key: "lastUpdated", header: "Last Updated", render: (s) => s.lastUpdated },
  { key: "status", header: "Status", render: (s) => <StatusBadge status={s.status} /> },
];

export default function SettingsPage() {
  return (
    <StaticPageLayout
      title="Settings"
      description="Configure system-wide settings and preferences."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Settings} label="Active Settings" value="24" />
        <StatCard icon={School} label="School Profile" value="Complete" color="bg-green-500/10" />
        <StatCard icon={Bell} label="Notification Rules" value="8" color="bg-amber-500/10" />
        <StatCard icon={Globe} label="Languages" value="2" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="System Settings"
        description="Current system configuration"
        columns={columns}
        data={settings}
      />
    </StaticPageLayout>
  );
}