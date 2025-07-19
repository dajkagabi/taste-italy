import React from 'react';

//Termkékek
function CartItem({ item, onQuantityChange, onRemove }) {
  const { id, name, price, image, quantity } = item;

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(id, quantity + 1);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg mb-4 shadow-sm">
      <div className="flex items-center space-x-4">
        {image && (
          <img src={image} alt={name} className="w-24 h-24 object-cover rounded-md" />
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600">
            ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <button
            onClick={() => onRemove(id)}
            className="text-[#C0392B] text-sm hover:underline mt-2"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 text-gray-800 p-2 rounded-md hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-gray-900 text-lg font-medium">{quantity}</span>
        <button
          onClick={handleIncrease}
          className="bg-gray-200 text-gray-800 p-2 rounded-md hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;