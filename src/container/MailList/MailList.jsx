import React from "react";
import "./MailList.css";

import images from "../../constants/logo_img";
import { SubHeading } from '../../components';

const MailList = () =>(
    <div className="club__mailList-container flex__center section__padding box__container" id="join">
        
        <div className="club__mailList-headline">
            <SubHeading title="Mail List" img={images.folder_icon}/>
            <p className="club__mailist-descriptions p__fira ">Subscribe to our newsletter! We'll send our reminders and 
                updates on all of our events so you'll know exactly what's going on
            </p>
        </div>

        <a href="https://forms.gle/iW8N4RcFnCbJTefZA" target="blank"><button className="custom__button">SIGN UP FORM</button></a>
        
    </div>
)

export default MailList;