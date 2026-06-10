"use client";

import React from "react";
const logo1 = "/images/home/logo1.webp";
const logo2 = "/images/home/logo2.webp";
const logo3 = "/images/home/logo3.webp";
const logo4 = "/images/home/logo4.webp";
const logo5 = "/images/home/logo5.webp";
const logo6 = "/images/home/logo6.webp";
const logo7 = "/images/home/logo7.webp";

const Logo = () => {
  const logos = [
    { src: logo1, className: "xl:w-[94px] xl:h-[93px]" },
    { src: logo2, className: "xl:w-24 xl:h-[59px]" },
    { src: logo3, className: "xl:w-[71px] xl:h-[67px]" },
    { src: logo4, className: "xl:w-[79px] xl:h-[70px]" },
    { src: logo5, className: "xl:w-[79px] xl:h-[94px]" },
    { src: logo7, className: "xl:w-[74px] xl:h-[46px]" },
    { src: logo6, className: "xl:w-[65px] xl:h-[73px]" },
  ];

  return (
    <div className="logo-marquee relative w-full px-4 sm:px-6 md:px-[30px] overflow-hidden">
      {/* LEFT BLUR */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-32 md:w-40 lg:w-48 xl:w-[220px] bg-gradient-to-r from-[#F8F8F8] via-[#F8F8F8]/80 to-transparent blur-4 sm:blur-8 md:blur-12 lg:blur-16 xl:blur-[20px] pointer-events-none z-10" />

      {/* RIGHT BLUR */}
      <div className="absolute right-0 top-0 h-full w-16 sm:w-32 md:w-40 lg:w-48 xl:w-[220px] bg-gradient-to-l from-[#F8F8F8] via-[#F8F8F8]/80 to-transparent blur-4 sm:blur-8 md:blur-12 lg:blur-16 xl:blur-[20px] pointer-events-none z-10" />

      {/* LOGOS MARQUEE */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-infinite whitespace-nowrap ">
          {[...Array(3)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="
                flex items-center justify-center 
                my-3 sm:my-4 md:my-[17px] 
                gap-14 sm:gap-15 md:gap-20 lg:gap-32 xl:gap-[155px]
                pr-14 sm:pr-15 md:pr-20 lg:pr-32 xl:pr-[155px]
                flex-shrink-0
              "
            >
              {logos.map((logo, index) => (
                <div key={`${setIndex}-${index}`} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt=""
                    className="object-contain"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: index === 0 ? '60px' : 
                               index === 1 ? '61px' : 
                               index === 2 ? '45px' : 
                               index === 3 ? '50px' : 
                               index === 4 ? '50px' : 
                               index === 5 ? '47px' : '42px',
                      maxHeight: index === 0 ? '59px' : 
                                 index === 1 ? '38px' : 
                                 index === 2 ? '43px' : 
                                 index === 3 ? '45px' : 
                                 index === 4 ? '60px' : 
                                 index === 5 ? '30px' : '47px'
                    }}
                    data-logo-index={index}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Logo;