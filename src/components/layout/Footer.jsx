"use client";

import React, { useState } from "react";
const logo = "/images/logo.webp";
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  TwitterIcon,
} from "../icons/CommonIcons.jsx";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz3qu2kQeaGAmKwWM9qdn3A3zfOXB2Q3XOZ0JThqmuf0EmBNXf4U_C3Y5Zd3OS9J1uFaA/exechttps://script.google.com/macros/s/AKfycbx4WJ0c7kgmmC_PC5urbal6LDgQiE3sE_SoZCoNjS6oOH37D0SuNEEHXJrgQfJvzP_3Mg/exec";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    
    // Quick validation
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setMessage("Please enter a valid email");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    
    setLoading(true);
    
    try {
      // Simple fetch without worrying about response
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: trimmedEmail,
          source: 'website_footer'
        })
      });
      
      // Show success message
      setMessage("Thanks! We'll keep you updated.");
      setEmail("");
      
    } catch (error) {
      // Silent fail - still show success to user
      setMessage("Thanks! We've noted your interest.");
      setEmail("");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <footer className="bg-linear-to-b from-[#BECCDD] to-[#5B7C99] text-[#1E1E1E] py-14 px-4 sm:px-10 md:px-16 lg:px-20 overflow-hidden">
      <div className="bg-[#F8F8F8]/50 rounded-[30px] px-6 sm:px-10 xl:px-20 pt-10 md:pt-14 pb-[25px]">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 pb-0 md:pb-8">
          {/* Logo */}
          <Link href="/" className="transition duration-300 hover:scale-105 inline-block">
            <div className="flex items-center order-1 lg:order-1 md:justify-center lg:justify-start">
              <img src={logo} alt="Vibexio" className="w-[44px] h-[38px]" />
              <h1 className="mt-1 lg:mt-4 text-[16px] tracking-[0.05em]">Vibexio.ai</h1>
            </div>
          </Link>

          {/* Text */}
          <div className="text-center order-2 lg:order-2 w-full lg:w-auto">
            <h3 className="font-semibold xl:font-bold text-[14px] lg:text-[18px] tracking-[0.05em] mt-1 lg:mt-4">
              Stay Informed, Get Our Insights
            </h3>
          </div>

          {/* Email Collection Form */}
          <div className="flex flex-col w-full sm:w-auto justify-center gap-1 md:gap-3 order-3 lg:order-3">
            <form onSubmit={handleSubscribe} className="flex flex-row gap-2 md:gap-3 items-start">
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="px-4 h-9 w-full xl:w-[216px] rounded-md bg-white text-sm placeholder-[#B0B5B7] focus:outline-none focus:ring-2 focus:ring-[#5B7C99] border border-gray-300"
                  disabled={loading}
                  required
                />
                {message && (
                  <div 
                    className="absolute top-full left-0 mt-1 text-xs px-2 py-1 rounded whitespace-nowrap"
                    style={{
                      color: '#5B7C99', // Your brand color
                      backgroundColor: 'rgba(91, 124, 153, 0.1)', // Light tint of brand color
                      border: '1px solid rgba(91, 124, 153, 0.3)',
                      fontWeight: '500'
                    }}
                  >
                    {message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#5B7C99] text-white px-3 xl:px-6 w-[90px] xl:w-[119px] h-9 rounded-md text-sm font-medium hover:bg-[#4c6d85] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5 md:gap-10 xl:gap-0 text-sm pb-5">

          {/* Left Grid Section - Stays pinned to left */}
          <div className="w-full md:w-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20 xl:gap-[100px] mt-5 md:mt-0">

            {/* Section 1 - Ecosystem */}
            <div className="flex flex-col mt-[10px] md:mt-[18px] text-center md:text-left">
              <h4 className="mb-4 md:mb-6 font-bold text-[16px] tracking-[0.05em] uppercase transition duration-200 hover:scale-103">
                <Link href="/ecosystem">Marketplace</Link>
              </h4>
              <ul className="space-y-[10px] md:space-y-[18px] text-[16px] tracking-[0.05em] xl:pl-5">
                <li><Link href="/kubyn" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold">Kubyn</Link></li>
                <li><Link href="/clario" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold">Clario</Link></li>
                <li>Edutech</li>
                <li>Healthcare</li>
              </ul>
            </div>

            {/* Section 2 - Solutions */}
            <div className="flex flex-col mt-[10px] md:mt-[18px] text-center md:text-left">
              <h4 className="mb-4 md:mb-6 font-bold text-[16px] tracking-[0.05em] uppercase">
                Solutions
              </h4>
              <ul className="space-y-[10px] md:space-y-[18px] text-[16px] tracking-[0.05em] xl:pl-5">
                <li><Link href="/itsolutions" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold w-[100px]">Development</Link></li>
                <li><Link href="/aisolutions" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold">AI/ML</Link></li>
                <li>Design</li>
                <li>Transform</li>
              </ul>
            </div>

            {/* Section 3 - Company */}
            <div className="flex flex-col mt-[10px] md:mt-[18px] text-center md:text-left">
              <h4 className="mb-4 md:mb-6 font-bold text-[16px] tracking-[0.05em] uppercase">
                Company
              </h4>
              <ul className="space-y-[10px] md:space-y-[18px] text-[16px] tracking-[0.05em] xl:pl-5">
                <li><Link href="/inside" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold">Inside</Link></li>
                <li><Link href="/pathways" className="transition duration-300 hover:scale-110 inline-block hover:font-semibold">Pathways</Link></li>
              </ul>
            </div>

          </div>

          {/* Right Address Section - Stays pinned to right */}
          <div className="w-full md:w-auto mt-[18px] md:mt-[10px] flex flex-col md:flex-row lg:flex-col text-center  md:text-left leading-[22px] lg:w-[300px] xl:w-[347px] gap-5 md:gap-10 lg:gap-3">

            {/* Registered Address */}
            <div className="flex flex-col">
              <p className="font-semibold xl:font-bold">Registered Address:</p>
              <p className="text-[12px] leading-5 tracking-[0.05em] mt-2">
                290/9, Anekollu, Dodda Belur, Kelamangalam,<br />
                Krishnagiri, Tamil Nadu, 635113
              </p>
            </div>

            {/* Operating Address */}
            <div className="flex flex-col">
              <p className="font-semibold xl:font-bold">Operating Address:</p>
              <p className="text-[12px] leading-5 tracking-[0.05em] mt-2">
                13/64, 20th cross street,<br />
                Kolathur, Chennai - 600099
              </p>
            </div>
            {/* Mobile Only Message - Show only on mobile */}
            <div className="hidden lg:block">
              <div className="flex flex-col">
                <p className="font-semibold xl:font-bold text-[14px] leading-[25px] tracking-[0.05em]">
                  From India to international markets, Vibexio drives
                  intelligent solutions for businesses everywhere.
                </p>
              </div>
            </div>

          </div>

        </div>

        <p className="block lg:hidden font-semibold xl:font-bold text-[14px] leading-[25px] tracking-[0.05em] p-5 text-center">
          From India to international markets, Vibexio drives intelligent solutions for businesses everywhere.
        </p>

        {/* BOTTOM SECTION */}
        <div className="lg:px-5 py-5 border-t border-b border-[#5C7D99]/40 
                flex flex-col md:flex-row items-center justify-between 
                gap-4 text-[13px]">

          {/* Left Text */}
          <p className="text-[15px] lg:text-[16px] tracking-[0.05em] text-center md:text-left">
            Vibexio AI Consulting & Solutions
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 md:gap-8 lg:gap-10 justify-center md:justify-end">

            <a
              href="https://in.linkedin.com/company/vibexio" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-115 inline-block">
              <LinkedInIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/vibexio_ai?igsh=c3I2ajg2bTQyaGZq" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-115 inline-block">
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://www.youtube.com/@Vibe-Xio" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-115 inline-block">
              <YouTubeIcon size={24} />
            </a>
            <a
              href="https://www.facebook.com/p/VibeXio-AI-61574111908388/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-115 inline-block">
              <FacebookIcon size={24} />
            </a>
            <a
              href="https://x.com/VibeXio_ai" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:scale-115 inline-block">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="
    mt-[29px] text-[14px] md:text-[16px] leading-[25px] tracking-[0.05em]
    text-center capitalize
    flex flex-col md:flex-row items-center justify-center
    gap-2 md:gap-3
">
          <span>Copyright © 2025 VIBEXIO.AI</span>
          <span className="hidden lg:block">|</span>
          <span>All Rights Reserved</span>
          <span className="hidden lg:block">|</span>

          <Link
            href="/privacypolicies"
            className="transition duration-200 hover:scale-105 inline-block hover:font-semibold"
          >
            Privacy policies
          </Link>

          <span className="hidden lg:block">|</span>

          <Link
            href="/privacypolicies"
            className="transition duration-200 hover:scale-105 inline-block hover:font-semibold"
          >
            Terms & Conditions
          </Link>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
