import { Link } from "react-router-dom";
import { FooterNextProject } from "./FooterNextProject";

export const CornerstoneBottomNavbarSection = () => {
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
            linkto="/GooseIndex"
            pic="/images/gosse.jpeg"
            desc="Cover image of the SOARising project"
          />
          <FooterNextProject
            linkto="/SoarRisingIndex"
            pic="/images/soar.jpeg"
            desc="Cover image of the SOARising project"
          />
        </div>
      </div>
    </div>
  );
};
