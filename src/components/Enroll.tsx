import { FC } from 'react';
import bgimage from '../assets/Enroll.png';
import { Button } from './ui/button';

const Enroll: FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgimage})`,
        background: `linear-gradient(261.13deg, #67397C 0%, #111D26 52.22%, #252C37 100%)`,
      }}
    >
      <div className="container max-w-6xl py-20 flex flex-col gap-8 items-start">
        <h2 className="text-[32px]">
          Seize the opportunity to transform your career today!
        </h2>

        <p className="">
          Data Analysts are in high demand, offering lucrative salaries and a
          path to managerial roles. Through impactful <br />
          contributions to decision-making, they shape strategic directions.
          This career promises growth and advancement, <br /> making it a
          rewarding choice for those seeking opportunities to thrive in the
          dynamic world of data analytics.
        </p>

        <div className="flex gap-8">
          <div className="flex flex-col gap-4 max-w-[260px]">
            <h3 className="text-2xl font-bold text-gradient-2">
              Expected growth rate <br />
              @15.5%
            </h3>
            <p>
              Global Data Analytics market size from 2024-2030 <br />
              <span className="font-bold">
                (Source: Allied Market Research)
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[260px]">
            <h3 className="text-2xl font-bold text-gradient-2">62% of Companies</h3>
            <p>
              Had data-driven decision-making throughout Europe, United States
              br & Asian countries.
              <br />
              <span className="font-bold">
                (Source: Statistics from Survey)
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-[250px]">
            <h3 className="text-2xl font-bold text-gradient-2">#1 Ranked Job Role</h3>
            <p>
              Data Analyst will become the number one emerging job role in the
              world <br />
              <span className="font-bold">(Source: The Economic Times)</span>
            </p>
          </div>
        </div>

        <Button size={'lg'} className="font-bold text-xl">
          Enroll Now
        </Button>
      </div>
    </section>
  );
};

export default Enroll;
