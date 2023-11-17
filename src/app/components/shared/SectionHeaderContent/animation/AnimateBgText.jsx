import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";

export default function AnimateBgText({ children }) {
  const bgTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bgTextRef.current,
      { left: "100vw" },
      {
        left: "-100px",
        duration: 2,
        ease: "circ.out",
        scrollTrigger: {
          trigger: bgTextRef.current,
          start: "top-=500 +=200",
          end: "center-=200 +=200",
          toggleActions: "pay none none reverse",
          scrub: 2,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: bgTextRef });
}
