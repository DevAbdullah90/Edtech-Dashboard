import { ShieldCheck, Lock, KeyRound, Fingerprint, AlertTriangle, Eye, FileLock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TimelineCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type SecurityEvent = {
  event: string;
  user: string;
  ip: string;
  time: string;
  severity: string;
  status: string;
};

const events: SecurityEvent[] = [
  { event: "Failed login attempt", user: "Unknown", ip: "192.168.1.45", time: "2026-09-02 08:12", severity: "High", status: "Blocked" },
  { event: "Password changed", user: "Ms. Sana Javed", ip: "192.168.1.10", time: "2026-09-02 07:55", severity: "Low", status: "Resolved" },
  { event: "New device login", user: "Mr. Imran Qureshi", ip: "10.0.0.23", time: "2026-09-01 18:30", severity: "Medium", status: "Verified" },
  { event: "2FA enabled", user: "Mrs. Ayesha Malik", ip: "192.168.1.15", time: "2026-09-01 14:20", severity: "Low", status: "Resolved" },
  { event: "Suspicious activity", user: "Unknown", ip: "203.0.113.7", time: "2026-08-31 23:45", severity: "High", status: "Blocked" },
  { event: "Role permission change", user: "Admin", ip: "192.168.1.5", time: "2026-08-30 10:00", severity: "Medium", status: "Resolved" },
];

const columns: Column<SecurityEvent>[] = [
  { key: "event", header: "Event", render: (r) => <span className="font-medium">{r.event}</span> },
  { key: "user", header: "User", render: (r) => r.user },
  { key: "ip", header: "IP Address", render: (r) => <Badge variant="outline">{r.ip}</Badge> },
  { key: "time", header: "Time", render: (r) => <span className="text-muted-foreground">{r.time}</span> },
  { key: "severity", header: "Severity", render: (r) => <StatusBadge status={r.severity} /> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function SecurityPage() {
  return (
    <StaticPageLayout
      title="Security"
      description="Monitor security events and manage system protection."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ShieldCheck} label="Security Score" value="92/100" />
        <StatCard icon={Lock} label="Blocked Threats" value="18" color="bg-red-500/10" />
        <StatCard icon={KeyRound} label="Active Sessions" value="312" color="bg-green-500/10" />
        <StatCard icon={Fingerprint} label="2FA Users" value="100%" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Security Overview"
        description="System protection status"
        items={[
          { label: "Encryption", value: "AES-256", icon: FileLock, color: "bg-blue-500/10" },
          { label: "Firewall", value: "Active", icon: ShieldCheck, color: "bg-green-500/10" },
          { label: "Threats Blocked", value: "18", icon: AlertTriangle, color: "bg-red-500/10" },
          { label: "Audit Logs", value: "Enabled", icon: Eye, color: "bg-amber-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Security Events"
            description="Recent security events and alerts"
            columns={columns}
            data={events}
          />
        }
        right={
          <TimelineCard
            title="Security Timeline"
            description="Recent security activity"
            items={[
              { title: "Failed login blocked", date: "Sep 2", description: "IP 192.168.1.45 - 3 attempts", status: "Blocked" },
              { title: "Password changed", date: "Sep 2", description: "Ms. Sana Javed" },
              { title: "New device login", date: "Sep 1", description: "Mr. Imran Qureshi - verified" },
              { title: "2FA enabled", date: "Sep 1", description: "Mrs. Ayesha Malik" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}