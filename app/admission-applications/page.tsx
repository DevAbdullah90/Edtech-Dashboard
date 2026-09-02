import { FileText, CheckCircle2, Clock, XCircle, Search, UserCheck, CalendarClock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TimelineCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Application = {
  applicant: string;
  class: string;
  guardian: string;
  submitted: string;
  reviewedBy: string;
  status: string;
};

const applications: Application[] = [
  { applicant: "Ali Raza", class: "Class 1-A", guardian: "Mr. Raza Ahmed", submitted: "2026-09-01", reviewedBy: "Ms. Sana Javed", status: "Approved" },
  { applicant: "Hina Shahid", class: "Class 2-B", guardian: "Mrs. Shahid", submitted: "2026-09-01", reviewedBy: "—", status: "Pending" },
  { applicant: "Usman Tariq", class: "Class 3-A", guardian: "Mr. Tariq Mehmood", submitted: "2026-09-02", reviewedBy: "Mr. Imran Qureshi", status: "Approved" },
  { applicant: "Sara Iqbal", class: "Class 4-C", guardian: "Mr. Iqbal Hussain", submitted: "2026-09-02", reviewedBy: "—", status: "Pending" },
  { applicant: "Hamza Yousaf", class: "Class 5-B", guardian: "Mr. Yousaf Ali", submitted: "2026-09-03", reviewedBy: "Mrs. Ayesha Malik", status: "Rejected" },
  { applicant: "Areeba Khan", class: "Class 6-A", guardian: "Mr. Khan", submitted: "2026-09-03", reviewedBy: "Ms. Sana Javed", status: "Approved" },
];

const columns: Column<Application>[] = [
  { key: "applicant", header: "Applicant", render: (r) => <span className="font-medium">{r.applicant}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "guardian", header: "Guardian", render: (r) => r.guardian },
  { key: "submitted", header: "Submitted", render: (r) => <span className="text-muted-foreground">{r.submitted}</span> },
  { key: "reviewedBy", header: "Reviewed By", render: (r) => r.reviewedBy },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function AdmissionApplicationsPage() {
  return (
    <StaticPageLayout
      title="Admission Applications"
      description="Review and process student admission applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileText} label="Total Applications" value="186" />
        <StatCard icon={CheckCircle2} label="Approved" value="142" color="bg-green-500/10" />
        <StatCard icon={Clock} label="Pending Review" value="32" color="bg-amber-500/10" />
        <StatCard icon={XCircle} label="Rejected" value="12" color="bg-red-500/10" />
      </div>

      <InfoGridCard
        title="Review Pipeline"
        description="Application review workflow status"
        items={[
          { label: "Awaiting Review", value: "32", icon: Search, color: "bg-amber-500/10" },
          { label: "In Review", value: "18", icon: UserCheck, color: "bg-blue-500/10" },
          { label: "Interview Scheduled", value: "24", icon: CalendarClock, color: "bg-purple-500/10" },
          { label: "Final Decision", value: "142", icon: CheckCircle2, color: "bg-green-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Application List"
            description="All admission applications with review status"
            columns={columns}
            data={applications}
          />
        }
        right={
          <TimelineCard
            title="Application Timeline"
            description="Admission process milestones"
            items={[
              { title: "Application Submitted", date: "Sep 1", description: "186 applications received" },
              { title: "Document Verification", date: "Sep 2", description: "154 documents verified" },
              { title: "Interviews", date: "Sep 5", description: "24 interviews scheduled" },
              { title: "Final Decisions", date: "Sep 10", description: "142 approved so far" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}