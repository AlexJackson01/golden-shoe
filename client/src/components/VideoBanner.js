import React from 'react';
import Banner from '../videos/GoldenBanner.mp4';
import Mens from '../images/Mens.jpg';
import Womens from '../images/Womens.jpg';
import Unisex from '../images/Unisex.jpg';

export default function VideoBanner() {
  return (
    <div>

    <div className="intro-container">
    <video loop autoPlay muted className="intro-video">
            <source src={Banner} type="video/mp4" />
    </video>
    </div>

    <div>
        <img src={Mens} alt="Men's shoes" />
        <img src={Womens} alt="Women's shoes" />
        <img src={Unisex} alt="Unisex shoes" />

    </div>
    </div>
  )
}
