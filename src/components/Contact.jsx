import { useEffect, useState } from "react";
import "./Contact.css";
import { initAnimations } from "../utils/contactAnimation";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cleanup = initAnimations(isOpen, setIsOpen);
    return cleanup;
  }, [isOpen]);

  return (
    <section className="hero-section">
      <div className="hero-section__nav">
        <p>
          The freelance directory <br />a thomas aufresne and isaac powell
          creation
        </p>
      </div>

      <div className="hero-section__header">
        <div className="hero-section__header-text">
          <h1>La Piga</h1>
        </div>
        <div className="hero-section__cta">
          <button id="hero-section__toggle">Apply now</button>
        </div>
      </div>

      <div className="hero-section__tagline">
        <p>
          Indépendant; à la pige; adj Release <br />
          v1.0 coming soon
        </p>
      </div>

      <div className="hero-section__links">
        <button>Instagram</button>
        <button>Twitter</button>
      </div>

      <div className="hero-section__overlay">
        <div className="hero-section__col">
          <div className="hero-section__logo">
            <a href="#">La Pige</a>
          </div>

          <div className="hero-section__form">
            <form>
              <label htmlFor="fname">Name*</label>
              <br />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="first + surname"
              />
              <br />
              <br />

              <label htmlFor="lname">Location*</label>
              <br />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="e.g france"
              />
              <br />
              <br />

              <label htmlFor="website">Website</label>
              <br />
              <input
                type="text"
                id="website"
                name="website"
                placeholder="https://"
              />
              <br />
              <br />

              <label htmlFor="jobs">Disciplines</label>
              <br />
              <div className="hero-section__jobs">
                <div className="hero-section__job-items">
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Digital Design</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Front-end</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Webgl</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Photography</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Illustration</label>
                    <br />
                  </div>
                </div>
                <div className="hero-section__job-items">
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Brand Design</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Bakc-end</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>3D</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Motion</label>
                    <br />
                  </div>
                  <div className="hero-section__item">
                    <input type="checkbox" />
                    <label>Strategy</label>
                    <br />
                  </div>
                </div>
              </div>

              <button>Send Application</button>
            </form>
          </div>
        </div>
        <div className="hero-section__col">
          <div className="hero-section__copy">
            <p>[ get featured ]</p>
            <p id="hero-section__back">[ back ]</p>
          </div>
          <div className="hero-section__about">
            <p>
              To be considered for a listing on La Pige, please fill out your
              details opposite. Each application will be carefully reviewed and
              vetted while v1.0 release is being worked on.
            </p>
          </div>

          <div className="hero-section__send">
            <h1>Apply</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
