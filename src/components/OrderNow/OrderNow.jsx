import React from 'react';
import CartItem from '../CartItem/CartItem';
import OrderSummary from '../OrderSummary/OrderSummary';

//Kosár, termékek, mennyiség,
const OrderNow = ({ cartItems = [], onQuantityChange, onRemove }) => { 
  return (
    <div className="min-h-screen bg-white text-gray-900 p-15">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Order</h1>

        <div className="flex flex-col lg:flex-row gap-15">
          <div className="flex-1">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={onQuantityChange}
                  onRemove={onRemove}
                />
              ))
            ) : (
              <p className="text-lg text-gray-600">Your cart is empty. Please add some items from the menu.</p>
            )}
          </div>

          <div className="lg:w-1/3">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;