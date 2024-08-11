import gsap from "gsap";

export const splitTextIntoSpans = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const text = element.innerText;
    const splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    element.innerHTML = splitText;
  }
};

export const initAnimations = (isOpen, setIsOpen) => {
  splitTextIntoSpans(".hero-section__send h1");
  splitTextIntoSpans(".hero-section__header-text h1");

  gsap.to(".hero-section__header-text h1 span", {
    top: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.075,
  });

  gsap.from(
    ".hero-section__cta, .hero-section__nav, .hero-section__tagline, .hero-section__links",
    {
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      delay: 1,
    }
  );

  const timeline = gsap.timeline({ paused: true });

  timeline.to(".hero-section__overlay", {
    opacity: 1,
    duration: 0.3,
    pointerEvents: "all",
  });

  timeline.to(".hero-section__send h1 span", {
    top: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.075,
  });

  const handleToggle = () => {
    if (isOpen) {
      timeline.reverse();
    } else {
      timeline.play();
    }
    setIsOpen(!isOpen);
  };

  document
    .querySelector("#hero-section__toggle")
    .addEventListener("click", handleToggle);
  document
    .querySelector("#hero-section__back")
    .addEventListener("click", handleToggle);

  return () => {
    document
      .querySelector("#hero-section__toggle")
      .removeEventListener("click", handleToggle);
    document
      .querySelector("#hero-section__back")
      .removeEventListener("click", handleToggle);
  };
};
