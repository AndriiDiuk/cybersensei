"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrappers = styled.section`
  position: relative;
  width: ${pxToVw(2560)};
  min-height: ${pxToVw(1530)};
  overflow: hidden;

  svg {
    position: absolute;
    right: 0;
    top: -10px;
    z-index: -1;
  }

  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${pxToVw(2010)};
    height: ${pxToVw(2)};
    opacity: 0.5;
    background: linear-gradient(
      90deg,
      rgba(175, 175, 175, 0) 0%,
      rgba(175, 175, 175, 0.25) 51.49%,
      rgba(175, 175, 175, 0) 100%
    );
    z-index: 2;
  }
`;

export const BgColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      115.86% 100% at 28.36% 100%,
      rgb(0, 0, 0) 22.694571316242218%,
      rgb(1, 12, 48) 44.27730441093445%,
      rgb(1, 60, 255) 100%
    ),
    linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  z-index: -2;
`;
