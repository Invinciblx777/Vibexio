"use client";

import React from 'react'
const mission = "/images/inside/mission.webp";
const vision = "/images/inside/vision.webp";
const purpose = "/images/inside/purpose.webp";
import { MirrorQouteIcon, QouteIcon } from '../../components/icons/CommonIcons.jsx'

const MissonVision = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-16 md:gap-20 lg:gap-[100px] mt-16 md:mt-20 lg:mt-[100px] px-10 sm:px-6 lg:px-24'>

      <h1 className='text-[#5B7C99] font-bold text-2xl sm:text-3xl lg:text-[32px] tracking-[0.05em] text-center'>
        <span className='text-black'>Our</span> Mission, Vision & Purpose
      </h1>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] xl:gap-[100px] w-full max-w-7xl">
        <div className="flex flex-col order-2 lg:order-1 text-center lg:text-left">
          <h1 className="font-bold text-4xl sm:text-5xl xl:text-[60px] leading-[100%] tracking-[0.05em]">
            Our Mission
          </h1>

          <div className="relative w-fit mt-3 mx-auto lg:mx-0">

            {/* Hide quote icons under lg */}
            <div className="absolute -left-10 lg:-left-20 -top-8 lg:-top-15 hidden xl:block">
              <QouteIcon className="w-auto h-auto" />
            </div>

            <p className="w-full max-w-[500px] font-normal text-base sm:text-lg lg:text-[20px] leading-7 sm:leading-8 lg:leading-[34px] tracking-[0.07em]">
              To empower businesses of every size with intelligent, secure, and scalable
              AI solutions enabling faster automation, deeper insight, and smarter
              decision making across every sector.
            </p>

            <div className="absolute right-0 -bottom-2 lg:-bottom-4 hidden xl:block">
              <MirrorQouteIcon className="w-auto h-auto" />
            </div>
          </div>
        </div>

        <img 
          className='w-[250px] md:w-[370px] xl:w-[470px] h-auto aspect-470/282 order-1 lg:order-2' 
          src={mission} 
          alt="Our Mission" 
        />
      </div>

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] xl:gap-[150px]  w-full max-w-7xl">
        <img 
          className='w-[230px] md:w-[340px] xl:w-[528px] h-auto aspect-528/287 order-1 lg:order-1' 
          src={vision} 
          alt="Our Vision" 
        />

        <div className="flex flex-col order-2 lg:order-2 text-center lg:text-left">
          <h1 className='font-bold text-4xl sm:text-5xl lg:text-[60px] leading-[100%] tracking-[0.05em]'>
            Our Vision
          </h1>

          <div className="relative w-fit mt-3 mx-auto lg:mx-0">

            {/* Hide under lg */}
            <div className="absolute -left-14 lg:-left-20 top-0 lg:-top-15 hidden xl:block">
              <QouteIcon className="w-auto h-auto" />
            </div>

            <p className="w-full max-w-[500px] font-normal text-base sm:text-lg lg:text-[20px] leading-7 sm:leading-8 lg:leading-[34px] tracking-[0.07em]">
              To shape a world where AI becomes a trusted ally seamlessly integrated into business strategy, enhancing productivity, precision, and purpose
            </p>

            <div className="absolute -right-3 lg:-right-5 -bottom-2 lg:-bottom-4 hidden xl:block">
              <MirrorQouteIcon className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div  className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[60px] xl:gap-[200px]  w-full max-w-7xl">
        <div className="flex flex-col order-2 lg:order-1 text-center lg:text-left">
          <h1 className='font-bold text-4xl sm:text-5xl lg:text-[60px] leading-[100%] tracking-[0.05em]'>
            Our Purpose
          </h1>

          <div className="relative w-fit mt-3 mx-auto lg:mx-0">

            {/* Hide under lg */}
            <div className="absolute -left-10 lg:-left-20 -top-8 lg:-top-15 hidden xl:block">
              <QouteIcon className="w-auto h-auto" />
            </div>

            <p className="w-full max-w-[500px] font-normal text-base sm:text-lg lg:text-[20px] leading-7 sm:leading-8 lg:leading-[34px] tracking-[0.07em]">
              We don't create AI for the sake of trend or technology. We build AI that transforms helping businesses evolve from data driven to decision-driven, from reactive to predictive, from human effort to human intelligence amplified
            </p>

            <div className="absolute right-4 lg:right-18 -bottom-2 lg:-bottom-4 hidden xl:block">
              <MirrorQouteIcon className="w-auto h-auto" />
            </div>
          </div>
        </div>

        <img 
          className='w-[200px] md:w-[300px] xl:w-[368px] h-auto aspect-square order-1 lg:order-2' 
          src={purpose} 
          alt="Our Purpose" 
        />
      </div>
     <div  id='story' className=""></div>
    </div>
  )
}

export default MissonVision
