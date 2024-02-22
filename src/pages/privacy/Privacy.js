import { MobileProjectsNavBar } from "../../components/menu/MobileProjectsNavBar";
import { PrivacyNavBar } from "./PrivacyNavBar";
import { PrivacyBody } from "./PrivacyBody";

export const Privacy = () => {
  return (
    <div>
      <PrivacyNavBar />
      <MobileProjectsNavBar />
      <PrivacyBody />
    </div>
  );
};
