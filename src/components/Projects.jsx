import "./Projects.css";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Projects = () => {
  return (
    <div className="project-cards-container">
      <div className="projects-page-nav">
        <NavLink
          to={"/"}
          style={{ background: "#ffffffc1", borderRadius: "4px" }}
        >
          <button className="nav-button">
            <span>·</span> HOME
          </button>
        </NavLink>
        <NavLink
          to={"/"}
          style={{ background: "#ffffffa1", borderRadius: "4px" }}
        >
          <button className="nav-button">
            <span>·</span> CONTACT
          </button>
        </NavLink>
      </div>
      <div className="project-cards">
        <NavLink to={"/project/orbit"}>
          <div className="project-card">
            <div className="project-card-wrapper">
              <img src={assets.orbit_m} alt="" />
              <div className="card-mask"></div>
              <div className="project-card-text">
                <div className="project-name">
                  Orbit <span>AI Chat App</span>
                </div>
                <div className="project-card-id">1</div>
              </div>
            </div>
          </div>
        </NavLink>
        <div className="projects-divider"></div>

        <NavLink to={"/project/tovier"}>
          <div className="project-card">
            <div className="project-card-wrapper">
              <img src={assets.tovier_m} alt="" />
              <div className="card-mask"></div>
              <div className="project-card-text">
                <div className="project-name">
                  TOVIER <span>Movies & TV Trailer</span>
                </div>
                <div className="project-card-id">2</div>
              </div>
            </div>
          </div>
        </NavLink>

        <div className="projects-divider"></div>

        <NavLink to={"/project/sonicfi"}>
          <div className="project-card">
            <div className="project-card-wrapper">
              <img src={assets.sonicfi_m} alt="" />
              <div className="card-mask"></div>
              <div className="project-card-text">
                <div className="project-name">
                  Sonicfi <span>Music Streaming</span>
                </div>
                <div className="project-card-id">3</div>
              </div>
            </div>
          </div>
        </NavLink>

        <div className="projects-divider"></div>
        <div className="project-card">
          <div className="project-card-wrapper">
            <img src={assets.mining_m} alt="" />
            <div className="card-mask"></div>
            <div className="project-card-text">
              <div className="project-name">
                Mining House<span>Crypto Mining Domestic System</span>
              </div>
              <div className="project-card-id">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
