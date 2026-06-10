"use client";

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Helmet from "@/components/common/Helmet";
import SEO from "../../components/common/SEO.jsx";

const hand = "/images/home/hand.webp";
import CurveIcon from "../../components/icons/CurveIcon.jsx";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";
import HomeNoiseBackground from "../../components/icons/HomeNoiseBackground.jsx";

const words = ["Thinks", "Learns", "Builds", "Empowers", "Adapts", "Evolves"];

const paragraphs = [
  "Clario - AI powered data extraction & analytics that converts raw data into actionable insights.",
  "Edtech - Adaptive AI learning platform that personalizes education and improves learning outcomes.",
  "Kubyn - Your AI personal finance manager automating budgeting, tracking expenses, and simplifying money management.",
  "Custom AI & Software Solutions – Vibexio’s tailored AI development transforms business processes and accelerates growth.",
  "Health care - AI healthcare automation optimizing hospital workflows and improving patient outcomes.",
  "The Vibexio ecosystem uses custom AI and software development to integrate innovation, design, and automation, evolving intelligent enterprises.",
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useRouter().push;

  const handlePreStringTyped = (arrayPos) => {
    setVisible(false);
    setTimeout(() => {
      setActiveIndex(arrayPos);
      setVisible(true);
    }, 80);
  };

  return (
    <>
      {/* SEO META – HOME PAGE */}
      <SEO
        title="Enterprise Grade AI & Custom Software Development"
        description="Vibexio builds AI-powered automation, OCR, and custom software solutions that help businesses scale smarter. Built in India, trusted worldwide."
        canonical="https://vibexio.ai/"
      />

      {/* PAGE UI */}
      <div
        className="
          relative w-full
          h-[700px] md:h-[856px] lg:h-[640px]
          bg-cover bg-center overflow-hidden
          mt-[76px]
          flex flex-col lg:flex-row
          bg-linear-to-b from-[#BECCDD] to-[#869EB6]
        "
      >
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
          <HomeNoiseBackground className="w-full h-full" />
        </div>

        {/* LEFT SIDE */}
        <div
          className="
            w-full
            pt-10 md:pt-12 lg:pt-[72px]
            px-6 md:px-10 lg:pl-[90px] xl:pl-[140px]
            text-center lg:text-left
            flex flex-col items-center lg:items-start z-20
          "
        >
          {/* Heading */}
          <h1
            className="
              font-bold Kollektif
              text-[40px] sm:text-[55px] md:text-[75px] lg:text-[85px]
              leading-[100%] tracking-[0.04em]
              text-[#BECCDD]
            "
            style={{
              WebkitTextStroke: "2px white",
              textShadow: "3px 6px 2px #00000040",
            }}
          >
            Vibexio creates
          </h1>

          {/* Typed Text */}
          <h4
            className="
              text-[38px] sm:text-[50px] md:text-[70px] lg:text-[80px]
              font-bold text-[#121212] mt-4
            "
          >
            <ReactTyped
              strings={words}
              typeSpeed={70}
              backSpeed={70}
              loop
              backDelay={1200}
              cursorChar="|"
              preStringTyped={handlePreStringTyped}
            />
          </h4>

          {/* Changing Paragraph */}
          <div className="relative w-full md:w-[450px] lg:w-[450px] xl:w-[513px] h-[90px] md:h-[110px] overflow-hidden mt-6">
            <AnimatePresence mode="wait">
              {visible && (
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 1, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: -100 }}
                  transition={{ duration: 0.4 }}
                  className="
                    absolute top-0 left-0
                    text-[#121212] italic
                    text-[16px] sm:text-[18px] md:text-[20px]
                    leading-[28px] sm:leading-[34px] md:leading-[38px]
                  "
                >
                  {paragraphs[activeIndex]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/collaborate")}
            className="
              mt-10 AvenirLTStd-medium
              px-5 py-2.5 sm:py-3.5
              bg-white rounded-[30px]
              text-[16px] md:text-[20px]
              font-medium flex items-center gap-2
              shadow-md cursor-pointer
              hover:bg-black hover:text-white
              group transition z-20
            "
          >
            Get Started
            <CurveIcon
              width={26}
              height={26}
              className="text-gray-800 group-hover:text-[#F8F8F8]"
            />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full lg:w-[45%]
            flex justify-center lg:block
            mt-6 lg:mt-0
          "
        >
          <img
            src={hand}
            alt="Vibexio AI-powered automation illustration"
            className="
              w-[450px] md:w-[500px] lg:w-[606px] xl:w-[736px]
              h-auto lg:h-[650px] xl:h-[750px]
              absolute bottom-0
              -right-7 lg:-right-20 z-10
            "
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
