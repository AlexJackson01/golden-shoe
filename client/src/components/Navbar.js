import React from 'react';
import Logo from '../images/Golden Shoe Logo.png';

export default function Navbar() {
  return (
    <div className='nav-container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/home"><img src={Logo} alt="" className="nav-logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">PRODUCTS</a>
            <a className="nav-item nav-link" href="/favourites">ABOUT</a>
            <a className="nav-item nav-link" href="/contact">CONTACT</a>
            ICONS HERE
        </div>
        
  </div>
  
</nav>
    </div>
  )
}
