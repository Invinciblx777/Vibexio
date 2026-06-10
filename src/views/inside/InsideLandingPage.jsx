"use client";

import React from "react";
import Helmet from "@/components/common/Helmet";
import SEO from "../../components/common/SEO.jsx";

const bgImg = "/images/collaborate/BlueBg2.webp";
const landingbg = "/images/inside/landingbg.webp";
const landingbg2 = "/images/inside/landingbg2.webp";
import CurveIcon from "../../components/icons/CurveIcon.jsx";

const InsideLandingPage = () => {
  return (
    <>
      {/* SEO META */}
      <SEO
        title="Inside Vibexio | Global AI & Automation Company"
        description="Vibexio is a global AI company headquartered in Tamil Nadu, India, building intelligent automation and AI-driven solutions for modern businesses."
        canonical="https://vibexio.ai/inside"
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
            w-full lg:w-[750px]
            text-center lg:text-left
          "
        >
          <h1
            className="
              font-bold
              text-[36px] sm:text-[48px] md:text-[54px] lg:text-[62px]
              leading-[110%] lg:leading-[100%]
              tracking-[0.07em]
            "
          >
            We are <span className="text-white">Vibexio</span>
          </h1>

          <p
            className="
              font-normal italic
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-7 sm:leading-8 md:leading-[39px]
              tracking-[0.06em]
              pt-4 sm:pt-8 md:pt-10 lg:pt-[60px]
            "
          >
            A global AI company headquartered in Tamil Nadu, India built by innovators,
            technologists, and dreamers who believe that artificial intelligence should
            empower, not intimidate.
          </p>

          <p
            className="
              font-normal italic
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-7 sm:leading-8 md:leading-[39px]
              tracking-[0.06em]
              pt-6 sm:pt-6 md:pt-[35px]
            "
          >
            At Vibexio, we turn complex business challenges into elegant AI-driven
            solutions, blending human intuition with technological intelligence to help
            organizations move faster, work smarter, and grow stronger.
          </p>

          {/* BUTTONS */}
          <div className="pt-5 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button
              onClick={() => {
                document.getElementById("story")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="
                px-5 py-2.5 sm:py-3.5 bg-white rounded-[30px]
                text-[14px] sm:text-[15px] md:text-[16px]
                font-medium flex items-center gap-2
                shadow-md hover:bg-black hover:text-white
                group transition cursor-pointer
              "
            >
              Our Story
              <CurveIcon
                width={24}
                height={24}
                className="text-gray-800 group-hover:text-[#F8F8F8]"
              />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById("team");
                if (!el) return;
                const top = el.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              className="
                px-5 py-2.5 sm:py-3.5 border-[1.5px] border-white
                text-white hover:border-black hover:text-black
                transition rounded-[30px]
                text-[14px] sm:text-[15px] md:text-[16px]
                font-medium cursor-pointer
              "
            >
              Meet the Team
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
          {/* MOBILE / TABLET */}
          <img
            src={landingbg2}
            alt="Vibexio AI Team Collaboration"
            className="
              block lg:hidden
              w-[260px] sm:w-[330px] md:w-[400px]
              h-auto object-cover pb-20 mt-10
            "
          />

          {/* DESKTOP */}
          <img
            src={landingbg}
            alt="Vibexio AI Platform Overview"
            className="
              hidden lg:block
              w-[400px] xl:w-[500px]
              h-auto object-cover
              relative lg:absolute lg:top-0 lg:right-4 xl:right-24
            "
          />
        </div>
      </div>
    </>
  );
};

export default InsideLandingPage;
