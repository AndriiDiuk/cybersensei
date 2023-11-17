import { gsap } from "gsap-trial";

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

// export const animateAllRightRef = (itemRef, trigger) => {
//   const tl = gsap.timeline();

//   tl.fromTo(
//     itemRef,
//     { y: 70, opacity: 0 },
//     {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: `bottom-=200 +=${window.innerHeight / 1.4}`,
//         end: `bottom-=140 +=${window.innerHeight / 1.4}`,
//         markers: true,
//         scrub: true,
//       },
//     }
//   );

//   return tl;
// };
