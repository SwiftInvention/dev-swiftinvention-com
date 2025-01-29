import React from 'react';
import { Link } from 'react-router-dom';

export interface CareersCardProps {
  text: string;
  image: string;
  link: string;
}

export const CareersCard: React.FC<CareersCardProps> = ({
  text,
  image,
  link,
}) => {
  return (
    <Link to={link}>
      <li className="flex h-40 w-full flex-col items-center justify-center rounded-xl bg-secondaryCol4 shadow-card hover:shadow-cardHovered sm:w-64">
        <img className="mb-5 h-14" src={image} alt="service" />
        <div className="px-6 text-center font-sans text-base font-normal text-primaryCol2">
          {text}
        </div>
      </li>
    </Link>
  );
};
