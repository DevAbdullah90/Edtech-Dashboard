import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { LucideIcon } from "lucide-react";

// ===== Stat Card =====
export function StatCard({
  icon: Icon,
  label,
  value,
  color = "bg-blue-500/10",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-4">
        <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${color}`}>
          <Icon className="size-5 text-foreground" />
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-bold leading-tight tabular-nums">{value}</div>
          <div className="text-muted-foreground truncate text-xs">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// ===== Data Table =====
export type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
};

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  title,
  description,
  action,
}: {
  columns: Column<T>[];
  data: T[];
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {action && <div className="ml-auto">{action}</div>}
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key}>{col.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                {columns.map((col) => (
                  <TableCell key={col.key}>{col.render(row)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// ===== Status Badge helper =====
export function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "Active" || status === "Paid" || status === "Present" || status === "Approved"
      ? "success"
      : status === "Pending" || status === "Late"
        ? "outline"
        : status === "Inactive" || status === "Overdue" || status === "Absent" || status === "Rejected"
          ? "destructive"
          : "default";
  return <Badge variant={variant}>{status}</Badge>;
}

// ===== Simple Info Card =====
export function InfoCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}