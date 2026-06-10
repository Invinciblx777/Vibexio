"use client";

import React from "react";
const webecame = "/images/inside/webecame.webp";
import { BulletIcon } from "../../components/icons/CommonIcons.jsx";

const WeBecame = () => {
  return (
    <div
      className="
        w-full flex flex-col lg:flex-row items-start justify-between px-6 sm:px-10 md:px-16 lg:px-10 lg:pl-26  xl:px-[90px] mt-[60px] sm:mt-20 lg:mt-[100px] gap-5 lg:gap-1"
    >
      {/* LEFT SECTION */}
      <div className="w-full max-w-[600px] lg:max-w-[600px]">

        {/* Heading */}
        <h1 className="text-[#5B7C99] font-bold text-[26px] sm:text-[30px] lg:text-[32px] leading-[100%] tracking-[0.07em] text-left">
          <span className="text-black">What We </span> Became
        </h1>

        {/* Divider */}
        <div className="h-px w-[200px] sm:w-[260px] md:w-[303px] bg-black mt-[30px] sm:mt-[40px] lg:mt-[45px] mb-[25px] sm:mb-[30px] lg:mb-[38px]" />

        {/* Main Paragraph */}
        <p className="
          font-normal text-[15px] sm:text-[16px] 
          leading-[30px] sm:leading-[34px] lg:leading-9 
          tracking-[0.05em] text-[#1A1A1A]
          w-full lg:w-[440px] xl:w-[619px]">
          Vibexio started as three individuals bound by purpose. But through resilience
          and collaboration, we evolved into a unified force a global AI company built
          from Tamil Nadu, now serving clients across India, the Middle East, Europe,
          and North America.
        </p>

        {/* Subheading */}
        <p
          className="
            text-[#5B7C99] font-normal text-[15px] sm:text-[16px]
            leading-[34px] lg:leading-9 
            tracking-[0.05em] 
            mt-[30px] sm:mt-10 lg:mt-[50px]
            pl-6 sm:pl-10 lg:pl-[83px]">
          We learned to:
        </p>

        {/* Bullet List */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-3 sm:pl-10 lg:pl-[83px]">

          {[
            "Lead without titles.",
            "Take ownership without being asked.",
            "Celebrate every small win as a milestone of growth."
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="shrink-0 ">
                <BulletIcon />
              </div>

              <p className="font-normal text-[15px] sm:text-[16px] leading-6 sm:leading-[30px] lg:leading-9 tracking-[0.05em]">
                {text}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <img
        src={webecame}
        alt="We Became Vibexio"
        className="
          w-[260px] sm:w-[350px] md:w-[450px] lg:w-[400px] xl:w-[557px]
          h-auto object-contain
          mx-auto lg:mx-0 lg:mt-0"
      />
    </div>
    
  );
};

export default WeBecame;