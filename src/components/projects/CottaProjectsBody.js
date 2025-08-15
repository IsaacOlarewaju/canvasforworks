import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { CottaDescriptionBody } from "./CottaDescriptionBody";
import { ProjectsImageOne } from "./ProjectImageOne";
import { ProjectVideoOne } from "./ProjectVideoOne";
import { ProjectVideoTwo } from "./ProjectVideoTwo";
import { ProjectsImageTwo } from "./ProjectsImageTwo";

export const CottaProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Brand" body1="Cotta" />
        <DescriptionLeftSide
          head="Scope"
          body1="User Interface"
          body2="User Experience"
        />
        <DescriptionLeftSide head="Team" body1="CANVAS for Works©" />
      </div>
      <CottaDescriptionBody />
      <div className="projects-body-content">
        <ProjectVideoOne vid="/images/Header-video-2.mp4" />
        <ProjectVideoOne vid="/images/Header-video.mp4" />
        <ProjectsImageOne pic="/images/cotta-imagery-one.jpeg" />
        <ProjectsImageOne pic="/images/cotta-imagery-two.jpeg" />
        <ProjectsImageOne pic="/images/cotta-imagery-three.jpeg" />
        <ProjectsImageOne pic="/images/cotta-imagery-four.jpeg" />
        <ProjectsImageOne pic="/images/cotta-imagery-five.jpeg" />
        <div className="projects-mobile-view-twin">
          <ProjectVideoTwo vid="/images/mobile-video-3.mp4" />
          <ProjectsImageTwo pic="/images/cotta-imagery-six.png" />
        </div>
      </div>
    </div>
  );
};
