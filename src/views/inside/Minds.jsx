"use client";

import React from "react";
const mindsbg = "/images/inside/mindsbg.png";
const profile1 = "/images/inside/profile1.webp";
const profile2 = "/images/inside/profile2.webp";
import { LinkedInIcon2 } from "../../components/icons/CommonIcons.jsx";

const Minds = () => {
  return (
    <div id="team" className="sm:px-10 lg:px-[90px] mt-[80px] flex justify-center">

      <div
        className="
          w-full max-w-[1260px] 
          min-h-[900px] 
          rounded-[30px] 
          overflow-hidden
        "
        style={{
          backgroundImage: `url(${mindsbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >

        {/* HEADING */}
        <h1
          className="
            text-center font-bold 
            text-[24px] sm:text-[28px] lg:text-[32px] 
             tracking-[0.07em] 
            pt-[40px] sm:pt-[50px] lg:pt-[60px] leading-[120%] sm:leading-[100%]
          "
        >
          The Minds Behind <span className="text-[#5B7C99]">Vibexio</span>
        </h1>

        {/* ==================== SECTION 1 ==================== */}
        <div
          className="
            mt-14 sm:mt-16 lg:mt-20 
            flex flex-col lg:flex-row 
            gap-10 lg:gap-20 
            items-start 
            px-5 sm:px-10 lg:px-[82px]"
        >
          {/* IMAGE */}
          <img
            src={profile1}
            alt="Vignesh"
            className="
              w-[200px] sm:w-60 lg:w-[276px]
              h-[180px] sm:h-[210px] lg:h-[238px]
              object-cover rounded-[10px] 
              mx-auto lg:mx-0
            "
          />

          {/* TEXT */}
          <div>
            <div className="flex gap-4 items-center">
              <h2 className="font-bold text-[20px] sm:text-[22px] xl:text-[24px] leading-[100%] text-white">
                Vignesh Kothandaraman
              </h2>

              <a
                href="https://www.linkedin.com/in/vignesh-kothandaraman-a93605234"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <LinkedInIcon2 />
              </a>
            </div>

            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-white mt-2">
              Managing Partner
            </p>

            <div className="flex gap-4 sm:gap-5 mt-6">
              <div className="w-[3px] h-[180px] sm:h-[130px] lg:h-[140px] bg-white rounded-[10px]" />

              <p className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] sm:leading-[30px] lg:leading-[33px] max-w-[650px]">
                Focuses on understanding real industry challenges and translating them into practical AI products. He drives product ideation through strong research and R&D to ensure every solution is relevant and future ready. His leadership shapes Vibexio’s vision with clarity, innovation, and long term impact.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== SECTION 2 ==================== */}
        <div
          className="
            mt-16 sm:mt-20 lg:mt-24
            flex flex-col-reverse lg:flex-row 
            gap-10 lg:gap-[78px] 
            px-5 sm:px-10 lg:pl-40
          "
        >
          {/* TEXT LEFT */}
          <div className="w-full lg:text-right">
            <div className="flex gap-4 lg:justify-end items-center">

              <a
                href="https://www.linkedin.com/in/santhosh-r-53b1b8226/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block cursor-pointer"
              >
                <LinkedInIcon2 />
              </a>

              <h2 className="font-bold text-[20px] sm:text-[22px] xl:text-[24px] leading-[100%] text-white">
                Santhosh R
              </h2>

              <a
                href="https://www.linkedin.com/in/santhosh-r-53b1b8226/"
                target="_blank"
                rel="noopener noreferrer"
                className="block lg:hidden cursor-pointer"
              >
                <LinkedInIcon2 />
              </a>
            </div>

            <p className="font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-white mt-2">
              Co-Founder
            </p>

            <div className="flex gap-4 sm:gap-5 mt-6 lg:flex-row-reverse">
              <div className="w-[3px] h-[180px] sm:h-[130px] lg:h-[140px] bg-white rounded-[10px]" />

              <p className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[28px] sm:leading-[30px] lg:leading-[33px] max-w-[620px]  lg:text-justify">
                Serving as Co-Founder and Director at Vibexio, leading end-to-end product development and shaping the organization’s technology vision. Plays a key role in managing the development team and driving the execution of multiple products, ensuring high standards of quality, performance, and innovation across all deliverables.
 
              </p>
            </div>
          </div>

          {/* IMAGE RIGHT */}
          <img
            src={profile2}
            alt="Santhosh"
            className="
              w-[200px] sm:w-60 lg:w-[276px]
              h-[180px] sm:h-[210px] lg:h-[238px]
              object-cover rounded-[10px]
              mx-auto lg:mx-0
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Minds;
