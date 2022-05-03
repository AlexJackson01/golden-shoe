import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Heels({setProduct}) {

    const [heels, setHeels] = useState([]);

    const navigate = useNavigate();
    const pageChange = (shoe) => {
      navigate(`/${shoe.id}`)
    }

    const getProductData = () => {
        fetch("/womens-heels.json",
        {
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(res => res.json())
        .then((data) => {
          console.log(data[0].colours[0].images[0])
          setHeels(data)
        })
      }

      useEffect(() => {
        getProductData()
      }, [])
      
  return (
    <div className='products-container'>
        <h1>EVENING SHOES</h1>
        <h3>Women's Heels</h3>
        <p className='filter-notice'>Filter v</p>
        <FontAwesomeIcon icon={faFilter} className="filter-icon" size="2x"  />

        <div className="container">
        <div className="row">
        {heels.map((shoe, i) => (
          <div className="col" key={shoe.id}>
            <ul className='shoe-card'>
            <li><img src={shoe.colours[0].images[0]} onClick={() => { setProduct(shoe); pageChange(shoe); }} className="shoe-list-image" alt="Shoe for sale" /></li>
            <div className='colour-container'>
            {shoe.colours.map((colour, i) => (
              <div>{colour.inStock ? <div><button style={{backgroundColor: colour.hex}} className="colour-button"></button></div> : <div key={i} className='colour-icon'><button style={{backgroundColor: colour.hex, color: 'red', fontSize: '25px', fontWeight: 'bold' }} disabled={true} className="colour-button">X</button></div>}</div>
            ))}
            </div>
            <li><h6>{shoe.product}</h6></li>
            <li><h6><b>{shoe.price}</b></h6></li>
            </ul>
          </div>
        ))}
        </div>
        </div>

    </div>
  )
}
