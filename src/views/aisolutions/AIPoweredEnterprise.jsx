"use client";

import React from "react";
import Analytics from "../../components/icons/aisolutions/Analytics.jsx";
import Nlp from "../../components/icons/aisolutions/Nlp.jsx";
import EyeIcon from "../../components/icons/aisolutions/EyeIcon.jsx";
import EditIcon from "../../components/icons/aisolutions/EditIcon.jsx";
import HomeSettingsIcon from "../../components/icons/aisolutions/HomeSettingsIcon.jsx";
import DatabaseIcon from "../../components/icons/aisolutions/DatabaseIcon.jsx";
import SettingGearIcon from "../../components/icons/aisolutions/SettingGearIcon.jsx";

const AIPoweredEnterprise = () => {
    const data = [
        {
            icon: <Analytics />,
            title: "Predictive Analytics & Forecasting",
            desc: "Anticipate outcomes, demand, and trends with precision.",
        },
        {
            icon: <Nlp />,
            title: "Natural Language Processing (NLP)",
            desc: "Understand language and deliver smart, multilingual interactions.",
        },
        {
            icon: <EyeIcon />,
            title: "Computer Vision",
            desc: "Detect, classify, and analyze visuals at scale.",
        },
        {
            icon: <EditIcon />,
            title: "Generative AI",
            desc: "Automate creativity text, visuals, audio, and reports.",
        },
        {
            icon: <HomeSettingsIcon />,
            title: "Automation & Intelligent Workflow",
            desc: "Reduce manual effort and human error across processes.",
        },
        {
            icon: <DatabaseIcon />,
            title: "Data & Infrastructure for AI",
            desc: "Build robust AI pipelines, deployment, and governance",
        },
        {
            icon: <SettingGearIcon />,
            title: "Customization & Integration",
            desc: "Align AI systems precisely with your business model.",
        },
    ];

    return (
        <div className="py-12 lg:py-16">
            <h2 className="font-kollektif font-semibold md:font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight tracking-[0.07em] text-black text-center mb-8 sm:mb-12">
                AI Capabilities that Power the{" "}
                <span className="text-[#5B7C99]">Modern Enterprise</span>
            </h2>

            {/* Responsive Grid with Single Card Centering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className="
                            text-center sm:text-left 
                            p-6 sm:p-8 
                            shadow-[0px_0px_4px_0px_#00000040] 
                            rounded-[20px] 
                            bg-white
                            hover:bg-[#BECCDD]
                            hover:rotate-[10deg]
                            transition-all
                            duration-300
                            ease-in-out
                            transform
                            group
                            sm:even:col-start-auto
                            lg:[&:nth-last-child(1):nth-child(3n+1)]:lg:col-start-2">
                        {/* Icon Container */}
                        <div className="
                            w-12 h-12 sm:w-[42px] sm:h-[42px] 
                            flex justify-center items-center 
                            mb-4 rounded-full 
                            bg-[#BECCDD]
                            group-hover:bg-white
                            transition-all
                            duration-300
                            ease-in-out
                            mx-auto sm:mx-0
                        ">
                            {item.icon}
                        </div>

                        <h2 className="font-kollektif font-semibold md:font-bold text-lg sm:text-[16px] leading-tight tracking-[7%] text-[#121212] mb-3">
                            {item.title}
                        </h2>

                        <p className="font-avenir font-normal text-base sm:text-[16px] leading-relaxed sm:leading-[30px] tracking-[7%] text-[#121212]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AIPoweredEnterprise;