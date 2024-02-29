import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { CornerstoneDescriptionBody } from "./CornerstoneDescriptionBody";
import { ProjectVideoTwo } from "./ProjectVideoTwo";
import { ProjectsImageOne } from "./ProjectImageOne";

export const CornerstoneProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Organization" body1="Cornerstone Partners" />
        <DescriptionLeftSide head="Scope" body1="User Experience" />
      </div>

      <CornerstoneDescriptionBody />
      <div className="projects-body-content">
        <ProjectsImageOne pic="/images/cornerstone-imagery-one.png" />
        <ProjectVideoTwo vid="/images/cornerstone-video-1.mp4" />
      </div>
    </div>
  );
};
