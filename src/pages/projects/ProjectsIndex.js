import { MultiFilters } from "./MultiFilters";
import { MobileProjectsNavBar } from "../../components/menu/MobileProjectsNavBar";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ProjectsIndex = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="fade-zoom-in">
      <MultiFilters />
      <MobileProjectsNavBar />
    </div>
  );
};
