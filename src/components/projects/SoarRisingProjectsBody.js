import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { SoarRisingDescriptionBody } from "./SoarRisingDescriptionBody";
import { ProjectVideoOne } from "./ProjectVideoOne";
import { ProjectsImageThree } from "./ProjectsImageThree";

export const SoarRisingProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Organization" body1="SOARising" />
        <DescriptionLeftSide
          head="Scope"
          body1="User Interface"
          body2="Web Development"
        />
      </div>

      <SoarRisingDescriptionBody />
      <div className="projects-body-content">
        <ProjectVideoOne vid="/images/SOARising-video.mp4" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/SOARising-imagery-one.png" />
          <div className="blank-filler-2"></div>
          <ProjectsImageThree pic="/images/SOARising-imagery-two.png" />
        </div>
      </div>
    </div>
  );
};
