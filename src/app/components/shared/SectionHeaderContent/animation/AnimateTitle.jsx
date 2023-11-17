import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";

export default function index({ children }) {
  const titleText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleText.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        //   ease: "circ.out",
        scrollTrigger: {
          trigger: titleText.current,
          start: "top-=500 +=200",
          end: "center-=200 +=200",
          //  markers: true,
          //  stagger: 0.05,
          toggleActions: "pay none none reverse",
          scrub: 2,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: titleText });
}
