"use client";
import { StyledWrappers, BgColor } from "./styles.js";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import GreenFigure from "@/app/assets/design/GreenFigure.jsx";
import SectionHeader from "../shared/SectionHeaderContent/SectionHeaderContent.jsx";
import { dataSections } from "@/app/data/dataSections.js";

const MainDomainExpertise = ({ timeline }) => {
  return (
    <StyledWrappers id='expertise'>
      <SectionHeader data={dataSections.domain} timeline={timeline} />
      <GreenFigure width={pxToVw(1114)} height={pxToVw(1053)} />
      <BgColor />
    </StyledWrappers>
  );
};

export default MainDomainExpertise;
