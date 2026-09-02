import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const paths = [
  {
    title: "Full-Stack Developer",
    completed: 4,
    total: 10,
    color: "bg-green-600",
  },
  {
    title: "UX Designer",
    completed: 7,
    total: 12,
    color: "bg-orange-600",
  },
];

export function LearningPath() {
  return (
    <div className="lg:col-span-6 xl:col-span-3">
      <Card>
        <CardHeader>
          <CardTitle>Learning Path</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paths.map((path) => {
            const pct = (path.completed / path.total) * 100;
            return (
              <a
                key={path.title}
                href="#"
                className="hover:bg-muted block rounded-md border p-4 transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-lg font-semibold">{path.title}</div>
                  <Progress value={pct} className="h-1">
                    <div
                      className={`size-full flex-1 ${path.color}`}
                      style={{ transform: `translateX(-${100 - pct}%)` }}
                    />
                  </Progress>
                  <p className="text-muted-foreground text-xs">
                    {path.completed} of {path.total} modules completed
                  </p>
                </div>
              </a>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}