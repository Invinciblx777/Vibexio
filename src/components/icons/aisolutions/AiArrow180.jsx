"use client";

import React from "react";

const AiArrow180 = () => {
  return (
    <svg
      width="344"
      height="291"
      viewBox="0 0 344 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue Ellipse + Drop Shadow */}
      <g filter="url(#filter0_d_2652_1498)">
        <ellipse cx="203" cy="139" rx="125" ry="123" fill="#BECCDD" />
      </g>

      {/* Curved Tail (Left Side Arrow Tail) */}
      <path
        d="M30 262C30 263.325 28.7172 265.304 27.4187 266.964C25.7492 269.107 23.7543 270.977 21.467 272.404C19.752 273.473 17.673 274.5 16 274.5C17.673 274.5 19.7538 275.527 21.467 276.596C23.7543 278.025 25.7492 279.895 27.4187 282.034C28.7172 283.696 30 285.679 30 287"
        stroke="#BECCDD"
        strokeWidth="4"
      />

      {/* Dashed Arc */}
      <path
        d="M65 138.5C65 63.1131 127.009 2 203.5 2C279.991 2 342 63.1131 342 138.5C342 213.887 279.991 275 203.5 275H21.5"
        stroke="#BECCDD"
        strokeWidth="4"
        strokeDasharray="11 11"
      />

      {/* FILTERS */}
      <defs>
        <filter
          id="filter0_d_2652_1498"
          x="70"
          y="8"
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
            result="effect1_dropShadow_2652_1498"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2652_1498"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AiArrow180;
