"use client";

import React from "react";
import { RealStoryIcon } from "../../components/icons/CommonIcons.jsx";

const RealStory = () => {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10 relative mt-16 lg:mt-[180px] px-6 sm:px-6 md:px-8 lg:px-12 xl:px-[90px]">

      <h1 className="text-[#5B7C99] font-bold text-xl sm:text-3xl lg:text-[32px] sm:leading-[100%] tracking-[0.07em] text-left">
        <span className="text-black">The Real Story Behind</span> Vibexio
      </h1>

      {/* Divider */}
      <div className="h-[0.5px] max-[400px]:w-[200px] w-[350px] sm:w-[550px] lg:w-[613px] bg-[#000000]" />

      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6 relative">

        {/* Left Text Block */}
        <div className="font-normal text-sm sm:text-base lg:text-[16px] leading-7 sm:leading-8 lg:leading-10 tracking-[0.05em] w-full lg:w-auto">
          <p className="mb-9 lg:mb-9 w-full lg:w-[600px] xl:w-[752px] max-w-full">
            Vibexio was founded in Tamil Nadu by two engineering minds,
            <span className="text-[#4A78A0] font-bold text-base sm:text-[18px]"> Vignesh Kothandaraman</span> and
            <span className="text-[#4A78A0] font-bold text-base sm:text-[18px]"> Santhosh R </span>
            united by a shared ambition to build AI solutions that create real, lasting impact.
          </p>

          <p className="mb-9 lg:mb-9 w-full xl:w-[1037px] max-w-full">
            The early years were defined by discipline, resilience, and a commitment to building practical
            technology that could stand on global standards. Each founder carried a distinct strength
            product vision, technical clarity, operational stability, and delivery excellence
            forming the foundation of the company's culture.
          </p>

          <p className="mb-9 lg:mb-9 w-full xl:w-[1094px] max-w-full">
            What began as a small, focused team has grown into a product driven AI organization
            delivering solutions across industries worldwide. Our journey continues to be guided by
            the same principles that shaped the beginning clarity, collaboration, and a dedication to
            building technology that genuinely serves people and businesses.
          </p>

          <p className="w-full xl:w-[1220px] max-w-full">
            The founding journey has also been guided by the strategic mentorship of
            <span className="text-[#4A78A0] font-bold text-base sm:text-[18px]"> Thomas William</span> and
            <span className="text-[#4A78A0] font-bold text-base sm:text-[18px]"> Ajith</span>, whose insights and direction helped
            shape the company's early decisions and long term mindset. His guidance reinforced a core belief
            that continues to drive Vibexio: build technology that genuinely creates value, not just
            technology for its own sake.
          </p>
        </div>

        {/* Right Image - Absolute Position */}
        <div className="absolute -top-20 lg:-top-50 right-4 lg:right-25 xl:right-20 w-40 sm:w-48 lg:w-64 xl:w-[320px] order-first lg:order-0 hidden lg:block">
          <RealStoryIcon className="lg:w-[250px] xl:w-full" />
        </div>
      </div>

      {/* Bottom Highlighted Section */}
      <div className="relative w-full rounded-2xl lg:rounded-[40px] mt-6 lg:mt-8 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(48.12deg,#BECCDD_-27.31%,#5B7C99_24.54%,#BECCDD_83.35%)] rounded-2xl lg:rounded-[40px] -rotate-180"></div>

        {/* Content */}
        <p className="font-normal text-[11px] sm:text-[13px] lg:text-[16px] leading-6 sm:leading-7 lg:leading-10 tracking-[0.05em] text-center relative z-20 px-4 sm:px-8 lg:px-16 xl:px-[200px] py-4 sm:py-6 lg:py-[31px]">
          Today, Vibexio stands as a product driven AI company with a clear mission develop
          intelligent systems that bring efficiency, clarity, and measurable impact to businesses worldwide.
        </p>
      </div>

    </div>
  );
};

export default RealStory;