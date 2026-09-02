import { ClipboardList, FileCheck, FileX, Clock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Application = {
  applicant: string;
  applicationNo: string;
  applyingFor: string;
  documents: string;
  submitted: string;
  status: string;
};

const applications: Application[] = [
  { applicant: "Hamza Ahmed", applicationNo: "ADM-2026-001", applyingFor: "Class 5-A", documents: "Complete", submitted: "2026-08-28", status: "Approved" },
  { applicant: "Areeba Khan", applicationNo: "ADM-2026-002", applyingFor: "Class 6-B", documents: "Complete", submitted: "2026-08-29", status: "Pending" },
  { applicant: "Usman Ali", applicationNo: "ADM-2026-003", applyingFor: "Class 7-A", documents: "Incomplete", submitted: "2026-08-30", status: "Pending" },
  { applicant: "Sara Malik", applicationNo: "ADM-2026-004", applyingFor: "Class 8-C", documents: "Complete", submitted: "2026-08-31", status: "Approved" },
  { applicant: "Talha Qureshi", applicationNo: "ADM-2026-005", applyingFor: "Class 5-B", documents: "Complete", submitted: "2026-09-01", status: "Rejected" },
  { applicant: "Hira Shahid", applicationNo: "ADM-2026-006", applyingFor: "Class 6-A", documents: "Incomplete", submitted: "2026-09-02", status: "Pending" },
];

const columns: Column<Application>[] = [
  { key: "applicant", header: "Applicant", render: (a) => <span className="font-medium">{a.applicant}</span> },
  { key: "applicationNo", header: "Application No", render: (a) => <span className="text-muted-foreground">{a.applicationNo}</span> },
  { key: "applyingFor", header: "Applying For", render: (a) => <Badge variant="outline">{a.applyingFor}</Badge> },
  { key: "documents", header: "Documents", render: (a) => <Badge variant={a.documents === "Complete" ? "success" : "outline"}>{a.documents}</Badge> },
  { key: "submitted", header: "Submitted", render: (a) => a.submitted },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function AdmissionApplicationsPage() {
  return (
    <StaticPageLayout
      title="Admission Applications"
      description="Review and process admission applications."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ClipboardList} label="Total Applications" value="86" />
        <StatCard icon={FileCheck} label="Approved" value="54" color="bg-green-500/10" />
        <StatCard icon={FileX} label="Rejected" value="4" color="bg-red-500/10" />
        <StatCard icon={Clock} label="Under Review" value="28" color="bg-amber-500/10" />
      </div>
      <DataTable
        title="Application Review"
        description="All admission applications and their review status"
        columns={columns}
        data={applications}
      />
    </StaticPageLayout>
  );
}