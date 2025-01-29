import React from 'react';
import { DefaultPage } from '../default/DefaultPage';
import servicesBg from '~/assets/images/services-bg.png';
import { CareersMainPage } from './CareersMainPage';

export const CareersPage: React.FC = () => {
  return (
    <DefaultPage>
      <div className="relative h-full min-h-screen">
        <div className="mx-auto hidden max-w-8xl sm:absolute sm:inset-0 sm:block">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg.src}
            alt="services page background"
          />
        </div>
        <div className="relative">
          <div className="px-10 pt-16 md:px-24 lg:pt-32">
            <CareersMainPage />
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
