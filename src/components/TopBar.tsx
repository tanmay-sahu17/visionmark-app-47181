import { Brain } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3 shadow-md">
      <div className="relative">
        <Brain className="h-8 w-8" />
        <div className="absolute inset-0 bg-accent blur-lg opacity-50 animate-pulse" />
      </div>
      <div>
        <h1 className="text-xl font-bold">FaceMark AI</h1>
        <p className="text-xs text-primary-foreground/80">Smart Attendance</p>
      </div>
    </div>
  );
};
