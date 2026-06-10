"use client";

import React, { useState, useEffect } from "react";
import {
  CallIcon,
  MailIcon,
  MsgIcon,
  WhatsappIcon,
} from "./icons/CommonIcons.jsx";

const FloatingMenu = () => {
  const [openMain, setOpenMain] = useState(false);
  const [openIcons, setOpenIcons] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1023);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (openMain) {
      const timer = setTimeout(() => setOpenIcons(true), 300);
      return () => clearTimeout(timer);
    } else {
      setOpenIcons(false);
    }
  }, [openMain]);

  useEffect(() => {
    if (!isMobile) return;

    const handleOutsideClick = (e) => {
      const menu = document.getElementById("floating-menu");

      if (menu && !menu.contains(e.target)) {
        setOpenMain(false);
        setOpenIcons(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile]);

  const handleMainButtonClick = () => {
    if (isMobile) {
      setOpenMain((prev) => !prev);
    }
  };

  const handleMainButtonHover = () => {
    if (!isMobile) {
      setOpenMain(true);
      setOpenIcons(true);
    }
  };

  const handleMainButtonLeave = () => {
    if (!isMobile) {
      setOpenIcons(false);
      setOpenMain(false);
    }
  };

  return (
    <div
      id="floating-menu"
      className="fixed bottom-8 right-6 z-50"
      onMouseEnter={handleMainButtonHover}
      onMouseLeave={handleMainButtonLeave}
    >
      <div className="relative">

        <a
          href="https://wa.me/916374404451"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => isMobile && e.stopPropagation()}
          className={`first-icon float-icon absolute w-20 h-20 flex items-center justify-center ${
            openIcons ? "float-open" : "float-close"
          }`}
        >
          <WhatsappIcon />
        </a>

        <a
          href="tel:+916374404451"
          onClick={(e) => isMobile && e.stopPropagation()}
          className={`second-icon float-icon absolute w-20 h-20 flex items-center justify-center ${
            openIcons ? "float-open" : "float-close"
          }`}
        >
          <CallIcon />
        </a>

        <a
          href="mailto:contact@vibexio.ai"
          onClick={(e) => isMobile && e.stopPropagation()}
          className={`third-icon float-icon absolute w-20 h-20 flex items-center justify-center ${
            openIcons ? "float-open" : "float-close"
          }`}
        >
          <MailIcon />
        </a>
      </div>

      <div
        className="
          w-20 h-20 
          flex items-center justify-center 
          hover:scale-110 transition
          cursor-pointer z-20
        "
        onClick={handleMainButtonClick}
      >
        <MsgIcon className="w-7 h-7 text-white" />
      </div>
    </div>
  );
};

export default FloatingMenu;
