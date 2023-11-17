"use client";
import Image from "next/image.js";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { styled } from "styled-components";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import { addToRefs } from "@/app/utils/addToRefs.js";
import AnimateMoveUp from "../shared/animation/AnimateMoveUp.jsx";

const InfoWrapper = styled.div`
  display: flex;
  padding: 0 ${pxToVw(462)};
  flex-direction: ${({ $reverse }) => ($reverse ? `row-reverse` : `row`)};
`;

const LeftContainer = styled.div`
  width: 50vw;
`;
const Top = styled.div`
  position: relative;
  max-width: ${pxToVw(1021)};
  min-height: ${({ $reverse }) => ($reverse ? pxToVw(650) : pxToVw(1060))};

  img {
    object-fit: cover;
  }
`;

const Bottom = styled.div`
  position: relative;
  min-height: ${({ $reverse }) => ($reverse ? pxToVw(446) : pxToVw(586))};
  font-weight: 300;
  font-size: ${pxToVw(60)};
  color: rgba(161, 181, 185, 0.5);

  p {
    position: absolute;
    min-width: ${pxToVw(760)};
    margin-top: ${({ $reverse }) => ($reverse ? pxToVw(460) : pxToVw(330))};
    margin-left: ${({ $reverse }) => ($reverse ? pxToVw(70) : pxToVw(205))};
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: ${pxToVw(162)};
  left: ${pxToVw(615)};
  width: ${pxToVw(1190)};
  font-weight: 300;
  font-size: ${pxToVw(90)};
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
`;

const RightContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $reverse }) => ($reverse ? `start` : `end`)};
  align-items: ${({ $reverse }) => ($reverse ? `start` : `end`)};
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  ${({ $reverse }) => ($reverse ? `right:0;` : `left:0;`)};
  width: ${({ $widthImg }) => pxToVw($widthImg)};
  height: ${({ $heightImg }) => pxToVw($heightImg)};
  margin-top: ${({ $reverse }) => ($reverse ? pxToVw(200) : "0")};
`;

const AdvantageWrapper = styled.div`
  max-width: ${pxToVw(370)};
  padding-top: ${pxToVw(70)};

  &:first-child {
    border-bottom: 1.3195875883102417px solid rgba(175, 175, 175, 0.5);
    padding-bottom: ${pxToVw(80)};
  }
`;

const NumberAdvantage = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(300)};
  letter-spacing: -0.04em;
  text-align: center;
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 53.12%, #8de9ba 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TitleAdvantage = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(60)};
  text-align: center;
  background: linear-gradient(90deg, #fff 0%, #6fbbd3 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DescAdvantage = styled.div`
  font-weight: 300;
  font-size: ${pxToVw(30)};
  text-align: center;
  color: rgba(161, 181, 185, 0.5);
  padding-top: ${pxToVw(44)};
`;

const TeamInfoItem = ({ data, reverse, timeline }) => {
  const { title, image, description, advantages } = data;
  const { url, width, height } = image;
  const wrapperAdvantageRef = useRef();
  const advantageRefs = useRef([]);
  advantageRefs.current = [];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    timeline &&
      timeline.add(
        advantageRefs.current.forEach((el, index) => {
          timeline.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.04,
              scrollTrigger: {
                trigger: el,
                start: `top +=${window.innerHeight / 1.1}`,
                end: `top+=${window.innerHeight / 3} +=${
                  window.innerHeight / 1.1
                }`,
                markers: false,
                scrub: true,
              },
            }
          );
        })
      );
  }, [timeline]);

  return (
    <InfoWrapper $reverse={reverse} ref={wrapperAdvantageRef}>
      <LeftContainer>
        <Top $reverse={reverse}>
          <AnimateMoveUp>
            <ImageWrapper
              $reverse={reverse}
              $widthImg={width}
              $heightImg={height}
            >
              <Image src={url} alt={title} sizes='100%' fill />
            </ImageWrapper>
          </AnimateMoveUp>
          {title && (
            <AnimateMoveUp>
              <TitleContainer>{title} </TitleContainer>
            </AnimateMoveUp>
          )}
        </Top>
        <Bottom $reverse={reverse}>
          <AnimateMoveUp>
            <p>{description}</p>
          </AnimateMoveUp>
        </Bottom>
      </LeftContainer>
      <RightContainer $reverse={reverse}>
        {advantages.map(({ number, title, desc }, index) => {
          return (
            <AdvantageWrapper
              key={index}
              ref={(ref) => addToRefs(ref, advantageRefs.current)}
            >
              <NumberAdvantage>{number}</NumberAdvantage>
              <TitleAdvantage>{title}</TitleAdvantage>
              {desc && <DescAdvantage>{desc}</DescAdvantage>}
            </AdvantageWrapper>
          );
        })}
      </RightContainer>
    </InfoWrapper>
  );
};

export default TeamInfoItem;
