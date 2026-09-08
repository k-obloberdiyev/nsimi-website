import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { QuoteSection } from '../components/home/QuoteSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Navoiy Shahridagi 1-IMI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <QuoteSection />
    </div>
  );
};
