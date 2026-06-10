"use client";

import React from "react";

export default function SVGArrowIcon4({
  width = 117,
  height = 132,
  className = "",
  title
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 117 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M0 0.5H38.5704C49.0638 0.5 57.5704 9.00659 57.5704 19.5V111.847C57.5704 122.34 66.077 130.847 76.5704 130.847H116.672"
        stroke="#42617E"
        strokeDasharray="5 5"
      />
    </svg>
  );
}
