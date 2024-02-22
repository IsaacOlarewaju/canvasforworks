import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const DescriptionLeftSide = ({
  head,
  body1,
  body2,
  body3,
  body4,
  body5,
}) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="description-section-one-section" data-aos="fade-in">
      <div className="description-section-one-head">
        <h3>
          <b>{head}</b>
        </h3>
      </div>
      <div className="description-section-one-body">
        {body1}
        <div></div>
        {body2}
        <div></div>
        {body3}
        <div></div>
        {body4}
        <div></div>
        {body5}
      </div>
    </div>
  );
};
