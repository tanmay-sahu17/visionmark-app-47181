import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { ResultsScreen } from "@/components/ResultsScreen";

const Results = () => {
  return (
    <MobileContainer>
      <TopBar />
      <ResultsScreen />
      <BottomNav />
    </MobileContainer>
  );
};

export default Results;
