"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const Title = styled.h1`
  font-weight: 400;
  font-size: ${pxToVw(330)};
  letter-spacing: -0.04em;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.colors.gradientTitle};
  max-width: ${pxToVw(1950)};
  z-index: 2;
`;

export const TitleSection = styled.h2`
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: ${pxToVw(300)};
  letter-spacing: -0.04em;
  background: linear-gradient(90deg, #fff 0%, #3eb0d4 53.12%, #4be898 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  gap: 0 ${pxToVw(80)};
  z-index: 2;

  /* .text-line {
    display: block;
    height: ${pxToVw(300)};
    overflow: hidden;
    z-index: 0;
    p {
    }
  } */
`;
