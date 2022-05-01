import React, {useState, useEffect} from 'react';

export default function Heels() {

    const [heels, setHeels] = useState([]);

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
        <div className="container">
        <div className="row">
        {heels.map((shoe) => (
          <div className="col" key={shoe.id}>
            <ul className='shoe-card'>
            <li><img src={shoe.colours[0].images[0]} className="shoe-list-image" alt="Shoe for sale" /></li>
            <div className='colour-container'>
            {shoe.colours.map((colour) => (
              <div className='colour-icon'><button style={{backgroundColor: colour.hex}} className="colour-button"></button></div>
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
