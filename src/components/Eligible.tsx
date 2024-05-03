import { FC } from 'react';
import eligible from '../assets/eligible.png';

const Eligible: FC = () => {
  return (
    <section className="bg-[#16171A] shadow-inset">
      <div className="container max-w-5xl py-16 sm:flex sm:gap-24 px-0">
        <img src={eligible} alt="A woman using laptop" />

        <div className="flex flex-col gap-8 mt-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-bold">
              Is the <span className="text-gradient">programme for you</span>?
            </h2>
            <p className="text-[13px]">
              Get ready to be a Data Analyst and achieve the growth you seek in
              your career, <br />
              especially if you are:
            </p>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-4 max-w-72 w-full">
              <span className="w-2 h-full bg-blue rounded-lg"></span>
              <p className="text-[15px] font-bold">
                A graduate or postgraduate student, wanting to learn this skill
              </p>
            </div>

            <div className="flex gap-4">
              <span className="w-2 h-full bg-blue rounded-lg"></span>
              <p className="text-[15px] font-bold">
                A jobseeker or working professional, seeking to upskill in new
                technologies
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Eligible;
