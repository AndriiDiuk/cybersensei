"use client";
import useSmootherScroll from "./hooks/useSmootherScroll.js";
import { SmootherContext } from "./utils/smootherContext.js";
import {
  Wrapper,
  SmootherWrapper,
  SmootherContent,
  Main,
} from "@/app/lib/GlobalStyles.js";
import Header from "./components/Header/Header.jsx";
import HeaderNavigation from "./components/HeaderNavigation/HeaderNavigation.jsx";
import MainDomainExpertise from "./components/MainDomainExpertise/MainDomainExpertise.jsx";
import PagesSections from "./components/PagesSections/PagesSections.jsx";
import LetsTalk from "./components/LetsTalk/LetsTalk.jsx";
import KeyCompetencies from "./components/KeyCompetencies/KeyCompetencies.jsx";
import KeyTechnologies from "./components/KeyTechnologies/KeyTechnologies.jsx";
import TheTeamIsEverything from "./components/TheTeamIsEverything/TheTeamIsEverything.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { dataPages } from "./data/dataPages.js";

export default function Home() {
  const [smoother, timeline] = useSmootherScroll(true);

  return (
    <Wrapper>
      <HeaderNavigation timeline={timeline} />
      <SmootherContext.Provider value={smoother}>
        <SmootherWrapper id='smooth-wrapper'>
          <SmootherContent id='smooth-content'>
            <Header data={dataPages.home} timeline={timeline} />
            <Main>
              <MainDomainExpertise timeline={timeline} />
              <PagesSections timeline={timeline} />
              <LetsTalk timeline={timeline} />
              <KeyCompetencies />
              <KeyTechnologies timeline={timeline} />
              <TheTeamIsEverything timeline={timeline} />
            </Main>
            <Footer timeline={timeline} />
          </SmootherContent>
        </SmootherWrapper>
      </SmootherContext.Provider>
    </Wrapper>
  );
}
