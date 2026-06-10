"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const logo = "/images/logo.webp";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [ecoOpen, setEcoOpen] = useState(false);
  const [colOpen, setColOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
        setEcoOpen(false);
        setColOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-[0px_0px_9px_0px_#BECCDD] backdrop-blur-xl
 rounded-b-[40px]">
      <div className="w-full flex items-center justify-between px-4 sm:px-10 md:px-16 lg:px-20 py-4">

        <Link href="/">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-[38px] xl:w-[42px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-20 text-[16px] text-[#121212] font-medium">
          <li className="group cursor-pointer xl:w-[91px] h-[40px] flex items-center justify-center rounded-[20px] transition-all duration-200 hover:bg-[#42617E]">
            <Link
              href="/inside"
              className="font-normal not-italic text-[13px] xl:text-[14px] leading-[25px] tracking-[0px] uppercase text-[#121212] group-hover:text-[#F8F8F8]"
            >
              INSIDE
            </Link>
          </li>

          <li className="relative group cursor-pointer w-[156px] h-[40px] flex items-center justify-center rounded-[20px] transition-all duration-200 hover:bg-[#42617E]">

            <span className="flex items-center gap-1 font-normal not-italic text-[13px] xl:text-[14px] leading-[25px] tracking-[0px] uppercase text-[#121212] group-hover:text-[#F8F8F8]">
              ECOSYSTEM <ChevronDown />
            </span>

            {/* Dropdown */}
            <div className="absolute top-[50px] left-0 w-[156px] h-[140px] bg-[#F8F8F8] rounded-[5px] border-t-[3px] border-[#5B7C99] opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md flex flex-col items-center justify-center">
              <ul className="flex flex-col justify-center px-4 gap-5">
                <li className="h-[25px] flex items-center text-[16px] font-normal uppercase text-black cursor-pointer hover:text-[#42617E]">
                  <Link href="/ecosystem" >MarketPlace</Link>
                </li>
                <li className="h-[25px] flex items-center text-[16px] font-normal uppercase text-black cursor-pointer hover:text-[#42617E]">
                  <Link href="/kubyn" >Kubyn</Link>
                </li>
                <li className="h-[25px] flex items-center text-[16px] font-normal uppercase text-black cursor-pointer hover:text-[#42617E]">
                  <Link href="/clario">Clario</Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="relative group cursor-pointer w-[160px] h-[40px] flex items-center justify-center rounded-[20px] transition-all duration-200 hover:bg-[#42617E] uppercase">

            <span className="flex items-center gap-1 font-normal not-italic text-[13px] xl:text-[14px] leading-[25px] tracking-[0px] uppercase text-[#121212] group-hover:text-[#F8F8F8]">
              Solutions <ChevronDown />
            </span>

            {/* Dropdown */}
            <div className="absolute top-[50px] left-0 w-[160px] h-[115px] bg-[#F8F8F8] rounded-[5px] border-t-[3px] border-[#5B7C99] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-md flex flex-col items-center justify-center">
              <ul className="flex flex-col justify-center px-4 gap-5">
                <li className="h-[25px] flex items-center text-[16px] font-normal uppercase text-black cursor-pointer hover:text-[#42617E]">
                  <Link href="/aisolutions" >Ai Solution</Link>
                </li>

                <li className="h-[25px] flex items-center text-[16px] font-normal uppercase text-black cursor-pointer hover:text-[#42617E]">
                  <Link href="/itsolutions">it solution</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="group cursor-pointer w-[121px] h-[40px] flex items-center justify-center rounded-[20px] transition-all duration-200 hover:bg-[#42617E] ">
            <Link href="/pathways" className="font-normal not-italic text-[13px] xl:text-[14px] leading-[25px] tracking-[0px] uppercase text-[#121212] group-hover:text-[#F8F8F8]">PATHWAYS</Link>
          </li>

        </ul>

        {/* Desktop Button */}
        <Link href="/collaborate">
          <button className="group hidden lg:block bg-[#BECCDD] text-[#121212] px-[42px] py-[9px] text-[16px] rounded-[30px] transition duration-300 hover:bg-[#121212] hover:cursor-pointer">
            <span className="font-normal not-italic text-[13px] xl:text-[14px] leading-[25px] tracking-[0px] uppercase text-[#121212] group-hover:text-[#F8F8F8]">COLLABORATE</span>
          </button>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-xl shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-[700px] pb-4" : "max-h-0 py-0"
          }`}
      >
        <ul className="flex flex-col text-[18px] text-[#121212] font-medium">

          {/* Inside */}
          <li onClick={() => setOpen(false)} className="h-12 flex items-center justify-between cursor-pointer px-4 sm:px-10 md:px-16 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]">
            <Link href="/inside" className="font-normal not-italic text-[16px] leading-[25px] tracking-[0px] uppercase text-[#121212] font-[Kollektif]">INSIDE</Link>
          </li>

          {/* Ecosystem DROPDOWN */}
          <li className="cursor-pointer w-full px-4 sm:px-10 md:px-16 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]">
            <div
              className="h-12 flex items-center justify-between cursor-pointer"
              onClick={() => setEcoOpen(!ecoOpen)} >
              {/* TEXT -> Routing only */}
              <span
                className="font-normal not-italic text-[16px] leading-[25px] tracking-[0px] uppercase text-[#121212] font-[Kollektif]"
                onClick={(e) => {
                  e.stopPropagation();
                  setEcoOpen(!ecoOpen)      // avoid triggering dropdown toggle
                }}
              >
                ECOSYSTEM
              </span>

              {/* ICON -> also toggles dropdown */}
              <ChevronDown
                onClick={(e) => {
                  e.stopPropagation();       // prevent double toggle
                  setEcoOpen(!ecoOpen);
                }}
                className={`cursor-pointer transition-transform duration-300 ${ecoOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </div>

            {/* Submenu */}
            <div
              className={`transition-all duration-300 overflow-hidden ${ecoOpen ? "max-h-[200px] mt-0" : "max-h-0"
                }`}
            >
              <ul className="flex flex-col gap-4 pl-4 text-[16px] mb-3">
                <li>
                  <Link
                    href="/ecosystem"
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-normal uppercase text-black font-[Kollektif]"
                  >
                    MarketPlace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kubyn"
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-normal uppercase text-black font-[Kollektif]"
                  >
                    Kubyn
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clario"
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-normal uppercase text-black font-[Kollektif]"
                  >
                    Clario
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Collaborate DROPDOWN */}
          <li className="cursor-pointer w-full px-4 sm:px-10 md:px-16 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]">
            <div
              className="h-12 flex items-center justify-between cursor-pointer"
              onClick={() => setColOpen(!colOpen)}
            >

              {/* TEXT */}
              <span
                className="font-normal not-italic text-[16px] leading-[25px] tracking-[0px] uppercase text-[#121212] font-[Kollektif]"
                onClick={(e) => {
                  e.stopPropagation();
                  setColOpen(!colOpen)
                }}
              >
                Solutions
              </span>

              {/* ICON */}
              <ChevronDown
                onClick={(e) => {
                  e.stopPropagation(); // prevent parent from toggling again
                  setColOpen(!colOpen);
                }}
                className={`cursor-pointer transition-transform duration-300 ${colOpen ? "rotate-180" : "rotate-0"
                  }`}
              />

            </div>


            {/* SUBMENU */}
            <div
              className={`transition-all duration-300 overflow-hidden ${colOpen ? "max-h-[200px] mt-3" : "max-h-0"
                }`}
            >
              <ul className="flex flex-col gap-4 pl-4 text-[16px] mb-3">
                <li>
                  <Link
                    href="/aisolutions"
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-normal uppercase text-black font-[Kollektif]"
                  >
                    AI Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/itsolutions"
                    onClick={() => setOpen(false)}
                    className="text-[14px] font-normal uppercase text-black pb-3 font-[Kollektif]"
                  >
                    IT Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Pathways */}
          <li onClick={() => setOpen(false)} className="h-12 flex items-center justify-between cursor-pointer px-4 sm:px-10 md:px-16 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]">
            <Link href="/pathways" className="font-normal not-italic text-[16px] leading-[25px] tracking-[0px] uppercase text-[#121212] font-[Kollektif]">PATHWAYS</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="mt-6 flex justify-center">
          <button onClick={() => setOpen(false)} className="bg-[#BECCDD] px-[40px] py-[10px] rounded-[30px]  font-normal not-italic text-[16px] leading-[25px] tracking-[0px] uppercase text-[#121212]">
            <Link href="/collaborate">COLLABORATE</Link>
          </button>
        </div>
      </div>

    </nav >
  );
};

export default Navbar;