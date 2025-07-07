
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://iili.io/F0B3PUv.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif-display text-white mb-4 animate-fade-in-down">
          Arshiya
        </h1>
        <p className="text-lg md:text-2xl text-amber-300 tracking-widest animate-fade-in-up">
          DIGITAL ART & WALLPAPER CREATIONS
        </p>
      </div>
       <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
