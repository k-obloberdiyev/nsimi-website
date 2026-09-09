import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { QuoteSection } from '../components/home/QuoteSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Navoiy shahar 1-sonli Ixtisoslashtirilgan maktab internati';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <QuoteSection />
    </div>
  );
};
