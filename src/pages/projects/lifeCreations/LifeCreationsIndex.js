import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";
import { LifeCreationsProjectsBody } from "../../../components/projects/LifeCreationsProjectsBody";

export const LifeCreationsIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="life-creations-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="Empowering and equipping young people around the globe through interactive identity programmes, robust mentoring schemes, and live events, Life Creations is an educational youth organisation that builds giants." />
          <div className="projects-portfolio-container">
            {/* <BrandImage pic="/images/gosse-logo.png" /> */}
            <BrandTitle tle="Life Creations" />
            <LifeCreationsProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
