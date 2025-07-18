import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Chef from './components/Chef/Chef';
//import Gallery from './components/Gallery/Gallery';
import './index.css'; 
import Footer from './components/Footer/Footer';



function App() {
  return (
   <>
      <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef/>} />
       
        </Routes>
        <Footer/>
    </>
  );
}

export default App;