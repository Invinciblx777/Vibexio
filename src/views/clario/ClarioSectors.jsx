"use client";

import React from 'react';

const data = [
    { title: "Finance", text: "Automate invoice, receipt, and report processing." },
    { title: "Healthcare", text: "Digitize patient records, prescriptions, and lab reports." },
    { title: "Legal", text: "Convert contracts, case files, and agreements into searchable text." },
    { title: "Education", text: "Scan and organize textbooks, notes, and research documents." },
    { title: "Enterprise & Government", text: "Manage records, forms, and compliance documents efficiently." }
];

const ClarioSectors = () => {
    return (
        <div className="w-full py-10 lg:py-14 flex flex-col lg:flex-row gap-10 xl:gap-16">

            {/* LEFT: Heading */}
            <div className="lg:w-[35%]">
                <h2 className="font-kollektif font-bold 
                               text-[20px] sm:text-[32px] md:text-[40px]
                               leading-[120%] tracking-[7%] text-black 
                               text-center lg:text-left">
                    <span className="text-[#5D7E9B]">Clario</span> Powers Efficiency Across Sectors
                </h2>
            </div>

            {/* RIGHT: Grid */}
            <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-8 items-stretch">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden border-t-3 border-[#5D7E9B] lg:pt-4 h-full min-h-40 flex flex-col"
                    >
                        <div className="absolute inset-0 bg-[#60809C] -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out rounded-b-[10px]"></div>

                        <div className="relative z-10 px-5 flex-grow flex flex-col justify-start">
                            <h2 className="font-avenir font-semibold md:font-bold text-[18px] sm:text-[20px] leading-[100%] tracking-[7%] text-black pt-5 group-hover:text-white">
                                {item.title}
                            </h2>

                            <p className="font-avenir font-normal text-[12px] sm:text-[14px] leading-[26px] tracking-[7%] text-black pt-5 group-hover:text-white">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClarioSectors;
