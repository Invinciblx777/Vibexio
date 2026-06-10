"use client";

import React from 'react';
import LandingEcosystem from './LandingEcosystem.jsx';
import Products from './Products.jsx';

const Ecosystem = () => {
    return (
        <div className='bg-[#F8F8F8] pb-10'>
            <LandingEcosystem/>
            <div className='px-4 sm:px-10 md:px-16 lg:px-20'> <Products/></div>
        </div>
    );
}

export default Ecosystem;
