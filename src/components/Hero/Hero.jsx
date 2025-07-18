import React from "react";
import img from "../../assets/h1.jpg"; // Cseréld ki a saját képed elérési útjára!
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Framer Motion változatok a staggered animációhoz
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Az elemek egymás után 0.2 másodperces késéssel jelennek meg
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-cover flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Áttetsző réteg a szöveg olvashatóságáért */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Szöveg és gomb konténer - most a staggered animáció szülője */}
      <motion.div
        variants={containerVariants} // Container változatok alkalmazása
        initial="hidden"            // Kezdő állapot
        animate="visible"           // Végső állapot
        className="relative z-10 max-w-4xl text-center px-4"
      >
        {/* Főcím */}
        <motion.h1 
          variants={itemVariants} // Elem változatok alkalmazása
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          A Culinary Journey to Italy
        </motion.h1>

        {/* Leírás */}
        <motion.p 
          variants={itemVariants} // Elem változatok alkalmazása
          className="text-base md:text-lg lg:text-xl mb-8 text-white/90"
        >
          Discover our handcrafted dishes, prepared with passion and tradition,
          bringing you the authentic flavors of Italian cuisine.
        </motion.p>

        {/* Gomb */}
        <motion.div variants={itemVariants}> {/* Egy div a Link körül, hogy animálható legyen */}
          <Link
            to="/menu"
            className="inline-block text-white bg-[#e74c3c] hover:bg-[#c0392b] font-semibold py-3 px-6 transition rounded-full"
          >
            View Menu
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;