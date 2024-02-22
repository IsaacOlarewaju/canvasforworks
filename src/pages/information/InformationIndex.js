import { WhoWeAre } from "./WhoWeAre";
import { WhatWeDo } from "./WhatWeDo";
import { Contact } from "./Contact";
import { Link } from "react-router-dom";
import { Privacy } from "../privacy/Privacy";
import { BrandInformation } from "../../components/menu/BrandInformation";
import { useState } from "react";

export const InformationIndex = () => {
  const [selectedLink, setSelectedLink] = useState("contact");

  return (
    <div className="information-body">
      <div className="buttons-container">
        <BrandInformation />
        {/* NavBar content*/}
        <Link
          className="projects-navbar-link-information"
          to={"/ProjectsIndex"}
        >
          Projects
        </Link>
      </div>
      <div className="information-navbar-background"></div>
      <div className="information-body-container">
        <div className="sub-navbar-container">
          <ul>
            <li onClick={() => setSelectedLink("whoweare")}>Who we are</li>
            <li onClick={() => setSelectedLink("whatwedo")}>What we do</li>
            <li onClick={() => setSelectedLink("contact")}>Contact</li>
          </ul>
        </div>
        {selectedLink === "whoweare" && <WhoWeAre />}
        {selectedLink === "whatwedo" && <WhatWeDo />}
        {selectedLink === "contact" && <Contact />}
      </div>
    </div>
  );
};
