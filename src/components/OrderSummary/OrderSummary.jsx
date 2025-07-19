import React from 'react';
import {Link} from 'react-router-dom';

function OrderSummary({ cartItems }) {
  const originalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const savings = 0.00;
  const storePickup = 5.00;
  const taxRate = 0.08;
  const tax = originalPrice * taxRate;

  const total = originalPrice - savings + storePickup + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Order summary</h2>
      <div className="space-y-2 text-gray-700">
        <div className="flex justify-between">
          <span>Original price</span>
          <span>${originalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between">
          <span>Savings</span>
          <span className="text-green-600">-${savings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between">
          <span>Store Pickup</span>
          <span>${storePickup.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-2">
          <span>Tax</span>
          <span>${tax.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="flex justify-between font-bold text-gray-900 text-lg pt-2">
          <span>Total</span>
          <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>

      <button 
        className="w-full text-white py-3 rounded-md mt-6 transition duration-300"
        style={{ backgroundColor: "#C0392B", '&:hover': { backgroundColor: '#A93226' } }}
      >
        Proceed to Checkout
      </button>
      <button 
        className="w-full bg-transparent text-[#C0392B] py-3 rounded-md mt-2 border border-[#C0392B] hover:bg-[#C0392B] hover:text-white transition duration-300"
      >
      <Link to="/menu">Continue Shopping </Link>
         
      </button>

      <div className="mt-8 border-t border-gray-300 pt-6">
        <h3 className="text-gray-900 text-md font-semibold mb-2">Do you have a voucher or gift card?</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Apply code"
            className="flex-grow p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
          />
          <button 
            className="text-white px-4 py-2 rounded-md transition duration-300"
            style={{ backgroundColor: "#C0392B", '&:hover': { backgroundColor: '#A93226' } }}
          >
            Apply Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;