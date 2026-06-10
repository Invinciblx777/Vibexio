"use client";

import React from "react";

const CurveIcon = ({ width = 30, height = 30, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current ${className}`}
    >
      <path
        d="M11 7C11 7.901 11.9163 9.24643 12.8438 10.3757C14.0363 11.8329 15.4612 13.1042 17.095 14.0744C18.32 14.8018 19.805 15.5 21 15.5C19.805 15.5 18.3187 16.1982 17.095 16.9256C15.4612 17.897 14.0363 19.1684 12.8438 20.6231C11.9163 21.7536 11 23.1014 11 24"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default CurveIcon;
