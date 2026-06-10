"use client";

import React from "react";
import Helmet from "@/components/common/Helmet";
import SEO from "../../components/common/SEO.jsx";

const img2 = "/images/kubyn/Landingkubyn.webp";
const bgImg = "/images/collaborate/BlueBg2.webp";
const ios = "/images/ecosystem/Ios.webp";
const playstore = "/images/ecosystem/PlayStore.webp";

const LandingKubyn = () => {
  const openPlayStore = () => {
    // 🔁 Replace with YOUR app Play Store link
    window.open(
      "https://play.google.com/store/apps/details?id=com.kubyntool&pcampaignid=web_share",
      "_blank",
    );
  };
  return (
    <>
      {/* SEO META – KUBYN PRODUCT */}
      <SEO
        title="Kubyn | AI Personal Finance & Risk Intelligence"
        description="Kubyn is an AI-powered finance intelligence platform by Vibexio, helping individuals and SMEs plan smarter, manage risk, and gain actionable financial insights."
        canonical="https://vibexio.ai/kubyn"
      />

      {/* PAGE UI */}
      <div
        className="w-full lg:h-[520px] xl:h-[620px] lg:bg-contain bg-no-repeat bg-top relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Content Container */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-10 lg:gap-0">
          {/* LEFT TEXT CONTENT */}
          <div className="w-full px-4 sm:px-10 md:px-16 xl:px-20 pt-10 md:pt-10 lg:pt-0 flex flex-col text-center lg:text-start">
            <div>
              <h5 className="font-kollektif font-bold text-[28px] md:text-[52px] lg:text-[43px] xl:text-[58px] leading-[1.05] tracking-[0.07em] text-black">
                Plan{" "}
                <span className="text-white inline-block mt-2">Smarter.</span>
                <br />
                Spend{" "}
                <span className="text-white inline-block mt-2">Wiser.</span>
              </h5>

              <p className="mt-5 md:mt-8 font-avenir font-semibold italic text-[15px] xl:text-[18px] leading-5 xl:leading-8 tracking-[6%] text-[#000000]">
                Kubyn empowers individuals and SMEs to master money
                intelligently using AI-driven cash planning and adaptive
                behavioral insights.
              </p>

              <div className="flex items-center gap-4 mt-5 md:mt-8 justify-center lg:justify-start pl-0 lg:pl-5 xl:pl-0">
                <img
                  onClick={openPlayStore}
                  src={playstore}
                  alt="Kubyn on Google Play Store"
                  className="w-[120px] lg:w-[135px] h-[45px] lg:h-[50px] object-contain cursor-pointer"
                />
                <img
                  src={ios}
                  alt="Kubyn on Apple App Store"
                  className="w-[110px] lg:w-[120px] h-[45px] lg:h-[50px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE CONTENT */}
          <div className="w-full flex justify-center items-center">
            <div className="relative">
              <img
                src={img2}
                alt="Kubyn AI-powered personal finance and risk intelligence dashboard"
                className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[400px] xl:max-w-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingKubyn;
