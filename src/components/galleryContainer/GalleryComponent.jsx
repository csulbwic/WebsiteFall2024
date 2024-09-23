import React from "react";
import './GalleryComponent.css';

import { FaArrowRight } from "react-icons/fa";

// import images from "../../constants/logo_img"

const GalleryComponent = ({eventImg, title, description, linkID, eventDate, eventTerm})=>
    
    (

    <div className="galleryContainer__component">
        <div className="galleryContainer-img">
            <img src={eventImg} alt="" />
        </div>

        <div className="galleryContainer-description">
            <div className="galleryContainer-EventHeadline">
                <p className="gallery-eventName">{title}</p>
                <div className="box-arrow-links">
                    <FaArrowRight className="component-arrow-links"/>
                </div>
                
            </div>

            <p className="gallery-date">{eventDate} | {eventTerm}</p>

            <p className="gallery-eventDetail">{description}</p>
        </div>

    </div>


)

export default GalleryComponent;