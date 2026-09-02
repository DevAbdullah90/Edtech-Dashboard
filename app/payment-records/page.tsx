import { Receipt, Banknote, CreditCard, Smartphone, TrendingUp, FileText, AlertCircle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, TimelineCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Payment = {
  receiptNo: string;
  student: string;
  class: string;
  amount: string;
  method: string;
  date: string;
  status: string;
};

const payments: Payment[] = [
  { receiptNo: "RCP-2026-0841", student: "Ahmed Khan", class: "Class 5-A", amount: "Rs. 5,000", method: "Bank Transfer", date: "2026-09-01", status: "Completed" },
  { receiptNo: "RCP-2026-0842", student: "Fatima Bibi", class: "Class 6-B", amount: "Rs. 5,000", method: "Cash", date: "2026-09-01", status: "Completed" },
  { receiptNo: "RCP-2026-0843", student: "Hassan Abbas", class: "Class 5-B", amount: "Rs. 5,000", method: "JazzCash", date: "2026-09-02", status: "Completed" },
  { receiptNo: "RCP-2026-0844", student: "Zainab Fatima", class: "Class 6-A", amount: "Rs. 5,000", method: "Credit Card", date: "2026-09-02", status: "Completed" },
  { receiptNo: "RCP-2026-0845", student: "Maryam Noor", class: "Class 8-A", amount: "Rs. 5,500", method: "Bank Transfer", date: "2026-09-02", status: "Completed" },
  { receiptNo: "RCP-2026-0846", student: "Bilal Ahmed", class: "Class 7-B", amount: "Rs. 5,500", method: "Cash", date: "2026-09-03", status: "Refunded" },
];

const columns: Column<Payment>[] = [
  { key: "receiptNo", header: "Receipt No", render: (r) => <span className="font-medium">{r.receiptNo}</span> },
  { key: "student", header: "Student", render: (r) => r.student },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "amount", header: "Amount", render: (r) => <span className="font-medium">{r.amount}</span> },
  { key: "method", header: "Method", render: (r) => <Badge variant="outline">{r.method}</Badge> },
  { key: "date", header: "Date", render: (r) => <span className="text-muted-foreground">{r.date}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function PaymentRecordsPage() {
  return (
    <StaticPageLayout
      title="Payment Records"
      description="Complete history of all fee payments and receipts."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Receipt} label="Total Payments" value="8,412" />
        <StatCard icon={Banknote} label="Total Amount" value="Rs. 42.5M" color="bg-green-500/10" />
        <StatCard icon={CreditCard} label="This Month" value="Rs. 6.2M" color="bg-amber-500/10" />
        <StatCard icon={TrendingUp} label="YoY Growth" value="+15%" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Payment Summary"
        description="All-time payment statistics"
        items={[
          { label: "Completed", value: "8,214", icon: Banknote, color: "bg-green-500/10" },
          { label: "Refunded", value: "98", icon: AlertCircle, color: "bg-red-500/10" },
          { label: "Receipts Issued", value: "8,412", icon: FileText, color: "bg-blue-500/10" },
          { label: "Avg. Payment", value: "Rs. 5,050", icon: Receipt, color: "bg-amber-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Recent Payments"
            description="Latest payment transactions with receipts"
            columns={columns}
            data={payments}
          />
        }
        right={
          <TimelineCard
            title="Payment Activity"
            description="Recent payment events"
            items={[
              { title: "Payment Received", date: "Sep 3", description: "Bilal Ahmed - Rs. 5,500 (Cash)", status: "Refunded" },
              { title: "Payment Received", date: "Sep 2", description: "Maryam Noor - Rs. 5,500 (Bank Transfer)" },
              { title: "Payment Received", date: "Sep 2", description: "Zainab Fatima - Rs. 5,000 (Credit Card)" },
              { title: "Payment Received", date: "Sep 1", description: "Ahmed Khan - Rs. 5,000 (Bank Transfer)" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}