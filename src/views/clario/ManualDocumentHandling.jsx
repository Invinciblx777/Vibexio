"use client";

import React from 'react';
import CloseIcon from '../../components/icons/clario/CloseIcon.jsx';
import TickIcon from '../../components/icons/clario/TickIcon.jsx';
const ManualImg1 = "/images/clario/ManualImg1.webp";
const ManualImg2 = "/images/clario/ManualImg2.webp";

const ManualDocumentHandling = () => {
    const leftItems = [
        "Teams waste hours on manual typing",
        "Frequent human errors in data entry",
        "PDFs and scans trap critical data",
        "Compliance issues from bad records",
        "Costly manual workflows limit growth",
        "Hard to manage large data volumes",
        "Language diversity slows operations",
        "Paper chaos reduces productivity",
        "Delays in decision making",
        "Inefficient legacy systems",
    ];

    const rightItems = [
        "Process thousands of pages in minutes",
        "AI ensures near perfect text accuracy",
        "Extract structured data instantly",
        "Maintain clean, auditable documents",
        "Automate tasks, scale effortlessly",
        "Cloud OCR handles millions securely",
        "Recognizes 50+ languages, including Tamil",
        "Digitize and organize all documents",
        "Deliver insights in real time",
        "Integrate easily with ERP & CRM tools",
    ];

    return (
        <div className="w-full flex flex-col items-center py-8 lg:py-12">

            <h2 className="font-kollektif font-bold text-[20px] sm:text-[28px] lg:text-[32px] leading-[25px] tracking-[7%] text-black text-center mb-8 lg:mb-10 px-4">
                Manual Document Handling Slows You Down
            </h2>

            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-30 xl:gap-50 justify-center max-w-[1400px]">

                {/* LEFT SIDE - CHALLENGE */}
                <div className="relative flex flex-col lg:flex-row w-full xl:w-[450px]">
                    
                    {/* MOBILE TAB - Top */}
                    <div className="lg:hidden bg-[#BECCDD] rounded-t-[20px] rounded-b-none py-4 px-6 flex flex-row items-center justify-center gap-4 w-full mb-0">
                        <img src={ManualImg1} className="w-6 h-6 lg:w-[30px] lg:h-[30px]" alt="Challenge" />
                        <p className="font-avenir font-semibold md:font-bold text-[20px] lg:text-[24px] leading-[37px] tracking-[5%] text-black whitespace-nowrap">
                            Challenge
                        </p>
                    </div>

                    {/* LEFT CARD */}
                    <div className="w-full bg-white rounded-b-[20px] lg:rounded-[20px] p-6 sm:p-8 shadow-sm">
                        {leftItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 mb-4">
                                <CloseIcon width={20} height={20} />
                                <p className="font-avenir font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[24px] sm:leading-[26px] tracking-[5%] text-black">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex absolute -right-[50px] xl:-right-[60px] top-1/2 transform -translate-y-1/2 bg-[#BECCDD] rounded-r-[20px] rounded-l-none py-6 xl:py-8 px-3 xl:px-4 flex-col items-center justify-center gap-16 h-[80%] min-h-[350px] w-[50px] xl:w-[60px]">
                        <p className="font-avenir font-bold text-[20px] xl:text-[24px] leading-[37px] tracking-[5%] text-black -rotate-90 whitespace-nowrap">
                            Challenge
                        </p>
                        <img src={ManualImg1} className="w-[24px] h-[24px] xl:w-[30px] xl:h-[30px]" alt="Challenge" />
                    </div>
                </div>

                {/* RIGHT SIDE - SOLUTION */}
                <div className="relative flex flex-col lg:flex-row w-full xl:w-[450px]">
                    
                    {/* MOBILE TAB - Top */}
                    <div className="lg:hidden bg-white rounded-t-[20px] rounded-b-none py-4 px-6 flex flex-row items-center justify-center gap-4 w-full mb-0 shadow-sm">
                        <img src={ManualImg2} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" alt="Solution" />
                        <p className="font-avenir font-semibold md:font-bold text-[20px] lg:text-[24px] leading-[37px] tracking-[5%] text-black whitespace-nowrap">
                            Solution
                        </p>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="w-full bg-[#BECCDD] rounded-b-[20px] lg:rounded-[20px] p-6 sm:p-8 shadow-sm">
                        {rightItems.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 mb-4">
                                <TickIcon width={20} height={20} />
                                <p className="font-avenir font-normal text-[12px] md:text-[14px] xl:text-[16px] leading-[24px] sm:leading-[26px] tracking-[5%] text-[#2C4053]">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP TAB - Left Side */}
                    <div className="hidden lg:flex absolute -left-[50px] xl:-left-[60px] top-1/2 transform -translate-y-1/2 bg-white rounded-l-[20px] rounded-r-none py-6 xl:py-8 px-3 xl:px-4 flex-col items-center justify-center gap-16 h-[80%] min-h-[350px] w-[50px] xl:w-[60px]">
                        <p className="font-avenir font-bold text-[20px] xl:text-[24px] leading-[37px] tracking-[5%] text-black -rotate-90 whitespace-nowrap">
                            Solution
                        </p>
                        <img src={ManualImg2} className="w-[24px] h-[24px] xl:w-[30px] xl:h-[30px]" alt="Solution" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ManualDocumentHandling;