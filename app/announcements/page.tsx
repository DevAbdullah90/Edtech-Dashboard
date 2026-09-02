import { Megaphone, Users, CalendarClock, Pin } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Announcement = {
  title: string;
  audience: string;
  author: string;
  date: string;
  pinned: string;
  status: string;
};

const announcements: Announcement[] = [
  { title: "Mid-Term Exam Schedule Released", audience: "All Students", author: "Principal Office", date: "2026-09-02", pinned: "Yes", status: "Active" },
  { title: "Parent-Teacher Meeting", audience: "All Parents", author: "Admin", date: "2026-09-01", pinned: "Yes", status: "Active" },
  { title: "School Closed - Independence Day", audience: "Everyone", author: "Admin", date: "2026-08-14", pinned: "No", status: "Completed" },
  { title: "New Computer Lab Opening", audience: "Class 6-8", author: "IT Department", date: "2026-08-28", pinned: "No", status: "Active" },
  { title: "Annual Sports Day Registration", audience: "All Students", author: "Sports Department", date: "2026-08-25", pinned: "No", status: "Active" },
  { title: "Fee Payment Deadline Reminder", audience: "All Parents", author: "Finance Office", date: "2026-08-20", pinned: "No", status: "Completed" },
];

const columns: Column<Announcement>[] = [
  { key: "title", header: "Announcement", render: (a) => <span className="font-medium">{a.title}</span> },
  { key: "audience", header: "Audience", render: (a) => <Badge variant="outline">{a.audience}</Badge> },
  { key: "author", header: "Author", render: (a) => a.author },
  { key: "date", header: "Date", render: (a) => a.date },
  { key: "pinned", header: "Pinned", render: (a) => a.pinned === "Yes" ? <Pin className="size-4 text-amber-500" /> : <span className="text-muted-foreground">—</span> },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function AnnouncementsPage() {
  return (
    <StaticPageLayout
      title="Announcements"
      description="Create and manage school-wide announcements."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Megaphone} label="Total Announcements" value="48" />
        <StatCard icon={Users} label="Reached" value="1,248" color="bg-green-500/10" />
        <StatCard icon={CalendarClock} label="This Month" value="12" color="bg-amber-500/10" />
        <StatCard icon={Pin} label="Pinned" value="2" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Announcement List"
        description="Recent school announcements and notices"
        columns={columns}
        data={announcements}
      />
    </StaticPageLayout>
  );
}