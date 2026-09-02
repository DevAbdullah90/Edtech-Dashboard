import { CalendarClock, Clock, BookOpen, Users } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Period = {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
};

const timetable: Period[] = [
  { time: "08:00 - 08:45", monday: "Mathematics", tuesday: "English", wednesday: "Science", thursday: "Urdu", friday: "Mathematics" },
  { time: "08:45 - 09:30", monday: "English", tuesday: "Mathematics", wednesday: "English", thursday: "Science", friday: "English" },
  { time: "09:30 - 10:15", monday: "Science", tuesday: "Urdu", wednesday: "Mathematics", thursday: "English", friday: "Science" },
  { time: "10:15 - 10:45", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
  { time: "10:45 - 11:30", monday: "Urdu", tuesday: "Science", wednesday: "Urdu", thursday: "Mathematics", friday: "Urdu" },
  { time: "11:30 - 12:15", monday: "Islamiat", tuesday: "Social Studies", wednesday: "Islamiat", thursday: "Social Studies", friday: "Islamiat" },
  { time: "12:15 - 01:00", monday: "Computer", tuesday: "Art & Craft", wednesday: "Computer", thursday: "Art & Craft", friday: "Computer" },
];

const columns: Column<Period>[] = [
  { key: "time", header: "Time", render: (p) => <span className="font-medium">{p.time}</span> },
  { key: "monday", header: "Monday", render: (p) => <TimetableCell value={p.monday} /> },
  { key: "tuesday", header: "Tuesday", render: (p) => <TimetableCell value={p.tuesday} /> },
  { key: "wednesday", header: "Wednesday", render: (p) => <TimetableCell value={p.wednesday} /> },
  { key: "thursday", header: "Thursday", render: (p) => <TimetableCell value={p.thursday} /> },
  { key: "friday", header: "Friday", render: (p) => <TimetableCell value={p.friday} /> },
];

function TimetableCell({ value }: { value: string }) {
  if (value === "Break") {
    return <Badge variant="outline" className="bg-muted">{value}</Badge>;
  }
  return <span>{value}</span>;
}

export default function TimetablePage() {
  return (
    <StaticPageLayout
      title="Timetable"
      description="Weekly class schedule for all sections."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={CalendarClock} label="Weekly Periods" value="42" />
        <StatCard icon={Clock} label="Periods / Day" value="7" color="bg-green-500/10" />
        <StatCard icon={BookOpen} label="Subjects Scheduled" value="9" color="bg-amber-500/10" />
        <StatCard icon={Users} label="Sections Covered" value="8" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Class 5-A Weekly Timetable"
        description="Standard weekly schedule for Class 5, Section A"
        columns={columns}
        data={timetable}
      />
    </StaticPageLayout>
  );
}