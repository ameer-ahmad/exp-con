import React from 'react';
import smallSpeaker1 from '../img/smallSpeaker1.png';
import smallSpeaker2 from '../img/smallSpeaker2.png';

const Reviews = () => {
    return (
        <div className="reviews">
            <h2>REVIEWS</h2>
            <div className="reviewContainer">
                <div className="review">
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>ARTIST</h3>
                    <p>“Love it, it’s the Best.I can’t live without it!”</p>
                </div>
                <div className="review">
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>PRODUCER</h3>
                    <p>“Love it, it’s the Best.I can’t live without it!”</p>
                </div>
                <div className="review">
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>MUSIC FAN</h3>
                    <p>“Love it, it’s the Best.I can’t live without it!”</p>
                </div>
            </div>
            <img src={smallSpeaker1} className="smallSpeaker1"/>
            <img src={smallSpeaker2} className="smallSpeaker2" />
            <button className="tryNow">TRY IT NOW</button>
        </div>
    )
}

export default Reviews;