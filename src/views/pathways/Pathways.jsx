"use client";

import React from 'react'
import PathwaysLandingPage from './PathwaysLandingPage.jsx'
import Join from './Join.jsx'
import WeWork from './WeWork.jsx'
import WeLooking from './WeLooking.jsx'
import Positions from './Positions.jsx'
import LifeAtVibexio from './LifeAtVibexio.jsx'
import Testimonials from './Testimonials.jsx'
import HiringProcess from './HiringProcess.jsx'
import BuildTheFuture from './BuildTheFuture.jsx'

const Pathways = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <PathwaysLandingPage />
            <Join />
            <WeWork />
            <WeLooking />
            <Positions />
            <LifeAtVibexio />
            <Testimonials />
            <div>
                <HiringProcess />
            </div>
            <BuildTheFuture />

        </div >
    )
}

export default Pathways
