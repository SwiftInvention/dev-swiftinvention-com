import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  crop?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  image,
  description,
  title,
  link,
  crop,
}) => {
  return (
    <li className="group relative h-62 w-full max-w-5xl bg-transparent md:h-52 xl:h-62">
      <Link to={link}>
        <div className="absolute inset-0 opacity-20 group-hover:opacity-100 sm:opacity-65 md:opacity-20 lg:opacity-65">
          <img
            className={twMerge('h-full object-cover', crop)}
            src={image}
            alt="case study back"
          />
        </div>
        <div className="relative mt-4 flex h-full flex-col justify-center px-16 font-sans text-primaryCol2 group-hover:hidden sm:mt-10 sm:group-hover:flex sm:group-hover:text-primaryCol1 md:group-hover:hidden lg:group-hover:flex lg:group-hover:text-primaryCol1">
          <div className="mb-3 text-xl font-medium xl:mt-6">{title}</div>
          <div className="max-w-sm2 whitespace-pre-line border-t pt-3 text-sm font-normal lg:w-max">
            {description}
          </div>
        </div>
      </Link>
    </li>
  );
};
