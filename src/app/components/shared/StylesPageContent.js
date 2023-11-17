"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const PageContent = styled.div`
  background: #0b0c0e;
`;

export const SectionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(110)};
  padding: ${pxToVw(165)} 0 ${pxToVw(248)};
  z-index: 1;
`;

export const PageContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(200)};
  padding: 0 ${pxToVw(480)};
`;

export const ContentTitle = styled.h3`
  font-weight: 300;
  font-size: ${pxToVw(130)};
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContentDescriptionWrapper = styled.div`
  display: flex;
  gap: ${pxToVw(122)};
`;

export const ContentDescription = styled.div`
  max-width: ${pxToVw(1190)};
  font-weight: 300;
  font-size: ${pxToVw(60)};
  color: rgba(161, 181, 185, 0.75);
`;

export const Line = styled.span`
  display: block;
  width: ${pxToVw(84)};
  height: ${pxToVw(2)};
  background: rgba(161, 181, 185, 0.5);
  margin-top: ${pxToVw(27)};
`;

export const PageContentWrapper = styled.div`
  padding: 0 ${pxToVw(685)};
`;

export const Paragraph = styled.p`
  display: block;
  padding: ${pxToVw(30)} 0;
  font-weight: 300;
  font-size: ${pxToVw(40)};
  line-height: 125%;
  color: rgba(161, 181, 185, 0.5);
`;

export const ImageTextRowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: ${pxToVw(158)} 0 ${pxToVw(258)};

  p {
    position: absolute;
    display: block;
    max-width: ${pxToVw(500)};
    height: max-content;
    z-index: 1;

    &:nth-child(1) {
      top: ${pxToVw(172)};
      left: ${pxToVw(75)};
    }

    &:nth-child(2) {
      bottom: 0;
      right: 0;
    }
  }

  ${({ $modify }) =>
    $modify &&
    `
		height:${pxToVw(972)};
		justify-content: flex-end;
		margin: ${pxToVw(158)} 0 ${pxToVw(158)};

		p{
			&:nth-child(2) {
				max-width: ${pxToVw(896)};
				right:  ${pxToVw(82)};
			}
		}
	`};

  ${({ $modifyDetached }) =>
    $modifyDetached &&
    `
		height:${pxToVw(558)};
		justify-content: flex-end;
		margin: ${pxToVw(158)} 0 ${pxToVw(158)};

		div{
			p{
				position:relative;
				max-width: ${pxToVw(500)};
			}
		}
	`};

  ${({ $gambling }) =>
    $gambling &&
    `
		div{
			p{
				position:relative;
				max-width: ${pxToVw(500)};
			}
			
		}
	`};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: ${({ $imgWidth }) => $imgWidth};
  height: ${({ $imgHeight }) => $imgHeight};
  box-shadow: ${pxToVw(-100)} ${pxToVw(100)} 0px 0px
    rgba(24, 26, 31, 0.5);

  img {
    object-fit: contain;
    width: ${({ $imgWidth }) => $imgWidth};
    height: ${({ $imgHeight }) => $imgHeight};
    top: 0;
    z-index: 0;
  }
`;

export const TextRowWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: ${({ $height }) => $height};
  margin: ${pxToVw(158)} 0;

  p {
    position: absolute;
    display: block;
    max-width: ${pxToVw(500)};
    height: max-content;
    z-index: 1;

    &:nth-child(1) {
      top: 0;
      left: ${pxToVw(75)};
    }

    &:nth-child(2) {
      bottom: 0;
      right: 0;
    }
  }
`;

export const Quote = styled.span`
  position: relative;
  display: block;
  margin: ${pxToVw(110)} 0;
  padding: ${pxToVw(140)} 0;
  font-weight: 300;
  font-size: ${pxToVw(60)};
  color: #a1b5b9;
  background: radial-gradient(
    50% 100% at 49.99% 100%,
    rgb(24, 26, 31) 0%,
    rgb(11, 12, 14) 100%
  );

  &::after,
  &::before {
    position: absolute;
    bottom: 0;
    display: block;
    content: "";
    width: 100%;
    height: ${pxToVw(2)};
    opacity: 0.7;
    background: linear-gradient(
      90deg,
      rgba(175, 175, 175, 0) 0%,
      rgba(175, 175, 175, 0.5) 51.49%,
      rgba(175, 175, 175, 0) 100%
    );
  }

  &::before {
    top: 0;
  }
`;

export const Detached = styled.div`
  display: flex;
  align-items: center;
  padding: ${pxToVw(68)};
  gap: ${pxToVw(137)};

  .line-horizontal {
    width: 2px;
    height: ${pxToVw(181)};
  }
`;

export const DetachedOnImg = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  padding: ${pxToVw(108)} 0;
  gap: ${pxToVw(76)};

  p {
    display: block;
    font-weight: 300;
    font-size: ${pxToVw(40)};
    line-height: 125%;
    color: #afafaf;
  }

  .line-horizontal {
    width: 2px;
    height: ${({ $gambling }) =>
      $gambling ? `${pxToVw(350)}` : `${pxToVw(181)}`};
  }
`;

export const DashText = styled.p`
  font-weight: 300;
  font-size: ${pxToVw(40)};
  line-height: 125%;
  color: #afafaf;
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const BgSectionContentTop = styled.div`
  position: absolute;
  width: ${pxToVw(2560)};
  height: ${pxToVw(1388)};
  background: linear-gradient(
      220deg,
      #003cff 0%,
      rgba(0, 0, 0, 0) 41.56%
    ),
    #0b0c0e;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const BgSectionContentBottom = styled.div`
  position: absolute;
  width: ${pxToVw(2560)};
  height: ${pxToVw(1388)};
  background: radial-gradient(
    80.47% 100% at 50% 100%,
    #011b21 0%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const AdvantagesWrapper = styled.div``;

export const AdvantageTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToVw(66)};
  padding: ${pxToVw(90)} ${pxToVw(56)} ${pxToVw(47)};

  font-size: ${pxToVw(60)};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: linear-gradient(90deg, #fff 0.89%, #6fbbd3 96.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AdvantageItem = styled.div`
  position: relative;
  padding-bottom: ${pxToVw(100)};

  &:not(:last-child)::after {
    position: absolute;
    bottom: 0;
    display: block;
    content: "";
    width: 100%;
    height: ${pxToVw(2)};
    opacity: 0.7;
    background: linear-gradient(
      90deg,
      rgba(175, 175, 175, 0) 0%,
      rgba(175, 175, 175, 0.5) 51.49%,
      rgba(175, 175, 175, 0) 100%
    );
  }
`;

export const TitleColor = styled.h4`
  font-weight: 300;
  font-size: ${pxToVw(90)};
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AdvantageTitle = styled.h4`
  font-size: ${pxToVw(60)};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background: linear-gradient(90deg, #fff 0.89%, #6fbbd3 96.18%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
