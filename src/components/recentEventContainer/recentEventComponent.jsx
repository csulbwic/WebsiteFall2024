import React from 'react';
import './recentEventComponent.css'
const RecentEvent = ({title, date, desctiption,post_link}) => (
  
  <div className="recentEvent__component">
    <a href={post_link}></a>
    <div className="recentEvent-headline">
        
        <p className="title p__fira">{title}</p>
        <p className="date p__fira">{date}</p>
    </div>

    <div className="recentEvent-description">
        <p className="description p__fira">{desctiption}
        </p>
    </div>

  </div> 
);

export default RecentEvent;