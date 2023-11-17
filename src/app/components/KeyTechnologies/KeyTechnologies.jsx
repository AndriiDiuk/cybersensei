"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import {
  StyledWrapper,
  CardsWrapper,
  BottomText,
  LeftWrapper,
  RightWrapper,
  DesignElementWrapper,
} from "./styles.js";
import SectionHeader from "../shared/SectionHeaderContent/SectionHeaderContent.jsx";
import GreenFigure3 from "@/app/assets/design/GreenFigure3.jsx";
import BgKeyTechnologies from "@/app/assets/design/BgKeyTechnologies.jsx";
import { dataLeft, dataRight } from "@/app/data/dataKeyTechnologies.js";
import CardItem from "../shared/CardItem.jsx";
import { renderIconTechnology } from "@/app/utils/renderIconTechnology.js";
import { addToRefs } from "@/app/utils/addToRefs.js";
import { animateCards, animateText } from "./animation.js";
import { dataSections } from "@/app/data/dataSections.js";

const KeyTechnologies = ({ timeline }) => {
  const leftCards = useRef([]);
  const rightCards = useRef([]);
  const bottomText = useRef();
  leftCards.current = [];
  rightCards.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline &&
      timeline
        .add(animateCards(leftCards.current), "<")
        .add(animateCards(rightCards.current), "<")
        .add(animateText(bottomText.current));
  }, [timeline]);

  return (
    <StyledWrapper id='technology'>
      <SectionHeader data={dataSections.technology} />
      <CardsWrapper>
        <LeftWrapper>
          {dataLeft.map((data, index) => {
            return (
              <CardItem
                data={data}
                key={index}
                renderIcon={renderIconTechnology}
                ref={(ref) => addToRefs(ref, leftCards.current)}
              />
            );
          })}
        </LeftWrapper>
        <RightWrapper>
          {dataRight.map((data, index) => {
            return (
              <CardItem
                data={data}
                key={index}
                renderIcon={renderIconTechnology}
                ref={(ref) => addToRefs(ref, rightCards.current)}
              />
            );
          })}
        </RightWrapper>
      </CardsWrapper>
      <BottomText>
        <span ref={bottomText}>
          Our company is committed to staying at the forefront of technology
          advancements, allowing us to deliver{" "}
          <b>innovative and future-proof solutions</b> that drive your business
          growth and success.
        </span>
      </BottomText>
      <DesignElementWrapper>
        <GreenFigure3 className='green-figure-3' />
        <BgKeyTechnologies className='bg__key-technologies' />
      </DesignElementWrapper>
    </StyledWrapper>
  );
};

export default KeyTechnologies;
