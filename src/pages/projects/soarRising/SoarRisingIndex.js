import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBar } from "../../../components/menu/MobileProjectsNavBar";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { SoarRisingProjectsBody } from "../../../components/projects/SoarRisingProjectsBody";
import { ProjectsBackgroundVideo } from "../../../components/projects/ProjectsBackgroundVideo";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";
import { OpeningFixedBrand } from "../../../components/projects/OpeningFixedBrand";

export const SoarRisingIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBar />
      <ProjectsBackgroundVideo />
      <OpeningFixedBrand bnd="/images/SOARising-logo.png" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="SOARising is a community-centred platform for smart city developments aimed at transforming Afrika and improving the lives all it’s people. SOARising seeks to become a significant catalyst in the mission to alleviate poverty by digitalising said community development." />
          <div className="projects-portfolio-container">
            <BrandImage pic="/images/SOARising-logo.png" />
            <BrandTitle tle="SOARising" />
            <SoarRisingProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
