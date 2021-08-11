import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import RedSection from './RedSection';
import YellowSection from './YellowSection';
import Perks from './Perks';
import Reviews from './Reviews';
import Purchase from './Purchase';
import Footer from './Footer';

const Landing = () => {
    return (
        <div className="landing">
            <Nav/>
            <Hero/>
            <RedSection/>
            <YellowSection/>
            <Perks/>
            <Reviews/>
            <Purchase/>
            <Footer/>
        </div>
    )
}

export default Landing;