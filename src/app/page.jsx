"use client";
import useTimeLine from "./hooks/useTimeLine.js";
import { Wrapper, SmootherContent, Main } from "@/app/lib/GlobalStyles.js";
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
import useSmoother from "./hooks/useSmoother.js";
import { useRef } from "react";

export default function Home() {
  const timeline = useTimeLine(true);
  const scrollContainer = useRef();
  useSmoother(scrollContainer);

  return (
    <Wrapper>
      <HeaderNavigation timeline={timeline} />
      <SmootherContent ref={scrollContainer}>
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
    </Wrapper>
  );
}
