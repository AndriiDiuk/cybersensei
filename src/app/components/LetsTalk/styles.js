"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${pxToVw(2560)};
  /* height: ${pxToVw(2979)}; */
  padding: ${pxToVw(360)} 0;
  z-index: 0;

  .line-vertical-top,
  .line-vertical-bottom {
    width: 2px;
    height: ${pxToVw(150)};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToVw(70)};
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pxToVw(920)};
  font-weight: 300;
  font-size: ${pxToVw(90)};

  text-align: center;

  > p {
    margin-left: ${pxToVw(-62)};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pxToVw(62)};
  max-width: ${pxToVw(878)};
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(90)};
  text-align: center;
  color: rgba(161, 181, 185, 0.5);
  max-width: ${pxToVw(1600)};

  b {
    font-weight: 300;
    color: rgba(161, 181, 185, 0.75);
  }
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(60)};
  line-height: 121%;
  text-align: center;
  color: rgba(161, 181, 185, 0.6);
  max-width: ${pxToVw(1600)};
  padding-bottom: ${pxToVw(120)};
`;

export const AdvantagesWrapper = styled.div`
  display: flex;
  gap: ${pxToVw(190)};
`;

export const Advantage = styled.p`
  font-weight: 300;
  font-size: ${pxToVw(34)};
  line-height: 126%;
  color: rgba(161, 181, 185, 0.6);
  max-width: ${pxToVw(500)};

  &:nth-child(2) {
    padding-top: ${pxToVw(136)};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const DesignElementWrapper = styled.div`
  width: 100%;
  height: 100%;

  .logo-fill {
    position: absolute;
    bottom: ${pxToVw(-690)};
    z-index: -1;
  }

  .bg-lets-talk {
    position: absolute;
    top: 0;
    z-index: -2;
  }
`;
