import React from 'react';
import './Header.css';
import flyerImage from './images/Flyer.jpeg';

export default function Header() {
  return (
    <div className='main_div'>  
      <div className='imageContainer' >
        <img src={flyerImage} className="imageFlyer"/>
      </div> 
    </div>
  );
}



