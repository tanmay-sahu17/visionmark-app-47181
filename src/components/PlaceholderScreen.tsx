import { ArrowLeft, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PlaceholderScreenProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const PlaceholderScreen = ({ title, icon: Icon, description }: PlaceholderScreenProps) => {
  const navigate = useNavigate();

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
        <h2 className="font-semibold text-foreground">{title}</h2>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground max-w-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};
