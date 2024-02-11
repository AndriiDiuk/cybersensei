"use client";
import Image from "next/image.js";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation.jsx";
import { Wrapper, SmootherContent, Main } from "@/app/lib/GlobalStyles.js";
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
  TextRowWrapper,
  Quote,
  Detached,
  DashText,
  DesignElementWrapper,
  BgSectionContentTop,
  BgSectionContentBottom,
} from "@/app/components/shared/StylesPageContent.js";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { dataPages } from "../data/dataPages.js";
import useTimeLine from "../hooks/useTimeLine.js";
import useSmoother from "../hooks/useSmoother.js";
import { useRef } from "react";

const Page = () => {
  const timeline = useTimeLine(true);

  useSmoother();

  return (
    <Wrapper>
      <HeaderNavigation timeline={timeline} />

      <Header data={dataPages.fintech} timeline={timeline} />
      <Main>
        <PageContent>
          <SectionContent>
            <PageContentTitleWrapper>
              <ContentTitle>
                Assets management, cash management and risk management
              </ContentTitle>
              <ContentDescriptionWrapper>
                <Line />
                <ContentDescription>
                  SoftRequest is a provider of cutting-edge financial technology
                  solutions. We have experience in delivering innovative tools
                  and platforms that empower investors, portfolio managers, and
                  prime brokers to make informed decisions and effectively
                  manage theyir assets.
                </ContentDescription>
              </ContentDescriptionWrapper>
            </PageContentTitleWrapper>
            <PageContentWrapper>
              <Paragraph>
                With a strong focus on real-time performance and risk
                management, we are experienced in a range of robust solutions
                designed to meet the complex needs of today&apos;s financial
                industry.{" "}
              </Paragraph>
              <Paragraph>
                Experience includes a real-time P&L tracking system and an
                institutional-grade portfolio management platform.
              </Paragraph>
              <ImageTextRowWrapper>
                <Paragraph>
                  These solutions provide our clients with comprehensive
                  insights into their investments, allowing them to monitor
                  exposures, assess risk, and optimize their strategies with
                  confidence.
                </Paragraph>
                <Paragraph>
                  Our expertise leverages state-of-the-art risk models and
                  advanced analytics, enabling users to manage complex
                  investment strategies with ease.
                </Paragraph>
                <ImageWrapper $imgWidth={pxToVw(664)} $imgHeight={pxToVw(902)}>
                  <Image
                    src='/page-fintech-1.jpg'
                    alt='Fintech'
                    sizes='100%'
                    fill
                  />
                </ImageWrapper>
              </ImageTextRowWrapper>
              <Paragraph>
                By incorporating live portfolio and risk management
                capabilities, as well as historical market data such as marks,
                greeks, cross rates, and curves, we provide a comprehensive
                toolkit for making data-driven decisions.
              </Paragraph>
              <Paragraph>
                In addition to our portfolio management expertise, we offer
                extensive experience in back-office tools. We are proficient in
                position management, cash management, and risk management
                functionalities, allowing our clients to efficiently handle
                day-to-day operations.
              </Paragraph>
              <Paragraph>
                We also implemented a wide range of reports, including rate of
                return and performance reports, as well as a comprehensive audit
                trail for enhanced transparency and compliance.
              </Paragraph>
              <Quote>
                For prime brokers, CyberSensei possesses a wealth of experience
                in a consolidated view of exposure across all clients in real
                time.
              </Quote>
              <Paragraph>
                By harnessing cutting-edge risk models and stress testing
                capabilities, we empower prime brokers to make better-informed
                decisions and effectively manage risk across their client base
              </Paragraph>
              <TextRowWrapper $height={pxToVw(900)}>
                <Paragraph>
                  Our offerings are not limited to industry professionals alone.
                  We implemented solutions tailored for investors and their
                  teams, providing comprehensive trading capabilities,
                  sophisticated risk models, and embedded accounting
                  functionalities.
                </Paragraph>
                <Paragraph>
                  This comprehensive tool equips investors with greater
                  transparency, improved operational efficiency, and infinite
                  scalability, ensuring that they can adapt and thrive in
                  today&apos;s dynamic financial landscape.
                </Paragraph>
              </TextRowWrapper>
              <Paragraph>
                At SoftRequest, we are committed to delivering best financial
                technology solutions that empower our clients to navigate the
                complexities of the modern investment landscape.
              </Paragraph>
              <Paragraph>
                With our expertise and innovation, we aim to revolutionize the
                way financial professionals manage their portfolios, mitigate
                risk, and drive succesys in the markets.
              </Paragraph>
            </PageContentWrapper>
          </SectionContent>
          <SectionContent>
            <PageContentTitleWrapper>
              <ContentTitle>Electronic Trading Platforms</ContentTitle>
              <ContentDescriptionWrapper>
                <Line />
                <ContentDescription>
                  <p>
                    With a wealth of experience in a diverse range of projects,
                    we offer a comprehensive suite of services to enhance
                    trading efficiency and maximize profitability.{" "}
                  </p>
                  <p>
                    We are highly skilled in both single-leg and multi-leg
                    trading, offering expertise in crossing and non-crossing
                    transactions.{" "}
                  </p>
                </ContentDescription>
              </ContentDescriptionWrapper>
            </PageContentTitleWrapper>
            <PageContentWrapper>
              <Paragraph>
                We excel in navigating the complexities of the market, employing
                strategies such as implied volatility trading, delta-adjusted
                orders, and dynamic hedging functionality.
              </Paragraph>
              <Paragraph>
                By leveraging these techniques, we ensure optimal execution and
                risk management for our clients.
              </Paragraph>
              <ImageTextRowWrapper $modify>
                <Paragraph>
                  SoftRequest company experience lies in the maximization of
                  liquidity capturing.
                </Paragraph>
                <Paragraph>
                  We employ sophisticated algorithms and low-latency solutions
                  to access liquidity swiftly, efficiently and seize the most
                  advantageous trading opportunities.
                </Paragraph>
                <ImageWrapper
                  $imgWidth={pxToVw(780)}
                  $imgHeight={pxToVw(558)}
                  $modify
                >
                  <Image
                    src='/page-fintech-2.jpg'
                    alt='Fintech'
                    sizes='100%'
                    fill
                  />
                </ImageWrapper>
              </ImageTextRowWrapper>
              <Paragraph>
                A strong foundation in individual markets trading and complex
                order books support, we possess the capability to handle even
                the most intricate trading scenarios.
              </Paragraph>
              <Paragraph>
                Furthermore, we pride ourselves on our ability to integrate
                seamlessly with third-party vendors, enabling access to live
                pricing, National Best Bid and Offer (NBBO), Average Daily
                Volume (ADV), Greeks, and Security Master data.
              </Paragraph>
              <Paragraph>
                By leveraging these integrations, we provide our clients with
                comprehensive insights into the market, facilitating informed
                decision-making.
              </Paragraph>
              <TextRowWrapper $height={pxToVw(550)}>
                <Paragraph>
                  Our proficiency extends beyond trading execution to encompass
                  robust Order Management System (OMS) solutions.
                </Paragraph>
                <Paragraph>
                  We implemented state-of-the-art platforms to streamline order
                  processing, ensuring accuracy, efficiency, and compliance with
                  regulatory requirements.
                </Paragraph>
              </TextRowWrapper>
              <Paragraph>
                To optimize trading strategies and execution, we implemented
                Smart Order Router solutions and algorithms. Our advanced
                algorithms intelligently route orders, considering factors such
                as liquidity, pricing, and execution speed, to achieve optimal
                results for our clients.
              </Paragraph>
              <Paragraph>
                Having worked extensively with both Option and Equity exchanges,
                as well as dark pools, we possess a deep understanding of these
                marketplaces. We are adept at navigating the intricacies of each
                venue and leverage this knowledge to execute trades with
                precision.
              </Paragraph>
              <Paragraph>
                Real-time transparency is of paramount importance to us.
              </Paragraph>
              <Quote>
                We offer innovative solutions that provide our clients with
                real-time insights into low-latency trading activities, ensuring
                they remain informed at all times.
              </Quote>
              <Paragraph>
                Lastly, our commitment to delivering a holistic trading
                experience extends to providing comprehensive visualization and
                analysis tools.
              </Paragraph>
              <Paragraph>
                Implemented platforms offered detailed visualization of trading
                algorithms, including trade schedules, auction exposure, dark
                allocation, estimated end times, and the exploration of
                algorithm behavior. These features empower our clients to make
                data-driven decisions and refine their trading strategies.
              </Paragraph>
              <Detached>
                <LineHorizontal className='line-horizontal' />
                <DashText>
                  At SoftRequest, we combine our extensive experience,
                  cutting-edge technology, and unwavering commitment to client
                  satisfaction to deliver exceptional trading soluytions.
                </DashText>
              </Detached>
              <Paragraph>
                With our comprehensive suite of services, we empower our clients
                to navigate the complexities of financial markets with
                confidence and achieve their trading objectives.
              </Paragraph>
            </PageContentWrapper>
            <DesignElementWrapper>
              <BgSectionContentTop />
              <BgSectionContentBottom />
            </DesignElementWrapper>
          </SectionContent>
        </PageContent>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default Page;
