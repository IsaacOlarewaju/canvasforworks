import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { SoarRisingProjectsBody } from "../../../components/projects/SoarRisingProjectsBody";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";

export const SoarRisingIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="gosse-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="SOARising is a community-centred platform for smart city developments aimed at transforming Afrika and improving the lives all it’s people. SOARising seeks to become a significant catalyst in the mission to alleviate poverty by digitalising said community development." />
          <div className="projects-portfolio-container">
            <BrandImage pic="/images/gosse-logo.png" />
            <BrandTitle tle="SOARising" />
            <SoarRisingProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
