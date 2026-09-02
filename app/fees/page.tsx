import { Wallet, Banknote, TrendingUp, AlertCircle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Fee = {
  student: string;
  rollNo: string;
  class: string;
  monthlyFee: string;
  paid: string;
  balance: string;
  status: string;
};

const fees: Fee[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", monthlyFee: "Rs 5,000", paid: "Rs 5,000", balance: "Rs 0", status: "Paid" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", monthlyFee: "Rs 5,500", paid: "Rs 5,500", balance: "Rs 0", status: "Paid" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", monthlyFee: "Rs 6,000", paid: "Rs 4,000", balance: "Rs 2,000", status: "Pending" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", monthlyFee: "Rs 6,500", paid: "Rs 3,000", balance: "Rs 3,500", status: "Overdue" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", monthlyFee: "Rs 5,000", paid: "Rs 5,000", balance: "Rs 0", status: "Paid" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", monthlyFee: "Rs 5,500", paid: "Rs 5,500", balance: "Rs 0", status: "Paid" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7-B", monthlyFee: "Rs 6,000", paid: "Rs 2,000", balance: "Rs 4,000", status: "Overdue" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8-A", monthlyFee: "Rs 6,500", paid: "Rs 6,500", balance: "Rs 0", status: "Paid" },
];

const columns: Column<Fee>[] = [
  { key: "student", header: "Student", render: (f) => <span className="font-medium">{f.student}</span> },
  { key: "rollNo", header: "Roll No", render: (f) => <span className="text-muted-foreground">{f.rollNo}</span> },
  { key: "class", header: "Class", render: (f) => <Badge variant="outline">{f.class}</Badge> },
  { key: "monthlyFee", header: "Monthly Fee", render: (f) => f.monthlyFee },
  { key: "paid", header: "Paid", render: (f) => <span className="text-green-600">{f.paid}</span> },
  { key: "balance", header: "Balance", render: (f) => <span className={f.balance === "Rs 0" ? "text-muted-foreground" : "text-red-600"}>{f.balance}</span> },
  { key: "status", header: "Status", render: (f) => <StatusBadge status={f.status} /> },
];

export default function FeesPage() {
  return (
    <StaticPageLayout
      title="Fees"
      description="Manage student fee structures and payment status."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Wallet} label="Monthly Collection" value="Rs 6.2M" />
        <StatCard icon={Banknote} label="Collected" value="Rs 5.4M" color="bg-green-500/10" />
        <StatCard icon={TrendingUp} label="Collection Rate" value="87%" color="bg-amber-500/10" />
        <StatCard icon={AlertCircle} label="Overdue" value="Rs 820K" color="bg-red-500/10" />
      </div>
      <DataTable
        title="Fee Status"
        description="Monthly fee status for all students"
        columns={columns}
        data={fees}
      />
    </StaticPageLayout>
  );
}