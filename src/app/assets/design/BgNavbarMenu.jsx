const BgNavbarMenu = (props) => {
  return (
    <svg viewBox='0 0 5512 5222' fill='none' {...props}>
      <g filter='url(#filter0_f_306_3)'>
        <ellipse
          cx='2756'
          cy='2611'
          rx='2156'
          ry='2011'
          fill='url(#paint0_radial_306_3)'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_306_3'
          x='0'
          y='0'
          width='5512'
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
            result='effect1_foregroundBlur_306_3'
          />
        </filter>
        <radialGradient
          id='paint0_radial_306_3'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(2756 2611) rotate(90) scale(2893 3101.6)'
        >
          <stop stopOpacity='0' />
          <stop offset='0.439153' />
          <stop offset='0.614583' stopColor='#003DFF' />
          <stop offset='0.824404' stopColor='#133CC5' />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BgNavbarMenu;
