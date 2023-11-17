"use client";
import Link from "next/link.js";
import { useRef, useLayoutEffect } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import {
  animateNavbar,
  animateTextLogo,
  animatePinNavbar,
} from "../Header/animation.js";
import NavbarBtn from "../ui/NavbarBtn.jsx";
import NavbarMenu from "../NavbarMenu/NavbarMenu.jsx";
import Logo from "@/app/assets/elements/Logo.jsx";
import Close from "@/app/assets/elements/Close.jsx";

const StylesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToVw(120)} ${pxToVw(100)} 0;
  z-index: 1000;

  .close-btn {
    width: clamp(1.188rem, 1.144vw + 0.919rem, 2.75rem);
    cursor: pointer;

    &:hover {
      animation: rotateClose 0.6s ease;
    }

    @keyframes rotateClose {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-180deg);
      }
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToVw(20)};

  .logo {
    width: clamp(2.438rem, 2.426vw + 1.869rem, 5.75rem);
    height: clamp(1.875rem, 1.876vw + 1.435rem, 4.438rem);
    z-index: 1000;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToVw(2)};
  color: ${({ theme }) => theme.colors.colorLight};
`;

const TitleLogo = styled.span`
  font-weight: 300;
  font-size: clamp(1rem, 1.053vw + 0.753rem, 2.438rem);
  letter-spacing: 0.1em;
  line-height: 1.1;

  b {
    font-weight: 600;
  }
`;

const DescLogo = styled.p`
  font-weight: 400;
  font-size: clamp(0.375rem, 0.458vw + 0.268rem, 1rem);
  color: rgba(255, 255, 255, 0.5);
`;

const Navbar = ({ handleMenu, isOpen, timeline }) => {
  const navbarRef = useRef(null);
  const textLogoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateNavbar(navbarRef.current);
    animateTextLogo(textLogoRef.current);
    animatePinNavbar(navbarRef.current);
  }, []);

  return (
    <StylesWrapper ref={navbarRef}>
      <Link href='/'>
        <LogoWrapper>
          <Logo className='logo' />
          <TextWrapper ref={textLogoRef}>
            <TitleLogo>
              <b>CYBER</b>SENSEI
            </TitleLogo>
            <DescLogo>B2B Digital Expirience</DescLogo>
          </TextWrapper>
        </LogoWrapper>
      </Link>
      {isOpen ? (
        <Close className='close-btn' onClick={handleMenu} />
      ) : (
        <NavbarBtn handleMenu={handleMenu} />
      )}
    </StylesWrapper>
  );
};

export default Navbar;
