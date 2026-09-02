import { UserCog, Users, Wallet, TrendingUp } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type AdminMetric = {
  metric: string;
  value: string;
  change: string;
  period: string;
  status: string;
};

const metrics: AdminMetric[] = [
  { metric: "Total Students", value: "1,248", change: "+86 this term", period: "2026-2027", status: "Good" },
  { metric: "Total Teachers", value: "84", change: "+5 this year", period: "2026-2027", status: "Good" },
  { metric: "Monthly Fee Collection", value: "Rs 6.2M", change: "+8% vs last month", period: "August 2026", status: "Excellent" },
  { metric: "Attendance Rate", value: "94.2%", change: "+1.2% vs last month", period: "August 2026", status: "Good" },
  { metric: "Admission Applications", value: "86", change: "54 approved", period: "2026-2027", status: "Good" },
  { metric: "Exam Pass Rate", value: "94.5%", change: "+2.1% vs last term", period: "Mid-Term", status: "Excellent" },
];

const columns: Column<AdminMetric>[] = [
  { key: "metric", header: "Metric", render: (m) => <span className="font-medium">{m.metric}</span> },
  { key: "value", header: "Value", render: (m) => <span className="font-medium">{m.value}</span> },
  { key: "change", header: "Change", render: (m) => <span className="text-green-600">{m.change}</span> },
  { key: "period", header: "Period", render: (m) => <Badge variant="outline">{m.period}</Badge> },
  { key: "status", header: "Status", render: (m) => <StatusBadge status={m.status} /> },
];

export default function AdminAppPage() {
  return (
    <StaticPageLayout
      title="Principal / Admin App"
      description="Overview of school operations for the principal and administrators."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UserCog} label="Admin Users" value="2" />
        <StatCard icon={Users} label="Total Users" value="2,525" color="bg-green-500/10" />
        <StatCard icon={Wallet} label="Monthly Revenue" value="Rs 6.2M" color="bg-amber-500/10" />
        <StatCard icon={TrendingUp} label="Growth Rate" value="8.2%" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="School Overview"
        description="Key performance indicators for the current academic year"
        columns={columns}
        data={metrics}
      />
    </StaticPageLayout>
  );
}