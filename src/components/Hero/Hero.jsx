import React from "react";
import img from "../../assets/h1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center px-4"
      >
        {/* Főcím */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          A Culinary Journey to Italy
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg lg:text-xl mb-8 text-white/90"
        >
          Discover our handcrafted dishes, prepared with passion and tradition,
          bringing you the authentic flavors of Italian cuisine.
        </motion.p>

        <motion.div variants={itemVariants}>
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
