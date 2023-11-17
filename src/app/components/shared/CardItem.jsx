"use client";
import { forwardRef } from "react";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import BgCard from "@/app/assets/design/BgCard.jsx";

const StyleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(100)};
  width: ${pxToVw(1003)};
  height: ${pxToVw(1015)};
  padding: ${pxToVw(280)} ${pxToVw(205)} ${pxToVw(270)};
  cursor: pointer;

  .bg__card {
    position: absolute;
    top: 0;
    left: 0;
    width: ${pxToVw(1003)};
    height: ${pxToVw(1015)};
    fill: linear-gradient(
      136deg,
      rgba(37, 73, 100, 0.23) 0%,
      rgba(11, 29, 41, 0.23) 38.44%,
      rgba(8, 24, 35, 0.16) 59.26%,
      rgba(88, 123, 189, 0.18) 100%
    );
    strokewidth: 1px;
    stroke: #abd7ff;
    backdrop-filter: blur(36.46043014526367px);
    z-index: -1;
  }
`;

const IconsWrapper = styled.div``;

const TitleCard = styled.div`
  width: ${pxToVw(575)};
  font-weight: 300;
  font-size: ${pxToVw(76)};
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DescCard = styled.div`
  display: none;
  /* display: flex; */
  flex-direction: column;
  gap: ${pxToVw(40)};
  font-weight: 100;
  font-size: ${pxToVw(38)};
  line-height: 113%;
  color: rgba(175, 175, 175, 0.5);
`;

const CardItem = forwardRef(({ data, renderIcon }, ref) => {
  const { title, description, icon } = data;

  return (
    <StyleWrapper ref={ref}>
      <IconsWrapper>{renderIcon(icon)}</IconsWrapper>
      <TitleCard>{title}</TitleCard>
      <DescCard>
        {description?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </DescCard>
      <BgCard className='bg__card' />
    </StyleWrapper>
  );
});

CardItem.displayName = "CardItem";

export default CardItem;
