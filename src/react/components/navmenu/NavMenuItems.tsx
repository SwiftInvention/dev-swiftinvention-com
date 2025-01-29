import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { usePortal } from '~/react/hooks/usePortal';

export interface NavMenuItemsProps {
  navItems: Array<{ name: string; link: string }>;
  mobileMenuRootId: string;
}

export const NavMenuItems: React.FC<NavMenuItemsProps> = ({
  navItems,
  mobileMenuRootId,
}) => {
  const node = usePortal(mobileMenuRootId);
  const menuItems = (
    <div className="space-y-1 pb-3 pl-5 pt-2 md:pl-18 lg:hidden">
      {navItems.map((value) => {
        return (
          <Link
            to={value.link}
            className="block rounded-md px-3 py-2 font-sans text-base font-medium text-primaryCol2"
            key={value.name}
          >
            {value.name}
          </Link>
        );
      })}
    </div>
  );
  return createPortal(menuItems, node);
};
