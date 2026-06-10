"use client";

import React from 'react';
const CoreAi1 = "/images/aisolution/CoreAi1.webp";
const CoreAi2 = "/images/aisolution/CoreAi2.webp";
const CoreAi3 = "/images/aisolution/CoreAi3.webp";
const CoreAi4 = "/images/aisolution/CoreAi4.webp";

const CoreAIServices = () => {
    return (
        <div>
            <h2 className="pt-10 font-kollektif font-semibold md:font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight tracking-[0.07em] text-black text-center mb-8 sm:mb-12">
                Core AI Services for {" "}
                <span className="text-[#5B7C99]">Intelligent Growth</span>
            </h2>
            <div>
                <div className='flex justify-center items-center gap-[10px] xl:gap-5 flex-wrap md:flex-nowrap'>
                    <div className='py-5 px-6 xl:px-10 w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div className='pt-5 lg:pt-0'>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[100%] xl:leading-[120%] tracking-[5%] text-black text-center md:text-start'>AI Product Development</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black pt-5 xl:pt-10 text-center md:text-start'>Build secure, adaptive digital products powered by intelligence.</p>
                        </div>
                        <img src={CoreAi1} alt="" className='w-[150px] lg:w-[200px] xl:w-[275px] h-[150px] lg:h-[180px] xl:h-[250px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div className='pt-5 lg:pt-0'>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[100%] xl:leading-[120%] tracking-[5%] text-black text-center md:text-start'>Data Analytics & Automation</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black pt-5 xl:pt-10 text-center md:text-start'>Transform raw data into insight and seamless workflows.</p>
                        </div>
                        <img src={CoreAi2} alt="" className='md:w-[150px] h-[150px] lg:h-[155px] xl:w-[200px] xl:h-[200px]  object-contain' /> 
                    </div>
                </div>
                <div className='flex justify-center items-center flex-wrap md:flex-nowrap gap-[10px] xl:gap-5 mt-[10px] xl:mt-5'>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div className='pt-5 lg:pt-0'>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[100%] xl:leading-[120%] tracking-[5%] text-black text-center md:text-start'>SaaS Platforms & API Services</h2>
                                <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black pt-5 xl:pt-10 text-center md:text-start'>Deliver AI capabilities via scalable cloud platforms.</p>
                            </div>
                        <img src={CoreAi3} alt="" className='w-[150px] lg:w-[160px] h-[150px] lg:h-[160px] xl:w-[200px] xl:h-[200px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div className='pt-5 lg:pt-0'>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[100%] xl:leading-[120%] tracking-[5%] text-black text-center md:text-start'>AI Integration for Businesses</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black pt-5 xl:pt-10 text-center md:text-start'>Embed intelligence across your existing operations.</p>
                        </div>
                        <img src={CoreAi4} alt="" className='w-[150px] lg:w-[200px] xl:w-[310px] h-[150px] lg:h-[180px] xl:h-[230px] object-contain' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoreAIServices;
