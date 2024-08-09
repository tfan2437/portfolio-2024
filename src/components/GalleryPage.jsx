import "./GalleryPage.css";
import useScroll from "../utils/useScroll";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { projectDesc, projectImages, projectInfo } from "../data/projectInfo";

const GalleryPage = ({ projectIndex, scrollScale }) => {
  useScroll(scrollScale);

  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <div className="gallery-container">
      <nav className="gallery-nav">
        <NavLink to={"/projects"}>Projects</NavLink>
        <a href={projectInfo[projectIndex + 1].domain} target="_blank">
          Live Demo
        </a>
      </nav>

      <div className="gallery">
        <div className="minimap">
          <div className="preview">
            {projectImages[projectIndex].web.map((item, index) => (
              <div className="item-preview" key={index}>
                <img src={item} alt="" />
              </div>
            ))}
            <div className="item-preview-mobile">
              {projectImages[projectIndex].mobile.map((item, index) => (
                <div className="item-preview-mobile-img" key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="active-img-indicator"></div>
        </div>

        <div className="images">
          {projectImages[projectIndex].web.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-img">
                <img src={item} alt="" />
              </div>
            </div>
          ))}
          <div className="item-mobile">
            {projectImages[projectIndex].mobile.map((item, index) => (
              <div className="item-mobile-img" key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="desc-container">
        {projectDesc[projectIndex].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
