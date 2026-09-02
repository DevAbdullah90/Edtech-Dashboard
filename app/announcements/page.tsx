import { Megaphone, CalendarClock, Pin, Users, Bell, AlertTriangle, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TimelineCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Announcement = {
  title: string;
  audience: string;
  author: string;
  date: string;
  priority: string;
  status: string;
};

const announcements: Announcement[] = [
  { title: "Mid-Term Exam Schedule Released", audience: "All Students", author: "Principal", date: "2026-09-02", priority: "High", status: "Published" },
  { title: "Parent-Teacher Meeting", audience: "Parents", author: "Admin Office", date: "2026-09-01", priority: "Medium", status: "Published" },
  { title: "School Closed - National Holiday", audience: "Everyone", author: "Principal", date: "2026-08-30", priority: "High", status: "Published" },
  { title: "New Computer Lab Inauguration", audience: "All Students", author: "IT Department", date: "2026-08-28", priority: "Low", status: "Published" },
  { title: "Sports Day Registration", audience: "Students", author: "Sports Dept", date: "2026-08-25", priority: "Medium", status: "Draft" },
  { title: "Fee Payment Deadline Reminder", audience: "Parents", author: "Finance Office", date: "2026-08-24", priority: "High", status: "Published" },
];

const columns: Column<Announcement>[] = [
  { key: "title", header: "Announcement", render: (r) => <span className="font-medium">{r.title}</span> },
  { key: "audience", header: "Audience", render: (r) => <Badge variant="outline">{r.audience}</Badge> },
  { key: "author", header: "Author", render: (r) => r.author },
  { key: "date", header: "Date", render: (r) => <span className="text-muted-foreground">{r.date}</span> },
  { key: "priority", header: "Priority", render: (r) => <StatusBadge status={r.priority} /> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AnnouncementsPage() {
  return (
    <StaticPageLayout
      title="Announcements"
      description="Create and publish announcements to students, parents, and staff."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Megaphone} label="Total Published" value="48" />
        <StatCard icon={Pin} label="Pinned" value="3" color="bg-amber-500/10" />
        <StatCard icon={Users} label="Reached" value="2,400" color="bg-green-500/10" />
        <StatCard icon={CalendarClock} label="This Month" value="12" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Announcement Stats"
        description="Announcement reach and engagement"
        items={[
          { label: "High Priority", value: "18", icon: AlertTriangle, color: "bg-red-500/10" },
          { label: "Medium Priority", value: "20", icon: Bell, color: "bg-amber-500/10" },
          { label: "Low Priority", value: "10", icon: CheckCircle2, color: "bg-green-500/10" },
          { label: "Avg. Read Rate", value: "92%", icon: Users, color: "bg-blue-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Recent Announcements"
            description="Latest announcements published to the school community"
            columns={columns}
            data={announcements}
          />
        }
        right={
          <TimelineCard
            title="Publishing History"
            description="Recent announcement activity"
            items={[
              { title: "Mid-Term Exam Schedule Released", date: "Sep 2", description: "Published to all students", status: "Published" },
              { title: "Parent-Teacher Meeting", date: "Sep 1", description: "Published to parents" },
              { title: "School Closed - National Holiday", date: "Aug 30", description: "Published to everyone" },
              { title: "New Computer Lab Inauguration", date: "Aug 28", description: "Published to all students" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}