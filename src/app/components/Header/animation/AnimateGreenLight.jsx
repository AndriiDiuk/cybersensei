import React, { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import styled from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;

  svg {
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export default function AnimateGreenLight({ children }) {
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
        delay: 0.6,
        duration: 1.4,
      }
    );
  }, []);

  return React.cloneElement(<Wrapper>{children}</Wrapper>, { ref: pictRef });
}
