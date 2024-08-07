import { gsap } from "gsap";
import {
  shuffleText,
  removeLetters,
  animateElements,
  animateIntroTag,
} from "./helpers";

export function initializeAnimations() {
  const counter = document.querySelector(".counter");
  const loader = document.querySelector(".loader");
  const elementsToAnimate = document.querySelectorAll(".animated-text");
  const elementsToAnimateRepeat = document.querySelectorAll(".animated-repeat");
  const introTag = document.querySelector(".intro");

  gsap.to(counter, {
    innerHTML: 100 + "%",
    duration: 1,
    snap: "innerHTML",
    ease: "none",
    onComplete: () => {
      setTimeout(
        () =>
          shuffleText(counter, "TING-WEI/24", 8, () => {
            setTimeout(
              () =>
                removeLetters(counter, () => {
                  animateElements(elementsToAnimate);
                  animateIntroTag(introTag);
                  fadeOutLoader(loader);
                }),
              200
            );
          }),
        200
      );
    },
  });

  function animateElementsWithInterval(times, interval) {
    let count = 0;
    let intervalId = setInterval(() => {
      animateElements(elementsToAnimateRepeat);
      count++;
      if (count === times) {
        clearInterval(intervalId);
      }
    }, interval);
  }

  animateElementsWithInterval(7, 15000);
}

function fadeOutLoader(loader) {
  gsap.to(loader, {
    opacity: 0,
    pointerEvents: "none",
    duration: 1,
  });
}
