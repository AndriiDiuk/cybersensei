"use client";
import { useState } from "react";
import Image from "next/image.js";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/dist//ScrollSmoother";
import { SmootherContext } from "../utils/smootherContext.js";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect.js";
import { Wrapper, Content, Main } from "@/app/lib/GlobalStyles.js";
import { dataPages } from "../data/dataPages.js";
import LineHorizontal from "../assets/elements/LineHorizontal.jsx";
import { pxToVw } from "../utils/pixelToViewport.js";
import { renderPageIconsContent } from "../utils/renderPageIconsContent.js";
import { dataAdvantagesDomains } from "../data/dataPageAdvantages.js";
import {
  PageContent,
  SectionContent,
  PageContentTitleWrapper,
  ContentTitle,
  ContentDescriptionWrapper,
  ContentDescription,
  Line,
  PageContentWrapper,
  Paragraph,
  ImageTextRowWrapper,
  ImageWrapper,
  TitleColor,
  AdvantagesWrapper,
  AdvantageItem,
  AdvantageTitle,
  AdvantageTitleWrapper,
  DesignElementWrapper,
  BgSectionContentBottom,
} from "@/app/components/shared/StylesPageContent.js";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";

const Page = () => {
  let [smoother, setSmoother] = useState();
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
      smooth: 1.5,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
    });

    setSmoother(smoother);
  }, []);
  return (
    <SmootherContext.Provider value={smoother}>
      <Wrapper id='smooth-wrapper'>
        <Content id='smooth-content'>
          <Header data={dataPages.domains} />
          <Main>
            <PageContent>
              <SectionContent>
                <PageContentTitleWrapper>
                  <ContentTitle>
                    Expertise to implement projects across a wide spectrum of
                    industries
                  </ContentTitle>
                  <ContentDescriptionWrapper>
                    <Line />
                    <ContentDescription>
                      At CyberSense, we are your trusted partner in turning your
                      innovative ideas into reality.
                      <br />
                      <br /> With a team of dedicated professionals who excel in
                      diverse domains, we have the expertise and versatility to
                      implement projects across a wide spectrum of indusytries.
                    </ContentDescription>
                  </ContentDescriptionWrapper>
                </PageContentTitleWrapper>
                <PageContentWrapper>
                  <Paragraph>
                    Our commitment to excellence knows no bounds, and we are
                    ready to tackle challenges in healthcare, insurance, travel,
                    forensic, embedded systems, automotive, scientific research,
                    big data analytics, and any other field you can imagine.
                  </Paragraph>
                  <ImageTextRowWrapper>
                    <ImageWrapper
                      $imgWidth={pxToVw(780)}
                      $imgHeight={pxToVw(558)}
                    >
                      <Image
                        src='/page-domains.jpg'
                        alt='Blockchain'
                        sizes='100%'
                        fill
                      />
                    </ImageWrapper>
                  </ImageTextRowWrapper>
                  <TitleColor>Why Choose Us</TitleColor>
                  <AdvantagesWrapper>
                    {dataAdvantagesDomains.map(
                      ({ title, icon, description }, index) => {
                        return (
                          <AdvantageItem key={index}>
                            <AdvantageTitleWrapper>
                              {icon
                                ? renderPageIconsContent(icon)
                                : `${index + 1}.`}
                              <AdvantageTitle>{title}</AdvantageTitle>
                            </AdvantageTitleWrapper>
                            {description.map((item, index) => {
                              return <Paragraph key={index}>{item}</Paragraph>;
                            })}
                          </AdvantageItem>
                        );
                      }
                    )}
                  </AdvantagesWrapper>
                  <ContentDescription>
                    At CyberSensei, we thrive on challenges, and the domain of
                    your project is never a limitation for us.
                    <br />
                    <br />
                    With our team of versatile professionals and a commitment to
                    excellence, we are ready to bring your ideas to life, no
                    matter where they belong in the world of innovation. Contact
                    us today, and let's embark on a journey of success together.
                  </ContentDescription>
                </PageContentWrapper>
                <DesignElementWrapper>
                  <BgSectionContentBottom />
                </DesignElementWrapper>
              </SectionContent>
            </PageContent>
          </Main>
          <Footer />
        </Content>
      </Wrapper>
    </SmootherContext.Provider>
  );
};

export default Page;
