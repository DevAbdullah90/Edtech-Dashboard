import { MessageSquare, Send, Inbox, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Message = {
  from: string;
  subject: string;
  to: string;
  date: string;
  read: string;
  status: string;
};

const messages: Message[] = [
  { from: "Imran Khan", subject: "Question about Ahmed's progress", to: "Class Teacher", date: "2026-09-02", read: "No", status: "New" },
  { from: "Ali Raza", subject: "Request for fee extension", to: "Finance Office", date: "2026-09-02", read: "No", status: "New" },
  { from: "Ms. Sana Javed", subject: "English assignment update", to: "Class 6-B", date: "2026-09-01", read: "Yes", status: "Read" },
  { from: "Principal Office", subject: "Staff meeting reminder", to: "All Teachers", date: "2026-09-01", read: "Yes", status: "Read" },
  { from: "Hassan Ali", subject: "Medical leave for Muhammad", to: "Class Teacher", date: "2026-08-31", read: "Yes", status: "Read" },
  { from: "IT Department", subject: "System maintenance notice", to: "All Staff", date: "2026-08-30", read: "Yes", status: "Read" },
];

const columns: Column<Message>[] = [
  { key: "from", header: "From", render: (m) => <span className="font-medium">{m.from}</span> },
  { key: "subject", header: "Subject", render: (m) => m.subject },
  { key: "to", header: "To", render: (m) => <Badge variant="outline">{m.to}</Badge> },
  { key: "date", header: "Date", render: (m) => m.date },
  { key: "read", header: "Read", render: (m) => m.read === "No" ? <Badge variant="default">Unread</Badge> : <span className="text-muted-foreground">Read</span> },
  { key: "status", header: "Status", render: (m) => <StatusBadge status={m.status} /> },
];

export default function MessagesPage() {
  return (
    <StaticPageLayout
      title="Messages"
      description="Internal messaging between staff, parents, and students."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={MessageSquare} label="Total Messages" value="1,240" />
        <StatCard icon={Send} label="Sent Today" value="38" color="bg-green-500/10" />
        <StatCard icon={Inbox} label="Unread" value="12" color="bg-amber-500/10" />
        <StatCard icon={Clock} label="Avg Response" value="2.5 hrs" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Message Inbox"
        description="Recent messages received in the system"
        columns={columns}
        data={messages}
      />
    </StaticPageLayout>
  );
}