import React from 'react';
import './Program.css';

import { SubHeading } from '../../components';
import {ProgramContainer} from '../../components';

import images from "../../constants/logo_img";
import EventData from '../../constants/EventData';

import './Program.css';


const Program = () =>(
    <div className='club__program-container flex__center section__padding box__container' id= 'program'>
        <div className="club__program-headline">
            <SubHeading title="PROGRAMS" img={images.folder_icon}/>
        </div>

        <div className="club__program-content">
            
            {EventData.Program_Data && EventData.Program_Data.map((eventData, index) =>(
                <ProgramContainer 
                    key={index}
                    title={eventData.title} 
                    description={eventData.description} 
                    poster={eventData.images} 

                    // Pass buttons array if present, else pass an empty array
                    buttons = {eventData.button || []}
                    />
            ))}

        </div>
    </div>
)

export default Program;