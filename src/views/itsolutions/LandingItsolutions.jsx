"use client";

import React from 'react';
import SEO from "../../components/common/SEO.jsx";
const img1 = "/images/aisolution/AiSoln1.webp";
const img2 = "/images/aisolution/AiSoln2.webp";
const img3 = "/images/aisolution/AiSoln3.webp";
const img4 = "/images/aisolution/AiSoln4.webp";
const img5 = "/images/aisolution/AiSoln5.webp";
const img6 = "/images/aisolution/AiSoln6.webp";
import CurveIcon from '../../components/icons/CurveIcon.jsx';
import Link from "next/link";
import HomeNoiseBackground from '../../components/icons/HomeNoiseBackground.jsx';

const LandingItsolutions = () => {
    return (
        <>
            <SEO
                title="Custom Software & IT Solutions"
                description="From concept to code, Vibexio builds seamless digital experiences web, mobile, and software systems engineered for real world impact."
                canonical="https://vibexio.ai/itsolutions"
            />
            <div className="mt-20 bg-[#BECCDD] border-[0.5px] border-[#5B7C9980] relative overflow-hidden 
                h-[420px] xs:h-[450px] sm:h-[500px] md:h-[500px] lg:h-[560px] xl:h-[650px] 
                flex flex-col items-center justify-center bg-linear-to-b from-[#BECCDD] to-[#869EB6]">

                <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
                    <HomeNoiseBackground className="w-full h-full" />
                </div>

                <div className="absolute inset-0 transform scale-90 md:scale-90 lg:scale-100 origin-center">
                    {/* Top Left Images */}
                    <img src={img1} className="absolute top-0 md:top-10 lg:top-25 left-10 md:left-20 lg:left-[120px] xl:left-[200px] 
                        w-[70px] h-[70px]  md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px] rounded-xl" />

                    <img src={img2} className="absolute top-48 md:top-54 lg:top-60 xl:top-70 -left-1 md:left-0 lg:left-14 xl:left-[100px] 
                    w-[70px] h-[70px]  md:w-[105px] md:h-[105px] lg:w-[120px] lg:h-[120px] rounded-xl" />

                    <img src={img3} className="absolute bottom-0 md:bottom-0 lg:bottom-[50px] left-10 md:left-20 lg:left-[120px] xl:left-[200px] 
                    w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px] rounded-xl" />

                    {/* Top Right Images */}
                    <img src={img4} className="absolute top-48 md:top-10 lg:top-25 -right-1 md:right-20 lg:right-[120px] xl:right-[200px] 
                    w-[70px] h-[70px]  md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px] rounded-xl" />

                    <img src={img5} className="absolute top-0 md:top-54 lg:top-60 xl:top-70 right-10 md:right-0 lg:right-14 xl:right-[100px] 
                    w-[70px] h-[70px]  md:w-[105px] md:h-[105px] lg:w-[120px] lg:h-[120px] rounded-xl" />
                    <img src={img6} className="absolute bottom-0 md:bottom-0 lg:bottom-[50px] right-10 md:right-20 lg:right-[120px] xl:right-[200px] 
                    w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[90px] lg:h-[90px] rounded-xl" />
                </div>

                {/* Center Content with enhanced mobile responsiveness */}
                <div className="flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 lg:px-0 z-10 relative">
                    <h2 className="font-kollektif font-bold 
                    text-[22px] xs:text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[62px] 
                    leading-[30px] md:leading-[130%] 
                    tracking-[7%] text-center text-black 
                    w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[640px]
                    mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-0">
                        Design. Develop. <span className="text-white">Transform </span> <br />
                    </h2>

                    <p className="font-normal italic 
                    text-[11px] xs:text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                    leading-[18px] xs:leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px] xl:leading-[43px] 
                    tracking-[0.5px] xs:tracking-[0.75px] sm:tracking-[1px] text-center text-black 
                    w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[480px] xl:max-w-[640px] 
                    lg:mt-8 xl:mt-10 mt-2 xs:mt-3 sm:mt-4">
                        From concept to code, Vibexio builds seamless digital experiences web, mobile, and software systems engineered for real world impact.
                    </p>
                    <Link href="/collaborate">
                        <button className="group mt-4 md:mt-7 lg:mt-8 bg-[#F8F8F8] rounded-[30px] flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3.5 mx-auto lg:mx-0 hover:bg-[#121212] hover:cursor-pointer">
                            <span className="font-avenir font-semibold text-[13px] sm:text-[15px] text-gray-800 group-hover:text-[#F8F8F8] ">
                                Book a Free Consultation
                            </span>
                            <CurveIcon width={18} height={18} className="text-gray-800 group-hover:text-[#F8F8F8]" />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LandingItsolutions;