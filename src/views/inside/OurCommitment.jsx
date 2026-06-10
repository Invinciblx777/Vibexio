"use client";

import React, { useState, useEffect } from 'react';
const Testimonial = "/images/inside/testimoninals.webp";

const commitments = [
  {
    title: "Honest Communication",
    desc: "Clear expectations, transparent delivery.",
  },
  {
    title: "Quality Over Speed",
    desc: "Rapid development without sacrificing precision.",
  },
  {
    title: "Ethical AI",
    desc: "Privacy first, bias free, and responsible innovation.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow with you, not just for you.",
  },
  {
    title: "Continuous Innovation",
    desc: "Every milestone is a launchpad for the next.",
  },
];

const OurCommitment = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      text: "Their AI approach cut manual work, boosted accuracy, and accelerated workflows with immediate.",
      author: "COO, Logistics & Supply Chain"
    },
    {
      text: "Seamless digital transformation excellent strategy, communication, and execution.",
      author: "Managing Director, Financial Services"
    },
    {
      text: "Their custom solution was fast, scalable, and exactly what our business needed.",
      author: "Head of Technology, Retail & E-Commerce"
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <div className="w-full mt-20">
      <div className=" md:px-[50px] xl:px-[110px] flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-center text-[20px] sm:text-[24px] md:text-[26px] font-bold tracking-[0.07em]">
          Our Commitment to <span className="text-[#5B7C99]">Every Client</span>
        </h1>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50px] w-full justify-items-center">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="w-full max-w-[340px] min-h-[190px] border border-[#E2E2E2] rounded-2xl bg-[#F8F8F8] p-5 pt-[35px] shadow-sm flex flex-col hover:bg-[#BECCDD] transition"
            >
              <div className="flex items-center gap-5">
                <div className="w-px h-[36.5px] bg-[#42617E]" />
                <p className="font-bold text-[15px] lg:text-[19px] leading-[100%] tracking-[0.13em] text-[#5B7C99] whitespace-normal">
                  {item.title}
                </p>
              </div>

              <p className="font-normal text-[16px] leading-8 tracking-[0.13em] mt-[20px] px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Clario Review Testimonial */}
      <div className="w-full bg-[#BECCDD] flex justify-center py-0 sm:py-14 md:py-10 xl:py-15 px-1 md:px-0 mt-20">
        <div
          className="w-full h-[230px] lg:h-[300px] bg-no-repeat bg-contain bg-center max-w-[360px] sm:max-w-[520px] md:max-w-[700px] lg:max-w-[880px] xl:max-w-[1050px] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex justify-center items-center"
          style={{ backgroundImage: `url(${Testimonial})` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full max-w-[350px] text-center px-3 sm:px-10">
            <p className="font-avenir font-semibold italic text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[22px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-black">
              {reviews[currentReview].text}
            </p>

            <h2 className="font-avenir font-semibold italic text-[12px] sm:text-[13px] md:text-[14px] leading-6 sm:leading-7 md:leading-[30px] text-black text-center md:text-end mt-4">
              – {reviews[currentReview].author}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;