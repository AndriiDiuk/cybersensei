"use client";
import { useRef, useLayoutEffect } from "react";
import Link from "next/link.js";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import BlueCircleFigure from "@/app/assets/design/BlueCircleFigure.jsx";
import {
  WrapperSections,
  StyledWrapper,
  ContentWrapper,
  InfoWrapper,
  TitleWrapper,
  Title,
  Number,
  Description,
  ImagesWrapper,
  Wrapper,
} from "./styles.js";
import AnimateTitleLink from "./animation/AnimateLink.jsx";
import AnimateDesc from "./animation/AnimateDesc.jsx";
import AnimatePict from "./animation/AnimatePict.jsx";
import AnimateBlueCircleFigure from "./animation/AnimateBlueCircleFigure.jsx";
import StylesLink from "../shared/StylesLink.jsx";
import { renderPageImage } from "@/app/utils/renderPageImage.js";
import { dataPagesSection } from "@/app/data/dataPagesSection.js";
import { addToRefs } from "@/app/utils/addToRefs.js";
import { animateSection } from "./animation.js";

const PagesSections = ({ timeline }) => {
  const wrapperSectionsRef = useRef(null);
  const wrapperContentRefs = useRef([]);
  wrapperContentRefs.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline &&
      timeline.add(
        animateSection(wrapperContentRefs.current, wrapperSectionsRef.current)
      );
  }, [timeline]);

  return (
    <WrapperSections ref={wrapperSectionsRef}>
      {dataPagesSection.map(({ id, page }) => {
        const { name, link, description, reverse } = page;

        return (
          <StyledWrapper
            $reverse={reverse}
            key={id}
            ref={(ref) => addToRefs(ref, wrapperContentRefs.current)}
          >
            <ContentWrapper $reverse={reverse}>
              <InfoWrapper $reverse={reverse}>
                <TitleWrapper>
                  <AnimateTitleLink>
                    <Link href={link}>
                      <StylesLink>
                        <Title>{name}</Title>
                      </StylesLink>
                    </Link>
                  </AnimateTitleLink>
                  <Number>{id}</Number>
                </TitleWrapper>
                <AnimateDesc>
                  <Description>
                    {description.map((item, index) => {
                      return <p key={index + 1}>{item}</p>;
                    })}
                  </Description>
                </AnimateDesc>
              </InfoWrapper>
              <ImagesWrapper $reverse={reverse}>
                {renderPageImage(name)}
                <AnimateBlueCircleFigure>
                  <Wrapper $reverse={reverse}>
                    <BlueCircleFigure className='blue-circle-figure' />
                  </Wrapper>
                </AnimateBlueCircleFigure>
              </ImagesWrapper>
            </ContentWrapper>
          </StyledWrapper>
        );
      })}
    </WrapperSections>
  );
};

export default PagesSections;
