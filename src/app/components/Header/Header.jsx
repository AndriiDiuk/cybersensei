"use client";
import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import {
  StyledWrappers,
  DesignElementWrapper,
  ImageWrapper,
  ContentWrapper,
  CenterWrapper,
  SubTitle,
  BottomWrapper,
  TextArrow,
  CircleHeader,
  WrapperH1,
} from "./styles.js";
import { Title } from "../shared/StylesTitle.js";
import ArrowScroll from "@/app/assets/elements/ArrowScroll.jsx";
import BlueCircleFigure from "@/app/assets/design/BlueCircleFigure.jsx";
import BgHeaderPage from "@/app/assets/design/BgHeaderPage.jsx";
import { renderPageImage } from "@/app/utils/renderPageImage.js";
import AnimateGreenLight from "./animation/AnimateGreenLight.jsx";
import {
  animateTitle,
  animateLogoStrokeRef,
  animateDescriptionRef,
} from "./animation.js";
import { addToRefs } from "@/app/utils/addToRefs.js";

const Header = ({ data, timeline }) => {
  const { title, page, description, arrow } = data;
  const headerTitleRef = useRef(null);
  const logoStrokeRef = useRef(null);
  const descriptionRef = useRef(null);
  const headerTitleRefs = useRef([]);
  headerTitleRefs.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline &&
      timeline
        .add(animateTitle(headerTitleRefs.current))
        .add(animateLogoStrokeRef(logoStrokeRef.current), "<")
        .add(animateDescriptionRef(descriptionRef.current));
  }, [timeline]);

  return (
    <StyledWrappers $home={page == "Home"} id='home'>
      <ContentWrapper>
        <CenterWrapper>
          <Title ref={headerTitleRef}>
            {title.split(" ").map((item, index) => {
              return (
                <WrapperH1
                  key={index}
                  ref={(ref) => addToRefs(ref, headerTitleRefs.current)}
                >
                  {item}
                </WrapperH1>
              );
            })}
          </Title>
          <SubTitle ref={descriptionRef}>{description}</SubTitle>
        </CenterWrapper>
        {arrow && (
          <BottomWrapper>
            <TextArrow>Scroll to explore</TextArrow>
            <ArrowScroll className='arrow-scroll' />
          </BottomWrapper>
        )}
      </ContentWrapper>
      <DesignElementWrapper>
        <ImageWrapper ref={logoStrokeRef} $home={page == "Home"}>
          {renderPageImage(page)}
        </ImageWrapper>
        {page != "Home" && (
          <AnimateGreenLight>
            <BlueCircleFigure className='blue-circle-figure' />
          </AnimateGreenLight>
        )}
        {page == "Home" ? (
          <CircleHeader />
        ) : (
          <BgHeaderPage className='bg-header-page' />
        )}
      </DesignElementWrapper>
    </StyledWrappers>
  );
};

export default Header;
