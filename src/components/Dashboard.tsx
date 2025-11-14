import { Video, Upload, FileText, Sparkles, TrendingUp, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

export const Dashboard = () => {
  const navigate = useNavigate();

  const actionCards = [
    {
      icon: Video,
      title: "Record Attendance",
      description: "Start camera to capture students",
      path: "/camera",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Upload,
      title: "Upload Video",
      description: "Upload pre-recorded video",
      path: "/upload",
      gradient: "from-accent to-cyan-400",
    },
    {
      icon: FileText,
      title: "View Records",
      description: "Check attendance history",
      path: "/records",
      gradient: "from-success to-green-500",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Welcome, Teacher</h2>
        <p className="text-muted-foreground">Ready to track attendance</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <Users className="h-5 w-5 text-primary" />
            <div>
              <p className="text-2xl font-bold text-foreground">45</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <TrendingUp className="h-5 w-5 text-success" />
            <div>
              <p className="text-2xl font-bold text-success">92%</p>
              <p className="text-xs text-muted-foreground">Avg Rate</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex flex-col items-center text-center space-y-2">
            <Calendar className="h-5 w-5 text-accent" />
            <div>
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Sessions</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        {actionCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card
              key={card.path}
              onClick={() => navigate(card.path)}
              className="p-6 cursor-pointer hover:shadow-elevated transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} relative`}>
                  <Icon className="h-6 w-6 text-white" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-start gap-3">
          <Sparkles className="h-5 w-5 text-accent mt-1 animate-pulse" />
          <div>
            <h4 className="font-semibold text-foreground mb-1">AI-Powered Recognition</h4>
            <p className="text-sm text-muted-foreground">
              Our advanced facial recognition system ensures accurate attendance tracking with 99% accuracy.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
