"use client";

import React, { useState, useEffect } from 'react';
const Testimonial = "/images/clario/Testimonial.webp";

const ClarioReview = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const reviews = [
        {
            text: "Clario automated our material entry and scanning hours of work now finish instantly with high accuracy.",
            author: "Arun Prakash, Operations Manager"
        },
        {
            text: "Loan document verification is 5× faster with Clario, with seamless PAN, Aadhaar, and bank-statement extraction.",
            author: "Suresh Kumar, Senior Credit Officer"
        },
        {
            text: "Clario solves our invoice-scanning bottleneck, accurately extracting all details and saving 20+ hours weekly.",
            author: "Rithika S, Finance Lead"
        }
    ];

    useEffect(() => {
        if (isPaused) return; 

        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [isPaused, reviews.length]);

    return (
        <div className="w-full bg-[#BECCDD] flex justify-center py-0 sm:py-14 md:py-10 xl:py-15 px-1 md:px-0">

            <div
                className="w-full h-[230px] lg:h-[300px] bg-no-repeat bg-contain bg-center max-w-[360px] sm:max-w-[520px] md:max-w-[700px] lg:max-w-[880px] xl:max-w-[1050px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex justify-center items-center"

                style={{ backgroundImage: `url(${Testimonial})` }}

                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >

                <div className="w-full max-w-[350px] text-center px-10">
                    <p className="font-avenir font-semibold italic text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[22px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-black">
                        {reviews[currentReview].text}
                    </p>

                    <h2 className="font-avenir font-semibold italic text-[12px] sm:text-[13px] md:text-[14px] leading-6 sm:leading-7 md:leading-[30px] text-black text-center md:text-end mt-4">
                        – {reviews[currentReview].author}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ClarioReview;
