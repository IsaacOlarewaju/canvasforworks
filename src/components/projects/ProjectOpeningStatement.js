import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProjectOpeningStatement = ({ txt }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="projects-opening-statement-container">
      <div className="projects-opening-statement-text" data-aos="fade-in">
        {txt}
      </div>
    </div>
  );
};
