import React, { useState } from 'react';
import './UpcomingEvent.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import images from "../../constants/logo_img";

// Flyer slider section for upcoming events (delete after event has passed and has been featured in gallery section)
import ChipotleFundraiser from "../../assets/Event-Img/ChipotleFundraiserFall2026.png"; 

// Assets for marina hacks 6.0 module below
import MarinaHacksLogo from "../../assets/Event-Img/marina_hacks_original_colors_transparent.png";
import MarinaHacksBG from "../../assets/Event-Img/MarinaHacks6.0BG.png";
//import MarinaHacksSchedule from "../../assets/Event-Img/MarinaHacks6.0Schedule.png";

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
        { img: ChipotleFundraiser, title: "Chipotle Fundraiser", date: "October ??, 2026" },
    ];

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="club__upcoming-container section__padding box__container" id="upcoming">
            <div className="club__upcoming-header">
                <SubHeading title="UPCOMING EVENTS" img={images.folder_icon}/>
            </div>

            <div className="club__upcoming-content">
                <div className="club__upcoming-left">
                    <div className="upcoming-banner-wrapper">
                        <div className="upcoming-banner-scroll">
                            <span>Workshops ~ Industry Events ~ Socials ~ Fundraisers ~ More to Come! ~ Workshops ~ Speaker Events ~ Socials ~ Fundraisers ~ More to Come! ~&nbsp;</span>
                            <span>Workshops ~ Industry Events ~ Socials ~ Fundraisers ~ More to Come! ~ Workshops ~ Speaker Events ~ Socials ~ Fundraisers ~ More to Come! ~&nbsp;</span>
                        </div>
                    </div>
                    <div className="upcoming-flyers-container" ref={scrollRef}>
                        {flyers.map((flyer, index) => (
                            <div className="upcoming-flyer-card" key={index} onClick={() => setSelectedFlyer(flyer.img)}>
                                <img src={flyer.img} alt={flyer.title} />
                                <div className="flyer-click-icon">🔍</div>
                            </div>
                        ))}
                        <div className="upcoming-end-card">
                            <p className="upcoming-end-text">See recent/past events here:</p>
                            <button className="upcoming-gallery-btn" onClick={scrollToGallery}>
                                Go to Gallery ↓
                            </button>
                        </div>
                    </div>
                    <div className="upcoming-arrows">
                        <BsArrowLeftShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('left')} />
                        <BsArrowRightShort className="upcoming-arrow-icon" cursor="pointer" onClick={() => scroll('right')} />
                    </div>
                </div>

                <div className="club__upcoming-right" style={{ backgroundImage: `url(${MarinaHacksBG})` }}>
                    <div className="marina-hacks-bottom">
                        <div className="marina-hacks-left-col">
                            <div className="marina-hacks-top">
                                <div className="marina-hacks-logo-wrapper">
                                    <span className="bubble bubble-1"></span>
                                    <span className="bubble bubble-2"></span>
                                    <span className="bubble bubble-3"></span>
                                    <img src={MarinaHacksLogo} alt="Marina Hacks Logo" className="marina-hacks-logo" style={{ width: '400px' }} />
                                    <span className="bubble bubble-4"></span>
                                    <span className="bubble bubble-5"></span>
                                    <span className="bubble bubble-6"></span>
                                </div>
                                <p className="marina-hacks-date"> Stay tuned! | October 2027 | CSULB</p>
                            </div>

                            <div className="marina-hacks-about">
                                <h3 className="marina-hacks-subtitle">About</h3>
                                <p className="marina-hacks-about-text">An annual beginner-friendly 24-hour hackathon where students collaborate to build innovative projects. All skill levels welcome!</p>
                            </div>

                            <div className="marina-hacks-mid-col">
                                    <div style={{ background: 'rgba(255, 105, 180, 0.3)', borderRadius: '1rem', padding: '1.5rem', marginTop: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                        <p style={{ color: '#fff', fontSize: '18px', textAlign: 'center', lineHeight: '1.5', fontFamily: "'VT323', monospace" }}>
                                            Marina Hacks 6.0 2026 Recap:
                                        </p>
                                        <a href="https://www.marinahacks.com/" target="_blank" rel="noreferrer" className="marina-hacks-website-link" >
                                            Visit marinahacks.com ➚
                                        </a>
                                    </div>
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