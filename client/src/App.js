import './App.css';
import Nav from './components/Navbar.js';
import VideoBanner from './components/VideoBanner';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';
import Heels from './components/Heels';
import SizeGuide from './components/SizeGuide';
import Returns from './components/Returns';

function App() {
  return (
    <div className="App">
      <Nav />
      <VideoBanner />
      <ProductCategories />
      <Heels />
      <SizeGuide />
      <Returns />
      <Footer />
    </div>
  );
}

export default App;
