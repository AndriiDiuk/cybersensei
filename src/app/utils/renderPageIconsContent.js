import Solidity from "../assets/icons-page-content/blockchain/Solidity.jsx";
import Rust from "../assets/icons-page-content/blockchain/Rust.jsx";
import Smart from "../assets/icons-page-content/blockchain/Smart.jsx";
import Ethereum from "../assets/icons-page-content/blockchain/Ethereum.jsx";
import Polygon from "../assets/icons-page-content/blockchain/Polygon.jsx";
import Solana from "../assets/icons-page-content/blockchain/Solana.jsx";
import Python from "../assets/icons-page-content/blockchain/Python.jsx";
import Machine from "../assets/icons-page-content/blockchain/Machine.jsx";
import Science from "../assets/icons-page-content/blockchain/Science.jsx";
import Visualization from "../assets/icons-page-content/blockchain/Visualization.jsx";
import Web from "../assets/icons-page-content/blockchain/Web.jsx";
import Business from "../assets/icons-page-content/blockchain/Business.jsx";
import General from "../assets/icons-page-content/blockchain/General.jsx";
import { pxToVw } from "./pixelToViewport.js";

export const renderPageIconsContent = (name) => {
  switch (name) {
    case "Solidity":
      return <Solidity width={pxToVw(33)} height={pxToVw(50)} />;
    case "Rust":
      return <Rust width={pxToVw(52)} height={pxToVw(52)} />;
    case "Smart":
      return <Smart width={pxToVw(47)} height={pxToVw(50)} />;
    case "Ethereum":
      return <Ethereum width={pxToVw(31)} height={pxToVw(50)} />;
    case "Polygon":
      return <Polygon width={pxToVw(57)} height={pxToVw(50)} />;
    case "Solana":
      return <Solana width={pxToVw(55)} height={pxToVw(50)} />;
    case "Python":
      return <Python width={pxToVw(50)} height={pxToVw(50)} />;
    case "Machine":
      return <Machine width={pxToVw(51)} height={pxToVw(50)} />;
    case "Science":
      return <Science width={pxToVw(50)} height={pxToVw(50)} />;
    case "Visualization":
      return <Visualization width={pxToVw(50)} height={pxToVw(50)} />;
    case "Web":
      return <Web width={pxToVw(61)} height={pxToVw(50)} />;
    case "Business":
      return <Business width={pxToVw(61)} height={pxToVw(50)} />;
    case "General":
      return <General width={pxToVw(50)} height={pxToVw(50)} />;
  }
};
