import React from 'react';
import './Team.css';

import { SubHeading } from '../../components';
import {MemberContainer} from "../../components"
import images from "../../constants/logo_img"
import {MemberData} from '../../constants';


const Team = () =>(
    <div className="club__team-container flex__center section__padding" id="team">
        <div className="club__team-headline">
            <SubHeading title="Team Members" img={images.folder_icon}/>
        </div>

        <div className="club__team-memberContainer">
            {MemberData.Current_Member.map((currentInfo) => 
            <MemberContainer
                memberImg={currentInfo.MemberImg}
                memberName={currentInfo.Membername}
                memberPosition = {currentInfo.position}

                githubLink={currentInfo.GitHub}
                emailLink={currentInfo.Email}
                linkedinLink={currentInfo.Linkedin}
                specialStyle={currentInfo.specialStyle}
            />
            )}
        </div>

    </div>
)



export default Team;