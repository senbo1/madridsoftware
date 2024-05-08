import { FC } from 'react';
import companyLogos from '@/lib/Companylogos';
import { cn } from '@/lib/utils';

const Companies: FC = () => {
  return (
    <div className="flex flex-col mx-auto gap-4 lg:gap-8 overflow-hidden w-[296px] sm:w-[496px] fade-container">
      {companyLogos.map((row, rowIndex) => (
        <div className="flex">
          <div
            key={rowIndex}
            className={cn('flex space-x-4 lg:space-x-8 px-2 lg:px-4', {
              'animate-loop-scroll-left': rowIndex < 3,
              'animate-loop-scroll-right': rowIndex >= 3,
            })}
          >
            {row.map((logo, logoIndex) => (
              <img
                key={`${rowIndex}-${logoIndex}`}
                src={logo}
                alt={`Company Logo ${rowIndex * 6 + logoIndex + 1}`}
                className="w-9 max-w-none sm:w-auto"
              />
            ))}
          </div>
          <div
            key={rowIndex}
            className={cn('flex space-x-4 lg:space-x-8 px-2 lg:px-4', {
              'animate-loop-scroll-left': rowIndex < 3,
              'animate-loop-scroll-right': rowIndex >= 3,
            })}
          >
            {row.map((logo, logoIndex) => (
              <img
                key={`${rowIndex}-${logoIndex}`}
                src={logo}
                alt={`Company Logo ${rowIndex * 6 + logoIndex + 1}`}
                className="w-9 max-w-none sm:w-auto"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
