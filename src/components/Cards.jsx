"use client";

import React from "react";
import {
  FinanceIcon,
  EducationIcon,
  MedicalIcon,
  MarketingIcon,
  EcommerceIcon,
  ManufacturingIcon,
  EstateIcon,
  EnergyIcon,
  LogisticsIcon,
  InsuranceIcon,
  TravelIcon,
  AgricultureIcon,
  TeleIcon,
} from "./icons/CardIcons.jsx";

const industries = [
  { icon: <FinanceIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Finance & FinTech Automation", padding: "px-[10px]" },
  { icon: <EducationIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Education & EdTech Innovation", padding: "px-[10px]" },
  { icon: <MedicalIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Healthcare & Medical AI Solutions", padding: "px-[4px]" },
  { icon: <MarketingIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Media, Marketing & Entertainment AI", padding: "px-[22px]" },
  { icon: <EcommerceIcon className="w-10 h-10 text-[#5B7C99]" />, title: "E-commerce & Retail Intelligence", padding: "px-[12px]" },
  { icon: <ManufacturingIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Manufacturing & Industry 4.0", padding: "px-[12px]" },
  { icon: <EstateIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Real Estate & PropTech", padding: "px-[12px]" },
  { icon: <EnergyIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Energy & Sustainability Tech", padding: "px-[12px]" },
  { icon: <LogisticsIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Logistics & Supply Chain Automation", padding: "px-[12px]" },
  { icon: <InsuranceIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Insurance & Risk Management AI", padding: "px-[12px]" },
  { icon: <TravelIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Travel & Hospitality Technology", padding: "px-[12px]" },
  { icon: <AgricultureIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Agriculture & AgriTech Automation", padding: "px-[4px]" },
  { icon: <TeleIcon className="w-10 h-10 text-[#5B7C99]" />, title: "Telecom & Communication Systems", padding: "px-[9px]" },
];

const Cards = () => {
  return (
    <div className="relative overflow-hidden py-10 md:py-16">
      
      {/* Marquee Container */}
      <div
        className="
          flex w-max animate-marquee gap-4 md:gap-6
          px-4 md:px-0
        "
      >
        {[...industries, ...industries].map((item, index) => (
          <div
            key={index}
            className={`
              relative shrink-0 rounded-2xl 
              w-[170px] h-[170px] 
              sm:w-[190px] sm:h-[190px] 
              md:w-[210px] md:h-[210px] 
              lg:w-[230px] lg:h-[230px]
              p-[12px] md:p-[15px]
              ${
                index % 2 === 0
                  ? "border-2 border-white/50"
                  : "border-2 border-[#5B7C99]/50"
              }
            `}
          >
            <div className="bg-[#F8F8F8] w-full h-full flex flex-col items-center justify-center rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="mb-3 md:mb-4">{item.icon}</div>
              
              <p
                className={`
                  font-bold 
                  text-[12px] leading-[20px] 
                  sm:text-[13px] sm:leading-[22px]
                  md:text-[14px] md:leading-[24px]
                  text-center tracking-[0.05em]
                  ${item.padding}
                `}
              >
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
