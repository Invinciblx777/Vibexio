"use client";

import React from "react";
import Helmet from "@/components/common/Helmet";
import SEO from "../../components/common/SEO.jsx";

const img1 = "/images/ecosystem/C1.webp";
const img2 = "/images/ecosystem/C2.webp";
const img3 = "/images/ecosystem/C3.webp";
const img4 = "/images/ecosystem/C4.webp";
const img5 = "/images/ecosystem/C5.webp";
const img6 = "/images/ecosystem/C6.webp";
const img7 = "/images/ecosystem/C7.webp";
const img8 = "/images/ecosystem/C8.webp";
import HomeNoiseBackground from "../../components/icons/HomeNoiseBackground.jsx";

const LandingEcosystem = () => {
  return (
    <>
      {/* SEO META – PRODUCTS / ECOSYSTEM */}
      <SEO
        title="AI Products for Finance, Healthcare & Business"
        description="Explore Vibexio’s AI-powered products for healthcare, education, finance, and analytics—built in India, trusted globally."
        canonical="https://vibexio.ai/ecosystem"
      />

      {/* PAGE UI */}
      <div
        className="
          mt-20 border-[0.5px] border-[#5B7C9980] relative overflow-hidden
          h-[400px] xs:h-[450px] sm:h-[500px] md:h-[500px] lg:h-[560px] xl:h-[660px]
          flex flex-col items-center justify-center
          bg-linear-to-b from-[#BECCDD] to-[#869EB6]
        "
      >
        {/* Noise Background */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
          <HomeNoiseBackground className="w-full h-full" />
        </div>

        {/* Floating Ecosystem Images */}
        <div className="absolute inset-0 transform scale-84 md:scale-90 lg:scale-100 origin-center">
          <img src={img1} alt="AI ecosystem product 1" className="absolute top-5 md:top-10 lg:top-25 left-15 md:left-20 lg:left-[120px] xl:left-[200px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
          <img src={img2} alt="AI ecosystem product 2" className="absolute top-82 md:top-40 lg:top-50 xl:top-60 left-15 md:left-0 lg:left-16 xl:left-[150px] w-[70px] h-[70px] md:w-[105px] md:h-[105px] lg:w-[120px] lg:h-[120px] rounded-xl" />
          <img src={img3} alt="AI ecosystem product 3" className="absolute bottom-18 md:bottom-25 lg:bottom-30 xl:bottom-40 left-0 md:left-8 lg:left-[100px] xl:left-[280px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
          <img src={img4} alt="AI ecosystem product 4" className="absolute bottom-50 md:bottom-0 lg:bottom-[50px] left-0 sm:left-16 md:left-20 lg:left-[200px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
          <img src={img5} alt="AI ecosystem product 5" className="absolute top-32 md:top-10 lg:top-25 right-0 md:right-20 lg:right-[120px] xl:right-[200px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
          <img src={img6} alt="AI ecosystem product 6" className="absolute top-5 md:top-40 lg:top-50 xl:top-60 right-15 md:right-0 lg:right-18 xl:right-[150px] w-[70px] h-[70px] md:w-[105px] md:h-[105px] lg:w-[120px] lg:h-[120px] rounded-xl" />
          <img src={img7} alt="AI ecosystem product 7" className="absolute bottom-18 md:bottom-25 lg:bottom-30 xl:bottom-40 right-0 md:right-8 lg:right-[100px] xl:right-[280px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
          <img src={img8} alt="AI ecosystem product 8" className="absolute bottom-0 md:bottom-0 lg:bottom-[50px] right-15 md:right-20 lg:right-[200px] w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-xl" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-0 z-10 relative">
          <h2
            className="
              font-kollektif font-bold
              text-[22px] xs:text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[62px]
              leading-[110%] lg:leading-[120%]
              tracking-[7%] text-center text-black
              w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[640px]
              mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-0
            "
          >
            Our <span className="text-white">Intelligence</span>
            <br /> in Action
          </h2>

          <p
            className="
              font-normal italic
              text-[11px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
              leading-[18px] xs:leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] xl:leading-[43px]
              tracking-[0.5px] xs:tracking-[0.75px] sm:tracking-[1px]
              text-center text-black
              w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[480px] xl:max-w-[640px]
              lg:mt-8 xl:mt-10 mt-2 xs:mt-3 sm:mt-4
            "
          >
            Each Vibexio product is powered by the same foundation AI that learns,
            adapts, and delivers clarity across industries.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingEcosystem;
