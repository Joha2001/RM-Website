import React from 'react';
import './BottomBar.css';
import {SocialData} from './SocialData.js';
/* Nothing needs to be changed in this file.
   To add/remove social media, refer to SocialData.js */
const BottomBar = () => {
    return (
            <div className="contact-section">
            {SocialData.map((item) => {
                    return (
                        <a alt={item.title} title={item.title} href={item.path}> 
                            {item.icon} </a>
                    )
                })}
            </div>
    );
}

export default BottomBar;

