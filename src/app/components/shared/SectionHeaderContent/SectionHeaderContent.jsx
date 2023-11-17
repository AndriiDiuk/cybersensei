"use client";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { gsap } from "gsap-trial";
import { TitleSection } from "../StylesTitle.js";
import { textToLine } from "@/app/utils/textToLine.js";
import AnimateBgText from "./animation/AnimateBgText.jsx";
import AnimateTitle from "./animation/AnimateTitle.jsx";
import AnimateDesc from "./animation/AnimateDesc.jsx";
import { animateTitleText } from "./animation.js";
import {
  ContentWrapper,
  DescriptionWrapper,
  Line,
  Description,
  NumberLatin,
  BgText,
} from "./styles.js";

const SectionHeader = ({ data, team, footer, competencies, timeline }) => {
  const { title, description, number, textBackground } = data;
  //   const lineTextRef = useRef(".text-in-side");

  //   useLayoutEffect(() => {
  //     gsap.registerPlugin(ScrollTrigger);

  //     timeline && timeline.add(animateTitleText(lineTextRef.current));
  //   }, [timeline]);

  return (
    <ContentWrapper $footer={footer}>
      <AnimateTitle>
        <TitleSection>{title}</TitleSection>
      </AnimateTitle>
      {description && (
        <AnimateDesc>
          <DescriptionWrapper>
            <Line />
            <Description>{description}</Description>
          </DescriptionWrapper>
        </AnimateDesc>
      )}
      <NumberLatin>{number}</NumberLatin>
      <AnimateBgText>
        <BgText $team={team} $footer={footer} $competencies={competencies}>
          {textBackground}
        </BgText>
      </AnimateBgText>
    </ContentWrapper>
  );
};

export default SectionHeader;
