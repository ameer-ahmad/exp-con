import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import bgImage1 from '../img/bgImage1.png';
import bgImage2 from '../img/bgImage2.png';
import bgImage3 from '../img/bgImage3.png';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination,Autoplay
  } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination]);

const Hero = () => {

    return (
            <Swiper autoplay={{"delay": 10000, "disableOnInteraction": false}} pagination={{"clickable":true}} loop={true} className="mySwiper hero">
                <SwiperSlide><img src={bgImage1} alt="concert" /></SwiperSlide>
                <SwiperSlide><img src={bgImage2} alt="concert" /></SwiperSlide>
                <SwiperSlide><img src={bgImage3} alt="concert" /></SwiperSlide>
                <div className="content">
                    <h2>INTERACTIVE CONCERT EXPERIENCE</h2>
                    <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                    <Link to="/pricing"><button>TRY IT NOW</button></Link>
                </div>
            </Swiper>
    )
}

export default Hero;