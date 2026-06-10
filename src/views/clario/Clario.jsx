"use client";

import React from 'react';
import LandingClario from './LandingClario.jsx';
import ManualDocumentHandling from './ManualDocumentHandling.jsx';
import WhyClario from './WhyClario.jsx';
import OcrFeaturesSection from './OcrFeaturesSection.jsx';
import Ocr3Steps from './Ocr3Steps.jsx';
import ClarioSectors from './ClarioSectors.jsx';
import ClarioReview from './ClarioReview.jsx';
import ClarioAutomationCTA from './ClarioAutomationCTA.jsx';


const Clario = () => {
    return (
        <div className='mt-20 bg-[#F8F8F8]'>
            <LandingClario />
            <div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                    <ManualDocumentHandling />
                </div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-10 xl:px-20'>
                    <WhyClario />
                </div>
                <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                    <OcrFeaturesSection />
                </div>
            </div>
            <Ocr3Steps />
            <div className="px-4 sm:px-10 md:px-16 lg:px-20">
                <ClarioSectors />
            </div>
            <ClarioReview />
            <ClarioAutomationCTA />


        </div >
    );
}

export default Clario;
