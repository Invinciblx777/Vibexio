"use client";

import React from "react";
import Helmet from "@/components/common/Helmet";
import Link from "next/link";
import SEO from "../../components/common/SEO.jsx";

import CurveIcon from "../../components/icons/CurveIcon.jsx";
const img2 = "/images/clario/LandingClario.webp";
const bgImg = "/images/collaborate/BlueBg2.webp";

const LandingClario = () => {
  return (
    <>
      {/* SEO META – CLARIO PRODUCT */}
      <SEO
        title="Clario | AI-Powered OCR & Analytics"
        description="Clario is an AI-powered OCR and analytics platform by Vibexio that converts documents into structured, actionable data."
        canonical="https://vibexio.ai/clario"
      />

      {/* PAGE UI */}
      <div
        className="w-full lg:h-[520px] xl:h-[620px] lg:bg-contain bg-no-repeat bg-top relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10 lg:gap-0 pt-7">

          {/* LEFT TEXT CONTENT */}
          <div className="w-full px-4 sm:px-10 md:px-16 xl:px-20 pt-10 md:pt-24 lg:pt-0 flex flex-col text-center lg:text-start">
            <div>
              <h5 className="font-kollektif font-bold text-[28px] md:text-[52px] lg:text-[43px] xl:text-[58px] leading-[100%] tracking-[7%] text-black">
                Transform your <br />
                <span className="text-white mt-3 inline-block">
                  Documents Instantly
                </span>
              </h5>

              <p className="mt-5 md:mt-8 font-avenir font-semibold italic text-[15px] xl:text-[18px] leading-5 xl:leading-8 tracking-[6%] text-[#000000]">
                AI-powered OCR to extract, digitize, and organize your documents
                with unmatched accuracy and speed.
              </p>

              <Link href="/collaborate">
                <button className="group mt-5 md:mt-7 lg:mt-8 bg-[#F8F8F8] rounded-[30px] flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3.5 mx-auto lg:mx-0 hover:bg-[#121212] transition">
                  <span className="font-avenir font-semibold text-[13px] sm:text-[15px] text-gray-800 group-hover:text-[#F8F8F8]">
                    Start Free Trial
                  </span>
                  <CurveIcon
                    width={18}
                    height={18}
                    className="text-gray-800 group-hover:text-[#F8F8F8]"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <div className="w-full flex justify-center items-center">
            <div className="relative">
              <img
                src={img2}
                alt="Clario AI-powered OCR document processing interface"
                className="w-full max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingClario;
