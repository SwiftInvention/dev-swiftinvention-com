import React from 'react';

export interface ServiceCardProps {
  text: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ text, image }) => {
  return (
    <li className="flex h-40 w-full flex-col items-center justify-center rounded-xl bg-secondaryCol4 shadow-card sm:w-64">
      <img className="mb-5 h-14 pt-2" src={image} alt="service" />
      <div className="px-6 text-center font-sans text-base font-normal text-primaryCol2">
        {text}
      </div>
    </li>
  );
};
