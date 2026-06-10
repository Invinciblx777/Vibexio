"use client";

import React from 'react';
const ManualImg1 = "/images/clario/ManualImg1.webp";
const ManualImg2 = "/images/clario/ManualImg2.webp";
import ArrowPath from '../../components/icons/itsolutions/ArrowPath.jsx';

const DigitalChallenges = () => {

    const challenges = [
        "Legacy technology limits growth.",
        "User engagement remains low.",
        "Manual workflows slow delivery.",
        "Scattered online presence."
    ];

    const solutions = [
        "Modernize with cloud native architecture.",
        "Redesign with UX driven interfaces.",
        "Automate operations using intelligent systems.",
        "Create a unified, brand consistent ecosystem."
    ];

    return (
        <div className="relative w-full">

            <h2 className="pt-10 lg:pt-15 font-kollektif font-semibold md:font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight tracking-[0.07em] text-black text-center mb-8 sm:mb-12">
                Turning Digital Challenges into{" "}
                <span className="text-[#5B7C99]"> Scalable Solutions</span>
            </h2>

            {/* FLEX instead of GRID */}
            <div className="flex flex-col md:flex-row justify-center gap-[20px] lg:gap-0">

                {/* --- MOBILE VIEW (md below) → Pair Challenge + Solution --- */}
                <div className="flex md:hidden flex-col gap-5">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="flex flex-col gap-5 items-center">

                            {/* Challenge Box */}
                            <div
                                className="p-5 lg:p-6 xl:p-10 w-full max-w-[452px] min-h-[142px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] shadow-[0px_0px_6px_0px_#00000040] bg-white"
                            >
                                <div className="flex justify-between items-center">
                                    <img src={ManualImg1} alt="challenge" className="w-[30px] h-[30px]" />
                                    <button className="font-avenir font-extrabold text-[12px] tracking-[0.05em] text-[#F7F7F9] bg-[#41617E] w-[105px] h-[32px] rounded-[20px] flex items-center justify-center">
                                        Challenge
                                    </button>
                                </div>
                                <p className="pt-4 sm:pt-5 font-avenir text-[14px] lg:text-[16px] leading-[26px] text-black">
                                    {challenge}
                                </p>
                            </div>

                            {/* Solution Box */}
                            <div
                                className="p-5 lg:p-6 xl:p-10 w-full max-w-[452px] min-h-[142px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] bg-[#BECCDD]"
                            >
                                <div className="flex justify-between items-center">
                                    <img src={ManualImg2} alt="solution" className="w-[30px] h-[30px]" />
                                    <button className="font-avenir font-extrabold text-[12px] tracking-[0.05em] text-[#41617E] bg-white w-[105px] h-[32px] rounded-[20px] flex items-center justify-center">
                                        Solution
                                    </button>
                                </div>
                                <p className="pt-4 sm:pt-5 font-avenir text-[14px] lg:text-[16px] leading-[26px] text-black">
                                    {solutions[index]}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* --- DESKTOP VIEW (md and above) — ORIGINAL LAYOUT --- */}
                <div className="hidden md:flex justify-center gap-[20px] lg:gap-0 w-full">

                    {/* LEFT COLUMN */}
                    <div className="space-y-5 lg:space-y-10 w-full flex flex-col items-center md:items-end">
                        {challenges.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 lg:p-6 xl:p-10 w-full max-w-[452px] min-h-[142px] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] shadow-[0px_0px_6px_0px_#00000040] bg-white"
                            >
                                <div className="flex justify-between items-center">
                                    <img src={ManualImg1} alt="challenge" className="w-[30px] h-[30px]" />
                                    <button className="font-avenir font-extrabold text-[12px] tracking-[0.05em] text-[#F7F7F9] bg-[#41617E] w-[105px] h-[32px] rounded-[20px] flex items-center justify-center">
                                        Challenge
                                    </button>
                                </div>
                                <p className="pt-4 sm:pt-5 font-avenir text-[14px] lg:text-[16px] leading-[26px] text-black">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ARROWS */}
                    <div className='hidden lg:block'>
                        <div className='space-y-10 flex flex-col items-center pt-20 min-[1105px]:max-[1280px]:pt-18 xl:pt-25'>
                            <div className='min-h-[142px] flex items-end'><ArrowPath /></div>
                            <div className='min-h-[140px] xl:min-h-[155px] flex items-end'><ArrowPath /></div>
                            <div className='min-h-[150px] xl:min-h-[160px] flex items-end'><ArrowPath /></div>
                            <div className='min-h-[145px] xl:min-h-[155px] flex items-end'><ArrowPath /></div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-5 lg:space-y-10 w-full flex flex-col items-center md:items-start lg:pt-15 xl:pt-20">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 lg:p-6 xl:p-10 w-full max-w-[452px] min-h-[142px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] bg-[#BECCDD]"
                            >
                                <div className="flex justify-between items-center">
                                    <img src={ManualImg2} alt="solution" className="w-[30px] h-[30px]" />
                                    <button className="font-avenir font-extrabold text-[12px] tracking-[0.05em] text-[#41617E] bg-white w-[105px] h-[32px] rounded-[20px] flex items-center justify-center">
                                        Solution
                                    </button>
                                </div>
                                <p className="pt-4 sm:pt-5 font-avenir text-[14px] lg:text-[16px] leading-[26px] text-black">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DigitalChallenges;
