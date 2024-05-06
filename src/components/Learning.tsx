import { FC } from 'react';
import learning from '../assets/learning.png';
import { Button } from './ui/button';
import { FiChevronsRight } from 'react-icons/fi';

const Learning: FC = () => {
  return (
    <section className="container max-w-6xl py-12 mt-16 flex flex-col gap-10 lg:flex-row items-center lg:justify-between">
      <div className="flex flex-col gap-4 items-start order-2 lg:order-none">
        <h2 className="font-bold text-3xl">
          Tools Selected by <br />
          Industry Professionals
        </h2>
        <p className="text-[#B5BFCD] text-base">
          Gain mastery over the latest market tools like, Python, <br />
          Django, Matplotlib and many more, with our expert <br />
          training, positioning you to dominate and succeed in <br />
          today's competitive landscape.
        </p>
        <Button size="lg" className="mt-4 px-16 py-8 text-xl font-bold">
          Start Learning
          <FiChevronsRight className='ml-2 h-6 w-6' />
        </Button>
      </div>
      <div className='order-1'>
        <img src={learning} alt="learning" />
      </div>
    </section>
  );
};

export default Learning;
