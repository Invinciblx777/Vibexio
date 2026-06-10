"use client";

import React from "react";
import {
  MobileAppIcon,
  WebAppIcon,
  BrainIcon,
  UVIcon,
  DigitalIcon,
  ServiceIcon,
  RightArrowIcon,
} from "../../components/icons/CardIcons.jsx";

const services = [
  { icon: <MobileAppIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "Mobile Apps", desc: "Build high performance mobile experiences that engage, convert, and scale. From Android to iOS and cross-platform apps, we create mobile ecosystems that connect your brand and users intelligently." },
  { icon: <WebAppIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "Web Development", desc: "We design and develop powerful, responsive websites and web applications that balance design with performance. Every line of code is optimized for speed, scalability, and search helping your brand grow online." },
  { icon: <BrainIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "AI Solutions", desc: "Harness the power of artificial intelligence to automate, analyze, and scale. We develop intelligent systems from predictive analytics to NLP driven automation that help your business work smarter and faster." },
  { icon: <UVIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "UI/UX Design", desc: "Design that feels natural, intuitive, and human. We blend creativity with user psychology to craft interfaces that improve engagement, drive conversion, and reflect your brand identity." },
  { icon: <DigitalIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "Digital Transformation", desc: "Transform your workflows, culture, and customer experience through intelligent automation and data driven insights. Our digital transformation strategies future-proof your business for the AI driven era." },
  { icon: <ServiceIcon className="w-6 h-6 text-[#1E1E1E]" />, title: "Custom Software", desc: "We build tailor-made software systems engineered around your unique processes, challenges, and goals. From concept to deployment, our custom solutions grow with you secure, scalable, and sustainable." },
];

const CoreService = () => {
  return (
    <section className="px-6 md:px-10 lg:px-[90px] mt-[50px]">
      
      {/* TITLE */}
      <h1 className="text-center font-bold text-[26px] md:text-[30px] lg:text-[32px]">
        Core Service
      </h1>

      {/* Subtitle */}
      <div className="flex justify-center">
        <p className="w-full sm:w-[80%] md:w-[70%] lg:w-[535px] mt-[20px] md:mt-[26px] 
          text-center font-normal text-[15px] md:text-[18px] lg:text-[20px] 
          leading-8 md:leading-9 lg:leading-10 tracking-[0.05em]">
          Comprehensive digital solutions tailored to transform your business operations.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 md:gap-8 
        mt-[50px] md:mt-[70px] lg:mt-[90px]
      ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
              p-6 md:p-8 
              shadow-[0px_0px_4px_0px_#00000040] 
              rounded-3xl 
              hover:shadow-[0_6px_16px_rgba(0,0,0,0.35)] 
              transition-all duration-300 ease-in-out cursor-pointer

              ${
                index === 0
                  ? "rounded-tl-none rounded-br-none bg-linear-to-b from-[#E3E6F0] to-[#A9BACE]"
                  : ""
              }
              ${
                index === 1
                  ? "rounded-tl-none rounded-br-none bg-[linear-gradient(180deg,#F8F8F8_0%,#BDCBDC_100%)] "
                  : ""
              }
              ${
                index === 2
                  ? "rounded-tl-none rounded-br-none bg-linear-to-b from-[#E3E6F0] to-[#A9BACE]"
                  : ""
              }
              ${
                index === 3
                  ? "rounded-tl-none rounded-br-none bg-[linear-gradient(180deg,#F8F8F8_0%,#BDCBDC_100%)] "
                  : ""
              }
              ${
                index === 4
                  ? "rounded-tl-none rounded-br-none bg-linear-to-b from-[#E3E6F0] to-[#A9BACE]"
                  : ""
              }
              ${
                index === 5
                  ? "rounded-tl-none rounded-br-none bg-[linear-gradient(180deg,#F8F8F8_0%,#BDCBDC_100%)] "
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div className="bg-white w-[45px] h-[45px] md:w-[50px] md:h-[50px] 
              rounded-full flex items-center justify-center shadow-sm mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-[17px] md:text-[20px] text-[#1E1E1E] mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-[#1E1E1E]/70 text-[13px] md:text-[14px] leading-[20px] md:leading-[22px] mb-4">
              {service.desc}
            </p>

          
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreService;
