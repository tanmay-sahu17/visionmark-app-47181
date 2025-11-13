import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";
import { FileText } from "lucide-react";

const Records = () => {
  return (
    <MobileContainer>
      <TopBar />
      <PlaceholderScreen
        title="Records"
        icon={FileText}
        description="View your attendance history and past records here"
      />
      <BottomNav />
    </MobileContainer>
  );
};

export default Records;
