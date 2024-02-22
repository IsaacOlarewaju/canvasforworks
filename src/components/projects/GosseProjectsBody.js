import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { GosseDescriptionBody } from "./GosseDescriptionBody";
import { ProjectVideoOne } from "./ProjectVideoOne";
import { ProjectsImageThree } from "./ProjectsImageThree";
import { YouTubeVideoContainer } from "./YouTubeVideoContainer";
import { Link } from "react-router-dom";

export const GosseProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Brand" body1="GOSSE au CŒUR" />
        <DescriptionLeftSide
          head="Scope"
          body1="Art Direction"
          body2="Art Design"
        />
        <DescriptionLeftSide
          head="Team"
          body1="CANVAS for Works©"
          body2="Benjamin Kyei"
          body3="Who Else"
          body4="Joycelyn"
        />
      </div>
      <GosseDescriptionBody />
      <div className="projects-body-content">
        <ProjectVideoOne vid="/images/gosse-video-1.mp4" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gosse-imagery-one.jpeg" />
          <div className="blank-filler-2"></div>
          <ProjectsImageThree pic="/images/gosse-imagery-two.jpeg" />
        </div>
        <div className="projects-triple">
          <ProjectsImageThree pic="/images/gosse-imagery-three.jpeg" />
          <div className="blank-filler-3"></div>
          <ProjectsImageThree pic="/images/gosse-imagery-four.jpeg" />
          <div className="blank-filler-3"></div>
          <ProjectsImageThree pic="/images/gosse-imagery-five.jpeg" />
        </div>
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gosse-imagery-six.jpeg" />
          <div className="blank-filler-2"></div>
          <ProjectsImageThree pic="/images/gosse-imagery-seven.jpeg" />
        </div>
        <YouTubeVideoContainer />
        <div className="closure-links-container">
          <div className="closure-links-list">
            Press
            <br />
            <Link
              className="closure-links"
              to="https://pausemag.co.uk/2020/11/gosse-au-coeur-releases-a-lookbook-for-its-third-collection/"
              target="_blank"
            >
              PAUSE magazine
            </Link>
            <br />
            <Link
              className="closure-links"
              to="https://guap.co.uk/gosse-au-coeur-forever-daydreaming-collection/"
              target="_blank"
            >
              GUAP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
