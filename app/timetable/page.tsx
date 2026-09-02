import { CalendarClock, Clock, BookOpen, Users, Coffee, GraduationCap, School } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
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

      <InfoGridCard
        title="Schedule Overview"
        description="Weekly schedule metrics"
        items={[
          { label: "Teaching Periods", value: "35", icon: BookOpen, color: "bg-blue-500/10" },
          { label: "Break Periods", value: "5", icon: Coffee, color: "bg-green-500/10" },
          { label: "Subjects / Day", value: "6", icon: GraduationCap, color: "bg-amber-500/10" },
          { label: "Rooms Used", value: "16", icon: School, color: "bg-purple-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Class 5-A Weekly Timetable"
            description="Standard weekly schedule for Class 5, Section A"
            columns={columns}
            data={timetable}
          />
        }
        right={
          <ProgressListCard
            title="Subject Time Allocation"
            description="Percentage of weekly teaching time"
            items={[
              { label: "Mathematics", value: 14, display: "14%", color: "bg-blue-500" },
              { label: "English", value: 14, display: "14%", color: "bg-green-500" },
              { label: "Science", value: 11, display: "11%", color: "bg-amber-500" },
              { label: "Urdu", value: 11, display: "11%", color: "bg-purple-500" },
              { label: "Computer", value: 9, display: "9%", color: "bg-cyan-500" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}