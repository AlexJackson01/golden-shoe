import React from 'react';
import Logo from '../images/Golden Shoe Logo.png';

export default function Navbar() {
  return (
    <div className='nav-container'>
        <img src={Logo} className="nav-logo" alt="Golden Shoe" />
        <ul>
            <div>
                <li>PRODUCTS</li>
                <li>ABOUT</li>
            </div>
            <div>
                <li>CONTACT</li>
            </div>
        </ul>
    </div>
  )
}
