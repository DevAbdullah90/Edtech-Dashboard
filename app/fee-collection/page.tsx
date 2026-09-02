import { HandCoins, Banknote, CreditCard, Receipt } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Collection = {
  student: string;
  rollNo: string;
  amount: string;
  method: string;
  date: string;
  receiptNo: string;
  status: string;
};

const collections: Collection[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", amount: "Rs 5,000", method: "Cash", date: "2026-09-01", receiptNo: "RCP-2026-001", status: "Paid" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", amount: "Rs 5,500", method: "Bank Transfer", date: "2026-09-01", receiptNo: "RCP-2026-002", status: "Paid" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", amount: "Rs 5,000", method: "JazzCash", date: "2026-09-02", receiptNo: "RCP-2026-003", status: "Paid" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", amount: "Rs 5,500", method: "Cash", date: "2026-09-02", receiptNo: "RCP-2026-004", status: "Paid" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", amount: "Rs 6,500", method: "Bank Transfer", date: "2026-09-02", receiptNo: "RCP-2026-005", status: "Paid" },
  { student: "Muhammad Ali", rollNo: "ST-2024-003", amount: "Rs 4,000", method: "Easypaisa", date: "2026-09-03", receiptNo: "RCP-2026-006", status: "Pending" },
];

const columns: Column<Collection>[] = [
  { key: "student", header: "Student", render: (c) => <span className="font-medium">{c.student}</span> },
  { key: "rollNo", header: "Roll No", render: (c) => <span className="text-muted-foreground">{c.rollNo}</span> },
  { key: "amount", header: "Amount", render: (c) => <span className="font-medium">{c.amount}</span> },
  { key: "method", header: "Method", render: (c) => <Badge variant="outline">{c.method}</Badge> },
  { key: "date", header: "Date", render: (c) => c.date },
  { key: "receiptNo", header: "Receipt No", render: (c) => <span className="text-muted-foreground">{c.receiptNo}</span> },
  { key: "status", header: "Status", render: (c) => <StatusBadge status={c.status} /> },
];

export default function FeeCollectionPage() {
  return (
    <StaticPageLayout
      title="Fee Collection"
      description="Track daily fee collections and payment methods."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={HandCoins} label="Today's Collection" value="Rs 86,500" />
        <StatCard icon={Banknote} label="Cash" value="Rs 42,000" color="bg-green-500/10" />
        <StatCard icon={CreditCard} label="Digital Payments" value="Rs 44,500" color="bg-amber-500/10" />
        <StatCard icon={Receipt} label="Receipts Issued" value="18" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Recent Collections"
        description="Latest fee collection transactions"
        columns={columns}
        data={collections}
      />
    </StaticPageLayout>
  );
}