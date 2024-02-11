import { gsap } from "gsap-trial";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const animateWrapperShow = (wrapperRef) => {
  return gsap.to(wrapperRef, { right: "0", duration: 0.6, delay: 0.05 });
};

export const animateWrapperHidden = (wrapperRef) => {
  return gsap.to(wrapperRef, { right: "-100vw", duration: 0.1 });
};

export const animateDesignWrapper = (wrapperRef) => {
  return gsap.fromTo(
    wrapperRef,
    { opacity: 0, bottom: "-100vh" },
    {
      opacity: 1,
      bottom: "0",
      duration: 0.8,
    }
  );
};

export const animateLink = (wrapperRef) => {
  return gsap.fromTo(
    wrapperRef,
    { x: -100 },
    {
      x: 0,
      duration: 0.4,
      delay: 0.6,
      ease: "circ.out",
    }
  );
};

export const animateArrow = (wrapperRef) => {
  return gsap.fromTo(
    wrapperRef,
    { x: -20 },
    {
      x: 0,
      duration: 0.6,
      ease: "circ.out",
    }
  );
};

export const animateNavItem = (navItemRefs) => {
  const tl = gsap.timeline();

  tl.fromTo(
    navItemRefs,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "circ.out",
    }
  );

  return tl;
};

export const animateLineItem = (navItemRefs) => {
  const tl = gsap.timeline();

  tl.fromTo(
    navItemRefs,
    {
      left: `${pxToVw(-900)}`,
      opacity: 0,
    },
    {
      left: `${pxToVw(-407)}`,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "circ.out",
    }
  );

  return tl;
};
