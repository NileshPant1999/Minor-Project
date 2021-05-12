import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {



    return (
        <>
            <HeroSection />
            <InfoSection { ...homeObjOne} />
            
            <InfoSection { ...homeObjTwo} />
            <Services />
            <InfoSection { ...homeObjFour} />
            <InfoSection { ...homeObjThree} />
        </>
    )
}

export default Home;
