"use client";

import React from 'react';
import LandingAIsolutions from './LandingAIsolutions.jsx';
import CoreAIServices from './CoreAIServices.jsx';
import AIPoweredEnterprise from './AIPoweredEnterprise.jsx';
import VibexioBusinessOverview from './VibexioBusinessOverview.jsx';
import IntelligentBuildFlow from './IntelligentBuildFlow.jsx';
import StrategicPartnerAI from './StrategicPartnerAI.jsx';
import AIDigitalCTA from './AIDigitalCTA.jsx';


const AIsolutions = () => {
    return (
        <div className='mt-20 bg-[#F8F8F8] pb-5 md:pb-0'>
            <LandingAIsolutions />
            <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                <CoreAIServices />
                <AIPoweredEnterprise />
            </div>
            <div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                    <StrategicPartnerAI />
                    <VibexioBusinessOverview />
                </div>
            </div>
            <IntelligentBuildFlow />
            <div>
                <AIDigitalCTA />
            </div>
        </div >
    );
}

export default AIsolutions;
