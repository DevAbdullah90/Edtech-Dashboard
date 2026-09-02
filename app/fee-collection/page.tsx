import { HandCoins, Banknote, CreditCard, Smartphone, TrendingUp, Receipt, Wallet } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, LeaderboardCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Collection = {
  student: string;
  rollNo: string;
  class: string;
  amount: string;
  method: string;
  date: string;
  status: string;
};

const collections: Collection[] = [
  { student: "Ahmed Khan", rollNo: "ST-2024-001", class: "Class 5-A", amount: "Rs. 5,000", method: "Bank Transfer", date: "2026-09-01", status: "Completed" },
  { student: "Fatima Bibi", rollNo: "ST-2024-002", class: "Class 6-B", amount: "Rs. 5,000", method: "Cash", date: "2026-09-01", status: "Completed" },
  { student: "Hassan Abbas", rollNo: "ST-2024-005", class: "Class 5-B", amount: "Rs. 5,000", method: "JazzCash", date: "2026-09-02", status: "Completed" },
  { student: "Zainab Fatima", rollNo: "ST-2024-006", class: "Class 6-A", amount: "Rs. 5,000", method: "Credit Card", date: "2026-09-02", status: "Completed" },
  { student: "Maryam Noor", rollNo: "ST-2024-008", class: "Class 8-A", amount: "Rs. 5,500", method: "Bank Transfer", date: "2026-09-02", status: "Completed" },
  { student: "Bilal Ahmed", rollNo: "ST-2024-007", class: "Class 7-B", amount: "Rs. 5,500", method: "Cash", date: "2026-09-03", status: "Pending" },
];

const columns: Column<Collection>[] = [
  { key: "student", header: "Student", render: (r) => <span className="font-medium">{r.student}</span> },
  { key: "rollNo", header: "Roll No", render: (r) => <span className="text-muted-foreground">{r.rollNo}</span> },
  { key: "class", header: "Class", render: (r) => <Badge variant="outline">{r.class}</Badge> },
  { key: "amount", header: "Amount", render: (r) => <span className="font-medium">{r.amount}</span> },
  { key: "method", header: "Method", render: (r) => <Badge variant="outline">{r.method}</Badge> },
  { key: "date", header: "Date", render: (r) => <span className="text-muted-foreground">{r.date}</span> },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function FeeCollectionPage() {
  return (
    <StaticPageLayout
      title="Fee Collection"
      description="Collect and record student fee payments."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={HandCoins} label="Collected Today" value="Rs. 1.2M" />
        <StatCard icon={Banknote} label="Cash" value="Rs. 420K" color="bg-green-500/10" />
        <StatCard icon={CreditCard} label="Card" value="Rs. 380K" color="bg-amber-500/10" />
        <StatCard icon={Smartphone} label="Mobile Wallet" value="Rs. 400K" color="bg-purple-500/10" />
      </div>

      <InfoGridCard
        title="Collection Methods"
        description="Payment method distribution this month"
        items={[
          { label: "Bank Transfer", value: "42%", icon: Banknote, color: "bg-blue-500/10" },
          { label: "Cash", value: "28%", icon: Wallet, color: "bg-green-500/10" },
          { label: "JazzCash / Easypaisa", value: "18%", icon: Smartphone, color: "bg-purple-500/10" },
          { label: "Credit / Debit Card", value: "12%", icon: CreditCard, color: "bg-amber-500/10" },
        ]}
      />

      <TwoColumnLayout
        left={
          <DataTable
            title="Recent Collections"
            description="Latest fee collection transactions"
            columns={columns}
            data={collections}
          />
        }
        right={
          <LeaderboardCard
            title="Top Collectors"
            description="Staff with highest collection amounts"
            items={[
              { rank: 1, name: "Ms. Sana Javed", value: "Rs. 850K", img: "https://i.pravatar.cc/150?img=16", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
              { rank: 2, name: "Mr. Imran Qureshi", value: "Rs. 720K", img: "https://i.pravatar.cc/150?img=12", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
              { rank: 3, name: "Mrs. Ayesha Malik", value: "Rs. 640K", img: "https://i.pravatar.cc/150?img=26", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
              { rank: 4, name: "Mr. Hassan Sheikh", value: "Rs. 510K", img: "https://i.pravatar.cc/150?img=33" },
              { rank: 5, name: "Ms. Rabia Khan", value: "Rs. 460K", img: "https://i.pravatar.cc/150?img=44" },
            ]}
          />
        }
      />
    </StaticPageLayout>
  );
}