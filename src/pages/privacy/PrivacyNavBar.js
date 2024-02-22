import { Link } from "react-router-dom";
import { Brand } from "../../components/menu/Brand";

export const PrivacyNavBar = () => {
  return (
    <nav>
      <ul className="projects-nav-bar">
        <div className="buttons-container">
          <Brand />
        </div>
        <li className="projects-navbar-link">
          <Link to={"/ProjectsIndex"}>Projects</Link>
        </li>
        <li className="projects-navbar-link">
          <Link to={"/InformationIndex"}>Information</Link>
        </li>
      </ul>
    </nav>
  );
};
