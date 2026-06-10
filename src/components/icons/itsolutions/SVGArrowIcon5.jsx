"use client";

import React from "react";

export default function SVGArrowIcon5({
  width = 170,
  height = 2,
  className = "",
  title
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 170 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M0 0.826904L84.272 0.664415L169.555 0.499978"
        stroke="#42617E"
        strokeDasharray="5 5"
      />
    </svg>
  );
}
