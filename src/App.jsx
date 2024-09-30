
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/MainHome';
import About from './components/MainAbout';
import Embeded from './components/Embeded';
import Customer from './components/Customer';
import Diversity from './components/Diversity';
function App() {
  return (
    <Router>
      <div className='a-nav'>
        <Navbar/>
        <div >
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/brown" element={<Embeded />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/diversity" element={<Diversity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
