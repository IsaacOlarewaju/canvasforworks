import { DescriptionLeftSide } from "./DescriptionLeftSide";
import { GsplDescriptionBody } from "./GsplDescriptionBody";
import { ProjectsImageThree } from "./ProjectsImageThree";
import { ProjectsImageOne } from "./ProjectImageOne";
import { ProjectsImageFour } from "./ProjectsImageFour";
import { Link } from "react-router-dom";
import { ProjectsBodyDescriptiveText } from "./ProjectsBodyDescriptiveText";
import { ProjectVideoOne } from "./ProjectVideoOne";

export const GsplProjectsBody = () => {
  return (
    <div className="projects-opening-desctiption-container">
      <div className="description-section-one">
        {/* STICKY DIV ^ */}
        <DescriptionLeftSide head="Brand" body1="GSPL" />
        <DescriptionLeftSide
          head="Scope"
          body1="Creative Direction"
          body2="Branding & Identity"
          body3="Digital Design"
          body4="Development"
        />
        <DescriptionLeftSide head="Team" body1="CANVAS for Works©" />
      </div>
      <GsplDescriptionBody />
      <div className="projects-body-content">
        <ProjectsImageOne pic="/images/gspl-imagery-one.webp" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gspl-imagery-twelve.webp" />
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
        <ProjectsImageOne pic="/images/gspl-imagery-ten.webp" />
        <ProjectsImageFour pic="/images/gspl-imagery-fourteen.webp" />
        <ProjectsImageOne pic="/images/gspl-imagery-four-and-five.webp" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gspl-imagery-thirteen.webp" />
          <div className="blank-filler-2"></div>
          <div className="projects-body-descriptive-text-container">
            <ProjectsBodyDescriptiveText txt="Typography" />
            <ProjectsBodyDescriptiveText
              txt="The application of URW Nimbus Sans Novus fonts, extrapolated from the primary
              logo design, is a strategic choice driven by its refined design and extensive
              style range. It offers versatility and timelessness, and helps to bring the
              entirety of the visual identity to harmonious cohesion."
            />
            <ProjectsBodyDescriptiveText
              txt="Decorative handwriting supplements visual creative materials with a personable
              element, helping to make the creatives feel more unique, where digital media can
              often feel robotic and impersonal.
              "
            />
            <ProjectsBodyDescriptiveText
              txt="Biro Script Plus is an excellent typeface, which alternates the shape of
              repeating glyphs, creating natural writing sequences, exuding an authentic
              sense of craftsmanship.
              "
            />
          </div>
        </div>
        <ProjectsImageOne pic="/images/gspl-imagery-three.webp" />
        <ProjectVideoOne vid="/images/gspl-imagery-sixteen.mp4" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gspl-imagery-eleven.webp" />
          <div className="blank-filler-2"></div>
          <div className="projects-body-descriptive-text-container">
            <ProjectsBodyDescriptiveText txt="Imagery" />
            <ProjectsBodyDescriptiveText
              txt="In crafting the photography style, I aimed to authentically capture the
              essence of the key message."
            />
            <ProjectsBodyDescriptiveText
              txt="The execution encompasses two distinct styles:
            general & abstract photography (sourced from real-life, every day moments where
            the gospel is present), and feature photography (commissioned specifically for
            GSPL projects and campaigns), which has a slightly different layout.."
            />
            <ProjectsBodyDescriptiveText
              txt="With a focus on warmth, naturalism, and
            informativeness, I sought to depict both modern and archaic moments, evoking
            the universal and lasting relevance of the gospel message.."
            />
          </div>
        </div>
        <ProjectsImageOne pic="/images/gspl-imagery-eight.webp" />
        <div className="projects-double">
          <ProjectsImageThree pic="/images/gspl-imagery-nine.webp" />
          <div className="blank-filler-2"></div>
          <div className="projects-body-descriptive-text-container">
            <ProjectsBodyDescriptiveText txt="Colour" />
            <ProjectsBodyDescriptiveText
              txt="White and black are the primary colours,
            while spectral colours are secondary, used very subtly to represent God’s delicate
            but perpetual presence in all things."
            />
            <ProjectsBodyDescriptiveText
              txt="Consisting of seven colours, the number
            of completion, the presence of the spectral light is an ode to the nature of God’s
            multidimensional person and presence. The purity of the predominant white and the
            richness of spectral colour is a subtle but provocative juxtaposition which adorns
            imagery."
            />
          </div>
        </div>
        <ProjectsImageOne pic="/images/gspl-imagery-fifteen.webp" />
        <ProjectsImageOne pic="/images/gspl-imagery-six-and-seven.webp" />
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
