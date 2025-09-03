import React from "react";
import './WoW.css';

import { SubHeading } from "../../components";
import images from "../../constants/logo_img";
import EventImages from '../../constants/EventImg';

const WoW = () => {
    return (
        <div className='club__wow-container flex__center section__padding box__container' id='wow'>
            <div className="club__wow-smallscreen-headline">
                <h1 className='headtext__inter'>WEEK OF WELCOME</h1>    
            </div>

        <div className="club__wow-content flex__center">
            <div className="club__wow-content_WIC">
                <h1 className='club_wow-headline headtext__inter'>WEEK OF WELCOME</h1>

                <p className='club__wow-p p__fira'>
                    Come get to know our officers and learn more about the programs well be offering this Fall!!! 🍂
                </p>
                <p className='club__wow-p p__fira'>
                    Here's a sneak peek of some exciting things we'll be doing this semester:
                </p>

                <li className='club__wow-p'>
                    Sisterhood 🪻
                </li>
                
                <li className='club__wow-p'>
                    School Outreach 🍀
                </li>

                
                <li className='club__wow-p'>
                    Our Semester Project 💫
                </li>

                
                <li className='club__wow-p'>
                    Conference & technical Workshops! ✨
                </li>
                
            </div>
        </div>

        <div className="club__wow-overlay">
            <img src={EventImages.WOW25_img} alt="club-event"/>
        </div>

        </div>
    );
};

export default WoW;