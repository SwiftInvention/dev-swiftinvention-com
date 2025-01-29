import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavMenu } from '../navmenu/NavMenu';
import { routes, getByName } from '~/react/routes/routes';
import { twMerge } from 'tailwind-merge';
import swiftInvention from '~/assets/images/swift-white-logo.svg';

export interface HeaderProps {
  navItems: Array<{ name: string; link: string; isInHeaderButton?: boolean }>;
}

export const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (link: string) => location.pathname === link;

  const handleWorkWithUs = () => {
    navigate('/feedback');
  };

  return (
    <nav className="bg-secondaryCol5">
      <div className="mx-auto max-w-8xl">
        <div className="flex h-18 items-center justify-between">
          <div className="flex-shrink-0 pl-5 md:pl-18">
            <Link to={getByName(routes, 'Home').link}>
              <img
                className="cursor-pointer"
                src={swiftInvention.src}
                alt="Swift Invention Logo"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <NavMenu
              navItems={navItems}
              mobileMenuRootId="mobile-menu-portal"
            />
          </div>
          <div className="hidden content-center items-center justify-end lg:mr-14 lg:flex lg:flex-1 lg:space-x-2">
            {navItems.map((value) => {
              return (
                <Link to={value.link} key={value.name}>
                  <div
                    className={twMerge(
                      'group cursor-pointer rounded-md px-3 py-2 opacity-60 duration-200 hover:opacity-100 hover:transition-all',
                      isActive(value.link) && 'opacity-100'
                    )}
                  >
                    <div
                      className={twMerge(
                        '-mb-1 whitespace-nowrap font-inter text-sm font-bold uppercase text-primaryCol2 duration-200 hover:transition-all group-hover:opacity-100',
                        isActive(value.link) && 'opacity-100'
                      )}
                    >
                      {value.name}
                    </div>
                  </div>
                </Link>
              );
            })}
            <div>
              <button
                type="button"
                onClick={handleWorkWithUs}
                className="flex h-10 items-center rounded-md border-none bg-primaryCol2 px-5 pt-1 text-sm font-bold uppercase text-secondaryCol5 hover:text-primaryCol1 lg:ml-5"
              >
                Work with Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-menu-portal" />
    </nav>
  );
};
