"use client";

import React from "react";

const AiArrow = () => {
  return (
    <svg
      width="351"
      height="291"
      viewBox="0 0 351 291"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue Ellipse + Shadow */}
      <g filter="url(#filter0_d_2652_1496)">
        <ellipse cx="141" cy="139" rx="125" ry="123" fill="#BECCDD" />
      </g>

      {/* Curved Arrow Tail Bottom */}
      <path
        d="M321 262C321 263.325 322.283 265.304 323.581 266.964C325.251 269.107 327.246 270.977 329.533 272.404C331.248 273.473 333.327 274.5 335 274.5C333.327 274.5 331.246 275.527 329.533 276.596C327.246 278.025 325.251 279.895 323.581 282.034C322.283 283.696 321 285.679 321 287"
        stroke="#BECCDD"
        strokeWidth="4"
      />

      {/* Dashed Big Arc */}
      <path
        d="M279 138.5C279 63.1131 216.991 2 140.5 2C64.0086 2 2 63.1131 2 138.5C2 213.887 64.0086 275 140.5 275H322.5"
        stroke="#BECCDD"
        strokeWidth="4"
        strokeDasharray="11 11"
      />

      {/* SVG Filters */}
      <defs>
        <filter
          id="filter0_d_2652_1496"
          x="8"
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
            result="effect1_dropShadow_2652_1496"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2652_1496"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default AiArrow;
