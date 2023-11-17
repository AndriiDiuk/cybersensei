import { gsap } from "gsap-trial";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const animateLogoFill = (itemRef, trigger) => {
  const tl = gsap.timeline();

  return tl.fromTo(
    itemRef,
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: 1,
      ease: "circ.out",
      scrollTrigger: {
        trigger: trigger,
        start: `center +=${window.innerHeight / 1.4}`,
        end: `center+=300 +=${window.innerHeight / 1.4}`,
        markers: false,
        scrub: 2,
      },
    }
  );
};

export const animateLineVerticalTop = (itemRef, trigger) => {
  const tl = gsap.timeline();

  return tl.fromTo(
    itemRef,
    { y: -34 },
    {
      y: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: itemRef,
        start: `top +=${window.innerHeight / 1.4}`,
        end: `top +=${window.innerHeight / 1.4}`,
        markers: false,
        scrub: 2,
      },
    }
  );
};

export const animateLineVerticalBottom = (itemRef, trigger) => {
  const tl = gsap.timeline();

  return tl.fromTo(
    itemRef,
    { y: 34 },
    {
      y: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: trigger,
        start: `top +=${window.innerHeight / 1.4}`,
        end: `top +=${window.innerHeight / 1.4}`,
        markers: false,
        scrub: 2,
      },
    }
  );
};
