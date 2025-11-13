import { Calendar, Users, TrendingUp, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const demoRecords = [
  {
    id: 1,
    date: "2025-01-15",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 42,
    absent: 3,
    total: 45,
    percentage: 93,
  },
  {
    id: 2,
    date: "2025-01-14",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 40,
    absent: 5,
    total: 45,
    percentage: 89,
  },
  {
    id: 3,
    date: "2025-01-13",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 43,
    absent: 2,
    total: 45,
    percentage: 96,
  },
  {
    id: 4,
    date: "2025-01-10",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 41,
    absent: 4,
    total: 45,
    percentage: 91,
  },
  {
    id: 5,
    date: "2025-01-09",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 44,
    absent: 1,
    total: 45,
    percentage: 98,
  },
  {
    id: 6,
    date: "2025-01-08",
    time: "09:30 AM",
    class: "Computer Networks",
    present: 39,
    absent: 6,
    total: 45,
    percentage: 87,
  },
];

export const RecordsScreen = () => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-success";
    if (percentage >= 75) return "text-accent";
    return "text-error";
  };

  const avgPercentage = Math.round(
    demoRecords.reduce((sum, record) => sum + record.percentage, 0) / demoRecords.length
  );

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground">Overall Statistics</h3>
          <TrendingUp className="h-5 w-5 text-accent" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Sessions</p>
            <p className="text-2xl font-bold text-foreground">{demoRecords.length}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Avg Attendance</p>
            <p className="text-2xl font-bold text-success">{avgPercentage}%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Students</p>
            <p className="text-2xl font-bold text-foreground">45</p>
          </div>
        </div>
      </Card>

      <div className="space-y-2">
        <h3 className="font-semibold text-foreground px-2 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Recent Sessions
        </h3>
        {demoRecords.map((record) => (
          <Card
            key={record.id}
            className="p-4 cursor-pointer hover:shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
            onClick={() => navigate("/results")}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-foreground">{formatDate(record.date)}</p>
                  <span className="text-xs text-muted-foreground">• {record.time}</span>
                </div>
                <p className="text-sm text-muted-foreground">{record.class}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">
                    {record.present}/{record.total}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${getPercentageColor(record.percentage)}`}>
                  {record.percentage}%
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
