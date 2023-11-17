import React from "react";

const BgFooter = (props) => {
  return (
    <svg viewBox='0 0 2560 4334' fill='none' {...props}>
      <rect width='2560' height='4334' fill='url(#paint0_radial_14_8587)' />
      <rect width='2560' height='4334' fill='url(#paint1_radial_14_8587)' />
      <defs>
        <radialGradient
          id='paint0_radial_14_8587'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(2560 0.000393602) rotate(130.068) scale(3324.56 2193.83)'
        >
          <stop stopColor='#014655' />
          <stop offset='1' stopColor='#010302' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_14_8587'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(2560 -0.000518944) rotate(136.761) scale(2267.66 935.548)'
        >
          <stop stopColor='#13FF40' />
          <stop offset='1' stopColor='#015551' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BgFooter;
