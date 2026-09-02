import { Zap, Bell, CalendarClock, ShieldCheck, Settings2, RefreshCw, AlertTriangle } from "lucide-react";

import { StaticPageLayout } from "@/components/academy/static-page-layout";
import { StatCard, DataTable, StatusBadge, type Column } from "@/components/academy/static-components";
import { InfoGridCard, ProgressListCard, TwoColumnLayout } from "@/components/academy/static-patterns";
import { Badge } from "@/components/ui/badge";

type Rule = {
  rule: string;
  trigger: string;
  action: string;
  schedule: string;
  status: string;
};

const rules: Rule[] = [
  { rule: "Monthly Tuition Auto-Charge", trigger: "1st of every month", action: "Charge tuition fee", schedule: "Monthly", status: "Active" },
  { rule: "Late Fee Reminder", trigger: "5 days after due date", action: "Send SMS + Email", schedule: "Auto", status: "Active" },
  { rule: "Overdue Escalation", trigger: "15 days after due date", action: "Notify admin", schedule: "Auto", status: "Active" },
  { rule: "Scholarship Waiver", trigger: "Top 5% students", action: "Apply 50% waiver", schedule: "Termly", status: "Active" },
  { rule: "Sibling Discount", trigger: "2nd child enrolled", action: "Apply 10% discount", schedule: "Auto", status: "Active" },
  { rule: "Annual Fee Revision", trigger: "January 1", action: "Apply new fee structure", schedule: "Yearly", status: "Inactive" },
];

const columns: Column<Rule>[] = [
  { key: "rule", header: "Rule", render: (r) => <span className="font-medium">{r.rule}</span> },
  { key: "trigger", header: "Trigger", render: (r) => <span className="text-muted-foreground">{r.trigger}</span> },
  { key: "action", header: "Action", render: (r) => <Badge variant="outline">{r.action}</Badge> },
  { key: "schedule", header: "Schedule", render: (r) => r.schedule },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
];

export default function FeeAutomationPage() {
  return (
    <StaticPageLayout
      title="Fee Automation"
      description="Automate fee collection, reminders, and discounts."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Zap} label="Active Rules" value="5" />
        <StatCard icon={Bell} label="Reminders Sent" value="1,240" color="bg-green-500/10" />
        <StatCard icon={CalendarClock} label="Auto-Charges" value="1,102" color="bg-amber-500/10" />
        <StatCard icon={ShieldCheck} label="Waivers Applied" value="62" color="bg-purple-500/10" />
      </div>

      <TwoColumnLayout
        left={
          <DataTable
            title="Automation Rules"
            description="Configured fee automation rules and triggers"
            columns={columns}
            data={rules}
          />
        }
        right={
          <>
            <ProgressListCard
              title="Automation Coverage"
              description="Percentage of fees handled automatically"
              items={[
                { label: "Auto-Collected", value: 88, display: "88%", color: "bg-green-500" },
                { label: "Reminder Sent", value: 96, display: "96%", color: "bg-blue-500" },
                { label: "Manual Follow-up", value: 12, display: "12%", color: "bg-amber-500" },
              ]}
            />
            <InfoGridCard
              title="Automation Health"
              description="System automation status"
              items={[
                { label: "Success Rate", value: "99.2%", icon: ShieldCheck, color: "bg-green-500/10" },
                { label: "Failed Charges", value: "9", icon: AlertTriangle, color: "bg-red-500/10" },
                { label: "Rules Updated", value: "Last week", icon: RefreshCw, color: "bg-blue-500/10" },
                { label: "Next Run", value: "Sep 1", icon: Settings2, color: "bg-amber-500/10" },
              ]}
            />
          </>
        }
      />
    </StaticPageLayout>
  );
}