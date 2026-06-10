"use client";

import React from 'react';
const AiImg1 = "/images/itsolution/ItImg1.webp";
const AiImg2 = "/images/itsolution/Itimg2.webp";
const AiImg3 = "/images/itsolution/ItImg3.webp";
const AiImg4 = "/images/itsolution/ItImg4.webp";
const AiImg5 = "/images/itsolution/Itimg5.webp";
const AiImg6 = "/images/itsolution/ItImg6.webp";
const AiImg7 = "/images/itsolution/ItImg7.webp";
const AiImg8 = "/images/itsolution/ItImg8.webp";

const DigitalITServices = () => {
    return (
        <div>
            <h2 className="pt-10 font-kollektif font-semibold md:font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-tight tracking-[0.07em] text-black text-center mb-8 sm:mb-12">
                Comprehensive
                <span className="text-[#5B7C99]"> IT & Digital Services</span>
            </h2>
            <div>
                <div className='flex justify-center items-center gap-[10px] xl:gap-5 flex-wrap md:flex-nowrap'>
                    <div className='py-5 px-6 xl:px-10 w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>Web Development</h2>
                            <p className='xl:pr-5 font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>Fast, secure, and scalable digital platforms.</p>
                        </div>
                        <img src={AiImg1} alt="" className='w-[150px] lg:w-[200px] xl:w-[275px] h-[150px] lg:h-[180px] xl:h-[250px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>ECommerce Solutions</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>High performance stores that convert.</p>
                        </div>
                        <img src={AiImg2} alt="" className='md:w-[150px] h-[150px] lg:h-[155px] xl:w-[225px] xl:h-[225px]  object-contain' />
                    </div>
                </div>
                <div className='flex justify-center items-center flex-wrap md:flex-nowrap gap-[10px] xl:gap-5 mt-[10px] xl:mt-5'>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>App Development</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>Intuitive experiences for Android & iOS.</p>
                        </div>
                        <img src={AiImg3} alt="" className='w-[150px] lg:w-[160px] h-[150px] lg:h-[160px] xl:w-[200px] xl:h-[200px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>UI/UX & Graphics Design</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>Experiences that merge emotion with logic.</p>
                        </div>
                        <img src={AiImg4} alt="" className='w-[150px] lg:w-[200px] xl:w-[310px] h-[150px] lg:h-[180px] xl:h-[230px] object-contain' />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-[10px] xl:gap-5 flex-wrap md:flex-nowrap mt-[10px] xl:mt-5'>
                    <div className='py-5 px-6 xl:px-10 w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>Custom Software Development</h2>
                            <p className='xl:pr-20 font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>Systems tailored to your business DNA.</p>
                        </div>
                        <img src={AiImg5} alt="" className='w-[150px] lg:w-[200px] xl:w-[275px] h-[150px] lg:h-[180px] xl:h-[250px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>Digital Transformation</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black  pt-5 xl:pt-[20px] text-center md:text-start'>Rethink, modernize, and automate operations.</p>
                        </div>

                        <img src={AiImg6} alt="" className='w-[150px] lg:w-[160px] h-[150px] lg:h-[160px] xl:w-[200px] xl:h-[200px] object-contain' />

                    </div>
                </div>
                <div className='flex justify-center items-center flex-wrap md:flex-nowrap gap-[10px] xl:gap-5 mt-[10px] xl:mt-5'>
                    <div className='w-full md:w-[50%] lg:w-[440px] xl:w-[510px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>Mail Solutions</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black text-center md:text-start  pt-5 xl:pt-[20px]'>Secure business email setup.</p>
                        </div>
                        <img src={AiImg7} alt="" className='w-[150px] lg:w-[160px] h-[150px] lg:h-[160px] xl:w-[200px] xl:h-[200px] object-contain' />
                    </div>
                    <div className='w-full md:w-[50%] lg:w-[550px] xl:w-[725px] h-full lg:h-[240px] xl:h-[280px] py-5 px-6 xl:px-10 flex flex-col lg:flex-row justify-center items-center gap-[10px] xl:gap-8 bg-linear-to-b from-[#BECCDD] to-[#869EB6] shadow-[0px_-4px_4px_0px_#00000040_inset] rounded-[30px]'>
                        <div>
                            <h2 className='font-avenir font-semibold xl:font-bold lg:text-[20px] xl:text-[24px] leading-[120%] tracking-[5%] text-black text-center md:text-start'>Cloud Solutions</h2>
                            <p className='font-avenir font-normal lg:text-[16px] xl:text-[18px] leading-[23px] xl:leading-[35px] tracking-[7%] text-black pt-5 xl:pt-[20px] text-center md:text-start'>Setup for secure, scalable cloud environments.</p>
                        </div>
                        <img src={AiImg8} alt="" className='w-[150px] lg:w-[200px] xl:w-[310px] h-[150px] lg:h-[180px] xl:h-[230px] object-contain' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalITServices;
