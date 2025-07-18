import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center space-x-2">
            <RestaurantMenuIcon className="text-3xl" /> 
            <h3 className="text-2xl font-bold">La Tavola – Taste of Italy</h3>
          </div>
          <p className="text-sm">
            Authentic Italian cuisine made with love and tradition. We bring the flavors of Italy to your table.
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center space-x-2">
              <LocationOnIcon className="text-lg" />
              <p className="text-sm">123 Italian Street, Foodville, IT 12345</p>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="text-lg" />
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <EmailIcon className="text-lg" />
              <p className="text-sm">info@gustoitaliano.com</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Chef</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Order Online</a></li>
            <li><a href="#" className="hover:underline">Reservations</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <p className="text-sm mb-4">
            Stay updated with our latest dishes, promotions, and events.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;