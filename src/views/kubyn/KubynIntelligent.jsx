"use client";

import React from "react";
const cardwave = "/images/kubyn/CardWave.webp";

const principles = [
  {
    title: "Personalized Suggestions",
    desc: "Context aware recommendations based on your financial rhythm.",
  },
  {
    title: "Archetype Mapping",
    desc: "Understand your financial persona to align habits with goals.",
  },
  {
    title: "Lifestyle Correlation",
    desc: "Continuous calibration between spending and life direction.",
  },
];

const KubynIntelligent = () => {
  return (
    <div className="w-full flex flex-col items-center px-4">

      {/* Heading */}
      <h1 className="
        text-[24px] sm:text-[28px] lg:text-[32px]
        font-bold tracking-[0.07em] text-center leading-tight mb-12
      ">
        <span className="text-black">The Principles That Drive</span>{" "}
        <span className="text-[#5B7C99]">Us Forward</span>
      </h1>

      {/* WRAPPER */}
      <div className="w-full max-w-7xl mx-auto">

        {/* --- lg & above → 3 card row --- */}
        <div className="hidden lg:flex justify-center gap-8">
          {principles.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* --- md → 2 cards top + 1 centered bottom --- */}
        <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-8">
          {/* Row 1 → 2 cards */}
          <div className="flex justify-center gap-8 w-full">
            <Card item={principles[0]} />
            <Card item={principles[1]} />
          </div>

          {/* Row 2 → 1 card centered */}
          <div className="flex justify-center w-full">
            <Card item={principles[2]} />
          </div>
        </div>

        {/* --- sm & below → 1 per row --- */}
        <div className="flex flex-col gap-8 md:hidden items-center">
          {principles.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="
      w-[250px] lg:w-[340px]
      h-[310px] lg:h-[300px] xl:h-[340px]
      bg-[#BECCDD] rounded-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]
      px-8 pt-10 pb-0 flex flex-col items-center text-center relative
      hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300
    ">
      {/* Even-height title */}
      <h3 className="
        font-bold text-[20px] sm:text-[22px] md:text-[24px]
        leading-tight min-h-[60px] flex items-center justify-center px-10
      ">
        {item.title}
      </h3>

      <p className="mt-5 md:mt-8 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[1px] px-5 md:px-0 xl:px-10">
        {item.desc}
      </p>

      <img src={cardwave} alt="" className="absolute bottom-0 left-0 w-full rounded-b-[40px]" />
    </div>
  );
};

export default KubynIntelligent;
