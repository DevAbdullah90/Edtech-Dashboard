import { Wallet, CheckCircle2, Clock, AlertCircle, TrendingUp, Receipt, Banknote } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type FeeRecord = {
  student: string;
  rollNo: string;
  class: string;
  feeType: string;
  amount: string;
  dueDate: string;
  status: string;
};

const fees: FeeRecord[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", feeType: "Tuition Fee", amount: "Rs. 5,000", dueDate: "2026-09-10", status: "Paid" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", feeType: "Tuition Fee", amount: "Rs. 5,000", dueDate: "2026-09-10", status: "Paid" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", class: "Class 7-A", feeType: "Tuition Fee", amount: "Rs. 5,500", dueDate: "2026-09-10", status: "Pending" },
  { student: "Ayesha Siddiqui", rollNo: "ST-2024-004", class: "Class 8-C", feeType: "Tuition Fee", amount: "Rs. 5,500", dueDate: "2026-09-10", status: "Overdue" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", feeType: "Tuition Fee", amount: "Rs. 5,000", dueDate: "2026-09-10", status: "Paid" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", feeType: "Tuition Fee", amount: "Rs. 5,000", dueDate: "2026-09-10", status: "Paid" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7-B", feeType: "Tuition Fee", amount: "Rs. 5,500", dueDate: "2026-09-10", status: "Pending" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8-A", feeType: "Tuition Fee", amount: "Rs. 5,500", dueDate: "2026-09-10", status: "Paid" },
];

const columns: Column<FeeRecord>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "feeType", header: "Fee Type", render: (r) => r.feeType },
  { key: "amount", header: "Amount", render: (r) => <span className="font-medium">{r.amount}</span> },
  { key: "dueDate", header: "Due Date", render: (r) => <span className="text-muted-foreground">{r.dueDate}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function FeesPage() {
  return (
    <StaticPageLayout
      title="Fees"
      description="Manage student tuition fees and payment schedules."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Wallet} label="Total Collected" value="Rs. 6.2M" />
        <StatCard icon={CheckCircle2} label="Paid" value="1,102" color="bg-green-500/10" />
        <StatCard icon={Clock} label="Pending" value="98" color="bg-amber-500/10" />
        <StatCard icon={AlertCircle} label="Overdue" value="48" color="bg-red-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Fee Records"
            description="September 2026 tuition fee records"
            columns={columns}
            data={fees}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Collection Rate"
              description="Fee collection status this month"
              items={[
                { label: "Paid", value: 88, display: "88%", color: "bg-green-500" },
                { label: "Pending", value: 8, display: "8%", color: "bg-amber-500" },
                { label: "Overdue", value: 4, display: "4%", color: "bg-red-500" },
              ]}
            />
            <InfoGridCard
              title="Monthly Summary"
              description="September 2026 fee summary"
              items={[
                { label: "Expected", value: "Rs. 7.0M", icon: Receipt, color: "bg-blue-500/10" },
                { label: "Collected", value: "Rs. 6.2M", icon: Banknote, color: "bg-green-500/10" },
                { label: "Outstanding", value: "Rs. 0.8M", icon: AlertCircle, color: "bg-red-500/10" },
                { label: "Growth", value: "+12%", icon: TrendingUp, color: "bg-amber-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}