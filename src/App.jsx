import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Chef from './components/Chef/Chef';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import OrderNow from './components/OrderNow/OrderNow';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route 
          path="/order" 
          element={
            <OrderNow 
              cartItems={cartItems} 
              onQuantityChange={handleQuantityChange} 
              onRemove={handleRemoveItem}
            />
          } 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;