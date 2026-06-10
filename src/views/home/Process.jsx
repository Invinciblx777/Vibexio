"use client";

/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  DiscoverIcon,
  StrategicIcon,
  DesignIcon,
  TestingIcon,
  DeploymentIcon,
  SupportIcon,
} from "../../components/icons/CommonIcons.jsx";

const Process = () => {
  const processSteps = [
    {
      number: "1",
      title: "Discover",
      description:
        "Every great solution begins with understanding. We dive deep into your goals, challenges, and data systems to uncover opportunities for automation and intelligence.",
      icon: <DiscoverIcon />,
      position: "xl:left-[120px] xl:top-[270px]",
      positionlg: "lg:left-[80px] lg:top-[290px]",
      iposition: "-left-[10px] -top-[125px]",
      nposition: "-left-[45px] top-[2px]",
      lposition: "left-[15px] -top-[75px]",
    },
    {
      number: "2",
      title: "Strategy",
      description:
        "We create a clear, actionable roadmap aligning AI capabilities with your business objectives, timelines, and scalability requirements.",
      icon: <StrategicIcon />,
      position: "xl:left-[296px] xl:top-[20px]",
      positionlg: "lg:left-[200px] lg:top-[20px]",
      iposition: "left-[55px] top-[190px]",
      nposition: "-left-[45px] top-[25px]",
      lposition: "left-[78px] top-[150px]",
    },
    {
      number: "3",
      title: "Design",
      description:
        "Our design team transforms strategy into intuitive, user-centric systems blending functionality, automation, and beautiful digital experiences.",
      icon: <DesignIcon />,
      position: "xl:left-[538px] xl:top-[260px]",
      positionlg: "lg:left-[390px] lg:top-[280px]",
      iposition: "left-[25px] -top-[135px]",
      nposition: "-left-[45px] top-[20px]",
      lposition: "left-[50px] -top-[80px]",
    },
    {
      number: "4",
      title: "Testing",
      description:
        "Before launch, every AI model, integration, and workflow undergoes rigorous testing for reliability, accuracy, and real-world performance.",
      icon: <TestingIcon />,
      position: "xl:right-[430px] xl:top-[20px]",
      positionlg: "lg:right-[290px] lg:top-[20px]",
      iposition: "left-[56px] top-[200px]",
      nposition: "-left-[45px] top-[25px]",
      lposition: "left-[80px] top-[150px]",
    },
    {
      number: "5",
      title: "Deployment",
      description:
        "With precision and care, we deploy solutions that seamlessly integrate into your operations, ensuring a smooth transition and immediate impact.",
      icon: <DeploymentIcon />,
      position: "xl:right-[230px] xl:top-[270px]",
      positionlg: "lg:right-[140px] lg:top-[288px]",
      iposition: "left-[28px] -top-[134px]",
      nposition: "-left-[45px] top-[15px]",
      lposition: "left-[52px] -top-[80px]",
    },
    {
      number: "6",
      title: "Support",
      description:
        "Our partnership doesn't end at launch. We provide continuous monitoring, optimization, and strategic support to keep your systems performing at their best.",
      icon: <SupportIcon />,
      position: "xl:right-[100px] xl:top-[20px]",
      positionlg: "lg:right-[40px] lg:top-[20px]",
      iposition: "left-[68px] top-[200px]",
      nposition: "-left-[45px] top-[24px]",
      lposition: "left-[92px] top-[150px]",
    },
  ];

  return (
    <section className="mt-12 md:mt-20 lg:mt-[173px] text-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Header */}
      <h2 className="text-center font-bold text-[28px] sm:text-[30px] md:text-[32px] lg:text-[32px] text-[#1E1E1E]">
        Our Process
      </h2>
      <p className="px-4 sm:px-10 md:px-14 lg:px-[180px] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] sm:leading-7 md:leading-8 lg:leading-9 tracking-[0.05em] text-[#1E1E1E] mt-4 sm:mt-5 md:mt-6 lg:mt-[26px]">
        Our process is simple, strategic, and built for measurable impact. At
        Vibexio, we turn complex ideas into intelligent, scalable solutions
        through a structured framework that ensures quality, performance, and
        long-term success.
      </p>

      {/* Desktop View (1024px and above) */}
      <div className="hidden lg:block relative w-full h-[500px] mt-[126px] overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 w-full h-full bg-[#F8F8F8] z-20"
        ></motion.div>

        {/* SVG Line */}
        <svg
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto"
          viewBox="0 0 1440 259"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_d_439_971)">
            <path
              d="M-89 258.5L-58.985 216.563C-28.97 174.625 32.7275 90.7497 92.7575 60.7943C152.788 30.8388 214.485 54.8032 274.515 78.7675C336.213 102.732 396.243 126.696 456.273 102.732C517.97 78.7675 578 6.87444 638.03 18.8566C699.728 30.8388 759.758 126.696 819.788 126.696C881.485 126.696 941.515 30.8388 1003.21 30.8388C1063.24 30.8388 1123.27 126.696 1184.97 126.696C1245 126.696 1305.03 30.8388 1366.73 6.87444C1426.76 -17.0899 1486.79 30.8388 1548.49 78.7675C1608.52 126.696 1670.21 174.625 1730.24 204.58C1790.27 234.536 1851.97 246.518 1881.99 252.509L1912 258.5"
              stroke="#121212"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_439_971"
              x="-99.4062"
              y="0"
              width="2021.5"
              height="290.99"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="22" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0 0.0705882 0 0 0 0.74 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_439_971"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_439_971"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        {/* Steps */}
        {processSteps.map((step, index) => (
          <div
            key={index}
            className={`absolute ${step.position} ${step.positionlg} transform w-[230px] text-center`}
          >
            <div
              className={`text-[60px] font-bold text-transparent bg-clip-text bg-linear-to-b from-[#B7B7B7] to-[#F8F8F8] leading-none absolute ${step.nposition}`}
            >
              {step.number}
            </div>

            <div
              className={`flex justify-center mb-3 bg-[#BECCDD] rounded-full w-[50px] h-[50px] items-center mx-auto shadow-md absolute z-10 ${step.iposition}`}
            >
              {step.icon}
            </div>

            <div
              className={`absolute ${step.lposition} w-px h-[60px] z-0`}
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #8DA1B3 0 3px, transparent 5px 9px)",
              }}
            ></div>

            <h3 className="font-bold text-[20px] text-[#5B7C99] tracking-[0.05em] mb-1 text-left">
              {step.title}
            </h3>

            <p className="mt-2.5 font-semibold text-[#5B7C99] text-[14px] leading-[21px] tracking-[0.05em] text-left">
              {step.description}
            </p>
          </div>
        ))}
      </div>
{/* Mobile/Tablet Cards View (below 1024px) */}
<div className="lg:hidden mt-10 sm:mt-12 md:mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {processSteps.map((step, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex flex-col items-start gap-3">
            <div className="bg-[#BECCDD] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
              {React.cloneElement(step.icon, {
                className: "w-4 h-4",
              })}
            </div>
            <h3 className="font-semibold text-[#1E1E1E] text-base sm:text-lg">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#1E1E1E]/70 text-sm leading-relaxed text-left">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default Process;