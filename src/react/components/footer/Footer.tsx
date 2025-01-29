import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import swiftWhiteLogo from '~/assets/images/swift-white-logo.svg';
import { twMerge } from 'tailwind-merge';

export interface FooterProps {
  navItems: Array<{ name: string; link: string }>;
}

export const Footer: React.FC<FooterProps> = ({ navItems }) => {
  const location = useLocation();
  const isActive = (link: string) => location.pathname === link;

  return (
    <div className="relative flex h-37 max-w-8xl flex-row items-center justify-start border-t border-secondaryCol3 bg-primaryCol1">
      <div className="w-full pl-5 md:pl-18 lg:pl-30">
        <div className="h-4">
          <img
            className="cursor-pointer"
            src={swiftWhiteLogo.src}
            alt="Swift Invention Logo"
          />
        </div>
        <div className="pt-6 font-sans text-xs font-medium text-primaryCol2">
          <div className="flex flex-row justify-between">
            <p>© {new Date().getFullYear()} Swift Invention, Inc.</p>
            <div className="primaryCol2space-nowrap hidden space-x-5 md:mr-4 lg:mr-14 lg:block">
              {navItems.map((value) => {
                return (
                  <Link to={value.link} key={value.name}>
                    <div
                      className={twMerge(
                        'group inline cursor-pointer rounded-md px-3 py-2 opacity-60 duration-200 hover:opacity-100 hover:transition-all',
                        isActive(value.link) && 'opacity-100'
                      )}
                    >
                      <div
                        className={twMerge(
                          '-mb-1 inline whitespace-nowrap font-inter text-sm font-bold uppercase text-primaryCol2 duration-200 hover:transition-all group-hover:opacity-100',
                          isActive(value.link) && 'opacity-100'
                        )}
                      >
                        {value.name}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
