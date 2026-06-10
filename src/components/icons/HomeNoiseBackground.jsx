"use client";

import React from "react";

const HomeNoiseBackground = ({ className }) => {
  return (
    <svg
      className={className || "w-full h-full"}
      viewBox="0 0 1440 706"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_n_134_518)">
        <rect width="1440" height="706" fill="url(#paint0_linear_134_518)" />
      </g>

      <defs>
        <filter
          id="filter0_n_134_518"
          x="0"
          y="0"
          width="1440"
          height="706"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feTurbulence
            type="fractalNoise"
            baseFrequency="2 2"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="1545"
          />

          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />

          <feComponentTransfer in="alphaNoise" result="coloredNoise1">
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
            />
          </feComponentTransfer>

          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />

          <feFlood floodColor="rgba(91, 124, 153, 0.5)" result="color1Flood" />

          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />

          <feMerge result="effect1_noise_134_518">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>

        <linearGradient
          id="paint0_linear_134_518"
          x1="720"
          y1="0"
          x2="720"
          y2="706"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BECCDD" />
          <stop offset="1" stopColor="#5B7C99" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HomeNoiseBackground;
