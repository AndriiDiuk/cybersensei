import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const animateNavbar = (navbarRef) => {
  return gsap.fromTo(
    navbarRef,
    { y: -100 },
    {
      y: 0,
      duration: 1.2,
      delay: 0.1,
    }
  );
};

export const animateTextLogo = (textLogoRef) => {
  return gsap.fromTo(
    textLogoRef,
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=120",
        scrub: true,
      },
    }
  );
};

export const animateClose = (elementRef) => {
  return gsap.fromTo(
    elementRef,
    { scale: 1 },
    {
      scale: 0,
      delay: 0.7,
    }
  );
};

export const animateTitle = (headerTitleRef) => {
  const tl = gsap.timeline();

  headerTitleRef.forEach((element) => {
    tl.fromTo(
      element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        stagger: 0,
        ease: "none",
        scrub: false,
      }
    );
  });

  return tl;
};

export const animateLogoStrokeRef = (logoStrokeRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    logoStrokeRef,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, delay: 0.2 }
  );

  return tl;
};

export const animateDescriptionRef = (itemRef) => {
  const tl = gsap.timeline();

  tl.fromTo(
    itemRef,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.documentElement,
        start: `top+=${window.innerHeight / 1.6} +=${window.innerHeight / 2}`,
        end: `top+=${window.innerHeight + 10} +=${window.innerHeight / 2}`,
        scrub: true,
        markers: false,
      },
    }
  );

  return tl;
};

export const animatePinNavbar = (itemRef) => {
  const tl = gsap.timeline();

  return gsap.from(itemRef, {
    position: "fixed",
    top: "0",
    scrollTrigger: {
      trigger: itemRef,
      pin: true,
      start: `top`,
      end: `top`,
      markers: false,
      scrub: true,
    },
  });

  //   return tl;
};
