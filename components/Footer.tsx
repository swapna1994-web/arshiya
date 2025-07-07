
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p className="mb-4">
          <a href="#home" className="hover:text-white transition-colors">Back to Top</a>
        </p>
        <p>&copy; {new Date().getFullYear()} Arshiya Digital Arts. All Rights Reserved.</p>
        <p className="text-sm mt-2">Created with passion by Nasrin Akter Swapna.</p>
      </div>
    </footer>
  );
};

export default Footer;
