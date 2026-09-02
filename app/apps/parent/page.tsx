import { UsersRound, Wallet, CalendarCheck, MessageSquare } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type ParentActivity = {
  activity: string;
  child: string;
  date: string;
  details: string;
  status: string;
};

const activities: ParentActivity[] = [
  { activity: "Fee Payment", child: "Ahmed Khan", date: "2026-09-01", details: "Rs 5,000 - Monthly Fee", status: "Paid" },
  { activity: "Attendance", child: "Ahmed Khan", date: "2026-09-02", details: "Present - 08:02 AM", status: "Present" },
  { activity: "Exam Result", child: "Ahmed Khan", date: "2026-08-30", details: "Mathematics - 92/100", status: "Approved" },
  { activity: "Assignment", child: "Ahmed Khan", date: "2026-09-01", details: "Fractions Worksheet - Submitted", status: "Approved" },
  { activity: "Message from Teacher", child: "Ahmed Khan", date: "2026-09-02", details: "Progress update from Ms. Sana", status: "New" },
  { activity: "Parent Meeting", child: "Ahmed Khan", date: "2026-09-10", details: "Parent-Teacher Meeting scheduled", status: "Pending" },
];

const columns: Column<ParentActivity>[] = [
  { key: "activity", header: "Activity", render: (a) => <span className="font-medium">{a.activity}</span> },
  { key: "child", header: "Child", render: (a) => a.child },
  { key: "date", header: "Date", render: (a) => a.date },
  { key: "details", header: "Details", render: (a) => <span className="text-muted-foreground">{a.details}</span> },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function ParentAppPage() {
  return (
    <StaticPageLayout
      title="Parent App"
      description="Track your child's progress, fees, and school activities."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UsersRound} label="Children" value="2" />
        <StatCard icon={Wallet} label="Fee Balance" value="Rs 0" color="bg-green-500/10" />
        <StatCard icon={CalendarCheck} label="Attendance" value="96.7%" color="bg-amber-500/10" />
        <StatCard icon={MessageSquare} label="Unread Messages" value="3" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Recent Activity"
        description="Latest updates for your children"
        columns={columns}
        data={activities}
      />
    </StaticPageLayout>
  );
}