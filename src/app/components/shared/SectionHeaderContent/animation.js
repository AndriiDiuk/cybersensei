import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const animateTitleText = (navItemRefs, triggerRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    navItemRefs,
    { y: 100 },
    {
      y: 0,
      duration: 0.7,
      delay: 0.08,
      ease: "circ.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: navItemRefs,
        start: "top-=300 +=200",
        end: "top-=280 +=200",
        //   markers: true,
        stagger: 0.15,
        //   toggleActions: "pay none none reverse",
        scrub: 2,
      },
    }
  );

  return tl;
};
