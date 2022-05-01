import React from 'react';
import Banner from '../videos/GoldenBanner.mp4';
import Fade from 'react-reveal/Fade';
import Mens from '../images/Mens.png';
import Womens from '../images/Womens.png';
import Unisex from '../images/Unisex.png';

export default function VideoBanner() {
  return (
    <div className="grid-container">
  <div className="video-banner">
   <video loop autoPlay muted className="intro-video">
         <source src={Banner} type="video/mp4" />
     </video>
  </div>
  <div className="mens"><h1>Men's</h1></div>
  <div className="womens"><h1 className='women-menu'>Women's</h1></div>  
  <div className="uni"><h1 className='uni-menu'>Unisex</h1></div>  
</div>
    
  )
}
