import { Receipt, Banknote, CreditCard, TrendingUp } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Payment = {
  receiptNo: string;
  student: string;
  amount: string;
  method: string;
  date: string;
  reference: string;
  status: string;
};

const payments: Payment[] = [
  { receiptNo: "RCP-2026-001", student: "Ahmed Khan", amount: "Rs 5,000", method: "Cash", date: "2026-09-01", reference: "CASH-001", status: "Paid" },
  { receiptNo: "RCP-2026-002", student: "Fatima Bibi", amount: "Rs 5,500", method: "Bank Transfer", date: "2026-09-01", reference: "TRF-88231", status: "Paid" },
  { receiptNo: "RCP-2026-003", student: "Hassan Abbas", amount: "Rs 5,000", method: "JazzCash", date: "2026-09-02", reference: "JZ-55671", status: "Paid" },
  { receiptNo: "RCP-2026-004", student: "Zainab Fatima", amount: "Rs 5,500", method: "Cash", date: "2026-09-02", reference: "CASH-002", status: "Paid" },
  { receiptNo: "RCP-2026-005", student: "Maryam Noor", amount: "Rs 6,500", method: "Bank Transfer", date: "2026-09-02", reference: "TRF-88245", status: "Paid" },
  { receiptNo: "RCP-2026-006", student: "Muhammad Ali", amount: "Rs 4,000", method: "Easypaisa", date: "2026-09-03", reference: "EP-11234", status: "Pending" },
];

const columns: Column<Payment>[] = [
  { key: "receiptNo", header: "Receipt No", render: (p) => <span className="font-medium">{p.receiptNo}</span> },
  { key: "student", header: "Student", render: (p) => p.student },
  { key: "amount", header: "Amount", render: (p) => <span className="font-medium">{p.amount}</span> },
  { key: "method", header: "Method", render: (p) => <Badge variant="outline">{p.method}</Badge> },
  { key: "date", header: "Date", render: (p) => p.date },
  { key: "reference", header: "Reference", render: (p) => <span className="text-muted-foreground">{p.reference}</span> },
  { key: "status", header: "Status", render: (p) => <StatusBadge status={p.status} /> },
];

export default function PaymentRecordsPage() {
  return (
    <StaticPageLayout
      title="Payment Records"
      description="Complete history of all fee payments and transactions."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Receipt} label="Total Transactions" value="12,480" />
        <StatCard icon={Banknote} label="Cash Payments" value="6,240" color="bg-green-500/10" />
        <StatCard icon={CreditCard} label="Digital Payments" value="6,240" color="bg-amber-500/10" />
        <StatCard icon={TrendingUp} label="Total Collected" value="Rs 48.2M" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Payment History"
        description="Recent payment transactions across all students"
        columns={columns}
        data={payments}
      />
    </StaticPageLayout>
  );
}