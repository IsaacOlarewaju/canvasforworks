import { Link } from "react-router-dom";

export const Brand = ({ brand }) => {
  return (
    <div className="canvas-logo-container">
      <Link to={"/"}>
        <img className="canvas-logo" src={brand}></img>
      </Link>
    </div>
  );
};

{
  /* <img src="../../images/logo.png" className="canvas-logo"></img> */
}
