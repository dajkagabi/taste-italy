import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ma from "../../assets/ma.jpg";
import h2 from "../../assets/h2.jpg";
import la from "../../assets/la.jpg";
import ti from "../../assets/ti.jpg";
import ri from "../../assets/ri.jpeg";

import gn from "../../assets/gn.jpg";
import br from "../../assets/br.jpg";
import osso from "../../assets/osso.jpg";
import pn from "../../assets/pn.jpg";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "A classic Neapolitan pizza with tomato, mozzarella, and fresh basil.",
    image: ma,
    rating: 5,
    price: 12.50, 
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description:
      "Creamy spaghetti with guanciale, egg yolk, Pecorino Romano cheese, and black pepper.",
    image: h2,
    rating: 4,
    price: 15.00, 
  },
  {
    id: 3,
    name: "Lasagne al Forno",
    description:
      "Layered pasta with slow-cooked ragù, béchamel sauce, and Parmesan cheese.",
    image: la,
    rating: 4,
    price: 18.20, 
  },
  {
    id: 4,
    name: "Tiramisu",
    description:
      "Coffee-soaked ladyfingers with mascarpone cream and cocoa powder.",
    image: ti,
    rating: 5,
    price: 7.00, 
  },
  {
    id: 5,
    name: "Risotto ai Funghi",
    description: "Creamy Arborio rice with wild mushrooms and Parmesan cheese.",
    image: ri,
    rating: 4,
    price: 16.80, 
  },
  {
    id: 6,
    name: "Gnocchi al Pesto",
    description: "Soft potato dumplings tossed in a vibrant basil pesto sauce.",
    image: gn,
    rating: 3,
    price: 14.50, 
  },
  {
    id: 7,
    name: "Bruschetta al Pomodoro",
    description:
      "Toasted bread rubbed with garlic, topped with fresh tomatoes, basil, and olive oil.",
    image: br,
    rating: 4,
    price: 8.00, 
  },
  {
    id: 8,
    name: "Ossobuco",
    description: "Braised veal shanks with vegetables, white wine, and broth.",
    image: osso,
    rating: 5,
    price: 22.00, 
  },
  {
    id: 9,
    name: "Panna Cotta",
    description:
      "Sweetened cream thickened with gelatin and molded, often served with berries.",
    image: pn,
    rating: 4,
    price: 6.50, 
  },
];


const Menu = ({ onAddToCart }) => {
  const navigate = useNavigate(); 

  const handleOrderNowClick = (item) => {
    onAddToCart(item); 
    navigate('/order'); 
  };

  return (
    <div className="container mx-auto px-10 py-20 bg-white text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-10">
        Italian Cuisine Menu
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm mx-auto flex flex-col"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg w-full h-64 object-cover"
                src={item.image}
                alt={item.name}
              />
            </a>

            <div className="px-5 pb-5 flex-grow flex flex-col">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
                  {item.name}
                </h5>
              </a>

              <p className="text-sm text-gray-700 mb-3 h-16 overflow-hidden flex-grow">
                {item.description}
              </p>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < item.rating ? (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <StarBorderIcon
                        key={i}
                        className="w-4 h-4 text-gray-400"
                      />
                    )
                  )}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
                  {item.rating}.0
                </span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <button
                  className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  style={{
                    backgroundColor: "#C0392B",
                    "--tw-ring-color": "#C0392B",
                    "--tw-ring-opacity": "0.5",
                  }}
                  onClick={() => handleOrderNowClick(item)} 
                >
                  Order Now 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;