import { Zap, CalendarClock, Bell, CheckCircle2 } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { Badge } from "@/components/ui/badge";

type Automation = {
  rule: string;
  trigger: string;
  action: string;
  frequency: string;
  lastRun: string;
  status: string;
};

const automations: Automation[] = [
  { rule: "Monthly Fee Reminder", trigger: "Due date - 3 days", action: "Send SMS + Email", frequency: "Monthly", lastRun: "2026-09-01", status: "Active" },
  { rule: "Overdue Alert", trigger: "Balance > 0 after due date", action: "Send warning to parent", frequency: "Daily", lastRun: "2026-09-02", status: "Active" },
  { rule: "Receipt Generation", trigger: "Payment received", action: "Auto-generate receipt", frequency: "Real-time", lastRun: "2026-09-02", status: "Active" },
  { rule: "Late Fee Calculation", trigger: "15 days overdue", action: "Apply 2% late fee", frequency: "Daily", lastRun: "2026-09-01", status: "Active" },
  { rule: "Payment Confirmation", trigger: "Payment verified", action: "Notify parent via app", frequency: "Real-time", lastRun: "2026-09-02", status: "Active" },
  { rule: "Annual Fee Update", trigger: "New academic year", action: "Update fee structures", frequency: "Yearly", lastRun: "2026-03-31", status: "Inactive" },
];

const columns: Column<Automation>[] = [
  { key: "rule", header: "Automation Rule", render: (a) => <span className="font-medium">{a.rule}</span> },
  { key: "trigger", header: "Trigger", render: (a) => <Badge variant="outline">{a.trigger}</Badge> },
  { key: "action", header: "Action", render: (a) => a.action },
  { key: "frequency", header: "Frequency", render: (a) => a.frequency },
  { key: "lastRun", header: "Last Run", render: (a) => <span className="text-muted-foreground">{a.lastRun}</span> },
  { key: "status", header: "Status", render: (a) => <StatusBadge status={a.status} /> },
];

export default function FeeAutomationPage() {
  return (
    <StaticPageLayout
      title="Fee Automation"
      description="Automate fee reminders, receipts, and late fee calculations."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Zap} label="Active Rules" value="5" />
        <StatCard icon={CalendarClock} label="Automations Run" value="1,248" color="bg-green-500/10" />
        <StatCard icon={Bell} label="Reminders Sent" value="3,420" color="bg-amber-500/10" />
        <StatCard icon={CheckCircle2} label="Success Rate" value="99.2%" color="bg-purple-500/10" />
      </div>
      <DataTable
        title="Automation Rules"
        description="Configured fee automation workflows"
        columns={columns}
        data={automations}
      />
    </StaticPageLayout>
  );
}