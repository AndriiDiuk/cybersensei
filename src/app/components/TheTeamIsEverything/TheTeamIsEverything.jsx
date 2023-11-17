"use client";
import {
  StyledWrapper,
  DesignElementWrapper,
  ContentWrapper,
  FooterWrapper,
} from "./styles.js";
import SectionHeader from "../shared/SectionHeaderContent/SectionHeaderContent.jsx";
import TeamInfoItem from "../shared/TeamInfoItem.jsx";
import GreenFigure4 from "@/app/assets/design/GreenFigure4.jsx";
import BgTheTeamIsEverything from "@/app/assets/design/BgTheTeamIsEverything.jsx";
import AnimateMoveUp from "../shared/animation/AnimateMoveUp.jsx";
import { dataTheTeamIsEverything } from "@/app/data/dataTheTeamIsEverything.js";
import { dataSections } from "@/app/data/dataSections.js";

const TheTeamIsEverything = ({ timeline }) => {
  const { dataTop, dataBottom } = dataTheTeamIsEverything;

  return (
    <StyledWrapper id='team'>
      <SectionHeader data={dataSections.team} team />
      <ContentWrapper>
        <TeamInfoItem data={dataTop} timeline={timeline} />
        <TeamInfoItem data={dataBottom} timeline={timeline} reverse />
        <AnimateMoveUp>
          <FooterWrapper>
            Successfully cooperate with companies around the world, helping
            businesses reach new heights.
          </FooterWrapper>
        </AnimateMoveUp>
      </ContentWrapper>
      <DesignElementWrapper>
        <GreenFigure4 className='green-figure-4' />
        <BgTheTeamIsEverything className='bg-the-team-is-everything' />
      </DesignElementWrapper>
    </StyledWrapper>
  );
};

export default TheTeamIsEverything;
