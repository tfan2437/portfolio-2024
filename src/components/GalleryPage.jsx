import "./GalleryPage.css";
import useScroll from "../utils/useScroll";
import { useEffect } from "react";

const GalleryPage = () => {
  useScroll();

  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <div className="gallery-container">
      <nav>
        <a href="#">Codegrid</a>
        <a href="#">Subscribe</a>
      </nav>

      <div className="gallery">
        <div className="minimap">
          <div className="preview">
            {Array.from({ length: 10 }, (_, i) => (
              <div className="item-preview" key={i}>
                <img
                  src={`../src/assets/img${i + 1}.jpg`}
                  alt={`img${i + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="active-img-indicator"></div>
        </div>

        <div className="images">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="item" key={i}>
              <div className="item-img">
                <img
                  src={`../src/assets/img${i + 1}.jpg`}
                  alt={`img${i + 1}`}
                />
              </div>
              <div className="item-copy">
                <p>{`img_${i + 1}.jpg`}</p>
                <p>{`${i + 1}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1>
          Explore a world where every horizon promises new wonders and each
          journey is a tapestry of breathtaking landscapes and timeless moments.
          With us, your travel transcends into a utopian adventure.
        </h1>
        <div className="hero-img">
          <img src="./assets/hero.jpg" alt="hero" />
        </div>
        <h1>
          Discover the charm of hidden gems and cultural treasures on a voyage
          that delves deep into the heart of the worlds most elusive
          destinations. Join us to transform the ordinary into the
          extraordinary.
        </h1>
        <h1>
          Venture beyond the conventional with our expertly curated expeditions
          that connect you with the pulse of distant locales through immersive
          experiences and local insights. Embark on a journey unlike any other.
        </h1>
      </div>
    </div>
  );
};

export default GalleryPage;
