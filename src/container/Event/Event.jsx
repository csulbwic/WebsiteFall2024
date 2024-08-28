import React from 'react';

import { SubHeading } from '../../components';
import images from "../../constants/logo_img";
import EventData from '../../constants/EventData';

// import plugging component [for slide in current event]
// import {AwesomeSlider} from 'react-awesome-slider';
// import {AwsSliderStyles} from 'react-awesome-slider/src/styles.scss';

import './Event.css';

const Event = () =>(
    <div className="club__event-container flex__center section__padding">
        <div className="club__event-headline">
            <SubHeading title="UPCOMING EVENT" img={images.folder_icon}/>
        </div>
        
        <div className="club__event-content">
            <div className="club__event-upcoming-event">
                
            </div>
            <div className="club__event-recent-event">
                ITEM-2
            </div>
        </div>
        
        
    </div>
)

export default Event;