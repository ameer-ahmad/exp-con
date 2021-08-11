import React from 'react';
import Pricing from './Pricing';
import Perks from './Perks';
import Footer from './Footer';
import Nav from './Nav';

const PricingPage = () => {
    return (
        <div className="pricingPage">
            <Nav/>
            <Pricing/>
            <Perks/>
            <Footer/>
        </div>
    )
}

export default PricingPage;