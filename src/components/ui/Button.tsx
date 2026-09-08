import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  hasArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  hasArrow = false,
  type = 'button',
  target,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-[60px] px-8 sm:px-10 py-2.5 text-[14px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none';

  let variantStyles = '';
  switch (variant) {
    case 'outline':
      variantStyles =
        'border-2 border-[#fb2056] text-[#fb2056] hover:bg-[#fb2056] hover:text-white';
      break;
    case 'white':
      variantStyles =
        'border-2 border-white text-white hover:bg-white hover:text-[#fb2056] shadow-md';
      break;
    case 'primary':
    default:
      variantStyles =
        'border-2 border-[#fb2056] bg-[#fb2056] text-white hover:bg-[#e01648] hover:border-[#e01648] shadow-sm hover:shadow-md';
      break;
  }

  const content = (
    <>
      <span>{children}</span>
      {hasArrow && <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseStyles} ${variantStyles} ${className}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target || (href.startsWith('http') ? '_blank' : undefined)}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`group ${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};
