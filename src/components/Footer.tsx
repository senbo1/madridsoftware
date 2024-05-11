import { FC } from 'react';
import { FiChevronsRight } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.svg';
import { Button } from './ui/button';

const Footer: FC = () => {
  return (
    <section className="bg-black pt-24 pb-14">
      <div className="container max-w-7xl">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-28">
          <div className="flex flex-col max-w-lg gap-20 order-2 lg:order-none">
            <div className="flex flex-col gap-8">
              <h3 className="font-bold text-xl">Where Success chases you!</h3>
              <p className="text-sm text-neutral-400 font-medium">
                Stay ahead of the curve with exclusive updates on our latest
                programs, workshops, community events, industry news, articles,
                and special reports—all directly to your inbox!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-black py-3 pr-16 pl-7 rounded-full "
                />
                <Button className='text-base py-7 px-6 pl-8 rounded-full flex items-center justify-center gap-1'>
                  Subscribe
                  <FiChevronsRight className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-12">
              <div className="flex gap-8">
                <a
                  href="https://www.instagram.com/madrid_software_trainings"
                  target="_blank"
                >
                  <GrInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/madrid-software/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.facebook.com/MadridSoftwareTrainings"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/MadridSoftware" target="_blank">
                  <FaXTwitter />
                </a>
              </div>
              <img src={logo} alt="madrid software logo" className="-ml-2.5" />
            </div>
          </div>

          <div className="flex gap-10 md:gap-20 order-1">
            <div className="space-y-8">
              <h3 className="text-xl font-bold">Tools</h3>
              <ul className="space-y-4">
                <li className="text-sm text-[#79859D]">Python</li>
                <li className="text-sm text-[#79859D]">PowerBI</li>
                <li className="text-sm text-[#79859D]">NumPi</li>
                <li className="text-sm text-[#79859D]">Tableau</li>
                <li className="text-sm text-[#79859D]">MS Excel</li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold">Roles</h3>
              <ul className="space-y-4">
                <li className="text-sm text-[#79859D]">Data Analyst</li>
                <li className="text-sm text-[#79859D]">Data Scientist</li>
                <li className="text-sm text-[#79859D]">Data Engineer</li>
                <li className="text-sm text-[#79859D]">Business Analyst</li>
                <li className="text-sm text-[#79859D]">Risk Analyst</li>
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-bold">Opportunities</h3>
              <ul className="space-y-4">
                <li className="text-sm text-[#79859D]">Upskill your team</li>
                <li className="text-sm text-[#79859D]">
                  Learner&apos;s Center
                </li>
                <li className="text-sm text-[#79859D]">Newsletter Vault</li>
                <li className="text-sm text-[#79859D]">Mentor</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[#79859D] text-sm pt-10 border-t border-[#3D4D6E] mt-14">
          &#169; 2024 MadridSoftwareTrainings. Pvt. Ltd. All rights reserved.{' '}
        </p>
      </div>
    </section>
  );
};

export default Footer;
