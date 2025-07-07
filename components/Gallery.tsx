
import React, { useState } from 'react';
import { WALLPAPERS } from '../constants';
import type { Wallpaper } from '../types';
import ImageModal from './ImageModal';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Wallpaper | null>(null);

  const openModal = (wallpaper: Wallpaper) => {
    setSelectedImage(wallpaper);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif-display text-white">Wallpaper Showcase</h2>
          <p className="text-gray-400 mt-2">Click on any image to view it in full screen.</p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {WALLPAPERS.map((wallpaper) => (
            <div
              key={wallpaper.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => openModal(wallpaper)}
            >
              <img
                src={wallpaper.src}
                alt={wallpaper.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && <ImageModal wallpaper={selectedImage} onClose={closeModal} />}
    </section>
  );
};

export default Gallery;
