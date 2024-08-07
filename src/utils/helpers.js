import { gsap } from "gsap";

export function shuffleText(element, finalText, duration, callback) {
  let i = 0;
  const shuffleInterval = setInterval(() => {
    if (i < duration) {
      element.innerHTML = Math.random().toString(36).substring(2, 16);
      i++;
    } else {
      clearInterval(shuffleInterval);
      element.innerHTML = finalText;
      if (callback) callback();
    }
  }, 100);
}

export function removeLetters(element, callback) {
  let text = element.innerHTML;
  const removeInterval = setInterval(() => {
    if (text.length > 0) {
      text = text.substring(0, text.length - 1);
      element.innerHTML = text;
    } else {
      clearInterval(removeInterval);
      if (callback) callback();
    }
  }, 100);
}

// Run Twice Version
export function animateElements(elementsToAnimate, runCount = 2) {
  elementsToAnimate.forEach((element) => {
    let originalText = element.textContent.toUpperCase();
    let index = 0;

    const shuffleElement = setInterval(() => {
      if (index < originalText.length) {
        let shuffledText = "";
        for (let i = 0; i <= index; i++) {
          shuffledText +=
            i < index
              ? originalText[i]
              : Math.random().toString(36)[2].toUpperCase();
        }
        element.textContent = shuffledText + originalText.substring(index + 1);
        index++;
      } else {
        clearInterval(shuffleElement);
        element.textContent = originalText;
        if (runCount > 1) {
          animateElements([element], runCount - 1);
        }
      }
    }, 100);
  });
}

export function animateIntroTag(introTag) {
  let originalText = introTag.textContent;
  let currentText = "";
  let index = 0;

  const revealText = setInterval(() => {
    if (index < originalText.length) {
      currentText += originalText[index];
      introTag.textContent = currentText;
      index++;
    } else {
      clearInterval(revealText);
    }
  }, 25);
}
