"use client";

/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Face2 } from "../../components/icons/CommonIcons.jsx";

const StrategicEdge = ({ onStepChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const strategicPoints = [
    {
      title: "Strategic By Design",
      description:
        "We blend deep technical expertise with strategic foresight, ensuring every AI system, automation, and digital solution aligns seamlessly with your core business goals. From roadmap to rollout, we're not just building tools we're architecting long-term outcomes.",
    },
    {
      title: "Tailored, Not Templated",
      description:
        "No two businesses are alike. Every AI model, system integration, and digital strategy we create is custom built to match your operations, challenges, and ambitions from startups in Chennai to global enterprises.",
    },
    {
      title: "End-to-End Expertise",
      description:
        "From ideation to deployment and beyond, we offer comprehensive expertise in AI development, process automation, data strategy, and digital consulting, ensuring your transformation journey is seamless.",
    },
    {
      title: "Enterprise-Grade, Future-Ready",
      description:
        "Our solutions are designed to evolve with you whether you're modernizing legacy systems or scaling globally. Every VibeXio system is engineered for growth, security, and adaptability.",
    },
    {
      title: "Partnership Mindset",
      description:
        "We don't just deliver projects we build lasting relationships. With proactive communication, transparency, and long term alignment, we operate as an extension of your team to ensure continuous success.",
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    if (isPaused) return;

    autoScrollRef.current = setInterval(() => {
      setVisible(false);
      
      setTimeout(() => {
        setActiveIndex((prev) => {
          const nextIndex = prev === strategicPoints.length - 1 ? 0 : prev + 1;
          if (onStepChange) onStepChange(nextIndex + 1);
          return nextIndex;
        });
        
        setVisible(true);
      }, 200);
    }, 4000); // Change every 4 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused, strategicPoints.length, onStepChange]);

  // Manual navigation functions
  const goToNext = () => {
    if (!visible) return;
    
    setVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev === strategicPoints.length - 1 ? 0 : prev + 1;
        if (onStepChange) onStepChange(nextIndex + 1);
        return nextIndex;
      });
      setVisible(true);
    }, 200);
  };

  const goToPrev = () => {
    if (!visible) return;
    
    setVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => {
        const prevIndex = prev === 0 ? strategicPoints.length - 1 : prev - 1;
        if (onStepChange) onStepChange(prevIndex + 1);
        return prevIndex;
      });
      setVisible(true);
    }, 200);
  };

  // Handle click to pause/resume
  const handleContentClick = () => {
    setIsPaused(!isPaused);
  };

  // Handle manual navigation buttons
  const handleManualNavigation = (direction) => {
    setIsPaused(true); // Pause auto-scroll when manually navigating
    
    if (direction === 'next') {
      goToNext();
    } else {
      goToPrev();
    }
    
    // Resume auto-scroll after 8 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden select-none px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-[90px] xl:pr-[90px] mt-12 sm:mt-16 md:mt-20 lg:mt-[190px] xl:mt-[203px]"
    >
    

      {/* Container for flex layout on larger screens */}
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-start lg:items-center w-full">
        
        {/* Left Side */}
        <div className="w-full lg:w-auto mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="font-bold text-[32px] sm:text-[40px] md:text-[48px] xl:text-[52px] leading-[1.2] sm:leading-[1.3] xl:leading-[69px] tracking-[0.05em]">
            The <span className="text-[#5B7C99]">Strategic</span>{" "}
            <br className="hidden hidden:block" /> Edge
          </h1>
          <p className="w-full lg:w-[289px] text-center lg:text-left mt-6 sm:mt-8 md:mt-10 xl:mt-[76px] font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[1.8] sm:leading-9 xl:leading-10 tracking-[0.05em]">
            Choosing the right partner for AI and digital transformation is
            critical and that's where Vibexio delivers unmatched value.
          </p>
        </div>

        {/* Right Side Scroll Animation */}
        <div 
          className="w-full lg:w-[60%] xl:w-auto relative"
          onClick={handleContentClick}
        >
         

          {/* Manual navigation buttons for mobile */}
          <div className="lg:hidden flex justify-center space-x-4 mb-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleManualNavigation('prev');
              }}
              className="border border-[#5B7C99] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5B7C99] hover:bg-opacity-10 transition-colors"
              aria-label="Previous point"
            >
              <svg className="w-5 h-5 text-[#5B7C99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-700 font-medium">
                {activeIndex + 1} / {strategicPoints.length}
              </span>
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleManualNavigation('next');
              }}
              className="border border-[#5B7C99] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#5B7C99] hover:bg-opacity-10 transition-colors"
              aria-label="Next point"
            >
              <svg className="w-5 h-5 text-[#5B7C99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* For mobile/tablet: Stack layout */}
          <div className="lg:hidden w-full">
            <div className="relative mb-8">
              {/* Title */}
              <div className="font-bold text-[18px] text-center sm:text-[20px] tracking-[0.05em] mb-4 relative h-[40px] overflow-hidden">
                <AnimatePresence mode="wait">
                  {visible && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {strategicPoints[activeIndex].title}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Horizontal line + dot for mobile */}
              <div className="relative mb-6">
                <div className="w-full h-px bg-[#5B7C99]/30"></div>
                <AnimatePresence mode="wait">
                  {visible && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-2 h-2 bg-[#5B7C99] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="w-full relative text-center h-auto min-h-[120px] sm:min-h-[140px]">
                <AnimatePresence mode="wait">
                  {visible && (
                    <motion.p
                      key={activeIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="font-light text-[15px] sm:text-[16px] leading-[1.8] sm:leading-[34px] tracking-[0.07em]"
                    >
                      {strategicPoints[activeIndex].description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* For desktop: Original layout with hover instructions */}
          <div className="hidden lg:flex items-center justify-end lg:justify-start xl:justify-end mt-0 xl:mt-20 z-20 relative">
            {/* Title with FIXED WIDTH */}
            <div className="font-bold text-[18px] lg:text-[16px] xl:text-[16px] tracking-[0.05em] mr-4 lg:mr-6 xl:mr-5 relative h-10 lg:h-[50px] xl:h-[60px] overflow-hidden flex items-center w-[220px] lg:w-[240px] xl:w-[300px]">
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full text-right pr-2"
                  >
                    {strategicPoints[activeIndex].title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vertical line + dot - FIXED POSITION */}
            <div className="relative flex flex-col items-center mr-4 lg:mr-6 xl:mr-10">
              <div className="h-[120px] lg:h-[180px] xl:h-[232px] w-px bg-[#5B7C99]/30"></div>
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-2 h-2 bg-[#5B7C99] rounded-full absolute top-1/2 transform -translate-y-1/2"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="pl-0 lg:pl-4 xl:pl-10 w-full lg:w-[350px] xl:w-[447px] relative h-[120px] lg:h-[150px] xl:h-[170px] overflow-hidden">
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute top-0 left-0 font-light text-[15px] lg:text-[15.5px] xl:text-[16px] leading-[1.7] lg:leading-[30px] xl:leading-[34px] tracking-[0.07em]"
                  >
                    {strategicPoints[activeIndex].description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Face icon - Responsive positioning and sizing */}
      <div className="hidden lg:block absolute right-2 sm:right-4 md:right-6 lg:right-8 xl:right-0 -top-6 sm:-top-8 md:-top-10 lg:-top-12 xl:-top-20 z-10">
        <Face2 className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px]" />
      </div>
    </section>
  );
};

export default StrategicEdge;