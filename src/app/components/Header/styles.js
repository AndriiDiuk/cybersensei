"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrappers = styled.header`
  position: relative;
  width: 100%;
  min-height: ${pxToVw(1500)};
  z-index: 1;
  background: ${({ theme, $home }) => ($home ? theme.colors.primary : `none`)};
  ${({ $home }) => $home && `padding: 0 ${pxToVw(100)} 0;`};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToVw(100)} ${pxToVw(170)};
  align-items: center;

  h1 {
    display: flex;
    column-gap: ${pxToVw(60)};
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const WrapperH1 = styled.span`
  display: flex;
  gap: 6px;
  width: max-content;
  hight: max-content;
  justify-content: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colors.gradientTitle};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${({ theme }) => theme.colors.gradientTitle};
  max-width: ${pxToVw(1950)};
`;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToVw(155)};
  margin-top: ${pxToVw(720)};
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: ${pxToVw(90)};
  line-height: 111%;
  text-align: center;
  color: rgba(225, 241, 255, 0.6);
  max-width: ${pxToVw(1210)};
  will-change: transform;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToVw(40)};
  margin-top: ${pxToVw(170)};

  .arrow-scroll {
    width: ${pxToVw(10)};
    height: ${pxToVw(152)};
  }
  & {
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      display: none;
    }
  }
`;

export const TextArrow = styled.p`
  font-weight: 300;
  font-size: ${pxToVw(30)};
  text-align: center;
  color: rgba(225, 241, 255, 0.5);
`;

export const CircleHeader = styled.div`
  --blur: ${pxToVw(300)};

  position: absolute;
  top: ${pxToVw(-350)};
  left: 50%;
  margin: auto 0;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  width: ${pxToVw(5328)};
  height: ${pxToVw(4022)};
  filter: blur(var(--blur));
  background: radial-gradient(
    rgb(0, 0, 0) 0%,
    rgb(0, 0, 0) 42.72375404834747%,
    rgb(0, 61, 255) 56.89519643783569%,
    rgb(0, 0, 0) 78.67593169212341%
  );
  z-index: -1;
`;

export const Gradient = styled.div`
  position: absolute;
  top: ${pxToVw(996)};
  width: 100%;
  height: ${pxToVw(2932)};
  background: linear-gradient(180deg, #0038ef 0%, rgba(15, 15, 15, 0) 100%);
  z-index: -2;
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg-header-page {
    position: absolute;
    width: ${pxToVw(2560)};
    height: ${pxToVw(3454)};
    top: -100px;
    left: 0;
    z-index: -3;
  }

  .blue-circle-figure {
    position: absolute;
    width: ${pxToVw(2024)};
    height: ${pxToVw(2024)};
    top: ${pxToVw(-500)};
    will-change: transform;
    z-index: -2;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;

  .logo-stroke {
    width: ${pxToVw(1366)};
    height: ${pxToVw(1057)};
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

  svg {
    margin-top: ${({ $home }) => ($home ? ` ${pxToVw(120)}` : `${pxToVw(40)}`)};
    opacity: ${({ $home }) => ($home ? `1` : `0.6`)};
  }

  ${({ $home }) =>
    !$home &&
    ` &:before {
				position: absolute;
				display: block;
				content: "";
				width: 100%;
				height: 60vh;
				background: -moz-linear-gradient(
					-180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 1) 15%,
					rgba(0, 0, 0, 0) 100%
				);
				background: -webkit-linear-gradient(
					-180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 1) 15%,
					rgba(0, 0, 0, 0) 100%
				);
				background: linear-gradient(
					-180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 1) 15%,
					rgba(0, 0, 0, 0) 100%
				);
  			}
      `};
`;
