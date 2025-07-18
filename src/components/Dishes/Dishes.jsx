import React from 'react';
import { Link } from 'react-router-dom'; 
import pizzaImg from '../../assets/ma.jpg';
import carbonaraImg from '../../assets/he.jpg';
import ossobucoImg from '../../assets/osso.jpg'; 

// Az ételadatok tömbje
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
    <section className="py-16 bg-white"> {/* Fő szekció konténer */}
      <div className="container mx-auto px-4"> {/* Tartalom középre igazítása, padding */}
        {/* Címek */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-gray-600">
            Handcrafted with love and tradition
          </p>
        </div>

        {/* Ételkártyák konténere */}
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
                  <span className="text-lg font-semibold text-[#e74c3c]"> {/* Ár színe a hero szekció gombjához igazítva */}
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
                  {/* Egy kis kosár ikon, ha szeretnéd */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.354 12 5 12h14a1 1 0 000-2H5.484l.272-1.088C6.12 8.504 7 8 7 8h10a1 1 0 00.894-.553L19.5 5H17.421a1 1 0 00-.953.79L15.341 12H6.551L6 10H4v2h11.488l.215-.862c.112-.449-.247-.941-.758-.941H5a1 1 0 01-1-1V6H3a1 1 0 00-1 1zm0 14a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zm1-7a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
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