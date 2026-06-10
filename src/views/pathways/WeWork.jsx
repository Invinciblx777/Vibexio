"use client";

import React from "react";
const cardwave = "/images/inside/CardWave.png";

const principles = [
  {
    title: "No Ego. Just Excellence.",
    desc: "Junior or senior best idea wins.",
    styles: { px: { base: 18, sm: 22, lg: 24, xl: 26 } },
  },
  {
    title: "Direct Communication.",
    desc: "Honest, transparent discussions.",
    styles: { px: { base: 18, sm: 20, lg: 22, xl: 34 } },
  },
  {
    title: "Ownership Mindset.",
    desc: "You build, deploy, and own features end to end.",
    styles: { px: { base: 16, sm: 20, lg: 22, xl: 26 } },
  },
  {
    title: "Fail Fast, Learn Faster.",
    desc: "We celebrate learning through iteration.",
    styles: { px: { base: 18, sm: 22, lg: 24, xl: 28 } },
  },
  {
    title: "Work From Anywhere, Built First.",
    desc: "Designed to thrive with distributed teams.",
    styles: { px: { base: 16, sm: 20, lg: 22, xl: 26 } },
  },
  {
    title: "Team Across India.",
    desc: "From metros to small towns, united by purpose.",
    styles: { px: { base: 18, sm: 22, lg: 24, xl: 28 } },
  },
];

const WeWork = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[120px] px-4">

      {/* Heading */}
      <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold tracking-[0.07em] mb-14 text-center leading-[140%]">
        <span className="text-black">The </span>
        <span className="text-[#5B7C99]">Vibexio </span>
        <span className="text-black">Way</span>
        <br />
        <span className="text-black">How We Work</span>
      </h1>

      <div className="w-full">

        {/* DESKTOP XL VIEW (3 + 3 layout) */}
        <div className="hidden xl:flex flex-col items-center">
          <div className="flex gap-7 justify-center mb-10">
            {principles.slice(0, 3).map((item, i) => <Card key={i} item={item} />)}
          </div>
          <div className="flex gap-7 justify-center">
            {principles.slice(3, 6).map((item, i) => <Card key={i} item={item} />)}
          </div>
        </div>

        {/* MOBILE + TABLET + LAPTOP */}
        <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-4 sm:mx-16 justify-items-center">
          {principles.map((item, i) => <Card key={i} item={item} />)}
        </div>

      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const { px } = item.styles;

  return (
    <div
      style={{
        paddingLeft: px.base,
        paddingRight: px.base,
      }}
      className={`
        w-full lg:w-[270px] xl:w-[330px]
        h-[389px]
        bg-[#BECCDD]
        rounded-[40px]
        shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        relative pb-0 flex flex-col items-center text-center
        pt-[70px]
       
      `}
    >
      {/* TITLE */}
      <h3 className="font-bold text-[22px] lg:text-[20px] xl:text-[24px] leading-9 tracking-[0.05em] px-[10px]">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-6 font-normal text-[15px] xl:text-[16px] leading-9 tracking-[0.05em] px-[40px]">
        {item.desc}
      </p>

      {/* BOTTOM WAVE */}
      <img src={cardwave} alt="" className="absolute bottom-0 left-0 w-full rounded-b-[40px]" />
    </div>
  );
};

export default WeWork;
