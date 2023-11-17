import React from 'react'

const CircleHeader = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none">
			<g filter="url(#a)">
				<ellipse cx={1280} cy={-399} fill="url(#b)" rx={2664} ry={2011} />
			</g>
			<g filter="url(#c)">
				<ellipse cx={1280} cy={-399} fill="url(#d)" rx={2664} ry={2011} />
			</g>
			<defs>
				<radialGradient
					id="b"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(0 2864.92 -3795.2 0 1280 -399)"
					gradientUnits="userSpaceOnUse"
				>
					<stop />
					<stop offset={0.427} />
					<stop offset={0.569} stopColor="#003DFF" />
					<stop offset={0.787} />
				</radialGradient>
				<radialGradient
					id="d"
					cx={0}
					cy={0}
					r={1}
					gradientTransform="matrix(0 2864.92 -3795.2 0 1280 -399)"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopOpacity={0} />
					<stop offset={0.427} />
					<stop offset={0.569} stopColor="#003DFF" />
					<stop offset={0.787} />
				</radialGradient>
				<filter
					id="a"
					width={6528}
					height={5222}
					x={-1984}
					y={-3010}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur
						result="effect1_foregroundBlur_221_2"
						stdDeviation={300}
					/>
				</filter>
				<filter
					id="c"
					width={6528}
					height={5222}
					x={-1984}
					y={-3010}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur
						result="effect1_foregroundBlur_221_2"
						stdDeviation={300}
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default CircleHeader