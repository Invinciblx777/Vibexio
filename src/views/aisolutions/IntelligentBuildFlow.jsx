"use client";

import React from "react";
import PlayCircleIcon from "../../components/icons/aisolutions/PlayCircleIcon.jsx";
import FaceIcon from "../../components/icons/aisolutions/FaceIcon.jsx";
import SettingGearIcon from "../../components/icons/aisolutions/SettingGearIcon.jsx";
import ToolIcon from "../../components/icons/aisolutions/ToolIcon.jsx";
import RefreshIcon from "../../components/icons/aisolutions/RefreshIcon.jsx";

const steps = [
    {
        icon: PlayCircleIcon,
        title: "Discovery",
        desc: "Identify key goals and data insights.",
    },
    {
        icon: FaceIcon,
        title: "Design",
        desc: "Map intelligent workflows and system architecture.",
    },
    {
        icon: SettingGearIcon,
        title: "Develop",
        desc: "Build and train scalable AI models.",
    },
    {
        icon: ToolIcon,
        title: "Deploy",
        desc: "Integrate seamlessly with your systems.",
    },
    {
        icon: RefreshIcon,
        title: "Evolve",
        desc: "Continuous monitoring and optimization.",
    },
];

const IntelligentBuildFlow = () => {
    return (
        <div className="relative bg-[#BECCDD] px-4 sm:px-10 md:px-10 xl:px-20 py-10">
            <h2 className="font-kollektif font-semibold md:font-bold text-[16px] md:text-[20px] leading-[30px] tracking-[10%] uppercase text-black text-center mb-10">
                How We Build Intelligent Solutions
                <span className="text-[#5B7C99]"> Intelligent Solutions</span>
            </h2>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center gap-3 p-5 relative"
                        >
                            {/* Dotted Line Connectors for MD screens */}
                            {index < steps.length - 1 && (
                                <>
                                    {(index === 0 || index === 1) && (
                                        <div className="hidden md:block lg:hidden absolute top-1/2 -right-3 w-6 border-t-2 border-dotted border-gray-600 -translate-y-1/2 z-0"></div>
                                    )}

                                    {/* Line between card 4-5 (second row) */}
                                    {index === 3 && (
                                        <div className="hidden md:block lg:hidden absolute top-1/2 -right-3 w-6 border-t-2 border-dotted border-gray-600 -translate-y-1/2 z-0"></div>
                                    )}

                                    {/* Horizontal dotted lines for desktop (lg and above) */}
                                    <div className="hidden lg:block absolute top-1/2 -right-3 lg:-right-6 xl:-right-8 w-6 lg:w-12 xl:w-16 border-t-2 border-dotted border-gray-600 -translate-y-1/2 z-0"></div>

                                    {/* Horizontal dotted lines for tablet (sm) */}
                                    {(index === 0 || index === 2) && (
                                        <div className="hidden sm:block md:hidden absolute top-1/2 -right-3 w-6 border-t-2 border-dotted border-gray-600 -translate-y-1/2 z-0"></div>
                                    )}

                                    {/* Vertical dotted line between rows for sm screens */}
                                    {index === 1 && (
                                        <div className="hidden sm:block md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 border-l-2 border-dotted border-gray-600 z-0"></div>
                                    )}

                                    {/* Vertical dotted lines for mobile */}
                                    <div className="sm:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-px h-6 border-l-2 border-dotted border-gray-600 z-0"></div>
                                </>
                            )}

                            {/* Icon */}
                            <div className="w-[50px] h-[50px] rounded-[10px] bg-[#F8F8F8] flex items-center justify-center z-10 relative">
                                <Icon width={30} height={30} />
                            </div>

                            {/* Title */}
                            <h2 className="font-bold text-[16px] leading-tight text-black pt-5 z-10 relative">
                                {step.title}
                            </h2>

                            {/* Description */}
                            <p className="text-[12px] leading-[19px] text-black px-5 z-10 relative">
                                {step.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IntelligentBuildFlow; 