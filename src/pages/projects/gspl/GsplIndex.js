import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { GsplProjectsBody } from "../../../components/projects/GsplProjectsBody";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";

export const GsplIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="gspl-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="Rooted in a commitment to promote the welfare of all people, GSPL channels its energy into media and charity—using apparel, content, and events to convey a message of truth and love." />
          <div className="projects-portfolio-container">
            <BrandImage pic="" />
            <BrandTitle tle="GSPL" />
            <GsplProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
