import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

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
          setHeels(data)
        })
      }

      useEffect(() => {
        getProductData()
      }, [])
      
  return (
    <div>
        <Navbar />
        <h1>HEELS</h1>

    </div>
  )
}
