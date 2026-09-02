import { MessageSquare, Send, Inbox, Star, Clock, Users, Paperclip } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, LeaderboardCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Message = {
  from: string;
  to: string;
  subject: string;
  sentAt: string;
  priority: string;
  status: string;
};

const messages: Message[] = [
  { from: "Mr. Raza Ahmed", to: "Principal", subject: "Admission inquiry", sentAt: "2026-09-02", priority: "High", status: "Unread" },
  { from: "Ms. Sana Javed", to: "Admin Office", subject: "Class 6-B field trip", sentAt: "2026-09-02", priority: "Medium", status: "Read" },
  { from: "Mrs. Ayesha Malik", to: "Principal", subject: "Urdu curriculum update", sentAt: "2026-09-01", priority: "Medium", status: "Read" },
  { from: "Mr. Imran Qureshi", to: "Admin Office", subject: "Science lab equipment", sentAt: "2026-09-01", priority: "High", status: "Unread" },
  { from: "Parent - Mrs. Shahid", to: "Class Teacher", subject: "Hina's progress", sentAt: "2026-08-31", priority: "Low", status: "Read" },
  { from: "Mr. Hassan Sheikh", to: "IT Dept", subject: "Computer lab access", sentAt: "2026-08-30", priority: "Medium", status: "Read" },
];

const columns: Column<Message>[] = [
  { key: "from", header: "From", render: (r) => <span className="font-medium">{r.from}</span> },
  { key: "to", header: "To", render: (r) => <Badge variant="outline">{r.to}</Badge> },
  { key: "subject", header: "Subject", render: (r) => r.subject },
  { key: "sentAt", header: "Sent", render: (r) => <span className="text-muted-foreground">{r.sentAt}</span> },
  { key: "priority", header: "Priority", render: (r) => <StatusBadge status={r.priority} /> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function MessagesPage() {
  return (
    <StaticPageLayout
      title="Messages"
      description="Internal messaging between staff, parents, and administration."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={MessageSquare} label="Total Messages" value="1,842" />
        <StatCard icon={Inbox} label="Unread" value="124" color="bg-amber-500/10" />
        <StatCard icon={Send} label="Sent" value="1,560" color="bg-green-500/10" />
        <StatCard icon={Star} label="Starred" value="48" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Messaging Stats"
        description="Message volume and activity"
        items={[
          { label: "This Week", value: "320", icon: MessageSquare, color: "bg-blue-500/10" },
          { label: "Avg. Response", value: "2.4 hrs", icon: Clock, color: "bg-green-500/10" },
          { label: "Active Users", value: "86", icon: Users, color: "bg-amber-500/10" },
          { label: "With Attachments", value: "210", icon: Paperclip, color: "bg-purple-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Recent Messages"
            description="Latest internal messages"
            columns={columns}
            data={messages}
          />
        }
        right={
          <LeaderboardCard
            title="Most Active"
            description="Staff with highest message activity"
            items={[
              { rank: 1, name: "Ms. Sana Javed", value: "312 msgs", img: "https://i.pravatar.cc/150?img=16", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
              { rank: 2, name: "Mr. Imran Qureshi", value: "278 msgs", img: "https://i.pravatar.cc/150?img=12", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
              { rank: 3, name: "Mrs. Ayesha Malik", value: "245 msgs", img: "https://i.pravatar.cc/150?img=26", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
              { rank: 4, name: "Mr. Hassan Sheikh", value: "198 msgs", img: "https://i.pravatar.cc/150?img=33" },
              { rank: 5, name: "Ms. Rabia Khan", value: "176 msgs", img: "https://i.pravatar.cc/150?img=44" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}