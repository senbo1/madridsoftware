import { FC } from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const links = [
  { name: 'Overview', href: '#overview' },
  { name: 'Placements', href: '#placements' },
  { name: 'Recognitions', href: '#recognitions' },
];

const Header: FC = () => {
  return (
    <header className="backdrop-blur-md bg-slate-700 p-2 drop-shadow-2xl rounded-b-lg">
      <div className="max-w-6xl mx-auto p-2 flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <h1>
            <img src={logo} alt="Logo" className="h-10" />
          </h1>
          <ul className="flex gap-3 box-border">
            {links.map(({ name, href }) => (
              <li key={name} className="p-1">
                <a
                  href={href}
                  className="p-2 hover:border-b-4 hover:border-blue hover:font-semibold hover:text-blue "
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="fill-blue" />
            <p className='hover:text-blue font-semibold hover:cursor-pointer transition-all'>+91 95607 85589</p>
          </div>
          <Button variant="default" className='font-bold'>
            Apply Now 
            <ChevronRight className="h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
