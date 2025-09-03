import React from 'react';
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import './Navbar.css';
import images from "../../constants/logo_img"
 
const Navbar = () =>{
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    
    return (
    
    <div className="club__navbar-container">
        <nav className='club__navbar'>
            <div className="club__navbar-logo">
                <img src={images.club_logo_white} alt="WIC_logo" />
            </div>

            
            <ul className='club__navbar-links'>
                <li><a href="#home">Home</a></li>
                {/* <li><a href="#mission">mission</a></li> */}
                <li><a href="#wow">WoW</a></li>
                <li><a href="#program">Programs</a></li>
                <li><a href="#event">Events</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#gallery">Gallery</a></li>
            </ul>

            <div className="club__navbar-join">
                <a href="#join">JOIN US</a>
            </div>

            <div className="club__navbar-smallscreen">
                <IoMenu color ="000" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

                {toggleMenu &&(
                    <div className="club__navbar-smallscreen_overlay flex__center slide-bot">
                        <BiMenuAltRight color ="000" fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)}></BiMenuAltRight>
                        {/*<ul className='club__navbar-smallscreen_links'>
                            <li><a href="#home">home</a></li>
                            <li><a href="#wow">wow</a></li>
                            <li><a href="#program">program</a></li>
                            <li><a href="#event">event</a></li>
                            <li><a href="#team">team</a></li>
                            <li><a href="#gallery">gallery</a></li>
                            </ul>
                        */}

                        <ul className='club__navbar-smallscreen_links'>
                            {['home','wow','program','event','team','gallery'].map((link) => (
                                <li key={link}>
                                <a href={`#${link}`} onClick={() => setToggleMenu(false)}>
                                    {link}
                                </a>
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                )}

            </div>
        </nav>
    </div>
);}

export default Navbar;