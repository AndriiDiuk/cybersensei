import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";

export default function AnimatePict({ children }) {
  const pictRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pictRef.current,
      {
        y: 40,
        scale: 0.9,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        delay: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: pictRef.current,
          start: "top-=500 +=200",
          end: "center +=200",
          scrub: false,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: pictRef });
}
