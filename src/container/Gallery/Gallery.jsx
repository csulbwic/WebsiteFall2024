import React from "react";
import "./Gallery.css";

import images from "../../constants/logo_img";
import EventData from '../../constants/EventData';

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { GalleryComponent } from "../../components";



const Gallery = () =>{
    
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
        current.scrollLeft -= 350;
        } else {
        current.scrollLeft += 350;
        }
    };
    
    return (

    <div className="club___gallery-container flex__center section__padding box__container" id="gallery">
        <div className="club__grallery-headline">
                <SubHeading title="Gallery" img={images.folder_icon}/>
        </div>
        
        {/* Arrow controls at the top */}
        <div className="app__gallery-images_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" cursor={"pointer"} onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" cursor={"pointer"}  onClick={() => scroll('right')} />
        </div>

        <div className="club__gallery-content">
            {/* Scrollable gallery container */}
            <div className="club__gallery-component-container" ref={scrollRef}>
                {EventData.Past_Event.map((past_event) =>(
                    <GalleryComponent
                    eventImg = {past_event.EventImg}
                    title = {past_event.title}
                    eventDate = {past_event.date}
                    eventTerm = {past_event.semester}
                    description = {past_event.description}
                    />
                ))}
            </div>
        </div>

        
    
    
    </div>
    
    

)}; 


export default Gallery;