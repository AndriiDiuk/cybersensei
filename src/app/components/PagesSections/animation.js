import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const animateSection = (navItemRefs, triggerRef) => {
  const tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: triggerRef,
    //  scroll: triggerRef,
    pin: true,
    start: "top top",
    end: `top+=${window.innerHeight - triggerRef.offsetHeight}`,
    //  markers: true,
  });

  navItemRefs.forEach((el, index) => {
    tl.fromTo(
      el,
      { yPercent: 20, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: `top +=${window.innerHeight}`,
          end: `bottom +=${window.innerHeight}`,
          scrub: false,
          stagger: 0.5,
          //  markers: true,
        },
      }
    );
  });

  return tl;
};
