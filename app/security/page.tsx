import { Shield, ShieldCheck, Lock, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type SecurityEvent = {
  event: string;
  type: string;
  user: string;
  ip: string;
  date: string;
  status: string;
};

const events: SecurityEvent[] = [
  { event: "Login attempt", type: "Authentication", user: "admin@hamdard.edu", ip: "192.168.1.100", date: "2026-09-02", status: "Approved" },
  { event: "Password change", type: "Account", user: "teacher@hamdard.edu", ip: "192.168.1.105", date: "2026-09-02", status: "Approved" },
  { event: "Failed login", type: "Authentication", user: "unknown", ip: "203.0.113.45", date: "2026-09-02", status: "Rejected" },
  { event: "Data export", type: "Data Access", user: "admin@hamdard.edu", ip: "192.168.1.100", date: "2026-09-01", status: "Approved" },
  { event: "Role change", type: "Permission", user: "admin@hamdard.edu", ip: "192.168.1.100", date: "2026-09-01", status: "Approved" },
  { event: "Suspicious activity", type: "Security", user: "unknown", ip: "198.51.100.23", date: "2026-08-31", status: "Rejected" },
];

const columns: Column<SecurityEvent>[] = [
  { key: "event", header: "Event", render: (e) => <span className="font-medium">{e.event}</span> },
  { key: "type", header: "Type", render: (e) => <Badge variant="outline">{e.type}</Badge> },
  { key: "user", header: "User", render: (e) => <span className="text-muted-foreground">{e.user}</span> },
  { key: "ip", header: "IP Address", render: (e) => <span className="text-muted-foreground">{e.ip}</span> },
  { key: "date", header: "Date", render: (e) => e.date },
  { key: "status", header: "Status", render: (e) => <StatusBadge status={e.status} /> },
];

export default function SecurityPage() {
  return (
    <StaticPageLayout
      title="Security & Data Protection"
      description="Monitor system security and data protection measures."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Shield} label="Security Level" value="High" />
        <StatCard icon={ShieldCheck} label="Protected Records" value="2,525" color="bg-green-500/10" />
        <StatCard icon={Lock} label="Encrypted Data" value="100%" color="bg-amber-500/10" />
        <StatCard icon={AlertTriangle} label="Threats Blocked" value="24" color="bg-red-500/10" />
      </div>
      <DataTable
        title="Security Events"
        description="Recent security and access events"
        columns={columns}
        data={events}
      />
    </StaticPageLayout>
  );
}