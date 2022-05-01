import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Heels from './components/Heels';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductInfo from './components/ProductInfo';
import Fade from 'react-reveal/Fade';
import SizeGuide from './components/SizeGuide';
import Returns from './components/Returns';
import ShoppingCart from './components/ShoppingCart';



function App() {

  const [product, setProduct] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="App">
      <Navbar shoppingCart={shoppingCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evening" element={<Heels setProduct={setProduct} />} />
        <Route path="/:id" element={<ProductInfo product={product} setShoppingCart={setShoppingCart} />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/cart" element={<ShoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
            
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
