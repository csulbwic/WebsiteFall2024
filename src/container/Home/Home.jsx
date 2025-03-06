import React from 'react';
import images from "../../constants/logo_img";
import './Home.css';
// import { PiImageSquare } from 'react-icons/pi';
// import { IoImageSharp } from 'react-icons/io5';

const Home = () =>(
    <div className='club__home-container flex__center section__padding box__container' id="home">
        <div className="club__home-smallscreen-headline">
            <h1 className='headtext__inter'>something</h1>
        </div>
        
        <div className="club__home-overlay">
            <img src={images.computer} alt="computer_logo" />
        </div>

        <div className="club__home-content flex__center">
            <div className="club__home-content_WIC">
                <h1 className='club_home-headline headtext__inter'>WOMEN IN COMPUTING</h1>

                <p className='club__home-p p__fira'>
                    Women in Computing (WiC) at California State University, 
                    Long Beach is a student-run organization dedicated to uplifting 
                    and empowering the next generation of women* in technology. 
                    Our mission is to cultivate leadership, build confidence, 
                    and provide practical experience, fostering a supportive 
                    community where connections are made, and future leaders are 
                    inspired.
                </p>
                <p className='club__home-p p__fira'>*Inclusive of trans and non-binary individuals.*</p>
            </div>
        </div>
    </div>
    
)

export default Home;