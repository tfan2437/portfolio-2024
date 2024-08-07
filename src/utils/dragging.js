import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export const initializeDraggable = (setProjectIndex) => {
  const container = document.querySelector(".home-display-projects");

  const draggingTrack = document.querySelector(".dragging-track");
  const draggingBar = document.querySelector(".dragging-bar");

  const draggingTrackHeight = draggingTrack.offsetHeight;
  const draggingBarHeight = draggingBar.offsetHeight;

  const gap = parseInt(window.getComputedStyle(document.body).fontSize);
  const maxDragY = draggingTrackHeight - draggingBarHeight - 1;

  for (let i = 0; i < 10; i++) {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    draggingTrack.appendChild(marker);
  }

  Draggable.create(draggingBar, {
    type: "y",
    bounds: {
      minY: gap,
      maxY: draggingTrackHeight - 3,
    },
    onDrag: function () {
      let currentY = this.y;
      let progress = this.y / maxDragY;
      let containerY = -350 * (draggingTrackHeight / 100) * progress;

      if (currentY < 113.5) {
        setProjectIndex(0);
      } else if (currentY >= 113.5 && currentY < 211) {
        setProjectIndex(1);
      } else if (currentY >= 211 && currentY < 308.5) {
        setProjectIndex(2);
      } else {
        setProjectIndex(3);
      }

      gsap.to(container, {
        y: containerY,
        duration: 1,
        ease: "power3.out",
      });
    },
  });
};
