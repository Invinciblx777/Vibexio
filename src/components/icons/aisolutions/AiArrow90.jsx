"use client";

import React from "react";

const AiArrow90 = () => {
  return (
    <svg
      width="290"
      height="347"
      viewBox="0 0 290 347"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue Ellipse + Shadow */}
      <g filter="url(#filter0_d_2652_1500)">
        <ellipse cx="151.07" cy="206.74" rx="125" ry="123" fill="#BECCDD" />
      </g>

      {/* Small Arrow Tail (Top Left Curve) */}
      <g clipPath="url(#clip0_2652_1500)">
        <path
          d="M29.0273 30.46C27.7025 30.4388 25.7447 29.1245 24.105 27.7996C21.9891 26.0961 20.1516 24.0714 18.7616 21.7617C17.7195 20.0298 16.7261 17.9346 16.7529 16.2618C16.7261 17.9346 15.6662 19.9987 14.5693 21.6946C13.1043 23.9587 11.203 25.9235 9.03726 27.5586C7.35421 28.8303 5.3518 30.0812 4.03054 30.0601"
          stroke="#BECCDD"
          strokeWidth="4"
        />
      </g>

      {/* Dashed Main Arc */}
      <path
        d="M151.952 67.4309C227.329 68.6367 287.443 131.615 286.219 208.096C284.996 284.578 222.899 345.601 147.521 344.395C72.1441 343.19 12.0306 280.212 13.2541 203.73L16.1651 21.7532"
        stroke="#BECCDD"
        strokeWidth="4"
        strokeDasharray="11 11"
      />

      {/* FILTERS + CLIPPATH */}
      <defs>
        <filter
          id="filter0_d_2652_1500"
          x="18.0703"
          y="75.74"
          width="266"
          height="262"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2652_1500"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2652_1500"
            result="shape"
          />
        </filter>

        <clipPath id="clip0_2652_1500">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="matrix(0.0159946 -0.999872 -0.999872 -0.0159946 31.9961 32.5077)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AiArrow90;
