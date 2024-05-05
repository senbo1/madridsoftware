import { FC } from 'react';
import companyLogos from '@/lib/Companylogos';

const Companies: FC = () => {
  return (
    <div className='flex flex-col gap-4 lg:gap-8'>
      {companyLogos.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex gap-4 lg:gap-8'
        >
          {row.map((logo, logoIndex) => (
            <img
              key={`${rowIndex}-${logoIndex}`}
              src={logo}
              alt={`Company Logo ${rowIndex * 6 + logoIndex + 1}`}
              
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Companies;
