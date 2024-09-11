import React from 'react';
import './ProgramContainer.css';

const ProgramContainer = ({title, description, poster, buttons}) =>(
    <div className="program__component">
        <div className="program__component-img-contain">
            <img src={poster} alt="event img" />
        </div>
        <div className="program__component-info-section">
            <h1 className='p__fira-headline'>{title}</h1>
            <p className='p__fira'>{description}</p>

            {/* Mapping through the buttons array to render each button */}
            {buttons && buttons.map((button, index) => (
                <a key={index} href={button.link} target='blank'>
                    <button className='custom__button'>
                        {button.BtnDescription}
                    </button>
                </a>
            ))}
        </div>
    </div>
    
);

export default ProgramContainer