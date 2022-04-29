import React from 'react';
import Sports from '../images/Sports.jpg';
import Evening from '../images/Evening.jpg';
import Work from '../images/Work.jpg';
import Casual from '../images/Casual.jpg';
import Holiday from '../images/Holiday.jpg';
import Home from '../images/Home.jpg';


export default function ProductCategories() {
  return (
    <div className='shoe-categories'>
        <h2>SHOES FOR ANY OCCASION</h2>
        <img src={Sports} alt="Sports category" />
        <img src={Evening} alt="Evening category" />
        <img src={Work} alt="Work category" />
        <img src={Casual} alt="Casual category" />
        <img src={Holiday} alt="Holiday category" />
        <img src={Home} alt="Home category" />
    </div>
  )
}
