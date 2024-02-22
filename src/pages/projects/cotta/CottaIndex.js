import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { CottaProjectsBody } from "../../../components/projects/CottaProjectsBody";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { CottaBottomNavbarSection } from "../../../components/projects/CottaBottomNavbarSection";

export const CottaIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="cotta-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement
            txt="Cotta is a community-built web application, empowering photographers to
        share their images of the black experience with the world."
          />
          <div className="projects-portfolio-container">
            <BrandImage pic="/images/cotta-logo.png" />
            <BrandTitle tle="Cotta" />
            <CottaProjectsBody />
          </div>
        </div>
      </div>

      <CottaBottomNavbarSection />
    </section>
  );
};
