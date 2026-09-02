import { FileSpreadsheet, TrendingUp, TrendingDown, Wallet } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type FinancialReport = {
  month: string;
  collected: string;
  expenses: string;
  balance: string;
  collectionRate: string;
  status: string;
};

const reports: FinancialReport[] = [
  { month: "April 2026", collected: "Rs 5.8M", expenses: "Rs 4.2M", balance: "Rs 1.6M", collectionRate: "92%", status: "Good" },
  { month: "May 2026", collected: "Rs 6.1M", expenses: "Rs 4.5M", balance: "Rs 1.6M", collectionRate: "94%", status: "Good" },
  { month: "June 2026", collected: "Rs 5.9M", expenses: "Rs 4.8M", balance: "Rs 1.1M", collectionRate: "91%", status: "Good" },
  { month: "July 2026", collected: "Rs 6.3M", expenses: "Rs 5.0M", balance: "Rs 1.3M", collectionRate: "95%", status: "Excellent" },
  { month: "August 2026", collected: "Rs 6.2M", expenses: "Rs 5.1M", balance: "Rs 1.1M", collectionRate: "93%", status: "Good" },
];

const columns: Column<FinancialReport>[] = [
  { key: "month", header: "Month", render: (r) => <span className="font-medium">{r.month}</span> },
  { key: "collected", header: "Collected", render: (r) => <span className="text-green-600">{r.collected}</span> },
  { key: "expenses", header: "Expenses", render: (r) => <span className="text-red-600">{r.expenses}</span> },
  { key: "balance", header: "Balance", render: (r) => <span className="font-medium">{r.balance}</span> },
  { key: "collectionRate", header: "Collection Rate", render: (r) => r.collectionRate },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function FinancialReportsPage() {
  return (
    <StaticPageLayout
      title="Financial Reports"
      description="Monthly financial summaries and collection analysis."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileSpreadsheet} label="Total Collected" value="Rs 30.3M" />
        <StatCard icon={TrendingUp} label="Avg Collection" value="93%" color="bg-green-500/10" />
        <StatCard icon={TrendingDown} label="Total Expenses" value="Rs 23.6M" color="bg-red-500/10" />
        <StatCard icon={Wallet} label="Net Balance" value="Rs 6.7M" color="bg-amber-500/10" />
      </div>
      <DataTable
        title="Monthly Financial Summary"
        description="Financial performance for the current academic year"
        columns={columns}
        data={reports}
      />
    </StaticPageLayout>
  );
}