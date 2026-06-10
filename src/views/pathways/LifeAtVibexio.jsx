"use client";

import React from "react";
import { Coffee, Pair, StarIcon2, Treat } from "../../components/icons/CommonIcons.jsx";

const items = [
  {
    icon: <StarIcon2 />,
    text: "Flexible mornings, async standups.",
  },
  {
    icon: <Pair />,
    text: "Pair programming or design reviews",
  },
  {
    icon: <Coffee />,
    text: "Virtual coffee chats and Friday hangouts",
  },
  {
    icon: <Treat />,
    text: "Optional annual team retreat",
  },
];

const LifeAtVibexio = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[100px] md:px-[60px] lg:px-[90px] ">

      {/* HEADING */}
      <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold 
        tracking-[0.05em] text-center leading-tight">
        Life at <span className="text-[#5B7C99]">Vibexio</span>
      </h1>

      {/* Subtext */}
      <p className="font-normal text-[18px] lg:text-[24px] leading-[100%] tracking-[0.07em] mt-3 text-center">
        (Remote Edition)
      </p>

      {/* Description */}
      <p className="font-normal text-[18px] lg:text-[24px] leading-[140%] tracking-[0.07em] mt-[30px] lg:mt-[70px] text-center">
        A typical day at Vibexio blends deep focus with collaboration.
      </p>

      {/* ICON GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
           gap-8 lg:gap-12
          mt-10 h-[66px]"
      >
        {items.map((item, i) => (
          <Feature className="text-center" key={i} icon={item.icon} text={item.text} />
        ))}
      </div>

    </div>
  );
};

const Feature = ({ icon, text }) => {
  return (
    <div
      className="
        w-full
        h-[58px]
        bg-[#C8D6E6]
        rounded-[10px]
        flex
        items-center
        justify-center
        gap-3
      px-4
        shadow-[0_3px_10px_rgba(0,0,0,0.08)]
      "
    >
      <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
        {icon}
      </div>

      <span className="text-[14px] md:text-[15px] font-medium tracking-[0.02em]">
        {text}
      </span>
    </div>
  );
};

export default LifeAtVibexio;
