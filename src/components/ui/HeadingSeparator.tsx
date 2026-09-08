import React from 'react';

interface HeadingSeparatorProps {
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const HeadingSeparator: React.FC<HeadingSeparatorProps> = ({
  align = 'left',
  className = '',
}) => {
  let alignStyle = 'mr-auto';
  if (align === 'center') {
    alignStyle = 'mx-auto';
  } else if (align === 'right') {
    alignStyle = 'ml-auto';
  }

  return (
    <div
      className={`h-[2px] w-[50px] bg-[#fb2056] my-3.5 ${alignStyle} ${className}`}
      aria-hidden="true"
    />
  );
};
