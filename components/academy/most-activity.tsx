"use client";

import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Mentoring", value: 65.2, fill: "hsl(var(--chart-1))" },
  { name: "Organization", value: 25, fill: "hsl(var(--chart-2))" },
  { name: "Planning", value: 9.8, fill: "hsl(var(--chart-3))" },
];

export function MostActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mx-auto aspect-square max-h-[250px] w-full max-w-[250px]">
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={96}
              strokeWidth={5}
              stroke="#fff"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex justify-around">
          {data.map((entry) => (
            <div key={entry.name} className="flex flex-col">
              <div className="mb-1 flex items-center gap-2">
                <span className="block size-2 rounded-full" style={{ backgroundColor: entry.fill }} />
                <div>{entry.name}</div>
              </div>
              <div className="text-center text-xl font-semibold">{entry.value}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}