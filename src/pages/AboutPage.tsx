import React, { useEffect, useState } from 'react';
import { aboutPageData } from '../data/siteData';
import { HeadingSeparator } from '../components/ui/HeadingSeparator';
import { ImageModal } from '../components/ui/ImageModal';
import { CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Biz haqimizda – Navoiy shahar 1-son ixtisoslashtirilgan maktab-internati';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header matching Beaver Builder row-bg-photo */}
      <section className="relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-[center_35%] md:bg-[center_40%]"
          style={{
            backgroundImage: `url('/images/school-building.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80 backdrop-blur-[0.5px]" />

        <div className="relative site-container py-24 sm:py-28 md:py-36 text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {aboutPageData.title}
          </h1>
        </div>
      </section>

      {/* Section 1: Bizning Maqsadimiz */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-gray-100">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
                {aboutPageData.goalTitle}
              </h2>
              <HeadingSeparator align="left" />
              <p className="text-[#3a3a3a] text-lg sm:text-xl leading-relaxed mt-2">
                {aboutPageData.goalDescription}
              </p>
            </div>

            {/* Right Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div
                onClick={() => setModalImage(aboutPageData.goalImage)}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gray-100 max-w-md w-full"
              >
                <img
                  src={aboutPageData.goalImage}
                  alt="Bizning maqsadimiz"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-[#222222] text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Kattalashtirish
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Biz bilan boshqacha & Yo'nalishlar */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#fbfbfb]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left Column: Biz bilan boshqacha */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100">
              <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl tracking-tight">
                {aboutPageData.methodTitle}
              </h2>
              <HeadingSeparator align="left" />
              <p className="text-[#3a3a3a] text-base sm:text-lg leading-relaxed mt-4">
                {aboutPageData.methodDescription}
              </p>
            </div>

            {/* Right Column: Yo'nalishlar */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between">
              <div>
                <h2 className="text-[#0a0001] font-bold text-2xl sm:text-3xl tracking-tight">
                  {aboutPageData.directionsTitle}
                </h2>
                <HeadingSeparator align="left" />
                <p className="text-[#3a3a3a] text-base sm:text-lg leading-relaxed mt-4 mb-6">
                  {aboutPageData.directionsDescription}
                </p>

                {/* Directions List */}
                <ul className="space-y-4">
                  {aboutPageData.directions.map((dir: { name: string; subjects: string }, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100/80 hover:bg-rose-50/50 hover:border-rose-100 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#fb2056] flex-shrink-0" />
                      <span className="text-[#222222] font-semibold text-base sm:text-[17px]">
                        {dir.name}
                        <span className="font-normal text-gray-600 ml-1">
                          ({dir.subjects})
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={!!modalImage}
        src={modalImage || ''}
        alt="Navoiy shahar 1-son ixtisoslashtirilgan maktab-internati"
        onClose={() => setModalImage(null)}
      />
    </div>
  );
};
