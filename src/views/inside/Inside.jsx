"use client";

import React from 'react'
import InsideLandingPage from './InsideLandingPage.jsx'
import MissonVision from './MissonVision.jsx'
import Principles from './Principles.jsx'
import RealStory from './RealStory.jsx'
import WeBecame from './WeBecame.jsx'
import Minds from './Minds.jsx'
import BusinessesChoose from './BusinessesChoose.jsx'
import OurJourney from './OurJourney.jsx'
import OurCommitment from './OurCommitment.jsx'
import OurStory from './OurStory.jsx'

const Inside = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <InsideLandingPage />
            <Principles />
            <OurJourney />
            <MissonVision />
            <RealStory />
            <WeBecame />
            <Minds />
            <BusinessesChoose />
            <OurCommitment />
            <OurStory />
        </div>
    )
}

export default Inside
