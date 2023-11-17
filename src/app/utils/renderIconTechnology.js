import Backend from "@/app/assets/icons/Backend.jsx";
import Frontend from "@/app/assets/icons/Frontend.jsx";
import Mobile from "@/app/assets/icons/Mobile.jsx";
import Cloud from "@/app/assets/icons/Cloud.jsx";
import Solidity from "@/app/assets/icons/Solidity.jsx";
import Cross from "@/app/assets/icons/Cross.jsx";
import Microservice from "@/app/assets/icons/Microservice.jsx";
import { pxToVw } from "@/app/utils/pixelToViewport.js";

export const renderIconTechnology = (icon) => {
  switch (icon) {
    case "backend":
      return (
        <Backend width={pxToVw(262)} height={pxToVw(220)} className='backend' />
      );
    case "frontend":
      return <Frontend width={pxToVw(261)} height={pxToVw(197)} />;
    case "mobile":
      return <Mobile width={pxToVw(221)} height={pxToVw(220)} />;
    case "cloud":
      return <Cloud width={pxToVw(221)} height={pxToVw(189)} />;
    case "solidity":
      return <Solidity width={pxToVw(262)} height={pxToVw(243)} />;
    case "cross":
      return <Cross width={pxToVw(261)} height={pxToVw(210)} />;
    case "microservice":
      return <Microservice width={pxToVw(298)} height={pxToVw(278)} />;
  }
};
