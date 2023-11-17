"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${pxToVw(2560)};
  height: 100%;
  /* max-height: ${pxToVw(5175)}; */
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(190)};
`;

export const FooterWrapper = styled.div`
  color: rgba(161, 181, 185, 0.5);
  font-size: ${pxToVw(90)};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding: ${pxToVw(280)} ${pxToVw(480)} ${pxToVw(360)};
  background: radial-gradient(
    80.47% 100% at 50% 100%,
    rgb(1, 27, 33) 0%,
    rgb(0, 0, 0) 100%
  );
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .green-figure-4 {
    position: absolute;
    width: ${pxToVw(949)};
    height: ${pxToVw(1148)};
    top: 0;
    right: 0;
    z-index: -2;
  }

  .bg-the-team-is-everything {
    position: absolute;
    width: ${pxToVw(2560)};
    height: ${pxToVw(4334)};
    top: ${pxToVw(-40)};
    left: 0;
    z-index: -3;
  }
`;
