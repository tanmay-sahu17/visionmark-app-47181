import { useState, useRef } from "react";
import { Upload, Calendar as CalendarIcon, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const UploadVideoScreen = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [lectureNumber, setLectureNumber] = useState("1");
  const [date, setDate] = useState<Date>(new Date());
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const shutterValue = 200; // Fixed value

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
        toast.success(`Selected: ${file.name}`);
      } else {
        toast.error("Please select a valid video file");
      }
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a video file first");
      return;
    }
    console.log("Upload with:", { lectureNumber, date, shutterValue, file: selectedFile.name });
    toast.success("Processing video...");
    // Navigate to processing screen
    setTimeout(() => {
      navigate("/processing");
    }, 500);
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-ai rounded-2xl">
            <Upload className="w-8 h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground">Upload Video</h2>
        <p className="text-sm text-muted-foreground">
          Configure your recording settings
        </p>
      </div>

      {/* Settings Form */}
      <div className="space-y-6">
        {/* Lecture Number */}
        <div className="space-y-2">
          <Label htmlFor="lecture" className="text-foreground font-medium">
            Lecture Number
          </Label>
          <Select value={lectureNumber} onValueChange={setLectureNumber}>
            <SelectTrigger id="lecture" className="w-full bg-background">
              <SelectValue placeholder="Select Lecture" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={String(num)}>
                  Lecture {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Picker */}
        <div className="space-y-2">
          <Label className="text-foreground font-medium">Lecture Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-background",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "dd-MM-yyyy") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Shutter Value - Fixed at 200 */}
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
          <Label className="text-foreground font-medium">Shutter Speed</Label>
          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            {shutterValue}
          </span>
        </div>

        {/* Video File Upload */}
        <div className="space-y-2">
          <Label className="text-foreground font-medium">Video File</Label>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full h-24 border-2 border-dashed border-primary/30 hover:border-primary/50 hover:bg-primary/5"
          >
            <div className="flex flex-col items-center gap-2">
              <Video className="h-8 w-8 text-primary" />
              <div className="text-center">
                <p className="font-semibold text-foreground">
                  {selectedFile ? selectedFile.name : "Choose Video File"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : "MP4, AVI, MOV, etc."}
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>

      {/* Preview Card */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Camera className="w-4 h-4" />
            <span>Recording Summary</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Lecture</p>
              <p className="font-semibold text-foreground">Lecture {lectureNumber}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p className="font-semibold text-foreground">{format(date, "dd-MM-yyyy")}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Shutter</p>
              <p className="font-semibold text-foreground">{shutterValue}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Button */}
      <Button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="w-full h-14 text-lg font-semibold bg-gradient-ai hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        <Upload className="mr-2 h-5 w-5" />
        Process Video
      </Button>
    </div>
  );
};
