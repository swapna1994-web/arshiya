
import React, { useEffect } from 'react';
import type { Wallpaper } from '../types';

interface ImageModalProps {
  wallpaper: Wallpaper;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ wallpaper, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={wallpaper.src}
          alt={wallpaper.alt}
          className="rounded-lg shadow-2xl object-contain max-w-full max-h-[90vh]"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:top-2 md:right-2 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl hover:bg-amber-400 transition-all duration-300 shadow-lg"
          aria-label="Close image view"
        >
          &times;
        </button>
      </div>
      <style>{`
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes zoom-in { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ImageModal;
