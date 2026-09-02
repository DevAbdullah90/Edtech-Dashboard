import { HeartHandshake, Users, MessageSquare, Phone } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Parent = {
  name: string;
  student: string;
  relation: string;
  email: string;
  phone: string;
  status: string;
};

const parents: Parent[] = [
  { name: "Imran Khan", student: "Ahmed Khan", relation: "Father", email: "imran.khan@email.com", phone: "0300-1234567", status: "Active" },
  { name: "Ali Raza", student: "Fatima Bibi", relation: "Father", email: "ali.raza@email.com", phone: "0301-2345678", status: "Active" },
  { name: "Hassan Ali", student: "Muhammad Ali", relation: "Father", email: "hassan.ali@email.com", phone: "0302-3456789", status: "Active" },
  { name: "Usman Siddiqui", student: "Ayesha Siddiqui", relation: "Father", email: "usman.s@email.com", phone: "0303-4567890", status: "Inactive" },
  { name: "Kashif Ali", student: "Zainab Fatima", relation: "Father", email: "kashif.ali@email.com", phone: "0305-6789012", status: "Active" },
  { name: "Noor Ahmed", student: "Maryam Noor", relation: "Father", email: "noor.ahmed@email.com", phone: "0307-8901234", status: "Active" },
];

const columns: Column<Parent>[] = [
  { key: "name", header: "Parent Name", render: (p) => <span className="font-medium">{p.name}</span> },
  { key: "student", header: "Student", render: (p) => p.student },
  { key: "relation", header: "Relation", render: (p) => <Badge variant="outline">{p.relation}</Badge> },
  { key: "email", header: "Email", render: (p) => <span className="text-muted-foreground">{p.email}</span> },
  { key: "phone", header: "Phone", render: (p) => <span className="text-muted-foreground">{p.phone}</span> },
  { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
];

export default function ParentsPage() {
  return (
    <StaticPageLayout
      title="Parents"
      description="Manage parent/guardian accounts and communication preferences."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={HeartHandshake} label="Total Parents" value="1,186" />
        <StatCard icon={Users} label="Active Accounts" value="1,142" color="bg-green-500/10" />
        <StatCard icon={MessageSquare} label="Messages Sent" value="3,240" color="bg-amber-500/10" />
        <StatCard icon={Phone} label="Verified Contacts" value="1,170" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Parent Directory"
        description="Parent/guardian accounts linked to student records"
        columns={columns}
        data={parents}
      />
    </StaticPageLayout>
  );
}