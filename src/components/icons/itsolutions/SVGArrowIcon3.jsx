"use client";

import React from "react";

export default function SVGArrowIcon3({
  width = 118,
  height = 132,
  className = "",
  title
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 118 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M0 130.847H38.8827C49.3761 130.847 57.8826 122.34 57.8826 111.847V19.5C57.8826 9.00662 66.3892 0.500029 76.8826 0.500029H117.305"
        stroke="#42617E"
        strokeDasharray="5 5"
      />
    </svg>
  );
}
