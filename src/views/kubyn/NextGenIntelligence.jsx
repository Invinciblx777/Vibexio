"use client";

import React from 'react';
const border2 = "/images/kubyn/KubynCta.webp";

const NextGenIntelligence = () => {
    return (
        <div className="w-full flex justify-center py-0 md:py-10 xl:py-12 pb-10">

            {/* Border Frame */}
            <div
                className="
                    w-full
                     md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1050px]
                    bg-no-repeat md:bg-contain bg-center
                    px-6 sm:px-10 md:px-14 lg:px-20
                    py-14 sm:py-16 text-center
                "
                style={{ backgroundImage: `url(${border2})` }}
            >

                {/* Heading */}
                <h2 className="md:px-30 lg:px-50 xl:px-70 font-kollektif font-semibold md:font-bold text-[16px] md:text-[20px] leading-[30px] tracking-[1px] uppercase text-black">
                    Be part of the next generation of
                    <span className="text-[#5B7C99]"> intelligence</span>
                </h2>

                {/* Sub text */}
                <p className="px-5 md:px-0 font-avenir font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] md:leading-[25px] tracking-[4%] capitalize text-[#5B7C99] max-w-[650px] mx-auto mt-4">
                    Join the waitlist for Kubyn, where awareness meets precision in personal finance.
                </p>

                <div className="flex flex-wrap gap-5 md:gap-10 mt-6 justify-center">
                    {/* First Button - Fixed hover */}
                    <button className="font-avenir font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[25px] tracking-[4%] capitalize text-[#F8F8F8] bg-[#60809C] hover:bg-[#42617E] hover:cursor-pointer rounded-[10px] w-[190px] h-11 sm:w-[200px] sm:h-[46px] md:w-[210px] md:h-12 lg:w-[220px] lg:h-[50px]">
                        Join Beta
                    </button>

                    {/* Second Button - Fixed hover */}
                    <button className="font-avenir font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[25px] tracking-[4%] capitalize text-[#000000] bg-[#869EB6] hover:bg-[#60809C] hover:cursor-pointer rounded-[10px] w-[190px] h-11 sm:w-[200px] sm:h-[46px] md:w-[210px] md:h-12 lg:w-[220px] lg:h-[50px] ">
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NextGenIntelligence;