const BgCard = (props) => {
  return (
    <svg viewBox='0 0 1003 1015' fill='none' {...props}>
      <g filter='url(#filter0_b_14_8440)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1003 0H0V1015H955.5L1003 967.5V0Z'
          fill='url(#paint0_linear_14_8440)'
          fillOpacity='0.4'
        />
        <path
          d='M0.5 1014.5V0.5H1002.5V967.293L955.293 1014.5H0.5Z'
          stroke='url(#paint1_radial_14_8440)'
          strokeOpacity='0.16'
        />
        <path
          d='M0.5 1014.5V0.5H1002.5V967.293L955.293 1014.5H0.5Z'
          stroke='url(#paint2_radial_14_8440)'
          strokeOpacity='0.2'
        />
      </g>
      <defs>
        <filter
          id='filter0_b_14_8440'
          x='-72.9209'
          y='-72.9209'
          width='1148.84'
          height='1160.84'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImageFix' stdDeviation='36.4604' />
          <feComposite
            in2='SourceAlpha'
            operator='in'
            result='effect1_backgroundBlur_14_8440'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_backgroundBlur_14_8440'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_14_8440'
          x1='0'
          y1='0'
          x2='1003'
          y2='1015'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#254964' stopOpacity='0.58' />
          <stop offset='0.384403' stopColor='#0B1D29' stopOpacity='0.58' />
          <stop offset='0.592558' stopColor='#081823' stopOpacity='0.4' />
          <stop offset='1' stopColor='#587BBD' stopOpacity='0.45' />
        </linearGradient>
        <radialGradient
          id='paint1_radial_14_8440'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(7.89694e-07 0.00196733) rotate(45.9761) scale(539.601 533.221)'
        >
          <stop stopColor='#ABD7FF' />
          <stop offset='1' stopColor='#ABD7FF' stopOpacity='0' />
        </radialGradient>
        <radialGradient
          id='paint2_radial_14_8440'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(1003 1015) rotate(-136.195) scale(440.623 435.414)'
        >
          <stop stopColor='#ABD7FF' stopOpacity='0.6' />
          <stop offset='1' stopColor='#ABD7FF' stopOpacity='0' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BgCard;
