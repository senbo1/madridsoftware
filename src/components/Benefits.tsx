import { FC } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import dataExplore from '../assets/data-explore.png';

const Benefits: FC = () => {
  return (
    <section id="benefits" className="container max-w-6xl py-20 flex flex-col justify-center items-center gap-10">
      <h2 className="text-[32px] font-bold">
        Explore the Data Analytics Program
      </h2>
      <div className="flex flex-col sm:flex-row gap-14">
        <div className="flex flex-col gap-11">
          <p className="text-neutral-400">
            Enroll in Madrid Software's Data Analytics course to master data
            collection, <br /> analysis, and visualization, while gaining
            expertise in statistics, machine <br /> learning, and big data
            technologies.
          </p>

          <div className="flex gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold flex gap-3 items-center">
                <IoIosCheckmarkCircle fill="#7ABD6E" className="h-5 w-8" />
                Dedicated Curriculum
              </h4>
              <p className="text-sm text-neutral-400">
                Cutting-Edge Curriculum Aligned with Industry Standards
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold flex gap-3 items-center">
                <IoIosCheckmarkCircle fill="#7ABD6E" className="h-5 w-8" />
                Experienced Mentors
              </h4>
              <p className="text-sm text-neutral-400">
                Guided by Experts: Practical Training for In-Demand Abilities
              </p>
            </div>
          </div>

          <div className="flex gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold flex gap-3 items-center">
                <IoIosCheckmarkCircle fill="#7ABD6E" className="h-5 w-8" />
                Career Support
              </h4>
              <p className="text-sm text-neutral-400 max-w-sm">
                Complete Career Coaching: Expert 
                Advice for Achieving Your Goals
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold flex gap-3 items-center">
                <IoIosCheckmarkCircle fill="#7ABD6E" className="h-5 w-8" />
                Practical Learning
              </h4>
              <p className="text-sm text-neutral-400">
                Learning Process Based on Learning from Practical experience
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={dataExplore} alt="dataExplore" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
