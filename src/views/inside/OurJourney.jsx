"use client";

import React from 'react';
const OurJourney = () => {
  return (
    <div className="w-full bg-[#BECCDD] mt-20 py-20 flex flex-col items-center relative z-10">
      {/* Heading */}
      <h1 className="font-bold text-[25px] sm:text-[32px] leading-[53px] tracking-[0.07em] text-center">
        Our Journey in Numbers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[60px] z-50">

        {/* Card 1 */}
        <div className="w-[260px] sm:w-[321px] h-[185px] bg-white rounded-[20px] shadow-md flex flex-col items-center justify-center">
          <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[52px] leading-[100%] tracking-[0.05em] text-center text-[#5B7C99]">2025</h2>
          <p className="font-bold text-[17px] sm:text-[20px] leading-10 tracking-[0.05em] text-center mt-2">Founded</p>
        </div>

        {/* Card 2 */}
        <div className="w-[260px] sm:w-[321px] h-[185px] bg-white rounded-[20px] shadow-md flex flex-col items-center justify-center">
          <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[52px] leading-[100%] tracking-[0.05em] text-center text-[#5B7C99]">4</h2>
          <p className="font-bold text-[17px] sm:text-[20px] leading-10 tracking-[0.05em] text-center mt-2">AI Products</p>
        </div>

        {/* Card 3 */}
        <div className="w-[260px] sm:w-[321px] h-[185px] bg-white rounded-[20px] shadow-md flex flex-col items-center justify-center">
          <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[52px] leading-[100%] tracking-[0.05em] text-center text-[#5B7C99]">50+</h2>
          <p className="font-bold text-[17px] sm:text-[20px] leading-10 tracking-[0.05em] text-center mt-2">Client Projects</p>
        </div>

        {/* Card 4 */}
        <div className="w-[260px] sm:w-[321px] h-[185px] bg-white rounded-[20px] shadow-md flex flex-col items-center justify-center">
          <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[52px] leading-[100%] tracking-[0.05em] text-center text-[#5B7C99]">6</h2>
          <p className="font-bold text-[17px] sm:text-[20px] leading-10 tracking-[0.05em] text-center mt-2">Industries Served</p>
        </div>

      </div>

      {/* Bottom text */}
      <div className="mt-[60px] text-center px-4">
        <p className="font-bold text-[14px] sm:text-[20px] leading-10 tracking-[0.05em] text-center">
          Team Members:
          <span className="font-normal text-[14px] sm:text-[20px] leading-10 tracking-[0.05em] ml-1 ">
            Rapidly growing and cross functional
          </span>
        </p>

        <p className="font-bold text-[14px] sm:text-[20px] leading-10 tracking-[0.05em] text-center mt-[9px]">
          Global Reach:
          <span className="font-normal text-[14px] sm:text-[20px] leading-10 tracking-[0.05em] ml-1 ">
            Headquartered in Tamil Nadu, India, serving clients worldwide
          </span>
        </p>
      </div>
    </div>

  );
};

export default OurJourney;
