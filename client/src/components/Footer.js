import React from 'react';
import Logo from '../images/Golden Shoe Logo.png';
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='browse-list'>
            <h5>Browse</h5>
            <ul>
                <li>Men's</li>
                <li>Women's</li>
                <li>Unisex</li>
            </ul>

            <h5>Categories</h5>
            <ul>
                <li>Sports</li>
                <Link to="/evening" className='footer-link'><li>Evening</li></Link>
                <li>Work</li>
                <li>Casual</li>
                <li>Holiday</li>
                <li>Home</li>
            </ul>

        </div>

        <div className='info-list'>
            <img src={Logo} className="footer-logo" alt="Golden Shoe Logo" />
            <h5>Info</h5>
            <ul>
                <li>About</li>
                <li>Careers at GS</li>
                <li>Press</li>
                <li>News</li>
            </ul>
        </div>

        <div className='help-list'>
            <h5>Help</h5>
            <ul>
                <li>My Account</li>
                <li>Delivery</li>
                <Link to="/returns" className='footer-link'><li>Returns</li></Link>
                <Link to="/size-guide" className='footer-link'><li>Size Guide</li></Link>
                <li>Legal & Privacy</li>
            </ul>
        </div>

        <div className='contact-list'>
            <h5>Contact</h5>
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
