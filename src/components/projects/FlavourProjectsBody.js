import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { ProjectsImageOne } from "./ProjectImageOne";
import { ProjectsImageFour } from "./ProjectsImageFour";
import { FlavourDescriptionBody } from "./FlavourDescriptionBody";
import { ProjectsImageFive } from "./ProjectsImageFive";

export const FlavourProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Brand" body1="Flavour Flames" />
        <DescriptionLeftSide
          head="Scope"
          body1="Creative Direction"
          body2="Branding & Identity"
        />
        <DescriptionLeftSide head="Team" body1="CANVAS for Works©" />
      </div>
      <FlavourDescriptionBody />
      <div className="projects-body-content">
        <ProjectsImageOne pic="/images/flavour-imagery-one.png" />
        <ProjectsImageOne pic="/images/flavour-imagery-two.png" />
        <ProjectsImageOne pic="/images/flavour-imagery-three.png" />
        <ProjectsImageOne pic="/images/flavour-imagery-five.jpg" />
        <ProjectsImageFive pic="/images/flavour-imagery-six.png" />
        <ProjectsImageOne pic="/images/flavour-imagery-four.png" />
        <ProjectsImageFour pic="/images/flavour-imagery-seven.jpg" />
        <ProjectsImageOne pic="/images/flavour-imagery-eight-nine.jpg" />
      </div>
    </div>
  );
};
