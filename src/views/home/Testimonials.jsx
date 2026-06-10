"use client";

import React from "react";
import {
  TestimonialsIcon,
  TestimonialsCardIcon,
} from "../../components/icons/CommonIcons.jsx";

const testimonialsData = [
  {
    text: "Their AI-powered solutions completely transformed the way we manage our customers faster operations, smarter decisions, and a seamless experience overall.",
  },
  {
    text: "Their team delivered a highly reliable product with excellent technical execution. We noticed performance improvements right from the first week.",
  },
  {
    text: "With their intelligent insights, we now understand our customers deeply and build stronger relationships every day.",
  },
  {
    text: "Their platform combines smart automation with efficient workflows easily one of the most impactful tools in our business ecosystem.",
  },
  {
    text: "They consistently deliver high-quality IT and AI services. The product is stable, accurate, and truly enhances our day-to-day operations.",
  },
];

const Testimonials = () => {
  // eslint-disable-next-line no-unused-vars
  const loopTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section className="relative bg-[linear-gradient(180deg,#BECCDD_0%,#6E8BA6_100%)] mt-[147px] py-[80px] overflow-hidden">
      {/* Main Title */}
      <h1 className="text-center text-[#121212] text-[32px] font-bold mb-[50px]">
        Voices From Our Community
      </h1>

      {/* Horizontal Scroll Container */}
      <div className="relative overflow-hidden">
       

        {/* Infinite Scroll Wrapper */}
        <div className="flex animate-infinite-scroll">
          {/* First set */}
          <div className="flex items-center gap-[30px] pl-[90px] pr-[40px] py-[50px] flex-shrink-0">
            {/* Left Quote */}
            <div className="flex-shrink-0 flex items-center gap-[30px]">
              <TestimonialsIcon className="w-[127px] h-[215px] text-white" />
              <p className="text-white -ml-[5px] font-semibold text-[32px] leading-12 tracking-[0.05em] w-[190px]">
                What Our Community Sharing...
              </p>
            </div>

            {/* Cards */}
            {testimonialsData.map((item, index) => (
              <div
                key={`first-${index}`}
                className="
                  flex-shrink-0
                  bg-[#F8F8F8] 
                  w-[332px] h-[369px] 
                  rounded-[140px] rounded-bl-[10px] 
                  pt-[80px] px-[35px]
                  shadow-[0px_5px_10px_rgba(0,0,0,0.1)]
                  relative
                "
              >
                <p className="text-[14px] pt-4 leading-8 tracking-[0.05em] font-normal">
                  {item.text}
                </p>
                <div className="absolute bottom-[30px] left-10">
                  <TestimonialsCardIcon className="w-[25px] h-[25px] text-[#BECCDD]" />
                </div>
              </div>
            ))}
          </div>

          {/* Second set (duplicate) */}
          <div className="flex items-center gap-[30px] pr-[40px] py-[50px] flex-shrink-0">
            {/* Left Quote */}
            <div className="flex-shrink-0 flex items-center gap-[30px]">
              <TestimonialsIcon className="w-[127px] h-[215px] text-white" />
              <p className="text-white -ml-[5px] font-semibold text-[32px] leading-12 tracking-[0.05em] w-[190px]">
                What Our Community Sharing...
              </p>
            </div>

            {/* Cards */}
            {testimonialsData.map((item, index) => (
              <div
                key={`second-${index}`}
                className="
                  flex-shrink-0
                  bg-[#F8F8F8] 
                  w-[332px] h-[369px] 
                  rounded-[140px] rounded-bl-[10px] 
                  pt-[80px] px-[35px]
                  shadow-[0px_5px_10px_rgba(0,0,0,0.1)]
                  relative
                "
              >
                <p className="text-[14px] pt-4 leading-8 tracking-[0.05em] font-normal">
                  {item.text}
                </p>
                <div className="absolute bottom-[30px] left-10">
                  <TestimonialsCardIcon className="w-[25px] h-[25px] text-[#BECCDD]" />
                </div>
              </div>
            ))}
          </div>

          {/* Third set (duplicate) */}
          <div className="flex items-center gap-[30px] pr-[40px] py-[50px] flex-shrink-0">
            {/* Left Quote */}
            <div className="flex-shrink-0 flex items-center gap-[30px]">
              <TestimonialsIcon className="w-[127px] h-[215px] text-white" />
              <p className="text-white -ml-[5px] font-semibold text-[32px] leading-12 tracking-[0.05em] w-[190px]">
                What Our Community Sharing...
              </p>
            </div>

            {/* Cards */}
            {testimonialsData.map((item, index) => (
              <div
                key={`third-${index}`}
                className="
                  flex-shrink-0
                  bg-[#F8F8F8] 
                  w-[332px] h-[369px] 
                  rounded-[140px] rounded-bl-[10px] 
                  pt-[80px] px-[35px]
                  shadow-[0px_5px_10px_rgba(0,0,0,0.1)]
                  relative
                "
              >
                <p className="text-[14px] pt-4 leading-8 tracking-[0.05em] font-normal">
                  {item.text}
                </p>
                <div className="absolute bottom-[30px] left-10">
                  <TestimonialsCardIcon className="w-[25px] h-[25px] text-[#BECCDD]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Testimonials;
