import './App.css';
import Nav from './components/Navbar.js';
import VideoBanner from './components/VideoBanner';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <VideoBanner />
      <ProductCategories />
      <Footer />
    </div>
  );
}

export default App;
