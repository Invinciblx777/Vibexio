"use client";

import React from "react";
const CenterImage = "/images/clario/WhyClario.webp";

const WhyClario = () => {
    return (
        <div className="w-full py-6 lg:py-10 relative overflow-hidden">

            {/* Heading */}
            <h2 className="font-kollektif font-bold text-[20px] md:text-[32px] leading-[100%] tracking-[7%] text-black text-center">
                Why Clario?
            </h2>

            <h3 className="font-kollektif font-semibold md:font-bold text-[18px] md:text-[24px] leading-[100%] tracking-[7%] text-black text-center mt-4 lg:mt-6">
                Stop Manual Data Entry. Start Automating
            </h3>

            <div className="hidden lg:block">
                {/* Desktop Layout (xl and lg) - EXACTLY AS PROVIDED */}
                <div className="relative w-full mt-16 flex justify-center xl:gap-5 items-center">
                    {/* Left side features */}
                    <div className="flex flex-col gap-14 xl:gap-17 items-end mr-10">
                        <div className="font-avenir font-semibold text-[16px] leading-5 tracking-[0.07em] text-center text-white bg-[#5D7E9B] px-6 py-3 w-[280px] xl:w-[300px] rounded-[20px] shadow-[0px_10px_0px_rgba(0,0,0,0.15)] select-none"
                            style={{ transform: "perspective(600px) rotateX(30deg) rotateY(-10deg) rotateZ(10deg)" }}>
                            Process thousands of pages in minutes.
                        </div>

                        <div className="px-10 font-avenir font-semibold text-[16px] leading-5 tracking-[7%] text-center text-white bg-[#5D7E9B] p-4 w-[270px] xl:w-[300px] opacity-100 rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none"
                            style={{ transform: "perspective(600px) rotateX(20deg) rotateY(10deg) rotateZ(-10deg)" }}>
                            AI ensures near-perfect accuracy.
                        </div>
                        <div className="font-avenir font-semibold text-[16px] leading-5 tracking-[7%] text-center text-white bg-[#5D7E9B] p-4 w-[270px] xl:w-[300px] opacity-100 rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none"
                            style={{ transform: "perspective(600px) rotateX(20deg) rotateY(10deg) rotateZ(-20deg)" }}>
                            Cloud architecture grows with your data needs.
                        </div>
                    </div>

                    <div className="w-[250px] xl:w-[500px] h-[150px] xl:h-[230px]">
                        <img src={CenterImage} alt="PDF to Excel" className="w-full h-full bg-contain" />
                    </div>

                    <div className="flex flex-col gap-14 xl:gap-17 items-start ml-10">
                        <div className="font-avenir font-semibold text-[16px] leading-5 tracking-[7%] text-center text-white bg-[#5D7E9B] p-4 w-[270px] xl:w-[300px] opacity-100 rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none"
                            style={{ transform: "perspective(600px) rotateX(30deg) rotateY(10deg) rotateZ(-10deg)" }}>
                            Automatically categorize and structure data.
                        </div>
                        <div className="font-avenir font-semibold text-[16px] leading-5 tracking-[7%] text-center text-white bg-[#5D7E9B] p-4 w-[270px] xl:w-[300px] opacity-100 rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none"
                            style={{ transform: "perspective(600px) rotateX(20deg) rotateY(-10deg) rotateZ(10deg)" }}>
                            Maintain consistent, auditable records.
                        </div>
                        <div className="font-avenir font-semibold text-[16px] leading-5 tracking-[7%] text-center text-white bg-[#5D7E9B] p-4 w-[270px] xl:w-[300px] opacity-100 rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none"
                            style={{ transform: "perspective(600px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)" }}>
                            Gain real time insights with centralized dashboards.
                        </div>
                    </div>
                </div>
            </div>

            {/* Tablet Layout (md) */}
            <div className="hidden md:block lg:hidden w-full mt-12">
                {/* First Row - 2 cards */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[0.07em] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_10px_0px_rgba(0,0,0,0.15)] select-none">
                        Process thousands of pages in minutes.
                    </div>
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        AI ensures near-perfect accuracy.
                    </div>
                </div>

                {/* Second Row - 1 centered card */}
                <div className="flex justify-center mb-6">
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Cloud architecture grows with your data needs.
                    </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center mb-6">
                    <div className="w-[400px] h-[180px]">
                        <img src={CenterImage} alt="PDF to Excel" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Fourth Row - 2 cards */}
                <div className="flex justify-center gap-6 mb-6">
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Automatically categorize and structure data.
                    </div>
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Maintain consistent, auditable records.
                    </div>
                </div>

                {/* Fifth Row - 1 centered card */}
                <div className="flex justify-center">
                    <div className="font-avenir font-semibold text-[15px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[250px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Gain real time insights with centralized dashboards.
                    </div>
                </div>
            </div>

            {/* Mobile Layout (sm and below) */}
            <div className="md:hidden w-full mt-8">
                {/* Center Image */}
                <div className="flex justify-center mb-8">
                    <div className="w-[300px] h-[150px]">
                        <img src={CenterImage} alt="PDF to Excel" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* All cards in single column */}
                <div className="flex flex-col items-center gap-4">
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[0.07em] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_10px_0px_rgba(0,0,0,0.15)] select-none">
                        Process thousands of pages in minutes.
                    </div>
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        AI ensures near-perfect accuracy.
                    </div>
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Cloud architecture grows with your data needs.
                    </div>
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Automatically categorize and structure data.
                    </div>
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Maintain consistent, auditable records.
                    </div>
                    <div className="font-avenir font-semibold text-[14px] leading-[1.2] tracking-[7%] text-center text-white bg-[#5D7E9B] px-4 py-3 w-[280px] h-[60px] flex items-center justify-center rounded-[20px] shadow-[0px_8px_0px_0px_#00000026] select-none">
                        Gain real time insights with centralized dashboards.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyClario;