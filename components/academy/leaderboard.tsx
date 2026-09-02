import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const leaderboard = [
  { rank: 1, name: "Liam Smith", pts: "5,000", img: "https://i.pravatar.cc/150?img=8", rankClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400" },
  { rank: 2, name: "Emma Brown", pts: "4,800", img: "https://i.pravatar.cc/150?img=16", rankClass: "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300" },
  { rank: 3, name: "Noah Johnson", pts: "4,600", img: "https://i.pravatar.cc/150?img=3", rankClass: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400" },
  { rank: 4, name: "Olivia Davis", pts: "4,400", img: "https://i.pravatar.cc/150?img=26", rankClass: "bg-muted text-muted-foreground" },
  { rank: 5, name: "Sophia Miller", pts: "4,150", img: "https://i.pravatar.cc/150?img=31", rankClass: "bg-muted text-muted-foreground" },
];

export function Leaderboard() {
  return (
    <div className="lg:col-span-6 xl:col-span-3">
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {leaderboard.map((entry) => (
              <li key={entry.rank} className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold tabular-nums",
                    entry.rankClass
                  )}
                >
                  {entry.rank}
                </span>
                <Avatar>
                  <AvatarImage src={entry.img} alt={entry.name} />
                </Avatar>
                <span className="flex-1 truncate font-medium">{entry.name}</span>
                <Badge variant="outline" className="tabular-nums">
                  {entry.pts} pts
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}