import React from 'react';
import Logo from '../images/Golden Shoe Logo.png';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='browse-list'>
            <h3>Browse</h3>
            <ul>
                <li>Men's</li>
                <li>Women's</li>
                <li>Unisex</li>
            </ul>

            <h3>Categories</h3>
            <ul>
                <li>Sports</li>
                <li>Evening</li>
                <li>Work</li>
                <li>Casual</li>
                <li>Holiday</li>
                <li>Home</li>
            </ul>

        </div>

        <div className='info-list'>
            <img src={Logo} alt="Golden Shoe Logo" />
            <h3>Info</h3>
            <ul>
                <li>About</li>
                <li>Careers at GS</li>
                <li>Press</li>
                <li>News</li>
            </ul>
        </div>

        <div className='help-list'>
            <h3>Help</h3>
            <ul>
                <li>My Account</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Size Guide</li>
                <li>Legal & Privacy</li>
            </ul>
        </div>

        <div className='contact-list'>
            <h3>Contact</h3>
            <ul>
                <li>Customer Service</li>
                <li>Live Chat</li>
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
  )
}
