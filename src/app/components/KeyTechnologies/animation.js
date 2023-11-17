import { gsap } from "gsap-trial";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

gsap.defaults({
  duration: 1.5,
  ease: "expo.inOut",
});

export const animateCards = (itemRef) => {
  const tl = gsap.timeline();

  itemRef.forEach((el, index) => {
    tl.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.02,
        scrollTrigger: {
          id: `card-${index + 1}`,
          trigger: el,
          start: "top-=500 +=200",
          end: "center-=400 +=200",
          scrub: 2,
        },
      }
    );
  });

  return tl;
};

export const animateText = (itemRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    itemRef,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.2,
      // stagger: 0.02,
      scrollTrigger: {
        trigger: itemRef,
        start: "top-=500 +=200",
        end: "center-=400 +=200",
        scrub: 2,
      },
    }
  );

  return tl;
};
