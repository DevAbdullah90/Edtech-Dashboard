import { Bell, BellRing, BellOff, MessageSquare } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Notification = {
  title: string;
  type: string;
  recipient: string;
  channel: string;
  date: string;
  status: string;
};

const notifications: Notification[] = [
  { title: "Fee payment reminder", type: "Fee", recipient: "All Parents", channel: "SMS + Email", date: "2026-09-02", status: "Sent" },
  { title: "Exam schedule published", type: "Academic", recipient: "All Students", channel: "App Push", date: "2026-09-02", status: "Sent" },
  { title: "Attendance alert", type: "Attendance", recipient: "Ayesha Siddiqui", channel: "SMS", date: "2026-09-02", status: "Sent" },
  { title: "Parent-teacher meeting", type: "Event", recipient: "All Parents", channel: "Email", date: "2026-09-01", status: "Sent" },
  { title: "Assignment due reminder", type: "Academic", recipient: "Class 5-A", channel: "App Push", date: "2026-09-01", status: "Sent" },
  { title: "New announcement", type: "General", recipient: "Everyone", channel: "All Channels", date: "2026-08-28", status: "Sent" },
];

const columns: Column<Notification>[] = [
  { key: "title", header: "Notification", render: (n) => <span className="font-medium">{n.title}</span> },
  { key: "type", header: "Type", render: (n) => <Badge variant="outline">{n.type}</Badge> },
  { key: "recipient", header: "Recipient", render: (n) => n.recipient },
  { key: "channel", header: "Channel", render: (n) => n.channel },
  { key: "date", header: "Date", render: (n) => n.date },
  { key: "status", header: "Status", render: (n) => <StatusBadge status={n.status} /> },
];

export default function NotificationsPage() {
  return (
    <StaticPageLayout
      title="Notifications"
      description="Manage system notifications and alerts."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Bell} label="Total Sent" value="3,420" />
        <StatCard icon={BellRing} label="Sent Today" value="86" color="bg-green-500/10" />
        <StatCard icon={BellOff} label="Failed" value="12" color="bg-red-500/10" />
        <StatCard icon={MessageSquare} label="Delivery Rate" value="99.6%" color="bg-amber-500/10" />
      </div>
      <DataTable
        title="Notification History"
        description="Recent notifications sent to students, parents, and staff"
        columns={columns}
        data={notifications}
      />
    </StaticPageLayout>
  );
}