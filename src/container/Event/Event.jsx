import React from 'react';

import { SubHeading } from '../../components';
// import {Slider} from "../../components";
import {RecentEvent} from "../../components";

import images from "../../constants/logo_img";
import EventData from '../../constants/EventData';

// import plugging component [for slide in current event]
// import {AwesomeSlider} from 'react-awesome-slider';
// import {AwsSliderStyles} from 'react-awesome-slider/src/styles.scss';

import './Event.css';

const Event = () =>(
    <div className="club__event-container flex__center section__padding box__container" id="event">
        <div className="club__event-headline">
            <SubHeading title="EVENT" img={images.folder_icon}/>
        </div>
        
        <div className="club__event-content">
            <div className="club__event-upcoming-event">
                <img src={images.current_club_event_img} alt="" />
                <a href="https://linktr.ee/csulbwic" target='blank'><button className='custom__button upcomingEvent-btn'>Check out our Linktree</button></a>
            </div>
            <div className="club__event-recent-event">
                <div className="recent-event-headline">
                    <h1>recent event</h1>
                </div>
                <div className="recent-event-content">
                        {EventData.Past_Event && EventData.Past_Event.slice(0,3).map((Past_Event, index) =>(
                            <RecentEvent 
                                key = {index}
                                post_link = {Past_Event.post_link}
                                title={Past_Event.title}
                                desctiption={Past_Event.description} 
                                date = {Past_Event.date} />
                        ))};
                </div>               
            </div>
        </div>
        
        
    </div>
)

export default Event;