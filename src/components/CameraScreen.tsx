import { useState, useRef } from "react";
import { Circle, Square, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const CameraScreen = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
    toast.success("Recording started");
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    toast.success("Recording stopped");
    navigate("/processing");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="p-4 flex items-center justify-between bg-card border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="hover:bg-secondary"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="font-semibold text-foreground">Record Attendance</h2>
        <div className="w-10" />
      </div>

      <div className="flex-1 relative bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-[3/4] bg-black/5 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-elevated">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            {/* Camera preview placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Circle className="h-16 w-16 text-primary animate-pulse" />
                </div>
                <p className="text-muted-foreground">Camera Preview</p>
              </div>
            </div>

            {/* AI scan overlay */}
            {isRecording && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border-2 border-accent/50 rounded-3xl animate-pulse" />
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
              </div>
            )}

            {/* Recording indicator */}
            {isRecording && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-error text-error-foreground px-4 py-2 rounded-full flex items-center gap-2 shadow-elevated animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-semibold">{formatTime(recordingTime)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 bg-card border-t border-border">
        <div className="flex justify-center">
          {!isRecording ? (
            <Button
              onClick={startRecording}
              size="lg"
              className="h-20 w-20 rounded-full bg-error hover:bg-error/90 shadow-elevated"
            >
              <Circle className="h-8 w-8 fill-current" />
            </Button>
          ) : (
            <Button
              onClick={stopRecording}
              size="lg"
              className="h-20 w-20 rounded-full bg-error hover:bg-error/90 shadow-elevated"
            >
              <Square className="h-6 w-6 fill-current" />
            </Button>
          )}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          {isRecording ? "Tap to stop recording" : "Tap to start recording"}
        </p>
      </div>
    </div>
  );
};
