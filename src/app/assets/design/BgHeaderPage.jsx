const BgHeaderPage = (props) => {
  return (
    <svg viewBox='0 0 2560 3454' fill='none' {...props}>
      <g clipPath='url(#clip0_21_6194)'>
        <g filter='url(#filter0_f_21_6194)'>
          <ellipse
            cx='1280'
            cy='-10.5'
            rx='2790'
            ry='2615.5'
            fill='url(#paint0_radial_21_6194)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_21_6194'
          x='-2110'
          y='-3226'
          width='6780'
          height='6431'
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
            stdDeviation='300'
            result='effect1_foregroundBlur_21_6194'
          />
        </filter>
        <radialGradient
          id='paint0_radial_21_6194'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(1280 -10.5) rotate(90) scale(3762.63 4013.66)'
        >
          <stop stopOpacity='0' />
          <stop offset='0.299923' />
          <stop offset='0.376466' stopColor='#001559' />
          <stop offset='0.461513' stopColor='#003DFF' />
          <stop offset='0.824404' />
        </radialGradient>
        <clipPath id='clip0_21_6194'>
          <rect width='2560' height='3454' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BgHeaderPage;
