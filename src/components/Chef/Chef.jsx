import React from 'react';
import chef from "../../assets/chef.jpg";

const Chef = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Bal oldal - kép */}
        <div className="lg:w-1/2 w-full">
          <img
            src={chef}
            alt="Chef Marco Rossi"
            className="w-full h-auto object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Jobb oldal - szöveg */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-4xl font-bold mb-4">Meet Our Chef</h2>
          <h3 className="text-2xl font-semibold mb-2">Marco Rossi</h3>
          <p className="text-lg leading-relaxed mb-4">
            With 20 years of experience in traditional Italian cuisine, Chef Marco brings the authentic flavors of his hometown Naples to every dish.
          </p>
          <div className="mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Signature Dish</p>
            <p className="text-xl font-medium mt-1">Seafood Risotto</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chef;
