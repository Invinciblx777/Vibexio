"use client";

import React from 'react'
const border = "/images/inside/border.webp";
import { MirrorStarIcon, StarIcon } from '../../components/icons/CommonIcons.jsx';

const OurStory = () => {
  return (
    <div className='px-4 sm:px-8 md:px-[40px] lg:px-50px] xl:px-[90px] mt-[110px] flex flex-col justify-center items-center'>

      {/* Heading Section */}
      <div className="flex flex-col xl:flex-row gap-5 xl:gap-10 items-center xl:items-end text-center lg:text-left">
        <h1 className='font-bold text-[28px] sm:text-[32px] leading-[53px] tracking-[0.07em]'>
          Join Our Story
        </h1>

        <div className='flex flex-col-reverse xl:flex-col'>
          <p className='font-normal text-[18px] sm:text-[20px] leading-10 tracking-[0.05em] mb-2'>
            We’re Just Getting Started
          </p>

          <div className='w-full xl:w-[873px] h-px bg-[#000000]' />
        </div>
      </div>


      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[27px] mt-20 w-full justify-items-center">

        <div className="w-full max-w-[266px] h-[253px] bg-[#F8F8F8] rounded-[20px] shadow-[0_0_6px_0_#00000040] flex items-center justify-center px-6 text-center">
          <p className="font-normal text-[18px] sm:text-[20px] leading-[42px] tracking-[0.07em]">
            A <span className="text-[#5B7C99] font-bold">business leader</span> <br />
            seeking digital <br />
            transformation
          </p>
        </div>

        <div className="w-full max-w-[276px] h-[253px] bg-[#F8F8F8] rounded-[20px] shadow-[0_0_6px_0_#00000040] flex items-center justify-center px-6 text-center">
          <p className="font-normal text-[18px] sm:text-[20px] leading-[42px] tracking-[0.07em]">
            A <span className="text-[#5B7C99] font-bold">developer</span> or <span className="text-[#5B7C99] font-bold">designer</span><br />
            who wants to build impactful AI
          </p>
        </div>

        <div className="w-full max-w-[266px] h-[253px] bg-[#F8F8F8] rounded-[20px] shadow-[0_0_6px_0_#00000040] flex items-center justify-center px-6 text-center">
          <p className="font-normal text-[18px] sm:text-[20px] leading-[42px] tracking-[0.07em]">
            A <span className="text-[#5B7C99] font-bold">partner</span> exploring <br />
            synergies
          </p>
        </div>

        <div className="w-full max-w-[266px] h-[253px] bg-[#F8F8F8] rounded-[20px] shadow-[0_0_6px_0_#00000040] flex items-center justify-center px-4 text-center">
          <p className="font-normal text-[18px] sm:text-[20px] leading-[42px] tracking-[0.07em]">
            An <span className="text-[#5B7C99] font-bold">investor</span> who <br />
            believes in <br />
            intelligent innovation
          </p>
        </div>
      </div>


      {/* Bottom Banner */}
      <div
        className="
    w-full h-[230px] lg:h-[290px]
    bg-none                      
    md:bg-[image:var(--border-img)] 
    bg-no-repeat bg-contain bg-center
    max-w-[460px] sm:max-w-[520px] md:max-w-[700px] 
    lg:max-w-[880px] xl:max-w-[832px]
    px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20
    flex flex-col justify-center items-center
    my-[100px] 
  "
        style={{
          "--border-img": `url(${border})`,
        }}
      >

        <div className="flex items-center text-center gap-2">
          <StarIcon />
          <h1 className='font-bold text-[14px] sm:text-[16px] leading-[42px] tracking-[0.07em]'>
            Vibexio Building Technology That Matters, One Solution at a Time.
          </h1>
          <MirrorStarIcon />
        </div>

        <p className='pt-4 font-normal text-[12px] sm:text-[14px] leading-[28px] sm:leading-[42px] tracking-[0.07em] text-center'>
          From Three people with a dream to a company proving that<br className='hidden md:block' />India can lead the world in AI.
        </p>
      </div>

    </div>
  )
}

export default OurStory