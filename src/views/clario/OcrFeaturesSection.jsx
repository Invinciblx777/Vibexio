"use client";

import React from 'react';
import MenuIcon from '../../components/icons/clario/MenuIcon.jsx';
import GlobeIcon from '../../components/icons/clario/GlobeIcon.jsx';
import ArrowIcon from '../../components/icons/clario/ArrowIcon.jsx';
import FlowIcon from '../../components/icons/clario/FlowIcon.jsx';
import ShieldLockIcon from '../../components/icons/clario/ShieldLockIcon.jsx';
import ClockFilterIcon from '../../components/icons/clario/ClockFilterIcon.jsx';

const OcrFeaturesSection = () => {

    const features = [
        {
            icon: (size) => <MenuIcon width={size} height={size} />,
            title: "High Accuracy Text Recognition",
            desc: "Extract text from scanned documents, PDFs, and images with precision."
        },
        {
            icon: (size) => <GlobeIcon width={size} height={size} />,
            title: "Multi Language & Handwriting Support",
            desc: "Supports Tamil, Kannada, Telugu, and over 50 other languages, including handwritten text."
        },
        {
            icon: (size) => <ArrowIcon width={size} height={size} />,
            title: "Smart Data Export & Integration",
            desc: "Export to Excel, CSV, JSON, or integrate directly with ERP, CRM, and BI systems."
        },
        {
            icon: (size) => <FlowIcon width={size} height={size} />,
            title: "AI Powered Data Structuring",
            desc: "Automatically categorize and organize extracted data for analysis and reporting."
        },
        {
            icon: (size) => <ShieldLockIcon width={size} height={size} />,
            title: "Secure & Scalable",
            desc: "Enterprise-grade security and cloud scalability for businesses of all sizes."
        },
        {
            icon: (size) => <ClockFilterIcon width={size} height={size} />,
            title: "Fast & Automated Workflow",
            desc: "Process thousands of pages in minutes, reducing operational bottlenecks."
        },
    ];

    return (
        <div className="py-12">
            
            {/* Heading */}
            <h2 className="font-kollektif font-bold text-[20px] sm:text-[28px] lg:text-[32px] leading-[25px] tracking-[7%] text-black text-center">
                Powerful OCR Features Built for Enterprises
            </h2>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 xl:mt-20 justify-items-center">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#BECCDD] hover:bg-white group rounded-[10px] p-5 w-full max-w-[400px] h-auto min-h-60 flex flex-col gap-4 justify-center hover:shadow-[0px_0px_11px_0px_#BECCDD] transition-all duration-300"
                    >
                        {/* Icon box */}
                        <div className="bg-[#F8F8F8] group-hover:bg-[#CED6DB] w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] rounded-[10px] flex items-center justify-center">
                            {item.icon(35)}
                        </div>

                        {/* Title */}
                        <h5 className="font-avenir font-semibold md:font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-5 tracking-[5%] text-black">
                            {item.title}
                        </h5>

                        {/* Description */}
                        <p className="font-avenir font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-5 sm:leading-[22px] md:leading-[23px] tracking-[5%] text-black">
                            {item.desc}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default OcrFeaturesSection;
