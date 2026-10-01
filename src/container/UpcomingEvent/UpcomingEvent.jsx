import React, { useState } from 'react';
import './UpcomingEvent.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import images from "../../constants/logo_img";

import IndustrySpeaker from "../../assets/Event-Img/IndustrySpeakerSusanBrennan.png";
import GithubWorkshop from "../../assets/Event-Img/githubFundementalsWorkshop.png";
import MarinaHacksLogo from "../../assets/Event-Img/marina_hacks_original_colors_transparent.png";
import MarinaHacksBG from "../../assets/Event-Img/MarinaHacks6.0BG.png";
import MarinaHacksFlyer from "../../assets/Event-Img/Marinahacks6.0Flyer.png";
import MarinaHacksSchedule from "../../assets/Event-Img/MarinaHacks6.0Schedule.png";

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
        { img: MarinaHacksFlyer, title: "Marina Hacks 6.0", date: "October 24-25, 2026" },
    ];

    return (
        <div className="club__upcoming-container section__padding box__container" id="upcoming">
            <div className="club__upcoming-header">
                <SubHeading title="UPCOMING EVENTS" img={images.folder_icon}/>
            </div>

            <div className="club__upcoming-content">
                <div className="club__upcoming-left">
                    <div className="upcoming-banner-wrapper">
                        <div className="upcoming-banner-scroll">
                            <span>Workshops ~ Speaker Events ~ Socials ~ Fundraisers ~ More to Come! ~&nbsp;</span>
                            <span>Workshops ~ Speaker Events ~ Socials ~ Fundraisers ~ More to Come! ~&nbsp;</span>
                        </div>
                    </div>
                    <div className="upcoming-arrows">
                        <BsArrowLeftShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('left')} />
                        <BsArrowRightShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('right')} />
                    </div>
                    <div className="upcoming-flyers-container" ref={scrollRef}>
                        {flyers.map((flyer, index) => (
                            <div className="upcoming-flyer-card" key={index} onClick={() => setSelectedFlyer(flyer.img)}>
                                <img src={flyer.img} alt={flyer.title} />
                                <div className="flyer-click-icon">🔍</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="club__upcoming-right" style={{ backgroundImage: `url(${MarinaHacksBG})` }}>
                    <div className="marina-hacks-top">
                        <img src={MarinaHacksLogo} alt="Marina Hacks Logo" className="marina-hacks-logo" />
                        <h1 className="marina-hacks-title">Join Marina Hacks 6.0!</h1>
                        <p className="marina-hacks-date">October 24-25, 2026 | CSULB</p>
                    </div>

                    <div className="marina-hacks-bottom">
                        <div className="marina-hacks-left-col">
                            <div className="marina-hacks-about">
                                <h3 className="marina-hacks-subtitle">About</h3>
                                <p className="marina-hacks-about-text">A beginner-friendly 24-hour hackathon where students collaborate to build innovative projects. All skill levels welcome!</p>
                            </div>
                        </div>

                        <div className="marina-hacks-mid-col">
                            <a href="https://forms.gle/AMD1JpYiPd9rBt227" target="_blank" rel="noreferrer" className="marina-hacks-link-btn">Hacker Registration</a>
                            <span className="marina-hacks-star">✦</span>
                            <a href="https://forms.gle/oCmgVNdkN9Y5Qkg39" target="_blank" rel="noreferrer" className="marina-hacks-link-btn">Volunteer Registration</a>
                        </div>

                        <div className="marina-hacks-right-col" onClick={() => setSelectedFlyer(MarinaHacksSchedule)}>
                            <div className="marina-hacks-schedule-box">
                                <h3 className="marina-hacks-subtitle">Schedule</h3>
                                <img src={MarinaHacksSchedule} alt="Marina Hacks 6.0 Schedule" className="marina-hacks-schedule-img" />
                                <div className="flyer-click-icon">🔍</div>
                            </div>
                        </div>
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