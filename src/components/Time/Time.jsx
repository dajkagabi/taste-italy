import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/r.jpg"; 
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 

const FoodAtHomeSection = () => {
  return (
    <section
      className="relative w-full py-20 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Enjoy Our Food at Home
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12">
          We offer delivery and takeout options for all our menu items. Order
          online or call us to enjoy authentic Italian cuisine in the comfort of
          your home.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Monday</p>
            <p className="text-sm">12:00 - 22:00</p>
          </div>
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Tuesday</p>
            <p className="text-sm">12:00 - 22:00</p>
          </div>
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Wednesday</p>
            <p className="text-sm">12:00 - 22:00</p>
          </div>
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Thursday</p>
            <p className="text-sm">12:00 - 23:00</p>
          </div>
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Saturday</p>
            <p className="text-sm">11:00 - 23:00</p>
          </div>
          <div className=" backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <p className="font-semibold text-lg mb-1">Sunday</p>
            <p className="text-sm">11:00 - 22:00</p>
          </div>
        </div>

        <Link
          to="/order"
          className="inline-flex items-center justify-center text-white bg-[#e74c3c] hover:bg-[#c0392b] font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Order Now
          <ShoppingCartIcon className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default FoodAtHomeSection;