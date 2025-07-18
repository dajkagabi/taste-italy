import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

import pizzaImg from '../../assets/ma.jpg';
import carbonaraImg from '../../assets/he.jpg';
import ossobucoImg from '../../assets/osso.jpg';


const dishesData = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: '€12',
    description: 'Fresh basil, mozzarella, tomato sauce',
    image: pizzaImg,
  },
  {
    id: 2,
    name: 'Pasta Carbonara',
    price: '€14',
    description: 'Creamy sauce, pancetta, egg, pecorino',
    image: carbonaraImg,
  },
  {
    id: 3,
    name: 'Osso Buco',
    price: '€24',
    description: 'Braised veal shanks, gremolata',
    image: ossobucoImg,
  },
];

const Dishes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-gray-600">
            Handcrafted with love and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {dishesData.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Kép */}
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-64 object-cover"
              />

              {/* Kártya tartalom */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-semibold text-[#e74c3c]">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  {dish.description}
                </p>
                <Link
                  to={`/dish/${dish.id}`}
                  className="inline-flex items-center justify-center w-full text-white bg-[#e74c3c] hover:bg-[#c0392b] font-semibold py-3 px-4 rounded-md transition duration-300"
                >
                  Order Now
                  {/* MUI kosár ikon */}
                  <ShoppingCartIcon className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block border border-gray-300 text-gray-700 hover:text-[#e74c3c] hover:border-[#e74c3c] font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dishes;