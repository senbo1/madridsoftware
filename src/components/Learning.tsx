import { FC } from 'react';
import learning from '../assets/learning.png';
import { Button } from './ui/button';
import { FiChevronsRight } from 'react-icons/fi';

const Learning: FC = () => {
  return (
    <section className="py-16 px-32 flex items-center gap-20">
      <div className="flex flex-col gap-4 items-start">
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
      <div>
        <img src={learning} alt="learning" />
      </div>
    </section>
  );
};

export default Learning;
