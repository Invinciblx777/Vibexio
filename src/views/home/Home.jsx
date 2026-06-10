"use client";

import React from "react";
import LandingPage from "./LandingPage.jsx";
import Logo from "./Logo.jsx"
import WeAre from "./WeAre.jsx";
import ChooseUs from "./ChooseUs.jsx";
import Empower from "./Empower.jsx";
import StrategicEdge from "./StrategicEdge.jsx";
import Process from "./Process.jsx";
import CoreService from "./CoreService.jsx";
import Testimonials from "./Testimonials.jsx";
import Kural from "./Kural.jsx";

const Home = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <LandingPage />
            <Logo />
            <WeAre />
            <ChooseUs />
            <Empower />
            <StrategicEdge />
            {/* <Process /> */}
            <CoreService />
            <Testimonials />
            <Kural />
        </div>
    );
};

export default Home;