import { FilePlus, Users, ClipboardList, CalendarClock } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Admission = {
  applicant: string;
  applyingFor: string;
  guardian: string;
  contact: string;
  submitted: string;
  status: string;
};

const admissions: Admission[] = [
  { applicant: "Hamza Ahmed", applyingFor: "Class 5-A", guardian: "Ahmed Raza", contact: "0311-2233445", submitted: "2026-08-28", status: "Approved" },
  { applicant: "Areeba Khan", applyingFor: "Class 6-B", guardian: "Khan Sahib", contact: "0312-3344556", submitted: "2026-08-29", status: "Pending" },
  { applicant: "Usman Ali", applyingFor: "Class 7-A", guardian: "Ali Hassan", contact: "0313-4455667", submitted: "2026-08-30", status: "Pending" },
  { applicant: "Sara Malik", applyingFor: "Class 8-C", guardian: "Malik Javed", contact: "0314-5566778", submitted: "2026-08-31", status: "Approved" },
  { applicant: "Talha Qureshi", applyingFor: "Class 5-B", guardian: "Qureshi Imran", contact: "0315-6677889", submitted: "2026-09-01", status: "Rejected" },
  { applicant: "Hira Shahid", applyingFor: "Class 6-A", guardian: "Shahid Mehmood", contact: "0316-7788990", submitted: "2026-09-02", status: "Pending" },
];

const columns: Column<Admission>[] = [
  { key: "applicant", header: "Applicant", render: (a) => <span className="font-medium">{a.applicant}</span> },
  { key: "applyingFor", header: "Applying For", render: (a) => <Badge variant="outline">{a.applyingFor}</Badge> },
  { key: "guardian", header: "Guardian", render: (a) => a.guardian },
  { key: "contact", header: "Contact", render: (a) => <span className="text-muted-foreground">{a.contact}</span> },
  { key: "submitted", header: "Submitted", render: (a) => a.submitted },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function OnlineAdmissionsPage() {
  return (
    <StaticPageLayout
      title="Online Admissions"
      description="Manage online admission applications and enrollment."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FilePlus} label="Applications" value="86" />
        <StatCard icon={Users} label="Approved" value="54" color="bg-green-500/10" />
        <StatCard icon={ClipboardList} label="Pending Review" value="28" color="bg-amber-500/10" />
        <StatCard icon={CalendarClock} label="Admission Deadline" value="Sep 30" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Admission Applications"
        description="Recent online admission applications"
        columns={columns}
        data={admissions}
      />
    </StaticPageLayout>
  );
}