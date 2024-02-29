import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="info-container">
      <div className="who-we-are-container">
        <div className="information-first-container" data-aos="fade-zoom-in">
          <p className="information-opening"></p>
          <div className="information-second-container">
            <div className="information-content">
              <p>
                For general enquiries, please contact info@canvas-fw.com
                <br />
                <br />
                <br />
                <br />
                To partner with us on a project, please contact
                projects@canvas-fw.com
                <br />
                <br />
                <br />
                <br />
                <Link
                  to={"https://www.instagram.com/canvasforworks/"}
                  target="_blank"
                >
                  Instagram
                </Link>
                <br />
                <br />
                <br />
                <br />
                2024 CANVAS for Works©. All Rights Reserved.
              </p>
            </div>
            <div className="information-footer">
              <Link to={"/Privacy"}>Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
