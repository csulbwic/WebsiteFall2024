import React from 'react';
import './Program.css';

import { SubHeading } from '../../components';
import {ProgramContainer} from '../../components';

import images from "../../constants/logo_img";
import EventData from '../../constants/EventData';

import './Program.css';


const Program = () =>(
    <div className='club__program-container flex__center section__padding' id= 'program'>
        <div className="club__program-headline">
            <SubHeading title="PROGRAM" img={images.folder_icon}/>
        </div>

        <div className="club__program-content">
            
            {EventData.EventData.map((eventData) =>(
                <ProgramContainer 
                    title={eventData.title} 
                    description={eventData.description} 
                    poster={eventData.images} />
            ))}

        </div>
    </div>
)

export default Program;