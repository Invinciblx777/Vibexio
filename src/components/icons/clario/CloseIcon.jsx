"use client";

import React from "react";

const CloseIcon = ({ width = 24, height = 24, color = "#41617E" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.875 7.125L7.125 16.875M7.125 7.125L16.875 16.875"
        stroke={color}
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
