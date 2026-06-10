"use client";

import React from 'react';
const img1 = "/images/aisolution/card1.webp";
const img2 = "/images/aisolution/card2.webp";
const img3 = "/images/aisolution/card3.webp";
const img4 = "/images/aisolution/card4.webp";
const img5 = "/images/aisolution/card5.webp";

const ScalableSectorVision = () => {
    const businessUses = [
        {
            title: "Finance",
            description: "Fintech dashboards and secure data tools.",
            image: img1
        },
        {
            title: "Healthcare",
            description: "Patient portals, hospital apps, EHR systems.",
            image: img2
        },
        {
            title: "Education",
            description: "Learning management, classroom platforms.",
            image: img3
        },
        {
            title: "Manufacturing",
            description: "Booking, scheduling, and experience systems.",
            image: img4
        },
        {
            title: "Retail & E commerce",
            description: "ECommerce storefronts & loyalty ecosystems.",
            image: img5
        }
    ];

    return (
        <div className="w-full py-8 md:py-12">

            {/* Header */}
            <h2 className="font-kollektif font-semibold md:font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight tracking-[0.07em] text-black text-center mb-8 sm:mb-12">
                Built for Every Sector, <span className="text-[#5B7C99]"> Scaled for Every Vision</span>
            </h2>

            {/* CARDS CONTAINER */}
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 lg:gap-8 xl:gap-10">
                {businessUses.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            relative
                            w-[300px] md:w-[410px] lg:w-[380px] xl:w-[453px]
                            h-[100px] md:h-[130px] lg:h-[130px] xl:h-[140px]
                            rounded-xl
                            overflow-hidden
                            bg-cover
                            bg-center
                            flex
                            items-end
                            justify-center
                            ${index === 4 ? 'md:col-span-2 md:mx-auto' : ''}
                        `}
                        style={{
                            backgroundImage: `url(${item.image})`
                        }}
                    >
                        {/* TEXT CONTENT */}
                        <div className="absolute z-10 w-full px-4 md:px-6 pb-3 md:pb-4 -right-12">
                            <h3 className="px-8 md:px-7 lg:px-13 xl:px-18 font-avenir font-extrabold text-[12px] md:text-[13px] lg:text-[14px] tracking-[0.07em] text-black mb-1 md:mb-2">
                                {item.title}
                            </h3>
                            <p className="px-10 md:px-9 lg:px-15 xl:px-20 font-avenir font-normal text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] leading-[14px] md:leading-[16px] lg:leading-[18px] xl:leading-[20px] tracking-[0.07em] text-black">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ScalableSectorVision;