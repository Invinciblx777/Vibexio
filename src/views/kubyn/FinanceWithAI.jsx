"use client";

import React from 'react';
import CloseIcon from '../../components/icons/clario/CloseIcon.jsx';
import TickIcon from '../../components/icons/clario/TickIcon.jsx';
const ManualImg1 = "/images/clario/ManualImg1.webp";
const ManualImg2 = "/images/clario/ManualImg2.webp";

const FinanceWithAI = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">

            {/* Main Heading */}
            <h2 className='font-kollektif font-bold 
                text-[24px] sm:text-[28px] lg:text-[32px]
                leading-[100%] tracking-[0.07em] text-black text-center mb-5 md:mb-12'>
                Finance is Complex. AI Makes It Simple.
            </h2>

            <div className="flex flex-col md:flex-row gap-5 lg:gap-10 xl:gap-30 justify-center md:items-center">

                {/* CHALLENGE SECTION */}
                <div className="flex-1">
                    <div className='hidden md:block'>
                        <div className='flex flex-row-reverse md:flex-row items-center mb-5 md:mb-20 justify-end'>
                            <h5 className='w-[220px] lg:w-[315px] h-[60px] font-avenir font-bold 
                            text-[18px] sm:text-[20px] lg:text-[24px]
                            leading-[37px] tracking-[0.05em] text-black 
                            bg-[#BECCDD] rounded-tr-2xl md:rounded-tr-none rounded-tl-none md:rounded-tl-2xl rounded-br-2xl md:rounded-br-none rounded-bl-none md:rounded-bl-2xl
                            flex items-center justify-center'>
                                Challenge
                            </h5>

                            <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center relative
                            w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute bottom-[-30px] md:bottom-[-40px] w-[6px] bg-[#BECCDD] h-[30px] md:h-[50px]"></div>

                                <img src={ManualImg1}
                                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                                    alt="Challenge" />
                            </div>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <div className='flex flex-row-reverse md:flex-row items-center h-[80px] mb-5 md:mb-20'>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[37px] tracking-[0.05em] text-black flex-1 text-center bg-[#BECCDD] rounded-br-[10px] rounded-tr-[10px]'>
                                Challenge
                            </p>

                            <div className='flex justify-center items-center relative 
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute bottom-[-50px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-[10px] md:rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] ml-1'>

                                    <img src={ManualImg1}
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        alt="Challenge" />
                                </div>
                            </div>
                        </div></div>

                    {/* Challenge List */}
                    <div className="space-y-4 relative">

                        {/* ITEM */}
                        <div className='flex flex-row-reverse md:flex-row items-center gap-4 h-[80px] mb-5 md:mb-20'>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1 md:text-end'>
                                Emotional Bias in Spending
                            </p>

                            <div className='flex justify-center items-center relative 
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-20px] md:top-[-30px] w-[6px] bg-[#BECCDD] h-[30px] md:h-[50px]"></div>
                                <div className="absolute bottom-[-40px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <CloseIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>
                        </div>

                        {/* ITEM */}
                        <div className='flex flex-row-reverse md:flex-row items-center gap-4 h-[80px] mb-5 md:mb-20'>
                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1 md:text-end'>
                                Lack of Financial Discipline
                            </p>

                            <div className='flex justify-center items-center relative 
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-40px] md:top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>
                                <div className="absolute bottom-[-40px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <CloseIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>
                        </div>

                        {/* ITEM */}
                        <div className='flex flex-row-reverse md:flex-row items-center gap-4 h-[80px] mb-5 md:mb-20'>
                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1 md:text-end'>
                                Unclear Financial Direction
                            </p>

                            <div className='flex justify-center items-center relative
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-40px] md:top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>
                                <div className="absolute bottom-[-40px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <CloseIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>
                        </div>

                        {/* ITEM */}
                        <div className='flex flex-row-reverse md:flex-row items-center gap-4 h-[80px] md:mb-20'>
                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[20px] md:leading-[37px] tracking-[0.05em] text-black flex-1 md:text-end'>
                                Inconsistent Saving Patterns
                            </p>

                            <div className='flex justify-center items-center relative 
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-40px] md:top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <CloseIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SOLUTION SECTION */}
                <div className="flex-1">
                    <div className='hidden md:block'>
                        <div className='flex items-center mb-5 md:mb-20'>

                            <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center relative
                            w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute bottom-[-40px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <img src={ManualImg2}
                                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                                    alt="Solution" />
                            </div>

                            <h5 className='w-[220px] lg:w-[315px] h-[60px] font-avenir font-bold 
                            text-[18px] sm:text-[20px] lg:text-[24px]
                            leading-[37px] tracking-[0.05em] text-black 
                            bg-[#BECCDD] rounded-tr-2xl rounded-br-2xl 
                            flex items-center justify-center'>
                                Solution
                            </h5>
                        </div>
                    </div>

                    <div className='block md:hidden'>
                        <div className='flex flex-row-reverse md:flex-row items-center h-[80px] mb-5 md:mb-20'>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[37px] tracking-[0.05em] text-black flex-1 text-center bg-[#BECCDD] rounded-br-[10px] rounded-tr-[10px]'>
                                Solution
                            </p>

                            <div className='flex justify-center items-center relative 
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute bottom-[-50px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-[10px] md:rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] ml-1'>

                                    <img src={ManualImg2}
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        alt="Challenge" />
                                </div>
                            </div>
                        </div></div>

                    {/* SOLUTION ITEMS */}
                    <div className="space-y-4 relative">

                        {/* ITEM */}
                        <div className="flex items-center gap-4 h-[80px] mb-5 md:mb-20">

                            <div className='flex justify-center items-center relative
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>
                                <div className="absolute bottom-[-50px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <TickIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1'>
                                Loss Aversion Checkpoints that minimize impulsive choices.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="flex items-center gap-4 h-[80px] mb-5 md:mb-20">

                            <div className='flex justify-center items-center relative
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>
                                <div className="absolute bottom-[-50px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <TickIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1'>
                                Smart Cash Planning that adapts to your lifestyle flow.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="flex items-center gap-4 h-[80px] mb-5 md:mb-20">

                            <div className='flex justify-center items-center relative
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>
                                <div className="absolute bottom-[-50px] md:bottom-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <TickIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1'>
                                Behavioural Nudges that reinforce awareness & intention.
                            </p>
                        </div>

                        {/* ITEM */}
                        <div className="flex items-center gap-4 h-[80px] md:mb-20">

                            <div className='flex justify-center items-center relative
                                w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px]'>

                                <div className="absolute top-[-30px] w-[6px] bg-[#BECCDD] h-[50px]"></div>

                                <div className='bg-[#BECCDD] rounded-2xl flex justify-center items-center shrink-0
                                    w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]'>

                                    <TickIcon width={28} height={28}
                                        className="sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>

                            <p className='font-avenir font-bold 
                                text-[12px] sm:text-[14px] md:text-[16px] 
                                leading-[20px] lg:leading-[37px] tracking-[0.05em] text-black flex-1'>
                                Surplus Simulation that visualizes multiple outcomes.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default FinanceWithAI;
