import React from "react";
import './GalleryComponent.css';

import { FaArrowRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const GalleryComponent = ({eventImg, title, description, linkID, eventDate, eventTerm, slidesLink})=>
    
    (

    <div className="galleryContainer__component">
        <div className="galleryContainer-img">
            {slidesLink ? (
                <a href={slidesLink} target="_blank" rel="noreferrer" className="gallery-slides-link">
                    <img src={eventImg} alt="" />
                    <div className="gallery-slides-icon">
                        <FaExternalLinkAlt />
                    </div>
                </a>
            ) : (
                <img src={eventImg} alt="" />
            )}
        </div>

        <div className="galleryContainer-description">
            <div className="galleryContainer-EventHeadline">
                <p className="gallery-eventName">{title}</p>
                <a href={linkID} target="_blank" rel="noreferrer">
    <div className="box-arrow-links">
        <FaArrowRight className="component-arrow-links"/>
    </div>
</a>
                
            </div>

            <p className="gallery-date">{eventDate} | {eventTerm}</p>

            <p className="gallery-eventDetail">{description}</p>
        </div>

    </div>


)

export default GalleryComponent;