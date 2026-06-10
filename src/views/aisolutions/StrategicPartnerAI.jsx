"use client";

import React from "react";
const logo = "/images/pathways/logo.webp";
const bg = "/images/pathways/bg.webp";
const bg2 = "/images/pathways/bg2.webp";
import SVGArrowIcon1 from "../../components/icons/itsolutions/SVGArrowIcon1.jsx";
import SVGArrowIcon5 from "../../components/icons/itsolutions/SVGArrowIcon5.jsx";
import SVGArrowIcon3 from "../../components/icons/itsolutions/SVGArrowIcon3.jsx";
import SVGArrowIcon4 from "../../components/icons/itsolutions/SVGArrowIcon4.jsx";
import SVGArrowIcon2 from "../../components/icons/itsolutions/SVGArrowIcon2.jsx";

const StrategicPartnerAI = () => {
    return (
        <div className="w-full flex flex-col items-center relative">

            {/* Heading */}
            <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold tracking-[0.05em] text-center mb-8 md:mb-10 xl:mb-16">
                Your Strategic Partner in <span className="text-[#5B7C99]">AI Evolution</span>
            </h1>

            {/* Desktop Layout (lg and above) */}
            <div className="hidden lg:flex relative w-full max-w-[1200px] justify-between items-center">

                {/* LEFT CARDS */}
                <div className="flex flex-col gap-5 xl:gap-12 mt-6">

                    {/* CARD 1 + ICON (SVGArrowIcon) */}
                    <div className="relative">
                        <SVGArrowIcon4 className="absolute z-0 -right-15 xl:-right-23 bottom-5 xl:bottom-0 translate-y-1/2 w-20 xl:w-[105px] h-[141px]" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] py-4 ml-10 relative z-10"
                            >
                                <p className="font-semibold text-[#ffff] text-[16px]  tracking-[0.03em] text-center ml-5 px-10">
                                    Global experience,<br /> local innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 + ICON (SVGArrowIcon5) */}
                    <div className="relative">
                        <SVGArrowIcon5 className="absolute -right-10 xl:-right-23 top-10 xl:top-[50%] -translate-y-1/2 w-[100px] xl:w-[144px] h-[13px]" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] px-6 py-4"
                            >
                                <p className="font-semibold text-[#ffff] text-[16px] tracking-[0.03em] ml-10 text-center">
                                    Enterprise grade data security and scalability.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 + ICON (SVGArrowIcon) */}
                    <div className="relative">
                        <SVGArrowIcon3 className="absolute -right-15 xl:-right-27 top-0 -translate-y-1/2 w-20 xl:w-[120px] h-[141px]" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] px-0 xl:px-10 py-4 ml-10"
                            >
                                <p className="font-semibold text-[#ffff] text-[16px] tracking-[0.03em] text-center ml-10 xl:ml-5 px-5 xl:px-0">
                                    Flexible models for startups, SMEs, and enterprises
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CENTER LOGO */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[50%] -translate-y-[55%] z-10">
                    <div className="w-[130px] xl:w-[200px] h-[130px] xl:h-[200px] bg-[#BECCDD] rounded-full flex justify-center items-center shadow-[0_0_12px_0_#00000040]">
                        <div className="w-[80px] xl:w-[100px] h-[80px] xl:h-[100px] bg-white rounded-full shadow-[0_0_8px_0_#00000040] flex justify-center items-center">
                            <img src={logo} className="w-[40px] xl:w-[48px] h-[40px] xl:h-[48px] mt-4" alt="v-logo" />
                        </div>
                    </div>
                </div>

                {/* RIGHT CARDS */}
                <div className="flex flex-col gap-5 xl:gap-12 mt-6">

                    {/* CARD 4 + ICON (SVGArrowIcon3) */}
                    <div className="relative">
                        <SVGArrowIcon2 className="absolute -left-25 xl:-left-34 bottom-5 xl:bottom-0 translate-y-1/2 w-20 xl:w-[105px] h-[141px] z-0" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] px-0 xl:px-10 py-4 -ml-10"
                            >
                                <p className="font-semibold text-[#ffff] text-[16px] tracking-[0.03em] text-center mr-10">
                                    AI consulting, design, and implementation under one roof.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 5 + ICON (SVGArrowIcon5) */}
                    <div className="relative">
                        <SVGArrowIcon5 className="absolute -left-20 xl:-left-34 top-10 xl:top-[50%] -translate-y-1/2 w-[100px] xl:w-[140px] h-[13px]" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] px-6 py-4"
                            >
                                <p className="font-semibold text-[#ffff] text-[16px] text-center tracking-[0.03em] mr-10">
                                    Long term partnership with measurable ROI
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 6 + ICON (SVGArrowIcon4) */}
                    <div className="relative">
                        <SVGArrowIcon1 className="absolute -left-24 xl:-left-38 top-0 -translate-y-1/2 w-20 xl:w-[120px] h-[141px]" />

                        <div className="relative z-20">
                            <div
                                style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                                className="w-[300px] xl:w-[370px] min-h-[100px] px-3 xl:px-8 py-4 -ml-10"
                            >
                                <p className="font-semibold text-[#ffff] text-[14px] leading-[23px] tracking-[0.07em] text-center mr-10">
                                    Seamless integration with existing systems and workflows
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Medium Layout (md to lg) - Grid layout */}
            <div className="hidden md:flex lg:hidden w-full max-w-[900px] flex-col items-center">

                {/* Top row: Card 1 and Card 2 */}
                <div className="flex justify-between w-full mb-3">
                    {/* Card 1 */}
                    <div className="relative">
                        <div
                            style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                            className="w-[280px] min-h-[90px] pb-6 flex items-center justify-center"
                        >
                            <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pl-18 px-6">
                                Global experience, <br />local innovation.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative">
                        <div
                            style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                            className="w-[280px] min-h-[90px] pb-6 flex items-center justify-center"
                        >
                            <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-18 px-10">
                                Enterprise grade data security and scalability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 (centered) */}
                <div className="relative mb-8">
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                        className="w-[300px] min-h-[90px] pb-5 flex items-center justify-center mx-auto"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-5 px-14">
                            Flexible models for startups, SMEs, and enterprises
                        </p>
                    </div>
                </div>

                <div className="w-[160px] h-[160px] bg-[#BECCDD] rounded-full flex justify-center items-center shadow-[0_0_12px_0_#00000040]">
                    <div className="w-[80px] h-[80px] bg-white rounded-full shadow-[0_0_8px_0_#00000040] flex justify-center items-center">
                        <img src={logo} className="w-[40px] h-[40px] mt-2" alt="v-logo" />
                    </div>
                </div>

                {/* Card 4 (centered) */}
                <div className="relative mt-8 mb-3">
                    <div
                        style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                        className="w-[300px] min-h-[90px] pb-4 flex items-center justify-center mx-auto"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-15 px-6">
                            AI consulting, design, and implementation under one roof.
                        </p>
                    </div>
                </div>

                {/* Bottom row: Card 5 and Card 6 */}
                <div className="flex justify-between w-full mt-3">
                    {/* Card 5 */}
                    <div className="relative">
                        <div
                            style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                            className="w-[280px] min-h-[90px] pb-5 flex items-center justify-center"
                        >
                            <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pl-20 px-10">
                                Long term partnership with measurable ROI
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="relative">
                        <div
                            style={{ backgroundImage: `url(${bg2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
                            className="w-[280px] min-h-[90px] pb-5 flex items-center justify-center"
                        >
                            <p className="font-semibold text-[#ffff] text-[13px] leading-[20px] tracking-[0.05em] text-center pr-10 px-5">
                                Seamless integration with existing systems and workflows
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Layout (below md) */}
            <div className="flex md:hidden w-full max-w-[500px] flex-col items-center">

                {/* Center Logo - Mobile */}
                <div className="mb-10">
                    <div className="w-[140px] h-[140px] bg-[#BECCDD] rounded-full flex justify-center items-center shadow-[0_0_12px_0_#00000040]">
                        <div className="w-[70px] h-[70px] bg-white rounded-full shadow-[0_0_8px_0_#00000040] flex justify-center items-center">
                            <img src={logo} className="w-[35px] h-[35px] mt-1" alt="v-logo" />
                        </div>
                    </div>
                </div>

                {/* All cards in single column */}
                <div className="flex flex-col gap-3 w-full justify-center items-center">
                    {/* Card 1 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-4 px-10">
                            Global experience, <br /> local innovation.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-5 px-15">
                            Enterprise grade data <br /> security and scalability.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center  pr-5 px-15">
                            Flexible models for startups, <br /> SMEs, and enterprises
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-5 px-15">
                            AI consulting, design, and <br /> implementation under one roof.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[14px] tracking-[0.03em] text-center pr-5 px-15">
                            Long term partnership <br /> with measurable ROI
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div
                        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'center' }}
                        className="w-full min-h-[80px] pb-4 flex items-center justify-center"
                    >
                        <p className="font-semibold text-[#ffff] text-[13px] leading-[20px] tracking-[0.05em] text-center pr-5 px-15">
                            Seamless integration with <br /> existing systems and workflows
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default StrategicPartnerAI;