import { Bell, CheckCheck, AlertTriangle, Info, Clock, Mail, MessageSquare } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Notification = {
  title: string;
  type: string;
  recipient: string;
  sentAt: string;
  channel: string;
  status: string;
};

const notifications: Notification[] = [
  { title: "Fee payment due", type: "Reminder", recipient: "Parents", sentAt: "2026-09-02", channel: "SMS", status: "Sent" },
  { title: "Exam schedule released", type: "Info", recipient: "Students", sentAt: "2026-09-02", channel: "Email", status: "Sent" },
  { title: "Attendance below 80%", type: "Alert", recipient: "Parents", sentAt: "2026-09-01", channel: "SMS", status: "Sent" },
  { title: "Parent-teacher meeting", type: "Event", recipient: "Parents", sentAt: "2026-09-01", channel: "Email", status: "Sent" },
  { title: "New assignment posted", type: "Info", recipient: "Students", sentAt: "2026-08-31", channel: "In-App", status: "Sent" },
  { title: "Sports day registration", type: "Event", recipient: "Students", sentAt: "2026-08-30", channel: "In-App", status: "Failed" },
];

const columns: Column<Notification>[] = [
  { key: "title", header: "Notification", render: (r) => <span className="font-medium">{r.title}</span> },
  { key: "type", header: "Type", render: (r) => <Badge variant="outline">{r.type}</Badge> },
  { key: "recipient", header: "Recipient", render: (r) => r.recipient },
  { key: "sentAt", header: "Sent At", render: (r) => <span className="text-muted-foreground">{r.sentAt}</span> },
  { key: "channel", header: "Channel", render: (r) => <Badge variant="outline">{r.channel}</Badge> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function NotificationsPage() {
  return (
    <StaticPageLayout
      title="Notifications"
      description="Send and track notifications across all channels."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Bell} label="Total Sent" value="3,240" />
        <StatCard icon={CheckCheck} label="Delivered" value="3,198" color="bg-green-500/10" />
        <StatCard icon={AlertTriangle} label="Failed" value="42" color="bg-red-500/10" />
        <StatCard icon={Clock} label="Pending" value="18" color="bg-amber-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Notification Log"
            description="Recent notifications sent across all channels"
            columns={columns}
            data={notifications}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Delivery Rate"
              description="Notification delivery by channel"
              items={[
                { label: "SMS", value: 98, display: "98%", color: "bg-green-500" },
                { label: "Email", value: 96, display: "96%", color: "bg-blue-500" },
                { label: "In-App", value: 99, display: "99%", color: "bg-purple-500" },
              ]}
            />
            <InfoGridCard
              title="Channel Usage"
              description="Notifications sent per channel"
              items={[
                { label: "SMS", value: "1,480", icon: MessageSquare, color: "bg-green-500/10" },
                { label: "Email", value: "1,120", icon: Mail, color: "bg-blue-500/10" },
                { label: "In-App", value: "640", icon: Bell, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}