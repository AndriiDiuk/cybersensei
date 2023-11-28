import { useRef } from "react";
import styled from "styled-components";
import LogoStroke from "../assets/elements/LogoStroke.jsx";
import PictFintech from "@/app/assets/pict-page/PictFintech.jsx";
import PictBlockchain from "@/app/assets/pict-page/PictBlockchain.jsx";
import PictGambling from "@/app/assets/pict-page/PictGambling.jsx";
import PictPython from "@/app/assets/pict-page/PictPython.jsx";
import PictDomains from "@/app/assets/pict-page/PictDomains.jsx";

const Wrapper = styled.div``;

export const renderPageImage = (name) => {
  switch (name) {
    case "Home":
      return (
        <Wrapper>
          <LogoStroke className='logo-stroke' />
        </Wrapper>
      );
    case "Fintech":
      return (
        <Wrapper>
          <PictFintech className='pict-fintech' />
        </Wrapper>
      );
    case "Blockchain":
      return (
        <Wrapper>
          <PictBlockchain className='pict-blockchain' />
        </Wrapper>
      );
    case "Python":
      return (
        <Wrapper>
          <PictPython className='pict-python' />
        </Wrapper>
      );
    case "Gambling":
      return (
        <Wrapper>
          <PictGambling className='pict-gambling' />
        </Wrapper>
      );
    case "Domains":
      return (
        <Wrapper>
          <PictDomains className='pict-domains' />
        </Wrapper>
      );
  }
};
