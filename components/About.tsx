
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif-display text-white">About the Artist</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://iili.io/F0BFUp2.jpg" 
              alt="Artistic representation" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[3/4] transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:col-span-3 text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>
              Hello! My name is <span className="text-amber-300 font-semibold">Nasrin Akter Swapna</span>. I have always found joy in drawing with paper and pencils. It's been a year since I ventured into the world of digital art, where I aim to express my creativity to a wider audience.
            </p>
            <p>
              I reside in Khulna city, Bangladesh. The name "Arshiya" holds a special place in my heart, as it is my daughter's name, and the inspiration behind this creative endeavor.
            </p>
            <p>
              As a graduate with a Master's degree, I bring a dedicated and thoughtful approach to my art, constantly exploring new techniques and styles to bring my visions to life digitally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
