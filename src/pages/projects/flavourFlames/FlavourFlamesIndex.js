import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBarLight } from "../../../components/menu/MobileProjectsNavBarLight";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { GosseBottomNavbarSection } from "../../../components/projects/GosseBottomNavbarSection";
import { FlavourProjectsBody } from "../../../components/projects/FlavourProjectsBody";

export const FlavourFlamesIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBarLight />
      <ProjectsBackground cls="flavour-flames-projects-background" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement txt="Flavour Flames is Caribbean restaurant and catering service, based in the Midlands, known for its authentic flavours from the Caribbean." />
          <div className="projects-portfolio-container">
            {/* <BrandImage pic="/images/gosse-logo.png" /> */}
            <BrandTitle tle="Flavour Flames" />
            <FlavourProjectsBody />
          </div>
        </div>
      </div>

      <GosseBottomNavbarSection />
    </section>
  );
};
