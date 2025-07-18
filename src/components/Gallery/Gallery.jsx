import React from 'react';
import galleryImg1 from '../../assets/d.jpg'; 
import galleryImg2 from '../../assets/h2.jpg';
import galleryImg3 from '../../assets/t.jpg';
import galleryImg4 from '../../assets/rab.jpg';

const galleryImages = [
  { id: 1, src: galleryImg1, alt: 'Restaurant Interior' },
  { id: 2, src: galleryImg2, alt: 'Plated Dish' },
  { id: 3, src: galleryImg3, alt: 'Pasta Dish' },
  { id: 4, src: galleryImg4, alt: 'Another Pasta Dish' },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Experience the ambiance of Gusto Italiano
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transform transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;