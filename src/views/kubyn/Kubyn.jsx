"use client";

import React from 'react';
import LandingKubyn from './LandingKubyn.jsx';
import FinanceWithAI from './FinanceWithAI.jsx';
import KubynIntelligent from './KubynIntelligent.jsx';
import WhoItEmpowers from './WhoItEmpowers.jsx';
import NextGenIntelligence from './NextGenIntelligence.jsx';

const Kubyn = () => {
    return (
        <div className='mt-20'>
            <LandingKubyn />
            <div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                    <FinanceWithAI />
                    <KubynIntelligent />
                    <WhoItEmpowers />
                </div>
                <NextGenIntelligence />
            </div>
        </div>
    );
}

export default Kubyn;
