import React from 'react';
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero">
            <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
            <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
            <Link to="/pricing"><button>TRY IT NOW</button></Link>
        </div>
    )
}

export default Hero;