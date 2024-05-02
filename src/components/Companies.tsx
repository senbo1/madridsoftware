import { FC } from 'react';
import companyLogos from '@/lib/Companylogos';

const Companies: FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      {companyLogos.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className='flex gap-8'
        >
          {row.map((logo, logoIndex) => (
            <img
              key={`${rowIndex}-${logoIndex}`}
              src={logo}
              alt={`Company Logo ${rowIndex * 6 + logoIndex + 1}`}
              className=''
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Companies;
