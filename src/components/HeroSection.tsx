import { FC } from 'react';
import dataAnalytics from '../assets/data-analytics.png';
import ibmlogo from '../assets/IBM-logo.png';
import { Button } from './ui/button';

const HeroSection: FC = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-16 p-12 justify-center items-center">
      <div className="flex flex-col items-start gap-2">
        <p className="text-sm font-semibold bg-[#9FFF00] text-[#07334B] p-1 px-2 rounded-md ">
          #BestSeller
        </p>
        <p className="text-xl">
          Learn To <span className="text-gradient">Extract the Secrets</span>{' '}
          using
        </p>
        <h2 className="text-5xl font-semibold leading-[55px] tracking-wider">
          <span className="text-gradient">Data Analytics</span>
          <br />& Power BI
        </h2>
        <p className="text-xl">
          Master data cleaning, pattern identification, predictive <br />{' '}
          modelling with machine learning, and effective data <br />{' '}
          communication for actionable insights.
        </p>

        <h3 className="font-bold flex items-center gap-4 text-2xl mt-2">
          <img src={ibmlogo} alt="ibmlogo" />
          IBM Certification Course
        </h3>

        <div className="flex gap-8 my-4">
          <div className='flex flex-col gap-2 '>
            <Button size="lg" className="font-bold">
              Enroll Now
            </Button>
            <p className='text-xs text-neutral-300'>*EMI Options Available</p>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="text-gradient font-bold"
          >
            Download Syllabus
          </Button>
        </div>
      </div>

      <div>
        <img src={dataAnalytics} alt="dataAnalytics" />
      </div>
    </section>
  );
};

export default HeroSection;
