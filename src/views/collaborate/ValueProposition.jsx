"use client";

import React from 'react';
const img1 = "/images/collaborate/Img1.webp";

const ValueProposition = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 xl:gap-20 w-full mt-10 lg:mt-0 xl:mt-10">

            {/* Left Section – Text */}
            <div className="flex-1 max-w-full">
                <h5 className="font-kollektif font-bold 
                    text-[26px] sm:text-[28px] md:text-[32px] 
                    leading-[100%] tracking-[7%] text-black mb-6 sm:mb-8 md:mb-10">

                    Value
                    <span className="font-kollektif font-bold 
                        text-[26px] sm:text-[28px] md:text-[32px] 
                        leading-[100%] tracking-[7%] text-[#5B7C99] ml-2 sm:ml-3">
                        Proposition
                    </span>
                </h5>

                {/* Responsive line */}
                <div className="w-full max-w-[500px] h-[1px] border border-[#000000] opacity-100" />

                <p className="font-kollektif font-normal 
                    text-[14px] sm:text-[15px] md:text-[16px] 
                    leading-8 sm:leading-9 md:leading-10 
                    tracking-[5%] text-black 
                    mt-6 sm:mt-8 md:mt-12">

                    We partner with businesses to co create smart, future ready systems from AI automation and enterprise workflows to high performance chatbots that enhance customer experience.
                </p>

                <p className="font-kollektif font-normal  text-[14px] sm:text-[15px] md:text-[16px]  leading-8 md:leading-10  tracking-[5%] text-black mt-4 sm:mt-5 md:mt-6">
                    With strategic guidance from mentors, our collaboration model blends innovation with operational clarity.
                </p>
            </div>

            {/* Right Section – Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
                <img
                    src={img1}
                    alt=""
                    className="w-full max-w-[350px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] h-auto"
                />
            </div>

        </div>
    );
}

export default ValueProposition;
