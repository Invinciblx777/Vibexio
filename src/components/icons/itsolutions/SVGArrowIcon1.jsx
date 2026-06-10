"use client";

import React from "react";

export default function SVGArrowIcon1({
  width = 115,
  height = 132,
  className = "",
  title
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 115 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M114.039 130.847H76.7678C66.2744 130.847 57.7678 122.34 57.7678 111.847V19.5C57.7678 9.00662 49.2612 0.500029 38.7678 0.500029H0"
        stroke="#42617E"
        strokeDasharray="5 5"
      />
    </svg>
  );
}
