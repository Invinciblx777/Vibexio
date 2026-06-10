"use client";

import React from "react";
import Cards from "../../components/Cards.jsx";

const Empower = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#BECCDD_0%,#5B7C99_100%)] pt-[68px]  md:pl-10 lg:pl-[90px] pb-10 lg:h-[530px] relative">
      <div className="pl-6">
        {/* Title */}
        <h1
          className="inline-block border-b border-[#121212] pb-[18px] font-bold 
        text-[22px] md:text-[30px] lg:text-[32px] leading-10 tracking-[0.05em]"
        >
          Industries We Empower
        </h1>

        {/* Description */}
        <p
          className="
    font-normal text-[14px] md:text-[15px] lg:text-[16px] 
    leading-7 md:leading-8 
    tracking-[0.05em]
    mt-5 lg:mt-10

    text-left            /* MOBILE PERFECT LEFT ALIGN */
    lg:absolute lg:right-[127px] lg:w-[766px]
  "
        >
          we believe every industry deserves AI that understands its language. Our
          intelligent ecosystems are designed to adapt to your business’s unique
          challenges, delivering measurable impact and sustainable growth. We craft
          AI driven digital systems that integrate seamlessly with your workflows,
          aligning innovation with real world goals, no matter your sector or scale.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-10 lg:mt-[180px] w-full">
        <Cards />
      </div>
    </div>
  );
};

export default Empower;
