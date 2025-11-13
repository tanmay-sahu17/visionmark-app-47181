import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <MobileContainer>
      <TopBar />
      <PlaceholderScreen
        title="Settings"
        icon={SettingsIcon}
        description="Configure your app preferences and settings"
      />
      <BottomNav />
    </MobileContainer>
  );
};

export default Settings;
