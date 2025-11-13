import { ArrowLeft, Download, CheckCircle2, XCircle, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const mockStudents = [
  { id: 1, name: "Alice Johnson", rollNo: "CS101", present: true },
  { id: 2, name: "Bob Smith", rollNo: "CS102", present: true },
  { id: 3, name: "Charlie Brown", rollNo: "CS103", present: false },
  { id: 4, name: "Diana Prince", rollNo: "CS104", present: true },
  { id: 5, name: "Ethan Hunt", rollNo: "CS105", present: true },
  { id: 6, name: "Fiona Green", rollNo: "CS106", present: false },
  { id: 7, name: "George Miller", rollNo: "CS107", present: true },
  { id: 8, name: "Hannah Lee", rollNo: "CS108", present: true },
];

export const ResultsScreen = () => {
  const navigate = useNavigate();
  const presentCount = mockStudents.filter((s) => s.present).length;
  const absentCount = mockStudents.length - presentCount;

  const handleDownloadExcel = () => {
    toast.success("Excel report downloaded successfully");
  };

  const handleSyncDatabase = () => {
    toast.success("Attendance synced to database");
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
        <h2 className="font-semibold text-foreground">Attendance Results</h2>
        <div className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 bg-success/10 border-success/20">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <span className="text-xs font-medium text-success">Present</span>
            </div>
            <p className="text-2xl font-bold text-success">{presentCount}</p>
          </Card>
          <Card className="p-4 bg-error/10 border-error/20">
            <div className="flex items-center gap-2 mb-1">
              <XCircle className="h-4 w-4 text-error" />
              <span className="text-xs font-medium text-error">Absent</span>
            </div>
            <p className="text-2xl font-bold text-error">{absentCount}</p>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-foreground px-2">Student List</h3>
          {mockStudents.map((student) => (
            <Card key={student.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-foreground">{student.name}</p>
                  <p className="text-sm text-muted-foreground">Roll No: {student.rollNo}</p>
                </div>
                {student.present ? (
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Present</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-error">
                    <XCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Absent</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="p-4 bg-card border-t border-border space-y-3">
        <Button
          onClick={handleDownloadExcel}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Excel Report
        </Button>
        <Button
          onClick={handleSyncDatabase}
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary/10"
        >
          <Database className="h-4 w-4 mr-2" />
          Sync to Database
        </Button>
      </div>
    </div>
  );
};
