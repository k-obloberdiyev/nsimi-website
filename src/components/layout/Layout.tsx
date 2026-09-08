import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-[#fb2056] text-white p-3 rounded-full shadow-lg hover:bg-[#e01648] transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#fb2056] focus:ring-offset-2"
          aria-label="Sahifa boshiga qaytish"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
