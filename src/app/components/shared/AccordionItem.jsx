import React from "react";
import { Collapse } from "react-collapse";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import Plus from "@/app/assets/elements/Plus.jsx";
import Minus from "@/app/assets/elements/Minus.jsx";
import AnimateMoveUp from "./animation/AnimateMoveUp.jsx";

const StyleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(66)};
  padding: ${pxToVw(152)} ${pxToVw(275)};
  justify-content: center;
  ${({ $open }) =>
    $open &&
    `background:
		radial-gradient(
				28.13% 59.2% at -0.7% 0%,
				rgba(0, 209, 71, 0.84) 0%,
				rgba(0, 73, 104, 0.00) 100%),
		radial-gradient(
				58.4% 108.73% at 0% 2.05%,
				#0138ED 0%, 
				rgba(23, 23, 23, 0.00) 100%), #0F1013;
      `};

  &::after {
    position: absolute;
    bottom: 0;
    display: ${({ $open }) => ($open ? `none` : `block`)};
    content: "";
    width: ${pxToVw(2010)};
    height: ${pxToVw(2)};
    opacity: 0.7;
    background: linear-gradient(
      90deg,
      rgba(175, 175, 175, 0) 0%,
      rgba(175, 175, 175, 0.5) 51.49%,
      rgba(175, 175, 175, 0) 100%
    );
  }

  &:first-child::before {
    position: absolute;
    top: 0;
    display: ${({ $open }) => ($open ? `none` : `block`)};
    content: "";
    width: ${pxToVw(2010)};
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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToVw(120)};
`;

const NumberItem = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(30)};
  text-transform: uppercase;
  color: #586264;
`;

const TitleItem = styled.div`
  width: 100%;
  text-align: left;
  font-weight: 300;
  font-size: ${pxToVw(90)};
  cursor: pointer;
  ${({ $open }) =>
    $open
      ? `
		color:${({ theme }) => theme.colors.colorLight}`
      : `
		background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  		background-clip: text;
 	 	-webkit-background-clip: text;
  		-webkit-text-fill-color: transparent;
	`};
`;

const ButtonItem = styled.button`
  background: transparent;

  .minus {
    width: ${pxToVw(64)};
    height: ${pxToVw(8)};
  }

  .plus {
    width: ${pxToVw(64)};
    height: ${pxToVw(64)};
  }

  &:hover {
    .plus {
      animation: rotate 0.9s ease;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(270deg);
    }
  }
`;

const DescriptionItem = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(60)};
  color: rgba(161, 181, 185, 0.5);
  padding-left: ${pxToVw(140)};
`;

const AccordionItem = ({ open, toggle, data, number }) => {
  const { title, description } = data;

  return (
    <AnimateMoveUp>
      <StyleWrapper $open={open}>
        <TitleWrapper onClick={toggle}>
          <NumberItem>{number}</NumberItem>
          <TitleItem $open={open}>{title}</TitleItem>
          <ButtonItem>
            {open ? <Minus className='minus' /> : <Plus className='plus' />}
          </ButtonItem>
        </TitleWrapper>
        <Collapse isOpened={open}>
          <DescriptionItem>
            <p>{description}</p>
          </DescriptionItem>
        </Collapse>
      </StyleWrapper>
    </AnimateMoveUp>
  );
};

export default AccordionItem;
