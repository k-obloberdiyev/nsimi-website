import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div className="site-container flex items-center justify-between h-[80px] md:h-[90px]">
        {/* Brand / Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Navoiy 1-son ixtisoslashtirilgan maktab-internati"
          >
            <img
              src="/images/logo.png"
              alt="Navoiy 1-son ixtisoslashtirilgan maktab-internati"
              className="w-[55px] h-[55px] md:w-[68px] md:h-[68px] object-contain rounded-md transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10"
          aria-label="Primary Site Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[16px] lg:text-[17px] font-medium transition-colors duration-200 py-2 border-b-2 ${
                  active
                    ? 'text-[#fb2056] border-[#fb2056] font-semibold'
                    : 'text-[#222222] border-transparent hover:text-[#fb2056]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#222222] hover:text-[#fb2056] hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="site-container py-5 flex flex-col space-y-3">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[17px] font-medium px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-rose-50 text-[#fb2056] font-semibold'
                      : 'text-[#222222] hover:bg-gray-50 hover:text-[#fb2056]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
