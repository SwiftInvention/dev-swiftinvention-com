import React from 'react';

export interface StackCardProps {
  text: string;
  image: string;
  link: string;
}

export const StackCard: React.FC<StackCardProps> = ({ text, image, link }) => {
  return (
    <a href={link}>
      <li className="flex h-24 w-full flex-row items-center justify-start gap-6 bg-white/5 p-4 shadow-card hover:shadow-cardHovered md:p-6">
        <img className="h-14 w-14 object-contain" src={image} alt="service" />
        <div className="text-left font-sans text-lg font-normal text-white">
          {text}
        </div>
      </li>
    </a>
  );
};
