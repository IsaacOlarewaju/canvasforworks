import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProjectsBackground = ({ cls }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return <div className={cls} data-aos="zoom-out"></div>;
};
