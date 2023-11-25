import { useLayoutEffect, useRef } from "react";
import gsap from "gsap-trial";
import { Link as NavLink } from "react-scroll/modules";
import Link from "next/link.js";
import {
  StyledWrappers,
  Navigation,
  ItemNav,
  DesignWrapper,
  DesignElementWrapper,
  Line,
} from "./styles.js";
import StylesLink from "../shared/StylesLink.jsx";
import ArrowLink from "@/app/assets/elements/ArrowLink.jsx";
import BgNavbarMenu from "@/app/assets/design/BgNavbarMenu.jsx";
import { addToRefs } from "@/app/utils/addToRefs.js";
import { dataNavigation } from "@/app/data/dataNavigation.js";
import {
  animateWrapperShow,
  animateWrapperHidden,
  animateDesignWrapper,
  animateLink,
  animateArrow,
  animateNavItem,
  animateLineItem,
} from "./animation.js";

const NavbarMenu = ({ isOpen, timeline, handleMenu }) => {
  const wrapperRef = useRef(null);
  const designWrapperRef = useRef(null);
  const linkRef = useRef(null);
  const lineRefs = useRef([]);
  const arrowRef = useRef(null);
  const navItemRefs = useRef([]);
  navItemRefs.current = [];
  lineRefs.current = [];

  const manegeMouseEnter = (e) => {
    gsap.to(e.target, {
      color: "#fff",
      duration: 0.3,
    });
  };

  const manegeMouseLeave = (e) => {
    gsap.to(e.target, {
      color: "rgba(225, 241, 255, 0.5)",
      duration: 0.3,
      delay: 0.1,
    });
  };

  useLayoutEffect(() => {
    isOpen &&
      timeline &&
      timeline
        .add(animateWrapperShow(wrapperRef.current))
        .add(animateDesignWrapper(designWrapperRef.current))
        .add(animateLink(linkRef.current), "<")
        .add(animateArrow(arrowRef.current), "<")
        .add(animateNavItem(navItemRefs.current), "<")
        .add(animateLineItem(lineRefs.current), "<");

    !isOpen &&
      timeline &&
      timeline.add(animateWrapperHidden(wrapperRef.current));
  }, [isOpen, timeline]);

  return (
    <StyledWrappers ref={wrapperRef}>
      <DesignWrapper ref={designWrapperRef}>
        <Link href={"/"} ref={linkRef}>
          <StylesLink>Let&apos;s talk</StylesLink>
          <div ref={arrowRef}>
            <ArrowLink className='arrow-link' />
          </div>
        </Link>

        <DesignElementWrapper ref={designWrapperRef}>
          <BgNavbarMenu className='bg-navbar-menu' />
        </DesignElementWrapper>
      </DesignWrapper>
      <Navigation>
        {dataNavigation.map(({ name, link }) => {
          return (
            <ItemNav
              key={name}
              ref={(ref) => addToRefs(ref, navItemRefs.current)}
            >
              <Line ref={(ref) => addToRefs(ref, lineRefs.current)} />
              <NavLink
                to={link}
                spy={true}
                smooth={false}
                offset={0}
                duration={500}
                onClick={handleMenu}
                onMouseEnter={(e) => {
                  manegeMouseEnter(e);
                }}
                onMouseLeave={(e) => {
                  manegeMouseLeave(e);
                }}
              >
                {name}
              </NavLink>
            </ItemNav>
          );
        })}
      </Navigation>
    </StyledWrappers>
  );
};

export default NavbarMenu;
