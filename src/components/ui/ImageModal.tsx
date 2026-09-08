import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-transparent rounded-lg overflow-hidden flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/60 text-white hover:bg-black/90 p-2 rounded-full transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {alt && (
          <p className="text-white/80 text-sm mt-2 text-center bg-black/50 px-4 py-1 rounded-full">
            {alt}
          </p>
        )}
      </div>
    </div>
  );
};
