import { Link } from "react-router-dom";

export const FooterNextProject = ({ linkto, pic, desc }) => {
  return (
    <div className="projects-link-to-project">
      <Link to={linkto}>
        <img src={pic} alt={desc} width="100%" height="100%"></img>
      </Link>
    </div>
  );
};
