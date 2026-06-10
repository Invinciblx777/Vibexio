"use client";

import React from 'react';
import DocumentIcon from '../../components/icons/clario/DocumentIcon.jsx';
import ArrowIcon from '../../components/icons/clario/ArrowIcon.jsx';
import SettingToolIcon from '../../components/icons/clario/SettingToolIcon.jsx';

const Ocr3Steps = () => {
    const steps = [
        {
            icon: (size) => <DocumentIcon width={size} height={size} />,
            title: "Upload Your Document",
            desc: "Drag, drop, or connect via API",
        },
        {
            icon: (size) => <SettingToolIcon width={size} height={size} />,
            title: "Processing & Extraction",
            desc: "AI extracts text, tables, and structure",
        },
        {
            icon: (size) => <ArrowIcon width={size} height={size} />,
            title: "Export or Integrate",
            desc: "Download or connect to ERP/CRM",
        },
    ];

    return (
        <div className="py-12 bg-[#BECCDD]">
            
            {/* Heading */}
            <h2 className="font-kollektif font-bold text-[20px] sm:text-[28px] lg:text-[32px] leading-[30px] tracking-[7%] text-black text-center px-20 md:px-0">
                Clario Makes OCR Effortless in 3 Steps
            </h2>

            {/* Steps Grid */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 justify-items-center">

                    {steps.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative w-full max-w-[350px] rounded-[10px] p-6 flex flex-col items-center text-center gap-4"
                        >

                            {/* Dotted Line Connectors */}
                            {index < steps.length - 1 && (
                                <>
                                    {/* Horizontal dotted line (lg and above) */}
                                    <div className="hidden md:block absolute top-1/2 -right-15 lg:-right-20 xl:-right-50 w-20 lg:w-30 xl:w-60 border-t-2 border-dotted border-gray-600 -translate-y-1/2"></div>

                                    {/* Vertical dotted line (mobile & tablet) */}
                                    <div className="md:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 w-px h-14 border-l-2 border-dotted border-gray-600"></div>
                                </>
                            )}

                            {/* Icon */}
                            <div className="bg-[#F8F8F8] w-[55px] h-[55px] md:w-[60px] md:h-[60px] rounded-[10px] flex items-center justify-center">
                                {item.icon(30)}
                            </div>

                            {/* Title */}
                            <h5 className="font-avenir font-semibold md:font-bold text-[15px] md:text-[16px] leading-5 tracking-[2%] text-black px-0 md:px-5 lg:px-0">
                                {item.title}
                            </h5>

                            {/* Description */}
                            <p className="font-avenir font-normal text-[12px] md:text-[13px] leading-[18px] tracking-[2%] text-black">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Ocr3Steps;
