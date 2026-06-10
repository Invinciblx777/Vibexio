"use client";

import React from "react";
import {
  BulletIcon,
  TickIcon,
  WrongIcon,
} from "../../components/icons/CommonIcons.jsx";
const looking = "/images/pathways/looking.webp";

const bullets = [
  "Love solving problems, not just writing code",
  "Are curious and self driven",
  "Communicate clearly",
  "Take ownership without waiting for instructions",
  "Care about quality and long term value",
  "Are humble and collaborative",
];

const dontCare = ["College name", "CGPA", "Certificates", "LinkedIn followers"];

const careAbout = ["What you can build", "How you think", "How you work with others"];

const WeLooking = () => {
  return (
    <div className="mt-[100px] px-10 sm:px-12 lg:px-[90px] w-full flex flex-col">

      {/* HEADING */}
      <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold leading-[150%] tracking-[0.07em] md:mb-10 mb-5">
        <span className="text-[#5B7C99]">We’re Looking </span>
        <span className="text-black">for People Who…</span>
      </h1>

      <div className="h-px bg-[#000000] w-full" />

      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        <div className="flex flex-col gap-6 w-full lg:w-[45%] mt-8 md:mt-10 xl:-mt-35">
          {bullets.map((item, index) => (
            <div key={index} className="flex items-center gap-4 shrink-0">

              {/* FIXED SIZE BULLET ICON */}
              <div className="flex items-center justify-center flex-shrink-0">
                <BulletIcon className="w-full h-full" />
              </div>

              <p className="text-[16px] tracking-wide">{item}</p>
            </div>
          ))}
        </div>


        {/* IMAGE CENTER */}
        <div className=" flex justify-center w-full lg:w-[40%] md:-mt-15 lg:mt-0">
          <img
            src={looking}
            alt="We’re looking illustration"
            className=" hidden md:block w-[420px] sm:w-[480px] md:w-[420px] lg:w-[590px] h-auto"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full flex flex-col justify-start gap-6 md:mt-10 xl:-mt-35">

        {/* WE DON'T CARE */}
        <div>
          <h3 className="font-bold text-[18px] mb-5">We Don’t Care About:</h3>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            {dontCare.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <WrongIcon />
                <p className="text-[15px] tracking-wide">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WE CARE */}
        <div id="openings" className="mt-4">
          <h3 className="font-bold text-[18px] mb-5">We Care About:</h3>

          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            {careAbout.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <TickIcon />
                <p className="text-[15px] tracking-wide">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeLooking;
