"use client";
import { useState } from "react";
import { pxToVw } from "@/app/utils/pixelToViewport.js";
import {
  StyledWrapper,
  DesignElementWrapper,
  AccordionWrapper,
} from "./styles.js";
import SectionHeader from "../shared/SectionHeaderContent/SectionHeaderContent.jsx";
import AccordionItem from "../shared/AccordionItem.jsx";
import GreenFigure2 from "@/app/assets/design/GreenFigure2.jsx";
import BgKeyCompetencies from "@/app/assets/design/BgKeyCompetencies.jsx";
import { dataAccordion } from "@/app/data/dataAccordion.js";
import { dataSections } from "@/app/data/dataSections.js";

const KeyCompetencies = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    open === index ? setOpen(null) : setOpen(index);
  };

  return (
    <StyledWrapper id='competencies'>
      <SectionHeader data={dataSections.competencies} competencies />
      <AccordionWrapper>
        {dataAccordion.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              number={index + 1}
              open={index === open}
              data={data}
              toggle={() => {
                toggle(index);
              }}
            />
          );
        })}
      </AccordionWrapper>
      <DesignElementWrapper>
        <GreenFigure2 width={pxToVw(1114)} height={pxToVw(1053)} />
        <BgKeyCompetencies width={pxToVw(2560)} height={pxToVw(5726)} />
      </DesignElementWrapper>
    </StyledWrapper>
  );
};

export default KeyCompetencies;
