import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: ${pxToVw(166)}; */
  margin-left: ${pxToVw(480)};
  margin-top: ${pxToVw(360)};

  h2 {
    margin-bottom: ${pxToVw(180)};
    width: ${({ $footer }) => ($footer ? `min-content` : `90%`)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-left: ${pxToVw(260)};
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: ${pxToVw(245)};
`;

export const Line = styled.span`
  display: block;
  width: ${pxToVw(165)};
  height: ${pxToVw(2)};
  background: rgba(161, 181, 185, 75%);
  margin-top: ${pxToVw(27)};
`;

export const Description = styled.p`
  max-width: ${pxToVw(1395)};
  font-weight: 300;
  font-size: ${pxToVw(60)};
  line-height: 121%;
  color: rgba(161, 181, 185, 0.75);
`;

export const NumberLatin = styled.p`
  position: absolute;
  top: ${pxToVw(334)};
  left: ${pxToVw(264)};
  color: rgba(175, 175, 175, 0.5);
  font-size: ${pxToVw(60)};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const BgText = styled.div`
  position: absolute;
  top: ${pxToVw(130)};
  /* left: ${pxToVw(240)}; */
  font-weight: 600;
  font-size: ${pxToVw(600)};
  letter-spacing: -0.04em;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    rgba(0, 36, 152, 0.4) 0%,
    rgba(0, 2, 9, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 0;

  ${({ $competencies }) =>
    $competencies &&
    ` 		
		background: linear-gradient(
			180deg, 
			rgba(23, 23, 47, 0.6) 0%, 
			rgba(10, 10, 21, 0) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
      `};

  ${({ $team }) =>
    $team &&
    ` 
		background: linear-gradient(
			180deg, 
			rgba(0, 1, 3, 0.36) 17.84%, 
			rgba(0, 7, 31, 0.00) 82.01%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		left: ${pxToVw(1140)};
      `};

  ${({ $footer }) =>
    $footer &&
    ` 
		background: linear-gradient(
			180deg, 
			rgba(0, 1, 3, 0.36) 17.84%, 
			rgba(0, 7, 31, 0.00) 82.01%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
      `};
`;
