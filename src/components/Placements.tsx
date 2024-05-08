import { FC } from 'react';
import Companies from './Companies';

const Placements: FC = () => {
  return (
    <section
      id="placements"
      className="container max-w-6xl py-12 my-16 flex flex-col items-center gap-16"
    >
      <h2 className="text-[32px] font-bold tracking-wide">
        <span className="text-gradient">Placement Opportunities </span>That
        You&prime;ll Get With Us
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <Companies />
        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold">
            An Extensive Network of Hiring <br /> Collaborators
          </h3>
          <p className="text-neutral-400">
            Join our Data Analytics Program to gain access to a <br /> vast
            network of 500+ hiring partners, offering diverse <br /> career
            opportunities across industries upon program <br />
            completion
          </p>
          <div className="flex gap-9">
            <div>
              <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-bold font-barlowc">
                500+
              </h2>
              <p className="text-neutral-400">Hiring Partners</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold font-barlowc">
                100%
              </h2>
              <p className="text-neutral-400">Placement Assistance</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold font-barlowc">
                9.5LPA
              </h2>
              <p className="text-neutral-400">Highest CTC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
