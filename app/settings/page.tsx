import { Settings, Bell, Globe, Palette, Database, ShieldCheck, Save, User } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Setting = {
  setting: string;
  category: string;
  value: string;
  lastChanged: string;
  status: string;
};

const settings: Setting[] = [
  { setting: "School Name", category: "General", value: "Hamdard School", lastChanged: "2026-08-01", status: "Active" },
  { setting: "Academic Year", category: "General", value: "2026-2027", lastChanged: "2026-08-01", status: "Active" },
  { setting: "Default Language", category: "Localization", value: "English", lastChanged: "2026-07-15", status: "Active" },
  { setting: "Time Zone", category: "Localization", value: "Asia/Karachi", lastChanged: "2026-07-15", status: "Active" },
  { setting: "Theme", category: "Appearance", value: "Light", lastChanged: "2026-06-20", status: "Active" },
  { setting: "Email Notifications", category: "Notifications", value: "Enabled", lastChanged: "2026-08-10", status: "Active" },
  { setting: "SMS Notifications", category: "Notifications", value: "Enabled", lastChanged: "2026-08-10", status: "Active" },
  { setting: "Auto Backup", category: "Data", value: "Daily", lastChanged: "2026-08-05", status: "Active" },
];

const columns: Column<Setting>[] = [
  { key: "setting", header: "Setting", render: (r) => <span className="font-medium">{r.setting}</span> },
  { key: "category", header: "Category", render: (r) => <Badge variant="outline">{r.category}</Badge> },
  { key: "value", header: "Value", render: (r) => r.value },
  { key: "lastChanged", header: "Last Changed", render: (r) => <span className="text-muted-foreground">{r.lastChanged}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function SettingsPage() {
  return (
    <StaticPageLayout
      title="Settings"
      description="Configure system-wide settings and preferences."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Settings} label="Settings Groups" value="6" />
        <StatCard icon={Bell} label="Notifications" value="2 enabled" color="bg-green-500/10" />
        <StatCard icon={Globe} label="Localization" value="2 configured" color="bg-amber-500/10" />
        <StatCard icon={Database} label="Backups" value="Daily" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Configuration"
        description="System configuration summary"
        items={[
          { label: "General", value: "2 settings", icon: Settings, color: "bg-blue-500/10" },
          { label: "Appearance", value: "Light theme", icon: Palette, color: "bg-purple-500/10" },
          { label: "Security", value: "2FA enabled", icon: ShieldCheck, color: "bg-green-500/10" },
          { label: "Profile", value: "Admin account", icon: User, color: "bg-amber-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="System Settings"
            description="All configurable system settings"
            columns={columns}
            data={settings}
          />
        }
        right={
          <InfoGridCard
            title="Data & Backup"
            description="Data management settings"
            items={[
              { label: "Backup Frequency", value: "Daily", icon: Database, color: "bg-blue-500/10" },
              { label: "Last Backup", value: "Sep 2, 03:00", icon: Save, color: "bg-green-500/10" },
              { label: "Storage Used", value: "2.4 GB", icon: Database, color: "bg-amber-500/10" },
              { label: "Retention", value: "30 days", icon: ShieldCheck, color: "bg-purple-500/10" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}