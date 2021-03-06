import React from 'react';
import Logo from '../images/Golden Shoe Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export default function Navbar({shoppingCart}) {
  return (
    <div className='nav-container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src={Logo} alt="" className="nav-logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">PRODUCTS</a>
            <a className="nav-item nav-link" href="/favourites">ABOUT</a>
            <a className="nav-item nav-link contact-link" href="/contact">CONTACT</a>
            <div className='nav-icons-container'>
            <FontAwesomeIcon icon={faSearch} className="nav-icon"  />
              <FontAwesomeIcon icon={faUser} className="nav-icon"  />
              <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="nav-icon"  /></Link><p className='cart-total'>{shoppingCart.length}</p>
            </div>

        </div>
        
  </div>
  
</nav>
    </div>
  )
}
