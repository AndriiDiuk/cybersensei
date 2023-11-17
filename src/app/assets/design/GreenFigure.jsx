import React from "react";

const GreenFigure = (props) => {
  return (
    <svg viewBox='0 0 1155 1523' fill='none' {...props}>
      <g filter='url(#filter0_f_14_5010)'>
        <path
          d='M558.378 240.082C377.665 311.561 378.057 513.843 386.471 621.748C400.308 730.763 482.403 721.574 499.525 775.909C516.646 830.244 391.517 850.963 224.083 962.435C56.6495 1073.91 239.504 1201.68 272.637 1315.77C305.77 1429.86 504.625 1330.47 590.647 1268.99C676.669 1207.51 578.39 1146.74 650.747 986.452C723.104 826.161 893.574 859.901 1041.58 771.567C1189.59 683.233 1130.07 355.893 1069.66 226.055C1009.24 96.2167 739.09 168.604 558.378 240.082Z'
          fill='url(#paint0_radial_14_5010)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_14_5010'
          x='0.451172'
          y='0.314453'
          width='1287.76'
          height='1521.7'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            stdDeviation='77'
            result='effect1_foregroundBlur_14_5010'
          />
        </filter>
        <radialGradient
          id='paint0_radial_14_5010'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(642.002 751.5) rotate(75) scale(761.242 805.34)'
        >
          <stop stopColor='#00D147' />
          <stop offset='1' stopColor='#015173' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default GreenFigure;
