import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Heels from './components/Heels';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fade from 'react-reveal/Fade';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evening" element={<Heels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
