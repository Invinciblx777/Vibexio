"use client";

import React from "react";
import Helmet from "@/components/common/Helmet";
import SEO from "../../components/common/SEO.jsx";

const bgImg = "/images/collaborate/BlueBg2.webp";
const mainbg = "/images/pathways/mainbg.webp";
import CurveIcon from "../../components/icons/CurveIcon.jsx";

const InsideLandingPage = () => {
  return (
    <>
      {/* SEO META – PATHWAYS */}
      <SEO
        title="Pathways to AI-Driven Transformation"
        description="Explore Vibexio’s pathways to AI-driven transformation—from strategy and automation to scalable digital systems tailored for business growth."
        canonical="https://vibexio.ai/pathways"
      />

      {/* PAGE UI */}
      <div
        className="relative lg:bg-cover bg-no-repeat bg-top overflow-hidden mt-[76px] h-auto lg:h-[600px] xl:h-[711px] flex flex-col lg:flex-row items-center lg:items-start"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* LEFT CONTENT */}
        <div
          className="
            px-6 sm:px-10 md:px-16 lg:px-[90px]
            pt-5 sm:pt-16 md:pt-6 lg:pt-10 xl:pt-[92px]
            w-full lg:w-[950px]
            text-center lg:text-left
          "
        >
          <h1
            className="
              font-bold
              max-[350px]:text-[22px] text-[26px] sm:text-[45px] lg:text-[54px] xl:text-[62px]
              leading-[110%] lg:leading-[100%]
              tracking-[0.07em]
            "
          >
            Build the <span className="text-white">Future of AI.</span>
          </h1>

          <h1
            className="
              font-bold mt-2
              max-[350px]:text-[22px] text-[26px] sm:text-[45px] lg:text-[54px] xl:text-[62px]
              leading-[110%] lg:leading-[100%]
              tracking-[0.07em]
            "
          >
            Work From <span className="text-white">Anywhere.</span>
          </h1>

          <p className="text-white font-bold md:text-[24px] xl:text-[32px] leading-[100%] tracking-[0.07em] mt-7">
            Three founders. One dream.
          </p>

          <p
            className="
              font-normal italic
              text-[14px] sm:text-[15px] xl:text-[16px]
              leading-7 sm:leading-8 md:leading-[39px]
              tracking-[0.06em]
              pt-4 sm:pt-8 md:pt-10 lg:pt-4 xl:pt-[60px]
              lg:w-[600px] xl:w-[657px]
            "
          >
            A fully remote team redefining how technology solves real world
            problems.
            <br className="hidden xl:block" />
            Join us in building AI products that actually matter from the comfort
            of your home. We’re not just another tech company. We’re proving that
            India can build world class AI with a distributed team. Location
            doesn’t matter. Talent does.
          </p>

          {/* BUTTONS */}
          <div className="pt-2 xl:pt-5 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={() => {
                document
                  .getElementById("openings")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="
                px-5 py-2.5 sm:py-3.5 bg-white rounded-[30px]
                text-[14px] sm:text-[15px] md:text-[16px]
                font-medium flex items-center gap-4
                shadow-md hover:bg-black hover:text-white
                group transition cursor-pointer
              "
            >
              View Open Positions
              <CurveIcon
                width={24}
                height={24}
                className="text-gray-800 group-hover:text-[#F8F8F8]"
              />
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("position")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="
                px-5 py-2.5 sm:py-3.5
                border-[1.5px] border-white
                text-white hover:border-black hover:text-black
                rounded-[30px]
                text-[14px] sm:text-[15px] md:text-[16px]
                font-medium cursor-pointer
              "
            >
              Submit Your Resume
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full lg:w-auto flex justify-center lg:justify-end
            mt-10 lg:mt-0 px-6 lg:px-0
          "
        >
          <img
            src={mainbg}
            alt="Vibexio remote AI team and pathways illustration"
            className="
              w-[300px] sm:w-[400px] lg:w-[320px] xl:w-[414px]
              h-auto object-cover
              relative lg:absolute lg:top-60 xl:top-[269px]
              lg:right-4 xl:right-[130px]
              pb-10 mt-5
            "
          />
        </div>
      </div>
    </>
  );
};

export default InsideLandingPage;
