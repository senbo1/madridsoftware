import { FC } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Form: FC = () => {
  return (
    <section className="bg-[#191B2C] flex flex-col items-center p-10 gap-4">
      <p className="text-xl">
        Journey of a successful{' '}
        <span className="font-bold">UI/UX Designer</span> is waiting for you.
        Are you ready?
      </p>

      <form className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center" onSubmit={(e) => e.preventDefault()}>
        <div className='flex flex-col sm:flex-row gap-2'>
          <Input placeholder="Name" />
          <Input placeholder="Phone no." />
          <Input placeholder="Date & Time" />
        </div>

        <Button size="sm" className="px-14 py-5 font-bold text-xl rounded-lg">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Form;
