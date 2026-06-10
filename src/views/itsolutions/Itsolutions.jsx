"use client";

import React from 'react';
import LandingItsolutions from './LandingItsolutions.jsx';
import DigitalITServices from './DigitalITServices.jsx';
import DigitalChallenges from './DigitalChallenges.jsx';
import ScalableSectorVision from './ScalableSectorVision.jsx';
import OurDigitalExcellence from './OurDigitalExcellence.jsx';
import AIDigitalCombo from './AIDigitalCombo.jsx';
import DesignThinking from './DesignThinking.jsx';


const Itsolutions = () => {
    return (
        <div className='mt-20 bg-[#F8F8F8] pb-5 md:pb-0'>
            <LandingItsolutions />
            <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                <DigitalITServices />
            </div>
            <div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                    <DesignThinking />
                    <DigitalChallenges />
                    <ScalableSectorVision />
                </div>
            </div>
            <OurDigitalExcellence />
            <div>
                <AIDigitalCombo />
            </div>
        </div>
    );
}

export default Itsolutions;
