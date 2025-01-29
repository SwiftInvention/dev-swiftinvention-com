import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowedText } from '~/react/components/arrowedtext/ArrowedText';

export interface StripeProps {
  text: string;
  label: string;
  link: string;
}

export const Stripe: React.FC<StripeProps> = ({ text, label, link }) => {
  return (
    <div className="flex h-36 w-full flex-wrap items-center justify-center bg-primaryCol3">
      <div className="just-primaryCol1 px-2 font-sans text-lg font-medium">
        {text}
      </div>
      <button
        type="button"
        className="-mt-1 inline-flex h-11 items-center justify-center border-2 border-primaryCol1 bg-primaryCol3 px-6 text-primaryCol1 hover:border-primaryCol3 hover:bg-primaryCol1 hover:text-primaryCol3 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primaryCol1 sm:ml-10"
      >
        <Link className="" to={link}>
          <ArrowedText text={label} horizontalPadding="px-0" />
        </Link>
      </button>
    </div>
  );
};
