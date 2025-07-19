import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Chef from './components/Chef/Chef';
import Gallery from './components/Gallery/Gallery';
import './index.css'; 
import Footer from './components/Footer/Footer';
import OrderNow from './components/OrderNow/OrderNow';



function App() {
  return (
   <>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef/>} />
          <Route path="/order" element={<OrderNow/>} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>
        <Footer/>
    </>
  );
}

export default App;