import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";

export default function index({ children }) {
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: `top +=${window.innerHeight / 1.3}`,
          end: `top+=${window.innerHeight / 3} +=${window.innerHeight / 1.3}`,
          markers: false,
          scrub: false,
        },
      }
    );
  }, []);

  return React.cloneElement(children, { ref: itemRef });
}
