import { MultiFiltersFaux } from "../MultiFiltersFaux";
import { MobileProjectsNavBar } from "../../../components/menu/MobileProjectsNavBar";
import { BrandImageLarge } from "../../../components/projects/BrandImageLarge";
import { BrandTitle } from "../../../components/projects/BrandTitle";
import { ProjectOpeningStatement } from "../../../components/projects/ProjectOpeningStatement";
import { BlankFiller } from "../../../components/projects/BlankFiller";
import { CornerstoneProjectsBody } from "../../../components/projects/CornerstoneProjectsBody";
import { CornerstoneBottomNavbarSection } from "../../../components/projects/CornerstoneBottomNavbarSection";
import { ProjectsBackground } from "../../../components/projects/ProjectsBackground";
import { OpeningFixedBrand } from "../../../components/projects/OpeningFixedBrand";

export const CornerstoneIndex = () => {
  return (
    <section>
      <MultiFiltersFaux />
      <MobileProjectsNavBar />
      <ProjectsBackground cls="cornerstone-projects-background" />
      <OpeningFixedBrand bnd="/images/cornerstone-logo-white.png" />
      <div>
        <BlankFiller />
        <div className="projects-portfolio-section">
          <ProjectOpeningStatement
            txt="Cornerstone Partners is an angel investor network that believes in the value of diversity, focussing on investing in companies owned and run by black and diverse founders in order to increase diversity in the UK business market.
                Cornerstone Partners focus attentions on this group because of the belief that their entrepreneurial talent is often overlooked, underestimated, and underrepresented in the traditional funding community."
          />
          <div className="projects-portfolio-container">
            <BrandImageLarge pic="/images/cornerstone-logo-black.png" />
            <BrandTitle tle="The Scale-Up Program" />
            <CornerstoneProjectsBody />
          </div>
        </div>
      </div>

      <CornerstoneBottomNavbarSection />
    </section>
  );
};
