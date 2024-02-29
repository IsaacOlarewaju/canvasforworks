import { Link } from "react-router-dom";

export const HomepageBackground = () => {
  return (
    <Link to={"/ProjectsIndex"}>
      <div className="homepage-background"></div>
    </Link>
  );
};
