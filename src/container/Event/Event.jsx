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
    <div className="club__event-container flex__center section__padding" id="event">
        <div className="club__event-headline">
            <SubHeading title="UPCOMING EVENT" img={images.folder_icon}/>
        </div>
        
        <div className="club__event-content">
            <div className="club__event-upcoming-event">
                <img src={images.poster_sample} alt="" />
                <button className='custom__button upcomingEvent-btn'>RSVP to Learn More</button>
            </div>
            <div className="club__event-recent-event">
                <div className="recent-event-headline">
                    <h1>recent event</h1>
                </div>
                <div className="recent-event-content">
                        {EventData.Past_Event.map((Past_Event) =>(
                            <RecentEvent 
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