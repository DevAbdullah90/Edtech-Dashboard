import { UserPlus, FileText, CheckCircle2, Clock, TrendingUp, Users, School, CalendarCheck } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Admission = {
  applicant: string;
  class: string;
  guardian: string;
  appliedDate: string;
  status: string;
};

const admissions: Admission[] = [
  { applicant: "Ali Raza", class: "Class 1-A", guardian: "Mr. Raza Ahmed", appliedDate: "2026-09-01", status: "Approved" },
  { applicant: "Hina Shahid", class: "Class 2-B", guardian: "Mrs. Shahid", appliedDate: "2026-09-01", status: "Pending" },
  { applicant: "Usman Tariq", class: "Class 3-A", guardian: "Mr. Tariq Mehmood", appliedDate: "2026-09-02", status: "Approved" },
  { applicant: "Sara Iqbal", class: "Class 4-C", guardian: "Mr. Iqbal Hussain", appliedDate: "2026-09-02", status: "Pending" },
  { applicant: "Hamza Yousaf", class: "Class 5-B", guardian: "Mr. Yousaf Ali", appliedDate: "2026-09-03", status: "Rejected" },
  { applicant: "Areeba Khan", class: "Class 6-A", guardian: "Mr. Khan", appliedDate: "2026-09-03", status: "Approved" },
];

const columns: Column<Admission>[] = [
  { key: "applicant", header: "Applicant", render: (r) => <span className="font-medium">{r.applicant}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "guardian", header: "Guardian", render: (r) => r.guardian },
  { key: "appliedDate", header: "Applied", render: (r) => <span className="text-muted-foreground">{r.appliedDate}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AdmissionsPage() {
  return (
    <StaticPageLayout
      title="Admissions"
      description="Manage new student admissions and enrollment."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={UserPlus} label="Applications" value="186" />
        <StatCard icon={CheckCircle2} label="Approved" value="142" color="bg-green-500/10" />
        <StatCard icon={Clock} label="Pending" value="32" color="bg-amber-500/10" />
        <StatCard icon={FileText} label="Rejected" value="12" color="bg-red-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Recent Applications"
            description="Latest admission applications received"
            columns={columns}
            data={admissions}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Admission Status"
              description="Application status distribution"
              items={[
                { label: "Approved", value: 76, display: "76%", color: "bg-green-500" },
                { label: "Pending", value: 17, display: "17%", color: "bg-amber-500" },
                { label: "Rejected", value: 7, display: "7%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Admission Overview"
              description="Admission season statistics"
              items={[
                { label: "Capacity", value: "200 seats", icon: Users, color: "bg-blue-500/10" },
                { label: "Filled", value: "142", icon: School, color: "bg-green-500/10" },
                { label: "Available", value: "58", icon: CalendarCheck, color: "bg-amber-500/10" },
                { label: "Conversion", value: "76%", icon: TrendingUp, color: "bg-purple-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}