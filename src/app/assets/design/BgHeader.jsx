const BgHeader = (props) => {
  return (
    <svg viewBox='0 0 2560 2399' fill='none' {...props}>
      <g clipPath='url(#clip0_14_4951)'>
        <rect
          y='933'
          width='2560'
          height='5642'
          fill='url(#paint0_linear_14_4951)'
        />
        <rect
          y='996'
          width='2560'
          height='2932'
          fill='url(#paint1_linear_14_4951)'
        />
        <g filter='url(#filter0_f_14_4951)'>
          <ellipse
            cx='1280'
            cy='-399'
            rx='2664'
            ry='2011'
            fill='url(#paint2_radial_14_4951)'
          />
        </g>
        <g filter='url(#filter1_f_14_4951)'>
          <ellipse
            cx='1280'
            cy='-399'
            rx='2664'
            ry='2011'
            fill='url(#paint3_radial_14_4951)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_f_14_4951'
          x='-1984'
          y='-3010'
          width='6528'
          height='5222'
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
            result='effect1_foregroundBlur_14_4951'
          />
        </filter>
        <filter
          id='filter1_f_14_4951'
          x='-1984'
          y='-3010'
          width='6528'
          height='5222'
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
            result='effect1_foregroundBlur_14_4951'
          />
        </filter>
        <linearGradient
          id='paint0_linear_14_4951'
          x1='1280'
          y1='2342.28'
          x2='1280'
          y2='6575'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#003CFF' />
          <stop offset='1' stopColor='#0F0F0F' stopOpacity='0' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_14_4951'
          x1='1280'
          y1='2563.32'
          x2='1280'
          y2='3928'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#003CFF' />
          <stop offset='1' stopColor='#0F0F0F' stopOpacity='0' />
        </linearGradient>
        <radialGradient
          id='paint2_radial_14_4951'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(1280 -399) rotate(90) scale(2864.92 3795.2)'
        >
          <stop />
          <stop offset='0.427238' />
          <stop offset='0.568952' stopColor='#003DFF' />
          <stop offset='0.786759' />
        </radialGradient>
        <radialGradient
          id='paint3_radial_14_4951'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(1280 -399) rotate(90) scale(2864.92 3795.2)'
        >
          <stop stopOpacity='0' />
          <stop offset='0.427238' />
          <stop offset='0.568952' stopColor='#003DFF' />
          <stop offset='0.786759' />
        </radialGradient>
        <clipPath id='clip0_14_4951'>
          <rect width='2560' height='2399' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BgHeader;
