import React, {useState} from 'react';
import { Link } from "react-router-dom";



export default function ProductInfo({product}) {

    const [stock, setStock] = useState("");
    const [size, setSize] = useState(0);
    const [featuredPhoto, setFeaturedPhoto] = useState(product.colours[0].images[0]);

  return (
      <div className='product-container container'>
          <div className='product-info row'>
          <h3>{product.product}</h3>
        <h3><b>{product.price}</b></h3>
        </div>
        <div className='row'>
            <div className='col-lg-6 col-md-6'>
            <div className='product-photo-container'>
        <img src={featuredPhoto} className="shoe-list-image" alt="selected shoe" />
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <img src={product.colours[0].images[0]} onClick={() => setFeaturedPhoto(product.colours[0].images[0])} className="shoe-list-altimage" alt="selected shoe" />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <img src={product.colours[0].images[1]} onClick={() => setFeaturedPhoto(product.colours[0].images[1])} className="shoe-list-altimage" alt="selected shoe" />
        </div></div>
        <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <img src={product.colours[0].images[2]} onClick={() => setFeaturedPhoto(product.colours[0].images[2])} className="shoe-list-altimage" alt="selected shoe" />
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
        <img src={product.colours[0].images[3]} onClick={() => setFeaturedPhoto(product.colours[0].images[3])} className="shoe-list-altimage" alt="selected shoe" />
        </div></div></div></div>
        <div className='col-lg-6 col-md-6'>
        <div className='colour-container'>
            <h6>Available colours:</h6>
            {product.colours.map((colour, i) => (
              <div key={i} className='colour-icon'><button style={{backgroundColor: colour.hex}} className="product-colour-button"></button></div>
            ))}
        </div>
        
        <div className='size-container'>
            {product.sizes.map((size, i) => (
                <div key={i} className='size-container'>
                {size.stock === 0 ? (
                    <button className="grey-size" disabled={true}>{size.size}</button>
                ) : 
                <button className="red-size" onClick={() => {setSize(size.size); setStock(size.stock)}}>{size.size}</button>
            }
 
                </div>
            ))}
            
            </div>
            <div className='row'>
                <div className='col-6'>
                <Link to="/size-guide"><h6 className='size-link'>Size Guide</h6></Link>
                </div>
                <div className='col-6'>
            <h6 className='size-link'>Delivery Info</h6>
            </div>
            </div>

            {stock && stock < 5 && <h5 className='stock-notice'>Size {size}: Stock running low!</h5>}
            {stock && stock >= 5 && <h5 className='stock-notice'>Size {size}: In stock!</h5>}




            <div className='bag-container'>
                {size.stock === 0 ? (
                    <button className="grey-bag" disabled="true">Add to bag</button>
                ) : 
                <button className="red-bag">Add to bag</button>
            }
                </div>
            


        <h5 className='product-details'>Product Details</h5>
        {product.details.map((detail, i) => (
            <h6 key={i}>{detail}</h6>
        ))}
</div>
    </div>
    </div>
  )
}
