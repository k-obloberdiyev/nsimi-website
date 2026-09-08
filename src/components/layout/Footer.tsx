import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] text-[#d3d3d3] py-7 border-t border-neutral-800">
      <div className="site-container flex flex-col md:flex-row items-center justify-center text-center">
        <p className="text-[15px] md:text-[16px] tracking-wide text-[#d3d3d3]">
          Copyright © 2026 Navoiy shahar 1-sonli IMI
        </p>
      </div>
    </footer>
  );
};
