import { MobileContainer } from "@/components/MobileContainer";
import { TopBar } from "@/components/TopBar";
import { BottomNav } from "@/components/BottomNav";
import { ProfileScreen } from "@/components/ProfileScreen";

const Profile = () => {
  return (
    <MobileContainer>
      <TopBar />
      <ProfileScreen />
      <BottomNav />
    </MobileContainer>
  );
};

export default Profile;
