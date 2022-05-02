import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function ShoppingCart({shoppingCart, setShoppingCart}) {

    useEffect(() => {
        fetch("/")
          .then(response => response.json())
          .then(shoppingCart => {
            setShoppingCart(shoppingCart);
            console.log(shoppingCart);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);



    const deleteFromCart = id => {
        fetch(`/${id}`, {
          method: "DELETE"
        })
          .then(res => {
            if (res.ok) {
              //if the response is received correctly
              return res.json(); //return the response as a javascript object (this is what .json() does)
            } else {
              throw new Error("Not 2xx response");
            }
          })
          .then(json => {
            // upon success, update tasks
            setShoppingCart(json);
            console.log(shoppingCart);
          })
          .catch(error => {
            console.log(error);
            // upon failure, show error message
          });
      };

  return (
    <div className='cart-container'>
        <h1>SHOPPING CART</h1>
        {shoppingCart.map((item) => (
            <div className="container" key={item.id}>
              <div className='row'>
              <div className='col-4'>
              <img src={item.url} className="cart-pic" alt="Shoes in cart" / >
              </div>
              <div className='col-7'>
                <ul className='cart-item'>
                  <li>{item.product_name}</li>
                  <li>{item.price}</li>
                  <li>Colour: {item.colour}, Size {item.size}</li>
                </ul>
                       </div>
              <div className='col-1'>
              <li><FontAwesomeIcon icon={faTrashCan} className="cart-icon" size="2x" onClick={() => deleteFromCart(item.id)}  /></li>

                </div>
            </div>
            </div>
        ))}

        <button className="checkout-button" >Checkout</button>

    </div>
  )
}
