"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  gap: clamp(0.313rem, 0.32vw + 0.237rem, 0.75rem);
  background: transparent;
  height: max-content;

  &:hover {
    span:nth-child(2) {
      margin-left: clamp(-12px, 0.549vw - 26.064px, -24px);
    }
  }
`;

const Line = styled.span`
  width: clamp(1.563rem, 1.602vw + 1.187rem, 3.75rem);
  height: clamp(0.063rem, 0.046vw + 0.052rem, 0.125rem);
  background: #fff;
  transition: margin-left 0.2s ease-in;
`;

const NavbarBtn = ({ handleMenu }) => {
  return (
    <Button onClick={handleMenu}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Button>
  );
};

export default NavbarBtn;
