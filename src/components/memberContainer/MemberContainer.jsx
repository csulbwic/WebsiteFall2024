import React from 'react';
import images from "../../constants/logo_img"
import './MemberContainer.css'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

const MemberContainer = ({memberName, memberPosition, memberImg,githubLink,emailLink,linkedinLink, specialStyle }) => (
    <div className={`memberContainer__component ${specialStyle ? 'special-style' : ''}`}>
        <div className="memberContainer-img">
            <img src={memberImg} alt="member img" />
        </div>
        
        <div className="memberContainer-description">
            <p className="memberContainer-name p__fira">{memberName}</p>
            <p className="memberContainer-position p__fira">{memberPosition}</p>
        </div>

        <div className="memberContainer-link">
            {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt fontSize={27} />
                </a>
            )}

            {linkedinLink && (
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <SlSocialLinkedin fontSize={27} />
                </a>
            )}

            {emailLink && (
                <a href={`mailto:${emailLink}`} target="_blank" rel="noopener noreferrer">
                    <CiMail fontSize={30} />
                </a>
            )}
            
        </div>

    </div>
);

export default MemberContainer;