
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Details from './components/Details';
import SatLogin from './components/SatLogin';
import React, { useState,useEffect } from 'react';
// import { useLocation} from 'react-router-dom';

import './App.css';

function App() {

  // const location = useLocation();
  // useEffect(() => {
  //   setIsOpen(false); // Close menu on route change
  // }, [location]);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Router>
      {/* <nav style={{padding:10}}>
          <Link to="/" style={{marginRight:10}}>Home</Link>
          <Link to="/satLogin" style={{marginRight:10}}>SatLogin</Link>
      </nav> */}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path='/' element={<Home isOpen={isOpen} />}/>
        <Route path='/satLogin' element={<SatLogin/>}/>
      </Routes>
      {/* <Details /> */}
      <Footer />
    </Router>
    
 
  );
}

export default App;
