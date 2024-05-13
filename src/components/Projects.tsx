import { FC } from 'react';
import restaurant from '../assets/restaurant.png';
import terrorism from '../assets/terrorism.png';
import zomato from '../assets/zomato.png';
import ecommerce from '../assets/ecommerce.png';

const Projects: FC = () => {
  return (
    <section id="projects"className="container max-w-6xl py-16 flex flex-col items-center">
      <h2 className="text-[32px] font-bold mb-16 mt-14">
        Industry Relevant Projects
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        <div className="flex flex-col gap-8">
          <div className="rounded-lg bg-[#33373B] flex gap-3 max-w-3xl w-full shadow-xl">
            <img
              src={restaurant}
              alt="Restaurant Analysis"
              className="rounded-l-lg"
            />
            <div className="flex flex-col gap-2 mt-6">
              <h3 className="text-xl font-bold">Restaurant Analysis</h3>
              <p>
                Working on census data of US to analyse the factors that
                influence the living  standards of people in the USA
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch w-full">
            <div className="rounded-lg bg-[#33373B] flex gap-3 max-w-sm w-full shadow-xl lg:pr-2">
              <img
                src={terrorism}
                alt="terrorism project"
                className="rounded-l-lg"
              />
              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-xl font-bold">Terrorism Project</h3>
                <p className="text-sm">
                  Working on census data of US to analyse the factors
                  that influence 
                  the living standards of people in 
                  the USA
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#33373B] flex gap-3 max-w-sm w-full shadow-xl lg:pr-2">
              <img
                src={zomato}
                alt="zomato dashboard"
                className="rounded-l-lg"
              />
              <div className="flex flex-col gap-2 mt-4">
                <h3 className="text-xl font-bold">Zomato Dashboard</h3>
                <p className="text-sm">
                  Working on census data of US to analyse the factors that
                  influence the living standards of people in the USA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[#33373B] flex flex-col gap-4 max-w-72 pb-4 lg:pb-0 w-full shadow-xl">
          <img
            src={ecommerce}
            alt="ecommerce live sale project"
            className="rounded-t-lg"
          />

          <div className="flex flex-col gap-2 px-4">
            <h3 className="text-xl font-bold">E-commerce Live Sale</h3>
            <p className='text-sm lg:text-base'>
              Working on census data of US to <br /> analyse the factors that
              influence the living standards of people in the 
              USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
