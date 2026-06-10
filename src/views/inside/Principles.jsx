"use client";

import React from "react";
const cardwave = "/images/inside/CardWave.png";

const principles = [
  {
    title: "Innovation with Purpose",
    desc: "We explore new ways to solve real world problems, not to chase trends but to create impact.",
  },
  {
    title: "Integrity and Trust",
    desc: "We build reliable, ethical, and transparent AI. Your data and trust are our greatest responsibilities.",
  },
  {
    title: "Collaboration and Partnership",
    desc: "We work with our clients, not for them. Every success story begins with shared ownership.",
  },
  {
    title: "Excellence and Discipline",
    desc: "Good is never enough. We pursue exceptional in every line of code, every client relationship, every deployment.",
  },
  {
    title: "Lifestyle Correlation",
    desc: "AI evolves daily and so do we. We never stop learning, iterating, and innovating.",
  },
];

const Principles = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[120px] px-4">

      {/* Heading */}
      <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold tracking-[0.07em] mb-10 md:mb-14 text-center leading-tight">
        <span className="text-black">The Principles That Drive</span>{" "}
        <span className="text-[#5B7C99]">Us Forward</span>
      </h1>

      <div className="w-full">

        {/* DESKTOP XL VIEW (3 top + 2 bottom) */}
        <div className="hidden xl:flex flex-col items-center">
          <div className="flex gap-7 justify-center mb-10">
            {principles.slice(0, 3).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          <div className="flex gap-7 justify-center">
            {principles.slice(3, 5).map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>

        {/* MOBILE + TABLET + LAPTOP VIEW */}
        <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-4 sm:mx-16 justify-items-center">
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
    <div
      className="
        w-full
        lg:w-[270px]
        xl:w-[330px]
        h-[380px]
        bg-[#BECCDD]
        rounded-[40px]
        shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        relative
        px-8
        sm:px-6
        xl:px-4
        pt-10
        pb-0
        flex
        flex-col
        items-center
        text-center
      "
    >
      {/* TITLE */}
      <h3 className="font-bold text-[18px] xl:text-[24px] leading-9 tracking-[0.05em] text-center">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-6 font-normal text-[15px] sm:text-[14px] xl:text-[16px] leading-9 tracking-[0.05em] text-center">
        {item.desc}
      </p>

      {/* BOTTOM WAVE */}
      <img
        src={cardwave}
        alt=""
        className="absolute bottom-0 left-0 w-full rounded-b-[40px]"
      />
    </div>
  );
};

export default Principles;
