"use client";
import React from "react";
import gsap from "gsap-trial";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

const LinkStyle = styled.div`
  position: relative;
  width: min-content;
  height: min-content;
  white-space: nowrap;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.gradientLink};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
  z-index: 2;
  overflow: hidden;

  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${pxToVw(4)};
    width: 100%;
    background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%), #fff;
    z-index: 2;
  }
  &:hover {
    &::after {
      transform: translateX(110%);
      transition: transform 0.4s ease-in;
    }
  }
`;

export default function index({ children }) {
  const itemRef = useRef(null);

  const manegeMouseEnter = (e) => {};

  const manegeMouseLeave = (e) => {};

  //   useEffect(() => {
  //     gsap.fromTo(
  //       itemRef.current,
  //       { y: 60, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         ease: "circ.out",
  //         //   scrollTrigger: {
  //         //     trigger: itemRef.current,
  //         //     start: `top +=${window.innerHeight / 1.2}`,
  //         //     end: `top+200 +=${window.innerHeight / 1.2}`,
  //         //     markers: true,
  //         //     scrub: true,
  //         //   },
  //       }
  //     );
  //   }, []);

  return React.cloneElement(
    <LinkStyle
      onMouseEnter={(e) => {
        manegeMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        manegeMouseLeave(e);
      }}
    >
      {children}
    </LinkStyle>,
    {
      ref: itemRef,
    }
  );
}
