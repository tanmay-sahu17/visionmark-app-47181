import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { PlaceholderScreen } from "@/components/PlaceholderScreen";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <MobileContainer>
      <TopBar />
      <PlaceholderScreen
        title="Profile"
        icon={User}
        description="Manage your profile information and preferences"
      />
      <BottomNav />
    </MobileContainer>
  );
};

export default Profile;
