import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandImage } from "../../../components/projects/BrandImage";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { GosseProjectsBody } from "../../../components/projects/GosseProjectsBody";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";

export const GooseIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="gosse-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="GOSSE au CŒUR is a creative collection and fashion label, which focuses on blending streetwear style with luxury sensibilities, showcased as ready-to-wear collections." />
          <div className="projects-portfolio-container">
            <BrandImage pic="/images/gosse-logo.png" />
            <BrandTitle tle="Forever Daydreaming" />
            <GosseProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
