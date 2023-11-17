"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${pxToVw(2560)};
  height: ${pxToVw(5726)};
  padding: 0 0 ${pxToVw(360)} 0;
  z-index: 0;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -4;

  svg {
    position: absolute;
    top: 0;
    right: 0;

    &:nth-child(1) {
      z-index: -2;
    }

    &:nth-child(2) {
      z-index: -3;
    }
  }
`;
