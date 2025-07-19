import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "/src/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-800 font-semibold text-lg"
        >
          <img
            src={logo}
            alt="La Tavola Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="hidden sm:inline">La Tavola – Taste of Italy</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-[#C0392B]">
            Home
          </Link>
          <Link to="/menu" className="hover:text-[#C0392B]">
            Menu
          </Link>
          <Link to="/chef" className="hover:text-[#C0392B]">
            Our Chef
          </Link>
          <Link to="/gallery" className="hover:text-[#C0392B]">
            Gallery
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/order"
            className="bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Order Now
          </Link>
        </div>
         

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col px-4 py-3 space-y-2 text-gray-700 font-medium">
            <Link to="/" onClick={closeMenu} className="hover:text-[#C0392B]">
              Home
            </Link>
            <Link
              to="/menu"
              onClick={closeMenu}
              className="hover:text-[#C0392B]"
            >
              Menu
            </Link>
            <Link
              to="/chef"
              onClick={closeMenu}
              className="hover:text-[#C0392B]"
            >
              Our Chef
            </Link>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className="hover:text-[#C0392B]"
            >
              Gallery
            </Link>

            <Link
              to="/order"
              onClick={closeMenu}
              className="bg-[#e74c3c] hover:bg-[#c0392b] text-white font-semibold py-2 px-4 rounded-md text-center"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}