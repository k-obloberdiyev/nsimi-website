import React from 'react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Image with precise focal clipping on the school entrance and signage */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-700 bg-[center_28%] sm:bg-[center_30%] md:bg-[center_32%]"
        style={{
          backgroundImage: `url('/images/school-entrance.jpg')`,
        }}
      />
      {/* Elegant dark gradient overlay to ensure both the school building and the text are sharp & readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/40 to-slate-950/75 backdrop-blur-[0.5px]" />

      <div className="relative site-container py-[120px] sm:py-[170px] md:py-[210px] lg:py-[250px] flex flex-col items-center justify-center text-center">
        {/* Subtitle / Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base md:text-lg mb-4 tracking-wide shadow-md animate-in fade-in slide-in-from-bottom-3 duration-500">
          <span>Ta'lim barcha muammolar yechimidir</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight leading-[1.2] max-w-4xl mb-8 sm:mb-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-4 duration-700">
          Navoiy Shahridagi 1-IMI
        </h1>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <Button to="/biz-haqimizda" variant="primary" className="shadow-2xl hover:scale-105 transition-transform">
            BIZ HAQIMIZDA
          </Button>
        </div>
      </div>
    </section>
  );
};
