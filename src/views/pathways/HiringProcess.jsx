"use client";

import React from 'react'
const rightarrow = "/images/pathways/right.webp";
const leftarrow = "/images/pathways/left.webp";
import { Application, Call, Chat, Offer, Task, Team } from '../../components/icons/CommonIcons.jsx';

const stepsTop = [
  { icon: <Application />, title: "Application Review", desc: "2–3 days turn around", arrow: rightarrow },
  { icon: <Call />, title: "Intro Call", desc: "casual chat with team", arrow: rightarrow },
  { icon: <Task />, title: "Technical Task", desc: "work at your pace", arrow: rightarrow }
];

const stepsBottom = [
  { icon: <Offer />, title: "Offer", desc: "within a week", arrow: leftarrow },
  { icon: <Chat />, title: "Founder Chat", desc: "alignment & vision", arrow: leftarrow },
  { icon: <Team />, title: "Team Interview", desc: "discuss ideas and culture", arrow: leftarrow }
];

const ArrowCard = ({ step }) => (
    
  <div style={{ backgroundImage: `url(${step.arrow})` }} className=" w-[300px] sm:w-[350px] lg:w-[300px] xl:w-[404px] h-[139px] bg-contain bg-no-repeat bg-left px-6 flex flex-col justify-center mx-auto">
    <div className="flex justify-center items-center gap-5">
      {step.icon}
      <div>
        <p className="font-bold lg:text-[14px] xl:text-[16px] leading-[36px] tracking-[0.05em] text-center">{step.title}</p>
        <p className="font-normal lg:text-[14px] xl:text-[16px] leading-[36px] tracking-[0.05em] text-center">{step.desc}</p>
      </div>
    </div>
  </div>
);

const HiringProcess = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[100px] px-4 sm:px-10 lg:px-[90px] gap-10">
        <h1 className='font-bold text-[32px] leading-[100%] tracking-[0.07em] mb-6' >Our <span className='text-[#5B7C99]'>Hiring Process</span></h1>

      {/* TOP ROW — responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 flex justify-center lg:grid-cols-3 gap-6 w-full">
        {stepsTop.map((step, i) => <ArrowCard key={i} step={step} />)}
      </div>

      {/* BOTTOM ROW — responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {stepsBottom.map((step, i) => <ArrowCard key={i} step={step} />)}
      </div>

    </div>
  );
};

export default HiringProcess;
