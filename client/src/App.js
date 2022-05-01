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



function App() {

  const [product, setProduct] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evening" element={<Heels setProduct={setProduct} />} />
        <Route path="/:id" element={<ProductInfo product={product} />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route path="/returns" element={<Returns />} />
            
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
