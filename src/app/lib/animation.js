import { gsap } from "gsap-trial";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const moveUpLinkTitle = (elementsRef, triggerRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    elementsRef,
    {
      y: 50,
      opacity: 0,
      duration: 1.2,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "circ.out",
      scrollTrigger: {
        trigger: triggerRef,
        start: "top-=400",
        end: "center",
        scrub: true,
      },
    }
  );
  return tl;
};

export const moveUpDescription = (elementsRef, triggerRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    elementsRef,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: triggerRef,
        start: "top-=540",
        end: "center",
        scrub: true,
      },
    }
  );
  return tl;
};
