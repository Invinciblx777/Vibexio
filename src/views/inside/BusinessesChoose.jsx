"use client";

import React from "react";

const data = [
  { id: "01", title: "We Actually Care", desc: "Your goals become our mission. Your success defines our growth." },
  { id: "02", title: "We Listen First, Code Later", desc: "Every engagement begins with understanding technology follows insight." },
  { id: "03", title: "We Take Ownership", desc: "We don't deliver and disappear. We partner and evolve with your organization." },
  { id: "04", title: "We're Still Growing", desc: "We are agile, ambitious, and still writing our story together with our clients." },
  { id: "05", title: "You Talk to the Founders", desc: "No layers, no delays, direct conversations with decision makers and builders." }
];

const BusinessesChoose = () => {
  return (
    <div className="w-full mt-[100px] px-4 sm:px-8 md:px-10 lg:px-[60px] xl:px-[90px] flex flex-col items-center">

      {/* Heading & Divider Responsive (Copied Behavior) */}
      <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 items-center xl:items-end text-center xl:text-left w-full justify-between">
        
        {/* Divider */}
        <div className="hidden xl:block w-[780px] h-px bg-[#999]" />

        {/* Heading */}
        <h1 className="font-['Kollektif'] font-bold text-[#5B7C99] leading-[53px] tracking-[0.07em]
                       text-[18px] sm:text-[30px] lg:text-[32px]">
          <span className="text-black">Why Businesses <br className="hidden xl:block" /> Choose </span>
          Vibexio
        </h1>
      </div>
        <div className="xl:hidden block w-[250px] sm:w-[350px] lg:w-[350px] h-px bg-[#999] sm:mt-4" />

      {/* Subtitle */}
      <p className="text-center text-[15px] sm:text-[18px] md:text-[20px] 
                   leading-8 md:leading-10 tracking-[0.05em]  xl:-mt-[50px]">
        Beyond Technology It's About Partnership
      </p>

      {/* Responsive Cards */}
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
          justify-items-center
          gap-6 
          mt-[60px] xl:mt-[80px]
          w-full
        "
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="
              w-full max-w-[240px]
               h-[280px] sm:h-[320px]
              border border-[#E2E2E2]
              shadow-sm
              rounded-[20px]
              bg-white
              pt-[45px] px-[20px]
              flex flex-col gap-3 text-center xl:text-left
            "
          >
            <p className="font-bold text-[16px] tracking-[0.05em]">
              {item.id}
            </p>

            <p className="font-bold text-[16px] leading-[22px] tracking-[0.05em]">
              {item.title}
            </p>

            <p className="font-normal text-[14px] leading-6 tracking-[0.03em] text-[#333] pt-[20px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BusinessesChoose;
