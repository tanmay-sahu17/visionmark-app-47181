import { useState } from "react";
import { Upload, Calendar as CalendarIcon, Zap, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const UploadVideoScreen = () => {
  const [lectureNumber, setLectureNumber] = useState("1");
  const [date, setDate] = useState<Date>(new Date());
  const [shutterValue, setShutterValue] = useState(50);
  const [flashEnabled, setFlashEnabled] = useState(false);

  const handleUpload = () => {
    console.log("Upload with:", { lectureNumber, date, shutterValue, flashEnabled });
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

        {/* Shutter Value */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-foreground font-medium">Shutter Speed</Label>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {shutterValue}
            </span>
          </div>
          <Slider
            value={[shutterValue]}
            onValueChange={(value) => setShutterValue(value[0])}
            min={1}
            max={200}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>200</span>
          </div>
        </div>

        {/* Flashlight Toggle */}
        <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
          <div className="flex items-center gap-3">
            <Zap className={cn("w-5 h-5", flashEnabled ? "text-accent" : "text-muted-foreground")} />
            <Label htmlFor="flash" className="text-foreground font-medium cursor-pointer">
              Flashlight
            </Label>
          </div>
          <Switch
            id="flash"
            checked={flashEnabled}
            onCheckedChange={setFlashEnabled}
          />
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
            <div>
              <p className="text-muted-foreground">Flash</p>
              <p className="font-semibold text-foreground">{flashEnabled ? "ON" : "OFF"}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upload Button */}
      <Button
        onClick={handleUpload}
        className="w-full h-14 text-lg font-semibold bg-gradient-ai hover:opacity-90 transition-opacity"
      >
        <Upload className="mr-2 h-5 w-5" />
        Upload Video
      </Button>
    </div>
  );
};
