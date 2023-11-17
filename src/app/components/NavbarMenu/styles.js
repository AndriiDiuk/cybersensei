"use client";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const StyledWrappers = styled.nav`
  position: fixed;
  top: 0;
  right: -100vw;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000000;
  z-index: 100;
`;

export const DesignWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: ${pxToVw(100)};
  padding-bottom: ${pxToVw(200)};
  font-weight: 300;
  font-size: ${pxToVw(90)};
  width: ${pxToVw(1055)};
  height: 100vh;
  overflow: hidden;

  a {
    display: flex;
    align-items: center;
    gap: ${pxToVw(60)};
    z-index: 101;
  }

  .arrow-link {
    width: ${pxToVw(52)};
    height: ${pxToVw(52)};
  }
`;

export const DesignElementWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .bg-navbar-menu {
    position: absolute;
    top: ${pxToVw(-1630)};
    left: ${pxToVw(-2170)};
    width: ${pxToVw(4312)};
    height: ${pxToVw(4022)};
  }
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${pxToVw(260)} ${pxToVw(245)};
  width: ${pxToVw(1505)};
`;

export const ItemNav = styled.li`
  display: flex;
  align-items: center;
  color: rgba(225, 241, 255, 0.5);

  a {
    font-weight: 300;
    font-size: clamp(1.875rem, 2.679vw + 1.339rem, 5.625rem);
    line-height: 138%;
    z-index: 101;
    cursor: pointer;
  }

  &:first-child {
    span {
      display: block;
    }
    a {
      color: ${({ theme }) => theme.colors.colorLight};
    }
  }
`;

export const Line = styled.span`
  position: absolute;
  display: none;
  top: 50%;
  left: ${pxToVw(-407)};
  width: ${pxToVw(314)};
  height: ${pxToVw(2)};
  background: ${({ theme }) => theme.colors.colorLight};
`;
