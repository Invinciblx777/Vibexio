"use client";

import React from "react";

export default function SVGArrowIcon2({
  width = 114,
  height = 132,
  className = "",
  title
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 114 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}

      <path
        d="M113.422 0.5H76.4552C65.9618 0.5 57.4552 9.00659 57.4552 19.5V111.847C57.4552 122.34 48.9486 130.847 38.4552 130.847H0"
        stroke="#42617E"
        strokeDasharray="5 5"
      />
    </svg>
  );
}
