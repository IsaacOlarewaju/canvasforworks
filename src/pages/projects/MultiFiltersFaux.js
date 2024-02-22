import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Brand } from "../../components/menu/Brand";

export const MultiFiltersFaux = () => {
  return (
    // NavBar Content
    <div>
      <div className="buttons-container">
        <Brand brand="../../images/logo-light.png" className="canvas-logo" />
        <Link
          className="navbar-width projects-navbar-link"
          to={"/ProjectsIndex"}
        >
          Projects
        </Link>

        <Link
          className="navbar-width projects-navbar-link"
          to={"/InformationIndex"}
        >
          Information
        </Link>
      </div>
    </div>
  );
};
