import React from 'react';
import speaker1 from '../img/speaker1.png';
import speaker2 from '../img/speaker2.png';

const RedSection = () => {

    return (
        <div className="redSection">
            <h2>SUPERIOR SOUND</h2>
            <h3>Experience live versions of your favourite songs.</h3>
            <button className="seeDemo">SEE DEMO</button>
            <button className="tryNow">TRY IT NOW</button>
            <img src={speaker1} className="speaker1 cursor"/>
            <img src={speaker2} className="speaker2 cursor"/>
        </div>
    )
}

export default RedSection;