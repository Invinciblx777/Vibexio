"use client";

import React from "react";
import {
  AIIntegrationIcon,
  AutomationIcon,
  GrowthIcon,
} from "../../components/icons/CommonIcons.jsx";

const cards = [
  {
    icon: <AIIntegrationIcon />,
    title: "Seamless AI Integration",
    desc: "We don’t just implement AI; we weave it into your business fabric. From data pipelines to customer journeys, our AI integration ensures your systems become smarter, more responsive, and insight-driven.",
  },
  {
    icon: <AutomationIcon />,
    title: "Automation & Optimization",
    desc: "We transform complexity into clarity. By automating repetitive tasks and streamlining workflows, we reduce friction, cut inefficiencies, and unlock higher productivity across every department.",
  },
  {
    icon: <GrowthIcon />,
    title: "Scalable Growth",
    desc: "We build intelligent digital foundations that grow with your business. Whether you’re a startup in Chennai or an enterprise in New York, our AI-driven architecture ensures sustainable, scalable progress with confidence and agility.",
  },
];

const WeAre = () => {
  return (
    <section className="w-full py-8 xl:py-20 px-6 lg:px-10 xl:px-[90px] text-center">
      {/* Title */}
      <h2 className="font-bold text-[28px] md:text-[32px] leading-[70px] tracking-[0em] text-center Kollektif">
        Who We Are
      </h2>

      {/* Subtitle */}
      <p className="    mt-4 sm:mt-6 
                    px-4 sm:px-10 md:px-14 lg:px-[120px] 
                    text-[14px] sm:text-[16px] md:text-[18px] 
                    leading-[26px] sm:leading-8 md:leading-10 
                    tracking-[0.05em]">
        we believe AI should work seamlessly with humans not replace them. We
        embed artificial intelligence into real world business operations,
        creating systems that think, adapt, and scale intelligently.
      </p>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-[1200px] mx-auto">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-[#BECCDD] py-[34px] px-8 rounded-xl text-left shadow-sm group hover:shadow-[0_0_10px_0_#00000040] hover:bg-white transition"
          >
            <div className="bg-white group-hover:bg-[#BECCDD] w-12 h-12 flex items-center justify-center rounded-lg shadow-sm">
              {item.icon}
            </div>

            <h3 className="mt-6 font-bold text-[16px] leading-[100%] tracking-[0.02em]">
              {item.title}
            </h3>

            <p className="mt-[18px] font-normal text-[12px] leading-[23px] tracking-[0.02em]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default WeAre;
