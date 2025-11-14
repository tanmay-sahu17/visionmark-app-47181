import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { UploadVideoScreen } from "@/components/UploadVideoScreen";

const Upload = () => {
  return (
    <MobileContainer>
      <TopBar />
      <UploadVideoScreen />
      <BottomNav />
    </MobileContainer>
  );
};

export default Upload;
