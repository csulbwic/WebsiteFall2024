import React, { useState } from 'react';
import './UpcomingEvent.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import images from "../../constants/logo_img";

import IndustrySpeaker from "../../assets/Event-Img/IndustrySpeakerSusanBrennan.png";
import GithubWorkshop from "../../assets/Event-Img/githubFundementalsWorkshop.png";

const UpcomingEvent = () => {
    const scrollRef = React.useRef(null);
    const [selectedFlyer, setSelectedFlyer] = useState(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 350;
        } else {
            current.scrollLeft += 350;
        }
    };

    const flyers = [
        { img: GithubWorkshop, title: "GitHub Fundamentals Workshop", date: "October 1, 2026" },
        { img: IndustrySpeaker, title: "Industry Speaker: Susan Brennan", date: "October 6, 2026" },
    ];

    return (
        <div className="club__upcoming-container section__padding box__container" id="upcoming">
            <div className="club__upcoming-content">
                <div className="club__upcoming-left">
                    <SubHeading title="UPCOMING EVENTS" img={images.folder_icon}/>
                    <div className="upcoming-arrows">
                        <BsArrowLeftShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('left')} />
                        <BsArrowRightShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('right')} />
                    </div>
                    <div className="upcoming-flyers-container" ref={scrollRef}>
                        {flyers.map((flyer, index) => (
                            <div className="upcoming-flyer-card" key={index} onClick={() => setSelectedFlyer(flyer.img)}>
                                <img src={flyer.img} alt={flyer.title} />
                                <div className="flyer-click-icon">
                                    🔍
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="club__upcoming-right">
                    <h1 className="marina-hacks-title">Marina Hacks 6.0</h1>
                    <div className="marina-hacks-info">
                        <p className="marina-hacks-date">October 24-25, 2026</p>
                        <p className="marina-hacks-location">CSULB</p>
                        <p className="marina-hacks-description">A beginner-friendly 24-hour hackathon where students collaborate to build innovative projects. All skill levels welcome!</p>
                        <button className="custom__button marina-hacks-btn">Sign Ups Coming Soon</button>
                    </div>
                </div>
            </div>

            {selectedFlyer && (
                <div className="flyer-modal" onClick={() => setSelectedFlyer(null)}>
                    <div className="flyer-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="flyer-modal-close" onClick={() => setSelectedFlyer(null)}>&times;</span>
                        <img src={selectedFlyer} alt="Flyer" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpcomingEvent;