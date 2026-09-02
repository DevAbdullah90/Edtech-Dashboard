import { Wallet, TrendingUp, TrendingDown, Banknote, Receipt, AlertTriangle, PiggyBank } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { ProgressListCard, InfoGridCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type FinancialReport = {
  category: string;
  budget: string;
  spent: string;
  remaining: string;
  utilization: string;
  status: string;
};

const reports: FinancialReport[] = [
  { category: "Salaries", budget: "Rs. 3.5M", spent: "Rs. 3.2M", remaining: "Rs. 0.3M", utilization: "91%", status: "On Track" },
  { category: "Infrastructure", budget: "Rs. 1.2M", spent: "Rs. 0.9M", remaining: "Rs. 0.3M", utilization: "75%", status: "On Track" },
  { category: "Teaching Materials", budget: "Rs. 0.8M", spent: "Rs. 0.6M", remaining: "Rs. 0.2M", utilization: "75%", status: "On Track" },
  { category: "Technology", budget: "Rs. 0.6M", spent: "Rs. 0.55M", remaining: "Rs. 0.05M", utilization: "92%", status: "Over Budget" },
  { category: "Utilities", budget: "Rs. 0.4M", spent: "Rs. 0.3M", remaining: "Rs. 0.1M", utilization: "75%", status: "On Track" },
  { category: "Extracurricular", budget: "Rs. 0.3M", spent: "Rs. 0.2M", remaining: "Rs. 0.1M", utilization: "67%", status: "On Track" },
];

const columns: Column<FinancialReport>[] = [
  { key: "category", header: "Category", render: (r) => <span className="font-medium">{r.category}</span> },
  { key: "budget", header: "Budget", render: (r) => r.budget },
  { key: "spent", header: "Spent", render: (r) => r.spent },
  { key: "remaining", header: "Remaining", render: (r) => <span className="text-muted-foreground">{r.remaining}</span> },
  { key: "utilization", header: "Utilization", render: (r) => <Badge variant="outline">{r.utilization}</Badge> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function FinancialReportsPage() {
  return (
    <StaticPageLayout
      title="Financial Reports"
      description="Budget utilization and financial health reports."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Wallet} label="Total Budget" value="Rs. 6.8M" />
        <StatCard icon={TrendingUp} label="Revenue" value="Rs. 7.2M" color="bg-green-500/10" />
        <StatCard icon={TrendingDown} label="Expenses" value="Rs. 5.75M" color="bg-red-500/10" />
        <StatCard icon={PiggyBank} label="Surplus" value="Rs. 1.45M" color="bg-amber-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Budget Utilization"
            description="Budget allocation and spending by category"
            columns={columns}
            data={reports}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Budget Utilization"
              description="Percentage of budget spent per category"
              items={[
                { label: "Technology", value: 92, display: "92%", color: "bg-red-500" },
                { label: "Salaries", value: 91, display: "91%", color: "bg-amber-500" },
                { label: "Infrastructure", value: 75, display: "75%", color: "bg-blue-500" },
                { label: "Teaching Materials", value: 75, display: "75%", color: "bg-green-500" },
              ]}
            />
            <InfoGridCard
              title="Financial Health"
              description="Key financial indicators"
              items={[
                { label: "Revenue Growth", value: "+15%", icon: TrendingUp, color: "bg-green-500/10" },
                { label: "Over Budget", value: "1 category", icon: AlertTriangle, color: "bg-red-500/10" },
                { label: "Fee Collection", value: "88%", icon: Receipt, color: "bg-blue-500/10" },
                { label: "Cash Reserves", value: "Rs. 2.1M", icon: Banknote, color: "bg-amber-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}