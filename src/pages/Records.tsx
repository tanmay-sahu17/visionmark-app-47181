import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { RecordsScreen } from "@/components/RecordsScreen";

const Records = () => {
  return (
    <MobileContainer>
      <TopBar />
      <RecordsScreen />
      <BottomNav />
    </MobileContainer>
  );
};

export default Records;
