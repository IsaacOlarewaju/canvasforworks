import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { ProjectsImageOne } from "./ProjectImageOne";
import { ProjectsImageFour } from "./ProjectsImageFour";
import { ProjectsImageFive } from "./ProjectsImageFive";
import { LifeCreationsDescriptionBody } from "./LifeCreationsDescriptionBody";
import { ProjectsImageThree } from "./ProjectsImageThree";
import { ProjectsBodyDescriptiveText } from "./ProjectsBodyDescriptiveText";
import { ProjectVideoOne } from "./ProjectVideoOne";

export const LifeCreationsProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        {/* <DescriptionLeftSide head="Brand" body1="Flavour Flames" /> */}
        <DescriptionLeftSide
          head="Scope"
          body1="Creative Direction"
          body2="Branding & Identity"
          body3="Digital Design"
        />
        <DescriptionLeftSide head="" body1="" body2="" body3="" />
        {/* <DescriptionLeftSide head="Team" body1="CANVAS for Works©" /> */}
      </div>
      <LifeCreationsDescriptionBody />
      <div className="projects-body-content">
        <ProjectsImageOne pic="/images/life-imagery-one.webp" />
        <ProjectsImageOne pic="/images/life-imagery-two.png" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/life-imagery-three.png" />
          <div className="blank-filler-2"></div>
          <div className="projects-body-descriptive-text-container">
            <ProjectsBodyDescriptiveText
              txt="The primary logo features the ‘GSPL’ word mark in a sophisticated
                    URW Nimbus Sans Novus font, geometrically aligned. This serves as
                    the brand’s primary visual identifier."
            />
            <ProjectsBodyDescriptiveText
              txt="Additionally, the stylised ‘G’ in the
                    Audrey typeface serves as a secondary logo, adding a decorative and more
                    stylish element while maintaining cohesion with the brand’s identity."
            />
            <ProjectsBodyDescriptiveText
              txt="These logos embody GSPL’s commitment to
                    excellent simplicity, straight to the point, adaptively representing the
                    brand across various mediums with clarity and impact."
            />
          </div>
        </div>
        <ProjectsBodyDescriptiveText txt="-" />
        <ProjectsBodyDescriptiveText
          txt="Sticking to the theme of literal emphasis on ‘life’
        and ‘creation’, the design channels garden imagery, evoking the language of Psalm 1—being
        fruitful, being planted, and being well-watered."
        />
        <ProjectsBodyDescriptiveText
          txt="This approach is speaks in the tones of that which Life
        Creations represents. The imagery of vegeation and growth alludes to life and the building
        up of something small into something great, where a single bud has the potential within to
        become a vast garden; a poetic message of building giants."
        />
        <ProjectsBodyDescriptiveText
          txt="In the logomark, a tall fruit tree stands, with branches and colourful fruit &
          leaves, which grow and reach beyond its surroundings; outside the cirlce."
        />
        <ProjectsImageOne pic="/images/life-imagery-four.png" />
        <ProjectsImageOne pic="/images/life-imagery-five.png" />
        <ProjectVideoOne vid="/images/life-video-six.mp4" />
        <ProjectsImageOne pic="/images/life-imagery-seven.png" />
        <ProjectsImageOne pic="/images/life-imagery-joint.png" />
        <ProjectsImageOne pic="/images/life-imagery-nine.png" />
      </div>
    </div>
  );
};
