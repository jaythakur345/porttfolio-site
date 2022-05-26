import React, { useEffect, useRef } from 'react';
import Typical from 'react-typical'

import "./Intro.scss";

export default function Intro() {
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="Asset/profileImg.png" alt="Profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Er. Jay Thakur</h1>
                    <h3>Freelancer <span><Typical
                            steps={['Developer', 1500,'Web Developer', 1500, 'Designer', 1500]}
                            loop={Infinity}
                            wrapper="b"
                        /> 
                    </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="Asset/arror.png" alt="arror" />
                </a>
            </div>
        </div>
    )
}
