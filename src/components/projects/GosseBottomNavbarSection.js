import { Link } from "react-router-dom";
import { FooterNextProject } from "./FooterNextProject";

export const GosseBottomNavbarSection = () => {
  return (
    <div className="bottom-navbar-section">
      <div className="bottom-navbar-container">
        <div className="back-to-projects-container">
          <Link to={"/ProjectsIndex"}>Back to Projects</Link>
        </div>
        <div className="projects-quick-links">
          <FooterNextProject
            linkto="/CottaIndex"
            pic="/images/cotta.jpeg"
            desc="Cover image of the Cotta project"
          />
          <FooterNextProject
            linkto="/SoarRisingIndex"
            pic="/images/soar.jpeg"
            desc="Cover image of the SOARising project"
          />
          <FooterNextProject
            linkto="/CornerstoneIndex"
            pic="/images/cornerstone.jpeg"
            desc="Cover image of the Cornerstone project"
          />
        </div>
      </div>
    </div>
  );
};
