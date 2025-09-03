import React from "react";

import { FaGithub, FaLinkedinIn, FaDiscord , FaInstagram   } from "react-icons/fa";
import images from "../../constants/logo_img"

import "./Footer.css"

const Footer = () => (
    <div className="club__footer-container section__padding" id="team">
        <div className="club__footer-content">
            <div className="club__footer-name">
                
                <img src={images.club_logo} width={200} alt="clubLogo" />
            </div>

            <div className="club__footer-middle">
                <div className="main-website">
                    <a href="mailto:csulb@gmail.com" target="blank" rel="noopener noreferrer">
                        <button className="footer__btn-mainweb">Reach us at csulbwic@gmail.com</button>
                    </a>
                    
                </div>
            </div>

            <div className="club__footer-links">

                <a href="https://www.instagram.com/csulbwic/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram fontSize={40} cursor={"pointer"}/>
                </a>


                <a href="https://github.com/csulbwic" target="_blank" rel="noopener noreferrer">
                    <FaGithub fontSize={40} cursor={"pointer"}/>
                </a>
                
                <a href="https://tr.ee/z9CH-vgQ-G" target="_blank" rel="noopener noreferrer">
                    <FaDiscord fontSize={40} cursor={"pointer"}/>
                </a>
                
                <a href="https://tr.ee/4pFo4eulC7" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn fontSize={40} cursor={"pointer"}/>
                </a>
               
            </div>
        </div>

        <div className="club__footer-licens flex__center p__fira">
            <p>© Women in Computing 2024 Designed by <a href="https://www.linkedin.com/in/annagelisanga/" cursor={"pointer"}><span>Anna Gelisanga</span></a> and Developed by <a href="https://www.linkedin.com/in/my-lu/" cursor={"pointer"}><span>My Lu</span></a></p>
        </div>

        
    </div>
)

export default Footer  