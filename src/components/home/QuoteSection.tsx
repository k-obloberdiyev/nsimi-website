import React from 'react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 sm:py-20 md:py-24 border-b border-gray-100">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Quote Text Column */}
          <div className="md:col-span-8 flex flex-col justify-center text-center md:text-left">
            <blockquote className="border-l-0 md:border-l-4 md:border-[#fb2056] md:pl-6">
              <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl md:text-[30px] lg:text-[32px] leading-snug sm:leading-snug md:leading-snug">
                "Yoshlarga munosib ta'lim berish, ularning ilm-fanga bo'lgan intilishlarini
                ro'yobga chiqarish - muhim va zarurdir"
              </h2>
              <p className="text-gray-700 font-medium text-lg sm:text-xl mt-4 italic">
                – Shavkat Mirziyoyev
              </p>
            </blockquote>
          </div>

          {/* Portrait Image Column */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative group overflow-hidden rounded-2xl shadow-md border border-gray-100 max-w-[280px] sm:max-w-[320px] md:max-w-full">
              <img
                src="/images/images.jpg"
                alt="Shavkat Mirziyoyev"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
