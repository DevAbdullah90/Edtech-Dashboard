import { Users, Wallet, Bell, CalendarClock, FileText, MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TimelineCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Child = {
  child: string;
  class: string;
  attendance: string;
  avgScore: string;
  feeStatus: string;
  status: string;
};

const children: Child[] = [
  { child: "Ahmed Khan", class: "Class 5-A", attendance: "96%", avgScore: "92%", feeStatus: "Paid", status: "Good" },
  { child: "Ayesha Khan", class: "Class 3-B", attendance: "94%", avgScore: "88%", feeStatus: "Paid", status: "Good" },
];

const columns: Column<Child>[] = [
  { key: "child", header: "Child", render: (r) => <span className="font-medium">{r.child}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "attendance", header: "Attendance", render: (r) => r.attendance },
  { key: "avgScore", header: "Avg Score", render: (r) => <span className="font-medium">{r.avgScore}</span> },
  { key: "feeStatus", header: "Fee Status", render: (r) => <StatusBadge status={r.feeStatus} /> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function ParentAppPage() {
  return (
    <StaticPageLayout
      title="Parent App"
      description="Parent application for monitoring children's progress."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="My Children" value="2" />
        <StatCard icon={Wallet} label="Fees Paid" value="Rs. 10,000" color="bg-green-500/10" />
        <StatCard icon={Bell} label="Notifications" value="8" color="bg-amber-500/10" />
        <StatCard icon={CalendarClock} label="Events" value="3" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="My Children"
            description="Overview of children's academic progress"
            columns={columns}
            data={children}
          />
        }
        right={
          <>
            <TimelineCard
              title="Recent Activity"
              description="Latest updates on children"
              items={[
                { title: "Fee payment due", date: "Sep 10", description: "Tuition fee for September" },
                { title: "Mid-term exam", date: "Sep 15", description: "Ahmed - Mathematics" },
                { title: "Parent-teacher meeting", date: "Sep 20", description: "Class 5-A" },
                { title: "Sports day", date: "Sep 25", description: "Annual sports event" },
              ]}
            />
            <InfoGridCard
              title="Parent Tools"
              description="Features available to parents"
              items={[
                { label: "Pay Fees", value: "Online", icon: Wallet, color: "bg-green-500/10" },
                { label: "View Reports", value: "Termly", icon: FileText, color: "bg-blue-500/10" },
                { label: "Message Teacher", value: "Available", icon: MessageSquare, color: "bg-amber-500/10" },
                { label: "Track Progress", value: "Live", icon: TrendingUp, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}