"use client";

import React from "react";
const handImg = "/images/home/vhand.webp";
import { Valluvar, Face } from "../../components/icons/CommonIcons.jsx";

const Kural = () => {
  return (
    <section className="
      relative flex justify-center items-center 
      h-auto lg:h-[695px] 
      bg-white overflow-hidden 
      px-2 md:px-10 lg:px-0 py-16 lg:py-0
    ">

      {/* Background Face Icon */}
      <div className="
        absolute left-0 md:left-[-20px] top-0 
        opacity-20 md:opacity-30 
        z-0
      ">
        <Face className="w-[180px] h-[240px] md:w-[260px] md:h-[330px] lg:w-[313px] lg:h-[417px]" />
      </div>

      {/* Hand Image */}
      <img
        src={handImg}
        alt="robotic hand"
        className="
          absolute right-0 bottom-0 
          w-[160px] h-[150px] 
          md:w-[220px] md:h-[200px] 
          lg:w-[309px] lg:h-[282px]
        "
      />

      {/* Main Card */}
      <div className="
        relative z-10 bg-[#6F8CA7] text-[#F8F8F8] rounded-[20px] 
        w-full sm:w-[90%] md:w-[650px] lg:w-[790px] 
        min-h-[320px] md:h-[330px] lg:h-[339px]
        shadow-lg text-center py-10 md:py-12
      ">

        {/* Valluvar Icon */}
        <div className="
          absolute 
          left-10 md:-left-[230px] 
          -top-20 md:-top-24 
          hidden md:block
        ">
          <Valluvar className="w-[200px] h-[340px] md:w-[260px] md:h-[450px] lg:w-[350px] lg:h-[600px]" />
        </div>

        {/* Title */}
        <h2 className="text-[20px] md:text-[22px] font-semibold mb-4">
          Thirukkural
        </h2>

        {/* Tamil Kural */}
        <p className="
          font-semibold text-[10px] md:text-[16px] 
          leading-[30px] md:leading-[41px] 
          tracking-[0.05em]
          text-left 
          pl-[30px] md:pl-[120px] lg:pl-[164px]
        ">
          “ அறிவுடையார் எல்லா இடத்தும் திறைவுடையார் <br />
          அற்ற இடத்தே இல்வரார்.  “
        </p>

        {/* English Meaning */}
        <p className="
          italic text-[13px] md:text-[15px] 
          leading-6 md:leading-7 
          text-[#F8F8F8]
          mt-6 px-6 md:px-[90px] lg:px-[134px]
        ">
          “ Wherever intelligent and knowledgeable people go, they excel. Their wisdom makes them leaders in any environment.”
        </p>

        {/* Footer */}
        <p className="mt-2 text-[11px] md:text-[12px] italic text-right pr-6 md:pr-[68px]">
          – Thiruvalluvar
        </p>
      </div>
    </section>
  );
};

export default Kural;
