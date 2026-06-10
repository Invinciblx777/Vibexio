"use client";

import React from "react";

const ArrowPath = ({ width = "202", height = "88", ...props }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 202 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.5 6H81.5C91.9934 6 100.5 14.5066 100.5 25V63.5C100.5 73.9934 109.007 82.5 119.5 82.5H197"
            stroke="#42617E"
            strokeWidth="0.5"
            strokeDasharray="5 5"
        />

        <circle opacity="0.3" cx="6" cy="6" r="6" fill="#42617E" />
        <circle cx="6" cy="6" r="3" fill="#42617E" />

        <circle opacity="0.3" cx="196" cy="82" r="6" fill="#42617E" />
        <circle cx="196" cy="82" r="3" fill="#42617E" />
    </svg>
);

export default ArrowPath;
