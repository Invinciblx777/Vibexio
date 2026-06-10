"use client";

import React from "react";
import CurveIcon from "../../components/icons/CurveIcon.jsx";
const ios = "/images/ecosystem/Ios.webp";
const playstore = "/images/ecosystem/PlayStore.webp";
const Kubyn = "/images/ecosystem/Kubyn.webp";
const VibexioClario = "/images/ecosystem/VibexioClario.webp";
const ClarioGetAPI = "/images/ecosystem/ClarioGetAPI.webp";
const HealthcareSoon = "/images/ecosystem/HealthcareSoon.webp";
const EdutechSoon = "/images/ecosystem/EdutechSoon.webp";
import Link from "next/link";

const Products = () => {
  const openPlayStore = () => {
    // 🔁 Replace with YOUR app Play Store link
    window.open(
      "https://play.google.com/store/apps/details?id=com.kubyntool&pcampaignid=web_share",
      "_blank",
    );
  };

  return (
    <div className="relative">
      <div className="relative w-full h-full lg:h-[800px] mt-12">
        {/* LEFT SECTION */}
        <div className="lg:absolute top-0 left-0 w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={Kubyn}
            alt=""
            className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] object-contain"
          />

          <h5 className="font-kollektif font-bold text-[20px] xl:text-[24px] leading-[100%] tracking-[5%] text-black mt-[10px]">
            Kubyn
          </h5>

          <p className="font-avenir font-normal text-[14px] xl:text-[16px] leading-[32px] lg:leading-[43px] tracking-[5%] text-black mt-[25px] max-w-[600px]">
            An AI driven personal finance manager that automates budgeting,
            tracks expenses, and offers real time insights to help users make
            smarter financial decisions. Available worldwide on mobile, Kubyn
            brings clarity to money management through intelligent automation.
          </p>

          <Link href="/kubyn">
            <div className="group flex items-center gap-2 mt-[25px] cursor-pointer">
              {/* Text */}
              <div className="font-avenir font-semibold text-[18px] xl:text-[20px] text-[#121212] group-hover:text-[#42617E] group-hover:underline underline-offset-4">
                Explore Product
              </div>

              {/* Icon */}
              <CurveIcon
                width={25}
                height={25}
                className="transition-all duration-200 group-hover:[&>*]:stroke-[#42617E]"
              />
            </div>
          </Link>

          <div className="flex items-center gap-4 mt-[25px]">
            <img
              onClick={openPlayStore}
              src={playstore}
              alt=""
              className="w-[120px] lg:w-[135px] h-[45px] lg:h-[50px] object-contain cursor-pointer"
            />
            <img
              src={ios}
              alt=""
              className="w-[110px] lg:w-[120px] h-[45px] lg:h-[50px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:absolute bottom-0 right-0 w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right mt-5 lg:mt-0">
          <div className="flex justify-center lg:justify-end w-full">
            <img
              src={VibexioClario}
              alt=""
              className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] object-contain"
            />
          </div>

          <h5 className="font-kollektif font-bold text-[20px] xl:text-[24px] leading-[100%] tracking-[5%] text-black mt-[10px]">
            Vibexio Clario
          </h5>

          <p className="font-avenir font-normal text-[14px] xl:text-[16px] leading-[32px] lg:leading-[43px] tracking-[5%] text-black mt-[25px] max-w-[600px]">
            A data analytics and automation tool that turns raw information into
            actionable intelligence. Clario extracts, analyzes, and visualizes
            business data to help organizations make informed, data-driven
            decisions with speed and precision.
          </p>

          <Link href="/clario">
            <div className="group flex items-center gap-2 mt-[25px] cursor-pointer">
              {/* Text */}
              <div className="font-avenir font-semibold text-[18px] xl:text-[20px] text-[#121212] group-hover:text-[#42617E] group-hover:underline underline-offset-4">
                Explore Product
              </div>

              {/* Icon */}
              <CurveIcon
                width={25}
                height={25}
                className="transition-all duration-200 group-hover:[&>*]:stroke-[#42617E]"
              />
            </div>
          </Link>
          <div className="mt-[25px]">
            <div
              className="font-avenir font-bold text-[16px] leading-[25px] tracking-[4%] text-[#F7F7F9]
                    bg-[#60809C] w-[190px] h-[44px] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#42617E] hover:cursor-pointer"
            >
              Login Console
            </div>
          </div>
        </div>
      </div>

      {/* SECOND BLOCK (EXACT SAME — NO CHANGE) */}
      <div className="relative w-full h-full lg:h-[800px] mt-5">
        {/* LEFT SECTION */}
        <div className="lg:absolute top-0 left-0 w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={ClarioGetAPI}
            alt=""
            className="w-[200px] h-[200px] lg:w-[400px] lg:h-[320px] object-contain"
          />

          <h5 className="font-kollektif font-bold text-[20px] xl:text-[24px] leading-[100%] tracking-[5%] text-black mt-[10px]">
            Clario Get API
          </h5>

          <p className="font-avenir font-normal text-[14px] xl:text-[16px] leading-[32px] lg:leading-[43px] tracking-[5%] text-black mt-[25px] max-w-[600px]">
            Seamless data extraction, analysis, and visualization turning raw
            information into actionable intelligence in real time, empowering
            systems to think, respond, and evolve with precision. Clario Get API
            brings AI driven clarity to every dataset, accelerating smarter
            decisions across your business ecosystem.
          </p>

          <div className="flex items-center gap-2 mt-[25px]">
            <div className="font-avenir font-semibold text-[18px] xl:text-[20px] text-[#121212]">
              Explore Product
            </div>
            <CurveIcon width={25} height={25} />
          </div>

          <div className="mt-10 md:mt-[25px]">
            <div
              className="font-avenir font-bold text-[16px] leading-[25px] tracking-[4%] text-[#F7F7F9]
                    bg-[#60809C] w-[190px] h-[44px] rounded-[10px] flex items-center justify-center cursor-pointer hover:bg-[#42617E] hover:cursor-pointer"
            >
              Get API
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:absolute bottom-0 right-0 w-full lg:w-[50%] flex flex-col items-center lg:items-end text-center lg:text-right mt-5 lg:mt-0">
          <div className="flex justify-center lg:justify-end w-full">
            <img
              src={HealthcareSoon}
              alt=""
              className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] object-contain"
            />
          </div>

          <h5 className="font-kollektif font-bold text-[20px] xl:text-[24px] leading-[100%] tracking-[5%] text-black mt-[10px]">
            Healthcare
          </h5>

          <p className="font-avenir font-normal text-[14px] xl:text-[16px] leading-[32px] lg:leading-[43px] tracking-[5%] text-black mt-[25px] max-w-[600px]">
            An AI powered healthcare platform designed to revolutionize patient
            care through predictive analytics, early diagnosis, and personalized
            treatment recommendations. Built for hospitals, clinics, and
            healthcare systems looking to enhance patient outcomes and
            operational efficiency.
          </p>

          <div className="flex items-center gap-2 mt-[25px]">
            <div className="font-avenir font-semibold text-[18px] xl:text-[20px] text-[#121212]">
              Explore Product
            </div>
            <CurveIcon width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="relative w-full h-full lg:h-[500px] xl:h-[600px] mt-5">
        {/* LEFT SECTION */}
        <div className="lg:absolute top-0 left-0 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={EdutechSoon}
            alt=""
            className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] object-contain"
          />

          <h5 className="font-kollektif font-bold text-[20px] xl:text-[24px] leading-[100%] tracking-[5%] text-black mt-[10px]">
            Edutech
          </h5>

          <p className="font-avenir font-normal text-[14px] xl:text-[16px] leading-[32px] lg:leading-[43px] tracking-[5%] text-black mt-[25px] pr-0 xl:pr-25">
            A next generation AI education ecosystem empowering learners and
            institutions through personalized learning paths, real time
            analytics, and intelligent content delivery. Edutech redefines
            digital classrooms with adaptive technology that helps every student
            succeed.{" "}
          </p>

          <div className="flex items-center gap-2 mt-[25px]">
            <div className="font-avenir font-semibold text-[18px] xl:text-[20px] text-[#121212]">
              Explore Product
            </div>
            <CurveIcon width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
