"use client";

import React from 'react';
const border2 = "/images/clario/border2.webp";
import Link from "next/link";

const AIDigitalCombo = () => {
    return (
        <div className="w-full flex justify-center py-0 md:py-10 xl:py-12 pt-5">

            {/* Border Frame */}
            <div
                className="
                    w-full
                    max-w-[320px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1050px]
                    bg-no-repeat  bg-hidden md:bg-contain bg-center
                    px-6 sm:px-10 md:px-14 lg:px-20
                    py-14 sm:py-16 text-center
                "
                style={{ backgroundImage: `url(${border2})` }}
            >

                {/* Heading */}
                <h2 className="font-kollektif font-semibold md:font-bold text-[16px] md:text-[20px] leading-[30px] tracking-[10%] uppercase text-black">
                    Looking to Combine AI & Digital?
                </h2>

                {/* Sub text */}
                <p className="px-5 md:px-0 font-avenir font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] md:leading-[25px] tracking-[4%] capitalize text-[#5B7C99] max-w-[650px] mx-auto mt-4">
                    Build hybrid ecosystems with Vibexio’s unified AI + IT architecture.
                </p>

                {/* CTA Button */}
                <Link href="/collaborate">
                    <button className="mt-6 font-avenir font-semibold text-[14px] sm:text-[15px] lg:text-[16px] leading-[25px] tracking-[4%] text-[#F8F8F8] bg-[#60809C] hover:bg-[#42617E] rounded-[10px] w-[190px] h-11 sm:w-[200px] sm:h-[46px] md:w-[210px] md:h-12 lg:w-[220px] lg:h-[50px] transition-all duration-300 hover:cursor-pointer">
                        Request a Consultation
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default AIDigitalCombo;
