import React from 'react';
import caseDetailsBg from '~/assets/images/case-details-bg-2x.png';
import { DefaultPage } from '../default/DefaultPage';
import { VisitButton } from '~/react/components/visitbutton/VisitButton';
import { CaseArrow, Direction } from '../../components/casearrows/CaseArrow';
import { routes, getByName } from '../../routes/routes';

export interface CaseDetailsPageProps {
  leftColumnItems: JSX.Element;
  rightColumnItems: JSX.Element;
  previousCase: string;
  nextCase: string;
  url?: string;
}

export const CaseDetailsPage: React.FC<CaseDetailsPageProps> = ({
  leftColumnItems,
  rightColumnItems,
  previousCase,
  nextCase,
  url,
}) => {
  return (
    <DefaultPage>
      <div className="relative h-full min-h-screen bg-primaryCol2">
        <div className="absolute inset-0 mx-auto h-full max-w-8xl">
          <img
            className="h-full w-full object-cover"
            src={caseDetailsBg.src}
            alt="case details page background"
          />
        </div>
        <div className="relative">
          <div className="px-8 pl-10 pt-16 sm:pl-16 lg:pl-30 lg:pt-32">
            <div className="grid grid-cols-1 gap-x-7 gap-y-7 lg:grid-cols-2">
              <div className="order-2 mb-40 lg:order-1">{leftColumnItems}</div>
              <div className="order-1 mb-16 flex max-w-xl flex-col self-center lg:order-2 lg:mb-0">
                {rightColumnItems}
                {url && <VisitButton url={url} />}
              </div>
            </div>
            <div className="flex justify-between pb-12 lg:mr-22">
              <CaseArrow
                direction={Direction.previous}
                link={getByName(routes, previousCase).link}
              />
              <CaseArrow
                direction={Direction.next}
                link={getByName(routes, nextCase).link}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};
