"use client";
import Image from "next/image.js";
import useSmootherScroll from "../hooks/useTimeLine.js";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation.jsx";
import { SmootherContext } from "../utils/smootherContext.js";
import {
  Wrapper,
  SmootherWrapper,
  SmootherContent,
  Main,
} from "@/app/lib/GlobalStyles.js";
import { dataPages } from "../data/dataPages.js";
import LineHorizontal from "../assets/elements/LineHorizontal.jsx";
import { pxToVw } from "../utils/pixelToViewport.js";
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
  DetachedOnImg,
  DesignElementWrapper,
  BgSectionContentBottom,
} from "@/app/components/shared/StylesPageContent.js";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import useTimeLine from "../hooks/useTimeLine.js";
import useSmoother from "../hooks/useSmoother.js";
import { useRef } from "react";

const Page = () => {
  const timeline = useTimeLine(true);
  const scrollContainer = useRef();
  useSmoother(scrollContainer);

  return (
    <Wrapper>
      <HeaderNavigation timeline={timeline} />
      <SmootherContent ref={scrollContainer}>
        <Header data={dataPages.gambling} timeline={timeline} />
        <Main>
          <PageContent>
            <SectionContent>
              <PageContentTitleWrapper>
                <ContentTitle>
                  Implementing gambling startups, with a particular focus on
                  poker and slot
                </ContentTitle>
                <ContentDescriptionWrapper>
                  <Line />
                  <ContentDescription>
                    At SoftRequest, we are a team of experienced professionals
                    specializing in the development and optimization of gambling
                    products and startups.
                    <br />
                    <br /> With a track record of successful projects, we have
                    honed our expertise in various areas to provide
                    comprehensive solutions for our clients
                  </ContentDescription>
                </ContentDescriptionWrapper>
              </PageContentTitleWrapper>
              <PageContentWrapper>
                <Paragraph>
                  Additionally, we excel in optimizing existing gambling
                  software, leveraging our technical prowess to enhance
                  performance and efficiency.
                </Paragraph>
                <Paragraph>
                  Our team has a proven record of optimizing distributed
                  high-loaded services, achieving remarkable improvements of up
                  to 5 times in terms of speed and scalability.
                </Paragraph>
                <ImageTextRowWrapper $gambling>
                  <DetachedOnImg $gambling>
                    <LineHorizontal className='line-horizontal' />
                    <Paragraph>
                      Our team has a proven record of optimizing distributed
                      high-loaded services, achieving remarkable improvements of
                      up to 5 times in terms of speed and scalability.
                    </Paragraph>
                  </DetachedOnImg>
                  <ImageWrapper
                    $imgWidth={pxToVw(664)}
                    $imgHeight={pxToVw(902)}
                  >
                    <Image
                      src='/page-gambling.jpg'
                      alt='Blockchain'
                      sizes='100%'
                      fill
                    />
                  </ImageWrapper>
                </ImageTextRowWrapper>
                <Paragraph>
                  By analyzing your existing infrastructure and implementing
                  strategic measures, we help you streamline your operations and
                  maximize your ROI.
                </Paragraph>
                <Paragraph>
                  With our cross-platform application development expertise, we
                  ensure that your gambling platform reaches a wider audience.
                </Paragraph>
                <Paragraph>
                  Whether it&apos;s iOS, Android, Mac, Windows, Linux, or even
                  WebAssembly, we have the proficiency to develop applications
                  that seamlessly run across multiple platforms, enhancing
                  accessibility and user engagement.
                </Paragraph>
              </PageContentWrapper>
              <DesignElementWrapper>
                <BgSectionContentBottom />
              </DesignElementWrapper>
            </SectionContent>
          </PageContent>
        </Main>
        <Footer />
      </SmootherContent>
    </Wrapper>
  );
};

export default Page;
