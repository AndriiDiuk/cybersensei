"use client";
import Image from "next/image.js";
import useSmootherScroll from "../hooks/useSmootherScroll.js";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation.jsx";
import { SmootherContext } from "../utils/smootherContext.js";
import {
  Wrapper,
  SmootherWrapper,
  SmootherContent,
  Main,
} from "@/app/lib/GlobalStyles.js";
import { dataPages } from "../data/dataPages.js";
import { pxToVw } from "../utils/pixelToViewport.js";
import { renderPageIconsContent } from "../utils/renderPageIconsContent.js";
import { dataAdvantagesPython } from "../data/dataPageAdvantages.js";
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
  const [smoother, timeline] = useSmootherScroll(true);

  return (
    <Wrapper>
      <HeaderNavigation timeline={timeline} />
      <SmootherContext.Provider value={smoother}>
        <SmootherWrapper id='smooth-wrapper'>
          <SmootherContent id='smooth-content'>
            <Header data={dataPages.python} timeline={timeline} />
            <Main>
              <PageContent>
                <SectionContent>
                  <PageContentTitleWrapper>
                    <ContentTitle>
                      Services that empower organizations to thrive in the
                      digital age
                    </ContentTitle>
                    <ContentDescriptionWrapper>
                      <Line />
                      <ContentDescription>
                        At CyberSensei, we are at the forefront of innovation,
                        harnessing the power of technology to drive businesses
                        forward. <br />
                        <br />
                        With a diverse team of experts and a passion for
                        problem-solving, we offer a comprehensive range of
                        services that empower organizations to thrive in the
                        digital age.
                      </ContentDescription>
                    </ContentDescriptionWrapper>
                  </PageContentTitleWrapper>
                  <PageContentWrapper>
                    <ImageTextRowWrapper>
                      <ImageWrapper
                        $imgWidth={pxToVw(777)}
                        $imgHeight={pxToVw(558)}
                      >
                        <Image
                          src='/page-python.jpg'
                          alt='Blockchain'
                          sizes='100%'
                          fill
                        />
                      </ImageWrapper>
                    </ImageTextRowWrapper>
                    <AdvantagesWrapper>
                      {dataAdvantagesPython.map(
                        ({ title, icon, description }, index) => {
                          return (
                            <AdvantageItem key={index}>
                              <AdvantageTitleWrapper>
                                {renderPageIconsContent(icon)}
                                <AdvantageTitle>{title}</AdvantageTitle>
                              </AdvantageTitleWrapper>
                              {description.map((item, index) => {
                                return (
                                  <Paragraph key={index}>{item}</Paragraph>
                                );
                              })}
                            </AdvantageItem>
                          );
                        }
                      )}
                    </AdvantagesWrapper>
                  </PageContentWrapper>
                  <DesignElementWrapper>
                    <BgSectionContentBottom />
                  </DesignElementWrapper>
                </SectionContent>
              </PageContent>
            </Main>
            <Footer />
          </SmootherContent>
        </SmootherWrapper>
      </SmootherContext.Provider>
    </Wrapper>
  );
};

export default Page;
