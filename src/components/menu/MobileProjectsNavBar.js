import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function MobileProjectsNavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      <div
        className="burger-menu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className={"menu " + (showMenu ? "flex appear" : "")}>
        <ul>
          <Link to={"/ProjectsIndex"}>
            <li className="buyan">Projects</li>
          </Link>

          <Link to={"/InformationIndex"}>
            <li className="buyan">Information</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
