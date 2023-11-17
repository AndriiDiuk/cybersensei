import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";

export default function index({ children }) {
  const descText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      descText.current,
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        //   ease: "circ.out",
        scrollTrigger: {
          trigger: descText.current,
          start: "top-=500 +=200",
          end: "center-=200 +=400",
          toggleActions: "pay none none reverse",
          scrub: 2,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: descText });
}
