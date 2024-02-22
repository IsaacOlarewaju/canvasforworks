import { Link } from "react-router-dom";

export const BrandInformation = () => {
  return (
    <div className="canvas-logo-container">
      <Link to={"/"}>
        <img
          src="../../images/logo-information.png"
          className="canvas-logo"
        ></img>
      </Link>
    </div>
  );
};
