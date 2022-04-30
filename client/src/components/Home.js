import React from 'react';
import Nav from './Navbar';
import VideoBanner from './VideoBanner';
import ProductCategories from './ProductCategories';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
import Heels from './Heels';
import SizeGuide from './SizeGuide';
import Returns from './Returns';

export default function Home() {
  return (
    <div>
      <VideoBanner />
      <ProductCategories />
      {/* <Heels />
      <SizeGuide />
      <Returns /> */}
      <Footer />
    </div>
  )
}
