import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultPage } from '../default/DefaultPage';
import { Stripe } from '~/react/components/stripe/Stripe';
import servicesBg from '~/assets/images/services-bg.png';
import phoneAlarm from '~/assets/images/phone-alarm.svg';
import { routes, getByName } from '~/react/routes/routes';

export interface NewProductsPageProps {}

export const NewProductsPage: React.FC<NewProductsPageProps> = () => {
  return (
    <DefaultPage>
      <div className="relative h-full min-h-screen">
        <div className="mx-auto hidden max-w-8xl sm:absolute sm:inset-0 sm:block">
          <img
            className="h-full w-full object-cover object-left-top"
            src={servicesBg.src}
            alt="background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 pt-16 sm:pl-16 md:pl-30 lg:pt-32">
            <div className="mb-16 max-w-max border-b border-primaryCol3 pb-2 pr-6 font-sans text-4xl font-medium text-secondaryCol1">
              New Products
            </div>
            <div className="grid grid-cols-1 justify-items-start gap-7 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none">
              <div className="">
                <img
                  className="mb-8 max-h-72 w-full pl-8 sm:pl-16"
                  src={phoneAlarm.src}
                  alt="phone alarm"
                />
              </div>
              <div className="mb-34 lg:pl-4">
                <div className="font-sans text-lg font-medium text-primaryCol3">
                  NEW!
                </div>
                <div className="mb-4 mt-2 font-sans text-2.5xl font-medium text-secondaryCol1">
                  Service Provider Scheduling App
                </div>
                <div className="max-w-xl space-y-4 font-sans text-sm font-normal text-secondaryCol1">
                  <p>
                    We are excited to announce a new service in a time of new
                    needs: Our Service Provider Scheduling App.
                  </p>
                  <p>
                    In short order, we’ll create a custom appointment and
                    booking application that schedules at-client-location
                    appointments for you.{' '}
                    <Link
                      className="text-primaryCol3 hover:border-b"
                      to={getByName(routes, 'Contact Us').link}
                    >
                      Contact Us
                    </Link>{' '}
                    now to schedule a meeting with us so we can understand your
                    business and needs further.
                  </p>
                  <p>
                    In the meantime, see{' '}
                    <a
                      className="text-primaryCol3 hover:border-b"
                      href="https://belbella.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://belbella.com
                    </a>{' '}
                    to get a sense of what we can do for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Stripe
            text="Do you have an idea for a new product?"
            label="Contact Us"
            link={getByName(routes, 'Contact Us').link}
          />
        </div>
      </div>
    </DefaultPage>
  );
};
