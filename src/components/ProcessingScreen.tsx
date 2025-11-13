import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Sparkles, Brain, Scan } from "lucide-react";

export const ProcessingScreen = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Uploading video...");

  useEffect(() => {
    const steps = [
      { delay: 500, progress: 20, status: "Uploading video..." },
      { delay: 1500, progress: 40, status: "Analyzing faces..." },
      { delay: 2500, progress: 70, status: "Matching with database..." },
      { delay: 3500, progress: 90, status: "Marking attendance..." },
      { delay: 4500, progress: 100, status: "Complete!" },
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setProgress(step.progress);
        setStatus(step.status);
      }, step.delay);
    });

    setTimeout(() => {
      navigate("/results");
    }, 5000);
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="w-full max-w-sm space-y-8">
        <div className="relative">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className="h-16 w-16 text-primary animate-pulse" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-accent animate-pulse" />
            <Scan className="absolute -bottom-2 -left-2 h-8 w-8 text-accent animate-pulse" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Processing Video</h2>
            <p className="text-muted-foreground">{status}</p>
          </div>

          <div className="space-y-2">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
            <p className="text-right text-sm text-muted-foreground">{progress}%</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">AI is analyzing your video...</span>
        </div>
      </div>
    </div>
  );
};
