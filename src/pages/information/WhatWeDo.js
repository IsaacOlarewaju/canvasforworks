import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const WhatWeDo = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="info-container">
      <div className="who-we-are-container">
        <div className="information-first-container" data-aos="fade-zoom-in">
          <p className="information-opening">
            “If you can't find the right media, <i>create your own.”</i>
            <br />
            <br />- Dr. Myles Munroe
          </p>
          <div className="information-second-container">
            <div className="information-content">
              <p>
                Canvas for Works© focuses on collaborating, in order to produce
                good media across multiple canvases. We base our projects - both
                external and in-house - on solutions; it's at the foundation of
                all that we do.
                <br />
                <br />
                Our solutions come from an in-depth understanding of targeted
                audiences, and insight into how targeted markets work. Our
                knowledge of production ensures that the end result always stays
                true to the original vision.
                <br />
                <br />
                We partner up to produce good work. Because of this, we prefer
                to identify whom we work with as partners rather than clients.
                There becomes a wide scope for truly impactful work with this
                approach.
                <br />
                <br />
                We work with brands of all sizes, offering the care and
                attention to detail of small, specifically constructed teams. We
                aim to work closely with our partners towards a unified goal,
                building long-term relationships, as opposed to short-term
                transactions.
                <br />
                <br />
                <br />
                <br />
                <br />
                Media informs our minds, and what our minds are fed with will
                inspire our thoughts and our actions. If we want healthier
                minds, healthier communities, how much more do we need healthy
                media?
                <br />
                <br />
                Our communities speak many languages, across a variety of
                canvases – art, design, photography, film, television, fashion,
                music, books, and more. These mediums dominate the majority of
                our lives. We focus on developing media in areas of culture and
                commerce – partnering, designing, and collaborating, with brands
                and practitioners.
                <br />
                <br />
                Our work combines ability and intelligence, with knowledge and
                craftsmanship, and an undying conviction to produce good media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
