import React from 'react';
import CartItem from '../CartItem/CartItem';
import OrderSummary from '../OrderSummary/OrderSummary';

function ShoppingCart({ cartItems, onQuantityChange, onRemove }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
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
              <p className="text-lg text-gray-400">Your cart is empty.</p>
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

export default ShoppingCart;