"use client";
import Image from "next/image.js";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation.jsx";
import { Wrapper, SmootherContent, Main } from "@/app/lib/GlobalStyles.js";
import { dataPages } from "../data/dataPages.js";
import LineHorizontal from "../assets/elements/LineHorizontal.jsx";
import { pxToVw } from "../utils/pixelToViewport.js";
import { renderPageIconsContent } from "../utils/renderPageIconsContent.js";
import { dataAdvantagesBlockchain } from "../data/dataPageAdvantages.js";
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
  AdvantagesWrapper,
  AdvantageItem,
  AdvantageTitle,
  AdvantageTitleWrapper,
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
        <Header data={dataPages.blockchain} timeline={timeline} />
        <Main>
          <PageContent>
            <SectionContent>
              <PageContentTitleWrapper>
                <ContentTitle>
                  Decentralized solutions that offer transparency, security, and
                  efficiency
                </ContentTitle>
                <ContentDescriptionWrapper>
                  <Line />
                  <ContentDescription>
                    CyberSensei is a leading blockchain technology solutions
                    provider with a strong track record of delivering innovative
                    solutions across multiple blockchain ecosystems.
                  </ContentDescription>
                </ContentDescriptionWrapper>
              </PageContentTitleWrapper>
              <PageContentWrapper>
                <Paragraph>
                  With our deep expertise and extensive experience in Ethereum,
                  Polygon, and Solana blockchains, as well as proficiency in
                  Solidity and Rust development, we are your trusted partner in
                  navigating the decentralized world.
                </Paragraph>
                <Paragraph>
                  At CyberSensei, we are driven by a passion for blockchain
                  technology and a commitment to delivering cutting-edge
                  solutions that empower businesses and individuals alike.
                </Paragraph>
                <Paragraph>
                  We understand that blockchain is not just a buzzword it&apos;s
                  a transformative force that has the potential to revolutionize
                  industries across the globe.
                </Paragraph>
                <ImageTextRowWrapper $modifyDetached>
                  <DetachedOnImg>
                    <LineHorizontal className='line-horizontal' />
                    <Paragraph>
                      Our mission is to harness the power of blockchain to
                      create real-world value for our clients.
                    </Paragraph>
                  </DetachedOnImg>
                  <ImageWrapper
                    $imgWidth={pxToVw(780)}
                    $imgHeight={pxToVw(558)}
                  >
                    <Image
                      src='/page-blockchain.jpg'
                      alt='Blockchain'
                      sizes='100%'
                      fill
                    />
                  </ImageWrapper>
                </ImageTextRowWrapper>
                <AdvantagesWrapper>
                  {dataAdvantagesBlockchain.map(
                    ({ title, icon, description }, index) => {
                      return (
                        <AdvantageItem key={index}>
                          <AdvantageTitleWrapper>
                            {renderPageIconsContent(icon)}
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
