import Link from "next/link.js";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import {
  StyledWrapper,
  ContentWrapper,
  LinkWrapper,
  InfoWrap,
  Subtitle,
  Description,
  AdvantagesWrapper,
  Advantage,
  DesignElementWrapper,
  Wrapper,
} from "./styles.js";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import ArrowLink from "@/app/assets/elements/ArrowLink.jsx";
import LineVertical from "@/app/assets/elements/LineVertical.jsx";
import LogoFill from "@/app/assets/elements/LogoFill.jsx";
import BgLetsTalk from "@/app/assets/design/BgLetsTalk.jsx";
import AnimateMoveUp from "../shared/animation/AnimateMoveUp.jsx";
import StylesLink from "../shared/StylesLink.jsx";
import {
  animateLogoFill,
  animateLineVerticalTop,
  animateLineVerticalBottom,
} from "./animation.js";

const LetsTalk = ({ timeline }) => {
  const wrapperRef = useRef(null);
  const logoFillRef = useRef(null);
  const lineVerticalTopRef = useRef(".line-vertical-top");
  const lineVerticalBottomRef = useRef(".line-vertical-bottom");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline &&
      timeline
        .add(animateLogoFill(logoFillRef.current, wrapperRef.current))
        .add(animateLineVerticalTop(lineVerticalTopRef.current))
        .add(
          animateLineVerticalBottom(
            lineVerticalBottomRef.current,
            lineVerticalTopRef.current
          ),
          "<"
        );
  }, [timeline]);

  return (
    <StyledWrapper ref={wrapperRef}>
      <ContentWrapper>
        <AnimateMoveUp>
          <Subtitle>
            Whether it&apos;s{" "}
            <b>
              healthcare, e-commerce, logistics, education, or any other
              industry,
            </b>{" "}
            our BA team collaborates with clients to understand their specific
            domain requirements and translate them into actionable solutions.
          </Subtitle>
        </AnimateMoveUp>
        <LineVertical className='line-vertical-top' />
        <LinkWrapper>
          <AnimateMoveUp>
            <p>Let&apos;s talk</p>
          </AnimateMoveUp>
          <AnimateMoveUp>
            <Link href={"/"} target='_blank'>
              <InfoWrap>
                <StylesLink>about your project</StylesLink>
                <ArrowLink width={pxToVw(52)} height={pxToVw(52)} />
              </InfoWrap>
            </Link>
          </AnimateMoveUp>
        </LinkWrapper>
        <LineVertical className='line-vertical-bottom' />
        <AnimateMoveUp>
          <Description>
            Leveraging our technical expertise and experience in diverse
            domains, we are able to deliver customized and scalable solutions
            that align with industry best practices.
          </Description>
        </AnimateMoveUp>
        <AnimateMoveUp>
          <AdvantagesWrapper>
            <Advantage>
              By combining our proficiency in these domains, we offer integrated
              solutions that cater to the evolving needs of our clients.
            </Advantage>
            <Advantage>
              Our multidisciplinary approach enables us to create innovative and
              transformative products and services at the intersection of
              fintech, blockchain, crypto, and gaming.
            </Advantage>
          </AdvantagesWrapper>
        </AnimateMoveUp>
      </ContentWrapper>
      <DesignElementWrapper>
        <Wrapper ref={logoFillRef}>
          <LogoFill className='logo-fill' />
        </Wrapper>
        <BgLetsTalk className='bg-lets-talk' />
      </DesignElementWrapper>
    </StyledWrapper>
  );
};

export default LetsTalk;
