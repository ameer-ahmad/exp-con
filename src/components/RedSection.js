import React from 'react';
import speaker1 from '../img/speaker1.png';
import speaker2 from '../img/speaker2.png';
import {Howl} from 'howler';
import {Link} from 'react-router-dom';

const RedSection = () => {
    const url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    const music = new Howl ({
        src: url,
        html5: true,
        volume: 0.3
    })

    const playMusic = () => {
        if (!music.playing()) {
            music.play();
        } else {
            music.pause();
        }
    }

    return (
        <div className="redSection">
            <h2>SUPERIOR SOUND</h2>
            <h3>Experience live versions of your favourite songs.</h3>
            <button className="seeDemo">SEE DEMO</button>
            <Link to="/pricing"><button className="tryNow">TRY IT NOW</button></Link>
            <img src={speaker1} className="speaker1 cursor" onClick={playMusic} />
            <img src={speaker2} className="speaker2 cursor" onClick={playMusic} />
        </div>
    )
}

export default RedSection;