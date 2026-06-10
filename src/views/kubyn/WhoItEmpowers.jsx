"use client";

import React from 'react';
const Empowers = "/images/kubyn/Empowers.webp";

const WhoItEmpowers = () => {
    return (
        <div className="w-full py-8 md:py-12 lg:py-16">
            {/* Section Title */}
            <h2 className="font-kollektif font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-center mb-8 md:mb-12 lg:mb-16 tracking-wider">
                Who It Empowers
            </h2>

            {/* Content Container */}
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-10">

                {/* Left Side - Feature Cards */}
                <div className="flex-1 space-y-10 lg:space-y-12 xl:space-y-16 w-full relative">
                    <div className="flex flex-col-reverse md:flex-row xl:flex-row-reverse md:items-start gap-4 lg:gap-6 w-full lg:w-2/3">
                        <div className="flex-1 border-l-2 border-[#0F0F0F] pl-3 lg:pl-4 lg:order-1 xl:order-2">
                            <h5 className="font-avenir font-semibold md:font-bold text-base sm:text-lg lg:text-xl xl:text-xl mb-1 lg:mb-2 tracking-wider">
                                Smarter Money Moves, Made Effortless
                            </h5>
                            <p className="font-avenir font-semibold text-gray-700 leading-relaxed tracking-wide text-sm lg:text-base pr-4 lg:pr-10">
                                Bring structure without rigidity. Kubyn plans dynamically so your spending aligns with your goals.
                            </p>
                        </div>
                        <div className="font-kollektif font-bold text-2xl lg:text-3xl xl:text-4xl text-gray-800 lg:order-2 xl:order-1 text-center">01</div>
                    </div>

                    {/* Feature 2 - Aligned to center */}
                    <div className="flex flex-col-reverse md:flex-row xl:flex-row-reverse md:items-start gap-4 lg:gap-6 w-full lg:w-2/3 lg:mx-auto">
                        <div className="flex-1 border-l-2 border-[#0F0F0F] pl-3 lg:pl-4 lg:order-1 xl:order-2">
                            <h5 className="font-avenir font-semibold md:font-bold text-base sm:text-lg lg:text-xl xl:text-xl mb-1 lg:mb-2 tracking-wider leading-tight">
                                Clarity Over Control
                            </h5>
                            <p className="font-avenir font-semibold text-gray-700 leading-relaxed tracking-wide text-sm lg:text-base pr-4 lg:pr-10">
                                Gain real insight into your habits, Kubyn turns behaviour into clarity, not restriction.
                            </p>
                        </div>
                        <div className="font-kollektif font-bold text-2xl lg:text-3xl xl:text-4xl text-gray-800 lg:order-2 xl:order-1 text-center">02</div>
                    </div>

                    {/* Feature 3 - Aligned to end (right) */}
                    <div className="flex flex-col-reverse md:flex-row xl:flex-row-reverse md:items-start gap-4 lg:gap-6 w-full lg:w-2/3 lg:ml-auto">
                        <div className="flex-1 border-l-2 border-[#0F0F0F] pl-3 lg:pl-4 lg:order-1 xl:order-2">
                            <h5 className="font-avenir font-semibold md:font-bold text-base sm:text-lg lg:text-xl xl:text-xl mb-1 lg:mb-2 tracking-wider leading-tight">
                                Future Ready Precision
                            </h5>
                            <p className="font-avenir font-semibold text-gray-700 leading-relaxed tracking-wide text-sm lg:text-base pr-4 lg:pr-10">
                                Predictive analytics give you foresight for tomorrow's financial moves today.
                            </p>
                        </div>
                        <div className="font-kollektif font-bold text-2xl lg:text-3xl xl:text-4xl text-gray-800 lg:order-2 xl:order-1 text-center">03</div>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className='w-full lg:w-[380px] xl:w-[430px] h-[300px] sm:h-[350px] lg:h-[400px]'>
                    <img src={Empowers} alt="Who It Empowers" className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    );
};

export default WhoItEmpowers;