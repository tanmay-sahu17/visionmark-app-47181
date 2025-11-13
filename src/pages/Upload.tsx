import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";
import { Upload as UploadIcon } from "lucide-react";

const Upload = () => {
  return (
    <MobileContainer>
      <TopBar />
      <PlaceholderScreen
        title="Upload Video"
        icon={UploadIcon}
        description="Upload a pre-recorded video for attendance processing"
      />
      <BottomNav />
    </MobileContainer>
  );
};

export default Upload;
