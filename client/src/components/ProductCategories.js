import React from 'react';
import Sports from '../images/Sports.jpg';
import Evening from '../images/Evening.jpg';
import Work from '../images/Work.jpg';
import Casual from '../images/Casual.jpg';
import Holiday from '../images/Holiday.jpg';
import Home from '../images/Home.jpg';
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';



export default function ProductCategories() {
  return (
    <div className='shoe-categories'>
        <h2>SHOES FOR ANY OCCASION</h2>
        <div className='categories'>
          <div><img src={Sports} className="category-image" alt="Sports category" /><p className='category-item'>Sports</p></div>
          <div><Link to="/evening"><img src={Evening} className="category-image" alt="Evening category" /></Link><p className='category-item'>Evening</p></div>
          <div><img src={Work} className="category-image" alt="Work category" /><p className='category-item'>Work</p></div>
          <div><img src={Casual} className="category-image" alt="Casual category" /><p className='category-item'>Casual</p></div>
          <div><img src={Holiday} className="category-image" alt="Holiday category" /><p className='category-item'>Holiday</p></div>
          <div><img src={Home} className="category-image" alt="Home category" /><p className='category-item'>Home</p></div>

    </div>
    </div>
  )
}
