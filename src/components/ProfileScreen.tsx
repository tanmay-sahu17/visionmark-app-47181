import { Mail, Phone, Building2, Award, BookOpen, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ProfileScreen = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <Card className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
              SM
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Prof. Sarah Miller</h2>
            <p className="text-muted-foreground">Associate Professor</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground mb-3">Contact Information</h3>
        <div className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">sarah.miller@university.edu</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">Computer Science Department, Room 304</span>
        </div>
      </Card>

      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-foreground mb-3">Teaching Details</h3>
        <div className="flex items-center gap-3 text-sm">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-foreground font-medium">Current Courses</p>
            <p className="text-muted-foreground">Computer Networks, Database Systems</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-foreground font-medium">Office Hours</p>
            <p className="text-muted-foreground">Mon, Wed, Fri: 2:00 PM - 4:00 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Award className="h-4 w-4 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-foreground font-medium">Experience</p>
            <p className="text-muted-foreground">12 years in academia</p>
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
        <h3 className="font-semibold text-foreground mb-3">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Total Classes</p>
            <p className="text-2xl font-bold text-foreground">156</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Students Taught</p>
            <p className="text-2xl font-bold text-foreground">240</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Avg Attendance</p>
            <p className="text-2xl font-bold text-success">92%</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">This Semester</p>
            <p className="text-2xl font-bold text-accent">45</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
