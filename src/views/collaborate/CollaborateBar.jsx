"use client";

import React from 'react';
import MailIcon from '../../components/icons/MailIcon.jsx';
import GlobeIcon from '../../components/icons/GlobeIcon.jsx';

const CollaborateBar = () => {
    return (
        <div className="w-full rounded-3xl mt-20 
        bg-[linear-gradient(-60deg,#BECCDD_-6.25%,#5B7C99_55.82%)]
        px-6 py-10 sm:px-10 lg:px-20 lg:py-14">

            {/* Heading */}
            <h2 className="font-kollektif font-bold text-[24px] sm:text-[28px] lg:text-[32px]
                leading-[130%] tracking-[7%] text-white text-center ">
                Let’s unlock intelligent growth together.
            </h2>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-20 gap-2 mt-5 md:mt-10">

                {/* Left */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <MailIcon />
                    <h3 className="font-kollektif font-normal text-[18px] sm:text-[20px] 
                        leading-10 tracking-[5%] text-white">
                        sales@vibexio.ai
                    </h3>
                </div>

                <div className="hidden sm:block h-10 w-px bg-white opacity-60"></div>

                {/* Right */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <GlobeIcon />
                    <h3 className="font-kollektif font-normal text-[18px] sm:text-[20px]
                        leading-10 tracking-[5%] text-white">
                        vibexio.ai
                    </h3>
                </div>

            </div>
       </div>
    );
}

export default CollaborateBar;
