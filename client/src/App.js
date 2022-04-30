import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Fade from 'react-reveal/Fade';



function App() {
  return (
    <div className="App">
      <Fade bottom>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Fade>
    </div>
  );
}

export default App;
