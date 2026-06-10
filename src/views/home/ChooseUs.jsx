"use client";

import React, { useState, useEffect } from 'react'

const ChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [cardsPerSlide, setCardsPerSlide] = useState(3)
  const [windowWidth, setWindowWidth] = useState(0)

  const cards = [
    {
      number: "01",
      title: "AI That Drives Results",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[380px]"
    },
    {
      number: "02",
      title: "Digital Transformation, End to End",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[420px]"
    },
    {
      number: "03",
      title: "Data-Backed Strategies",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[370px]"
    },
    {
      number: "04",
      title: "User-Centric Design",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[410px]"
    },
    {
      number: "05",
      title: "Scalable Solutions",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[390px]"
    },
    {
      number: "06",
      title: "Long-Term Partnership",
      description: "We apply advanced AI to optimise operations and enable smarter, faster decisions.",
      width: "w-[370px]"
    }
  ]

  // Handle responsive cards per slide
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setWindowWidth(width)
      
      if (width >= 1280) {
        setCardsPerSlide(3) // xl: 3 cards per slide (2 slides total)
      } else if (width >= 1024) {
        setCardsPerSlide(2) // lg: 2 cards per slide (3 slides total)
      } else if (width >= 768) {
        setCardsPerSlide(2) // md: 2 cards per slide (3 slides total)
      } else {
        setCardsPerSlide(1) // sm: 1 card per slide (6 slides total)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Create slides based on cards per slide
  const createSlides = () => {
    const slides = []
    for (let i = 0; i < cards.length; i += cardsPerSlide) {
      slides.push(cards.slice(i, i + cardsPerSlide))
    }
    return slides
  }

  const slides = createSlides()
  const totalSlides = slides.length

  const handleNextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(prev => prev + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true)
      setCurrentSlide(prev => prev - 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const isPrevDisabled = currentSlide === 0 || isAnimating
  const isNextDisabled = currentSlide === totalSlides - 1 || isAnimating

  return (
    <div className='px-5 md:pl-15 lg:pl-16 xl:pl-[90px] mt-10 mb-10'>
      <div className="overflow-hidden">
        <div className="">
          <h1
            className="inline-block font-bold 
            text-[22px] md:text-[26px] lg:text-[28px] xl:text-[32px] leading-10 tracking-[0.05em]"
          >
            Why <span className='text-[#42617E]'>Choose Us</span>
          </h1>
          <div className='h-px w-full xl:w-[1200px] bg-black mt-[20px] md:mt-[22px] xl:mt-[24px]' />

          <p className='font-normal text-[14px] md:text-[18px] lg:text-[19px] xl:text-[20px] 
                       leading-[32px] md:leading-[36px] xl:leading-[40px] 
                       tracking-[0.05em] pt-[20px] md:pt-[22px] xl:pt-[24px]'>
            We combine strategic thinking, design precision, and AI innovation to help businesses scale smarter
            <br className='hidden lg:block' />
            and faster. Every solution we craft is data backed, user focused, and built for long term impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-6 md:mt-7 xl:mt-8">
          {/* Cards Container with Slide Animation */}
          <div className="relative overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${
                isAnimating ? 'opacity-90' : 'opacity-100'
              }`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="flex w-full flex-shrink-0 justify-start space-x-4 md:space-x-6 xl:space-x-8"
                >
                  {slide.map((card, cardIndex) => (
                    <div
                      key={`${slideIndex}-${cardIndex}`}
                      className={`flex ${
                        // On xl screens, use original widths
                        windowWidth >= 1280 
                          ? card.width 
                          : windowWidth >= 768 
                            ? 'w-[calc(50%-16px)] min-w-[300px]' // 2 cards with gap
                            : 'w-full' // 1 card full width
                      } flex-shrink-0`}
                    >
                      <div className={`flex w-full ${
                        windowWidth >= 1280 
                          ? 'mt-15 pl-4' 
                          : windowWidth >= 768 
                            ? 'mt-10 pl-3' 
                            : 'mt-8 pl-2'
                      }`}>
                        <div className={`${
                          windowWidth >= 1280 
                            ? 'h-[222px] w-[3px]' 
                            : windowWidth >= 768 
                              ? 'h-[200px] w-[2.5px]' 
                              : 'h-[180px] w-[2px]'
                        } flex flex-col items-center`}>
                          <div className="w-full h-1/2 bg-[#42617E] rounded-t-full"></div>
                          <div className="w-full h-1/2 bg-[#BECCDD] rounded-b-full"></div>
                        </div>

                        <div className={`${
                          windowWidth >= 1280 
                            ? 'pl-6 pt-4' 
                            : windowWidth >= 768 
                              ? 'pl-4 pt-3' 
                              : 'pl-3 pt-2'
                        }`}>
                          <h4 className={`font-bold ${
                            windowWidth >= 1280 
                              ? 'text-[20px] leading-[40px]' 
                              : windowWidth >= 768 
                                ? 'text-[18px] leading-[36px]' 
                                : 'text-[16px] leading-[32px]'
                          } tracking-[0.05em] text-[#42617E]`}>
                            {card.number}
                          </h4>
                          <h4 className={`font-bold ${
                            windowWidth >= 1280 
                              ? 'text-[20px] leading-[40px]' 
                              : windowWidth >= 768 
                                ? 'text-[18px] leading-[36px]' 
                                : 'text-[16px] leading-[32px]'
                          } tracking-[0.05em] text-[#42617E]`}>
                            {card.title}
                          </h4>
                          <p className={`font-semibold ${
                            windowWidth >= 1280 
                              ? 'text-[14px] leading-[40px] mt-4' 
                              : windowWidth >= 768 
                                ? 'text-[13px] leading-[36px] mt-3' 
                                : 'text-[12px] leading-[32px] mt-2'
                          } tracking-[0.05em]`}>
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-6 md:mt-10 xl:mt-16 space-x-4 pr-28">
            <button
              onClick={handlePrevSlide}
              disabled={isPrevDisabled}
              className={`border border-[#42617E] rounded-full 
                       w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[50px] xl:h-[50px]
                       flex items-center justify-center cursor-pointer transition-all duration-200
                       ${isPrevDisabled 
                         ? 'opacity-40 cursor-not-allowed border-gray-400' 
                         : ' hover:bg-opacity-10 active:scale-95'
                       }`}
              aria-label="Previous slide"
            >
              <svg 
                className={`w-[16px] md:w-[18px] xl:w-[20px] ${
                  isPrevDisabled ? 'text-gray-400' : 'text-[#42617E]'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextSlide}
              disabled={isNextDisabled}
              className={`border border-[#42617E] rounded-full 
                       w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[50px] xl:h-[50px]
                       flex items-center justify-center cursor-pointer transition-all duration-200
                       ${isNextDisabled 
                         ? 'opacity-40 cursor-not-allowed border-gray-400' 
                         : ' hover:bg-opacity-10 active:scale-95'
                       }`}
              aria-label="Next slide"
            >
              <svg 
                className={`w-[16px] md:w-[18px] xl:w-[20px] ${
                  isNextDisabled ? 'text-gray-400' : 'text-[#42617E]'
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default ChooseUs