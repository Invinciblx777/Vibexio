"use client";

import React from "react";
const testimonialsBg = "/images/pathways/testimonial.webp";

const data = [
  {
    text: "Thrived as a UI/UX designer at Vibexio, crafting intuitive and scalable design solutions with team.",
    name: "Manimegalai M",
    role: "UI/UX Designer",
  },
  {
    text: "I'm an AI developer passionate about building smart, real world solutions from data and algorithms.",
    name: "Elango T",
    role: "AI Research and Developer",
  },
  {
    text: "Grew as a full stack developer with the Vibexio team, building scalable web solutions.",
    name: "Selva James",
    role: "Full stack Developer",
  },
  {
    text: "My journey at Vibexio has strengthened both my technical abilities and leadership mindset.",
    name: "Jenopaul",
    role: "Application Engineer",
  },
  {
    text: "Grew as an app developer at Vibexio through meaningful projects, supportive teammates, and a culture of quality and teamwork.",
    name: "Sakthi N",
    role: "Full stack Developer",
  },
  {
    text: "Vibexio is a great place to grow as a Tester. The team is supportive, innovative, proud to be part.",
    name: "Stephy A",
    role: "Software Tester",
  },
 
];

const Testimonials = () => {
  return (
    <div className=" mt-[330px] sm:mt-[180px] w-full px-4 sm:px-8 lg:px-10 xl:px-[90px] flex flex-col justify-center items-center">

      {/* Heading */}
      <h1 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold tracking-[0.03em] text-[#121212] text-center mb-10">
        Team <span className="text-[#5B7C99]">Testimonials</span>
      </h1>

      {/* GRID */}
      <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div
      className="
        relative
        w-[300px]
        max-w-[404px]
        min-h-[281px] 
        bg-cover bg-no-repeat
        flex flex-col
        pb-8
        sm:pb-10
        xl:w-[404px]
        xl:h-[281px]
      "
      style={{ backgroundImage: `url(${testimonialsBg})` }}
    >
      {/* TEXT */}
      <p className="font-normal text-[16px] leading-9 tracking-widest pt-[75px] px-[30px] sm:px-[42px]">
        {item.text}
      </p>

      {/* NAME + ROLE */}
      <div className="
        flex flex-col text-right mt-6 px-[30px] sm:px-[42px]
        xl:absolute xl:top-48 xl:right-0 xl:mr-[23px]
      ">
        <p className="font-bold text-[16px] leading-[26px] tracking-widest">
          {item.name}
        </p>
        <p className="font-normal italic text-[12px] leading-[26px] tracking-[0.10em]">
          {item.role}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
