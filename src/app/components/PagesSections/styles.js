"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const WrapperSections = styled.div`
  width: 100%;
  /* height: ${pxToVw(4388)}; */
`;

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${pxToVw(2560)};
  height: ${pxToVw(4388)};
  height: max-content;
  padding-bottom: ${pxToVw(270)};
  background: ${({ $reverse }) =>
    $reverse
      ? `
		 linear-gradient(
			304deg,
			#003cff 0%,
			rgba(0, 0, 0, 0) 26.96%); `
      : `
	    linear-gradient(
    	   58deg,
   	   #003cff 0%,
    	   rgba(0, 0, 0, 0) 26.96%);
		`};

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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? `row-reverse` : `row`)};
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(80)};
  min-width: 50vw;
  padding-left: ${({ $reverse }) =>
    $reverse ? `${pxToVw(225)}` : `${pxToVw(480)}`};
  padding-top: ${pxToVw(243)};

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    min-width: 100vw;
    padding: ${pxToVw(243)} ${pxToVw(260)} 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: ${pxToVw(36)};
`;

export const Title = styled.p`
  position: relative;
  font-weight: 300;
  line-height: 1.3;
  font-size: ${pxToVw(90)};
  background: ${({ theme }) => theme.colors.gradientLink};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;

export const Number = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(30)};
  color: rgba(175, 175, 175, 0.25);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(90)};
  font-weight: 300;
  font-size: ${pxToVw(60)};
  line-height: 121%;
  color: rgba(161, 181, 185, 0.5);
  max-width: ${pxToVw(780)};

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    max-width: 100%;
  }
`;

export const ImagesWrapper = styled.div`
  position: relative;
  min-width: 50vw;

  svg {
    position: absolute;

    &:nth-child(1) {
      top: ${pxToVw(180)};
      left: ${({ $reverse }) =>
        $reverse ? `${pxToVw(260)}` : `${pxToVw(130)}`};
      z-index: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      inset: 0;
      position: relative;
      min-width: 100%;
    }
  }

  .pict-fintech {
    width: ${pxToVw(900)};
    height: ${pxToVw(980)};
  }

  .pict-blockchain {
    width: ${pxToVw(1242)};
    height: ${pxToVw(1237)};
  }

  .pict-python {
    width: ${pxToVw(978)};
    height: ${pxToVw(1146)};
  }

  .pict-gambling {
    width: ${pxToVw(1116)};
    height: ${pxToVw(1267)};
  }

  .pict-domains {
    width: ${pxToVw(977)};
    height: ${pxToVw(1146)};
  }

  .blue-circle-figure {
    position: absolute;
    top: 0;
    left: 0;
    width: ${pxToVw(1924)};
    height: ${pxToVw(1924)};
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    min-width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${pxToVw(-360)};
  left: ${({ $reverse }) => ($reverse ? `${pxToVw(-290)}` : `${pxToVw(-390)}`)};
  z-index: -2;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    left: ${pxToVw(-80)};
  }
`;
