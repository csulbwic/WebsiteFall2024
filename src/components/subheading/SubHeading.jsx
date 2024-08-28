import React from 'react';

// import {images} from '../constants';

const SubHeading = ({title,img}) =>(
    <div style={{marginBottom:'1rem', display:'flex'}}>

    <img className= 'icon__img' src={img} alt="icon" />
    <p className=' p__fira-headline' style={{lineHeight:'none'}}>{title}</p>
  </div>  
);

export default SubHeading;