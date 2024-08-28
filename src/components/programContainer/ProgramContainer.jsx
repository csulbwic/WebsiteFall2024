import React from 'react';
import './ProgramContainer.css';

const ProgramContainer = ({title, description, poster}) =>(
    <div className="program__component">
        <div className="program__component-img-contain">
            <img src={poster} alt="event img" />
        </div>
        <div className="program__component-info-section">
            <h1 className='p__fira-headline'>{title}</h1>
            <p className='p__fira'>{description}</p>

        </div>
    </div>
);

export default ProgramContainer