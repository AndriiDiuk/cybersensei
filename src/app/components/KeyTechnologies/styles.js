"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(190)};
  width: ${pxToVw(2560)};
  min-height: ${pxToVw(5726)};
  z-index: 0;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${pxToVw(2)};
  padding: 0 ${pxToVw(275)};

  .backend svg defs {
    feGaussianBlur {
      filter: blur(47.91999816894531px);
      backdrop-filter: blur(47.91999816894531px);
      background: linear-gradient(
        180deg,
        rgba(28, 52, 73, 0.58) 0%,
        rgba(98, 145, 216, 0.45) 100%
      );
    }
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(4)};
`;

export const RightWrapper = styled.div`
  padding-top: ${pxToVw(508)};
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(4)};
`;

export const BottomText = styled.div`
  width: ${pxToVw(2560)};
  height: ${pxToVw(993)};
  padding: ${pxToVw(346)} ${pxToVw(480)} ${pxToVw(376)};
  color: rgba(161, 181, 185, 0.5);
  text-align: center;
  /* font-family: TWK Lausanne Pan; */
  font-size: ${pxToVw(60)};
  font-style: normal;
  font-weight: 400;
  line-height: ${pxToVw(72)};
  background: radial-gradient(
    80.47% 100% at 50% 100%,
    rgb(22, 29, 47) 0%,
    rgb(0, 0, 0) 100%
  );

  b {
    font-weight: 400;
    color: rgba(161, 181, 185, 0.75);
  }
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -4;

  .green-figure-3 {
    position: absolute;
    top: 0;
    right: 0;
    width: ${pxToVw(1203)};
    height: ${pxToVw(1347)};
    z-index: -2;
  }

  .bg__key-technologies {
    position: absolute;
    top: 0;
    right: 0;
    width: ${pxToVw(2560)};
    height: ${pxToVw(2687)};
    z-index: -3;
  }
`;
