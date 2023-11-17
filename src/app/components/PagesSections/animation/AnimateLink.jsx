import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";

export default function AnimateTitleLink({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top-=500 +=200",
          end: "center-=400 +=200",
          toggleActions: "pay none none reverse",
          scrub: 2,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: elementRef });
}
