"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(176)};
  width: ${pxToVw(2560)};
  height: 100%;
  /* max-height: ${pxToVw(5175)}; */
  z-index: 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToVw(275)};
`;

export const ContactItem = styled.div`
  position: relative;
  display: flex;
  gap: ${pxToVw(24)};
  padding: ${pxToVw(150)} ${pxToVw(205)} ${pxToVw(170)};
  flex-wrap: wrap;

  &:not(:last-child)::after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
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
    left: 0;
    display: block;
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

  &:last-child {
    justify-content: space-between;
  }
`;

export const LinkName = styled.div`
  white-space: nowrap;
  font-weight: 300;
  font-size: ${pxToVw(110)};
  line-height: 129%;
  color: rgba(161, 181, 185, 0.5);
`;

export const LinkText = styled.p`
  font-weight: 300;
  font-size: ${pxToVw(110)};
  line-height: 129%;
  text-decoration: underline;
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AddressWrapper = styled.span`
  max-width: ${pxToVw(634)};
  display: block;
  font-weight: 300;
  font-size: ${pxToVw(60)};
  line-height: 121%;
  color: rgba(161, 181, 185, 0.5);
`;

export const AllRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: max-content;
  padding: 0 ${pxToVw(275)} ${pxToVw(160)};
`;

export const TextWrapper = styled.p`
  font-weight: 300;
  font-size: ${pxToVw(30)};
  line-height: 242%;
  color: rgba(161, 181, 185, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${pxToVw(60)};
  }
`;

export const ButtonBackTop = styled.button`
  display: flex;
  gap: ${pxToVw(27)};
  align-items: center;
  background: transparent;
  font-weight: 300;
  font-size: ${pxToVw(30)};
  line-height: 242%;
  color: rgba(161, 181, 185, 0.5);

  .arrow-back-top {
    width: ${pxToVw(20)};
    height: ${pxToVw(23)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${pxToVw(60)};
  }
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .bg-footer {
    position: absolute;
    width: ${pxToVw(2560)};
    height: ${pxToVw(4334)};
    top: 0;
    left: 0;
    z-index: -3;
  }
`;
