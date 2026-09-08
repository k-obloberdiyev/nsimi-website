import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background Image with Overlay matching Beaver Builder fl-row-bg-photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
        style={{
          backgroundImage: `url('/images/images-1.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-white/40 md:bg-white/35 backdrop-blur-[1px]" />

      <div className="relative site-container py-[110px] sm:py-[160px] md:py-[200px] lg:py-[240px] flex flex-col items-center justify-center text-center">
        {/* Subtitle / Tagline */}
        <p className="text-[#222222] font-semibold text-lg sm:text-xl md:text-2xl tracking-tight mb-2 sm:mb-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
          Ta'lim barcha muammolar yechimidir
        </p>

        {/* Main H1 Title */}
        <h1 className="text-[#0a0001] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight leading-[1.2] max-w-4xl mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Navoiy Shahridagi 1-IMI
        </h1>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <Button to="/biz-haqimizda" variant="primary" className="shadow-lg">
            BIZ HAQIMIZDA
          </Button>
        </div>
      </div>
    </section>
  );
};
