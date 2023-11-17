"use client";
import Link from "next/link.js";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/dist/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { styled } from "styled-components";
import {
  StyledWrapper,
  DesignElementWrapper,
  ContentWrapper,
  ContactItem,
  LinkName,
  LinkText,
  AddressWrapper,
  AllRightWrapper,
  TextWrapper,
  ButtonBackTop,
} from "./styles.js";
import SectionHeader from "../shared/SectionHeaderContent/SectionHeaderContent.jsx";
import AnimateMoveUp from "../shared/animation/AnimateMoveUp.jsx";
import ArrowBackTop from "@/app/assets/elements/ArrowBackTop.jsx";
import BgFooter from "@/app/assets/design/BgFooter.jsx";
import StylesLink from "../shared/StylesLink.jsx";
import { backToTop } from "@/app/utils/scrollTo.js";
import { dataSections } from "@/app/data/dataSections.js";
import { dataContacts } from "@/app/data/dataContacts.js";
import { animateAllRightRef } from "./animation.js";

const Footer = ({ timeline }) => {
  return (
    <StyledWrapper id='contacts'>
      <SectionHeader data={dataSections.contacts} footer />
      <ContentWrapper>
        {dataContacts.map(({ linkName, links, address }, index) => {
          return (
            <AnimateMoveUp key={index}>
              <ContactItem>
                {linkName && <LinkName>{linkName}</LinkName>}
                {links.map(({ linkUrl, linkText }, index) => {
                  return (
                    <Link href={linkUrl} key={index}>
                      <StylesLink>
                        <LinkText>{linkText}</LinkText>
                      </StylesLink>
                    </Link>
                  );
                })}
                {address && <AddressWrapper>{address}</AddressWrapper>}
              </ContactItem>
            </AnimateMoveUp>
          );
        })}
      </ContentWrapper>
      <AllRightWrapper>
        <TextWrapper>All Rights Reserved © 2023</TextWrapper>
        <ButtonBackTop onClick={backToTop}>
          <ArrowBackTop className='arrow-back-top' />
          Back to top
        </ButtonBackTop>
      </AllRightWrapper>
      <DesignElementWrapper>
        <BgFooter className='bg-footer' />
      </DesignElementWrapper>
    </StyledWrapper>
  );
};

export default Footer;
