"use client";

import React, { useRef } from 'react';
import ValueProposition from './ValueProposition.jsx';
import Form from './Form.jsx';
import LandingCollaborate from './LandingCollaborate.jsx';
import CollaborateBar from './CollaborateBar.jsx';

const Collaborate = () => {
    const formRef = useRef(null);
    return (
        <div className='mt-20 bg-[#F8F8F8]'>
            <LandingCollaborate formRef={formRef}/>
            <div className='px-4 sm:px-10 md:px-16 lg:px-20'>
                <ValueProposition />
                <CollaborateBar />
                <Form formRef={formRef} />
            </div>
        </div>
    );
}

export default Collaborate;
