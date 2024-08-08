import "./Home.css";
import { useEffect, useState } from "react";
import { initializeAnimations } from "../utils/animations";
import w from "../assets/w.png";

import { NavLink } from "react-router-dom";
import { initializeDraggable } from "../utils/dragging";
import { projectInfo } from "../data/projectInfo";
import { assets } from "../assets/assets";

const Home = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    initializeAnimations();
    initializeDraggable(setProjectIndex);
  }, []);

  useEffect(() => {
    console.log("Current Display Project: " + projectIndex);
  }, [projectIndex]);

  return (
    <div className="home-container">
      {/* Loader Element */}
      <div className="loader">
        <div className="counter">70</div>
      </div>
      <nav className="home-navbar">
        <div className="logo-container">
          <div className="logo">
            <img src={w} alt="" />
            <h1 className="animated-text animated-repeat">TING-WEI FAN</h1>
          </div>
          <div className="job-title">
            <p className="animated-text animated-repeat">
              frontend developer //////
            </p>
            <p className="animated-text animated-repeat">
              Architect //////////////
            </p>
          </div>
        </div>
        <div className="nav-links-container">
          <NavLink to={"/"}>
            <button className="nav-button">
              <span>·</span>CONTACT
            </button>
          </NavLink>
          <NavLink to={"/projects"}>
            <button className="nav-button">
              <span>·</span>PROJECTS
            </button>
          </NavLink>
        </div>
      </nav>

      <div className="intro-container">
        <p className="intro">
          Lorenzo Michelini, an independent creative developer, specializes in
          3D, interaction, and fluid animations. Operating from Modena, Italy,
          he offers his expertise remotely to clients across the globe.
        </p>
        <p className="portfolio-text animated-text animated-repeat">
          PORTFOLIO 2024
        </p>
      </div>
      <div className="home-display-projects-mask-top"></div>
      <div className="home-display-projects-mask-bot"></div>
      <div className="home-display-projects">
        <img
          src={assets.mining_w}
          alt=""
          className="home-display-project-img"
        />
        <img src={assets.orbit_w} alt="" className="home-display-project-img" />
        <img
          src={assets.tovier_w}
          alt=""
          className="home-display-project-img"
        />
        <img
          src={assets.sonicfi_w}
          alt=""
          className="home-display-project-img"
        />
      </div>
      <div className="dragging-track">
        <div className="dragging-bar">
          <p>
            [<span>Drag</span>]
          </p>
        </div>
      </div>
      <footer className="home-projects-container">
        <div>
          <div className="home-project-index">
            <p className="animated-text">
              {projectInfo[projectIndex].subTitle}
            </p>
          </div>
          <div className="home-project-name">
            <p className="animated-text">{projectInfo[projectIndex].name}</p>
          </div>
          <button className="nav-button">
            <span>·</span> PROJECT PAGE
          </button>
        </div>
        <div className="home-project-info">
          <div>
            <p className="home-project-category animated-text">
              <span>·</span> year
            </p>
            <p className="animated-text">{projectInfo[projectIndex].year}</p>
          </div>
          <div>
            <p className="home-project-category animated-text">
              <span>·</span> type
            </p>
            <p className="animated-text">{projectInfo[projectIndex].type}</p>
          </div>
          <div>
            <p className="home-project-category animated-text">
              <span>·</span> desc
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].description}
            </p>
          </div>
          <div>
            <p className="home-project-category animated-text">
              <span>·</span> Tech Stack
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].techStack[0]}
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].techStack[1]}
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].techStack[2]}
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].techStack[3]}
            </p>
            <p className="animated-text">
              {projectInfo[projectIndex].techStack[4]}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
