import { FC, useState } from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import EnrollModal from './EnrollModal';

const links = [
  { name: 'Overview', href: '#curriculum' },
  { name: 'Placements', href: '#placements' },
  { name: 'Recognitions', href: '#recognitions' },
];

const Header: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId!);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <header className="backdrop-blur-md bg-white/5 p-2 px-4 shadow-lg rounded-b-lg relative z-20">
      <div className="max-w-6xl mx-auto p-2 flex justify-between items-center">
        <div className="flex gap-4 lg:gap-12 items-center">
          <h1>
            <img src={logo} alt="Logo" />
          </h1>
          <ul className="hidden md:flex gap-3 box-border">
            {links.map(({ name, href }) => (
              <li key={name} className="p-1">
                <a
                  href={href}
                  className="p-2 hover:border-b-4 hover:border-blue hover:font-semibold hover:text-blue duration-150 transition-all"
                  onClick={handleClick}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 md:gap-4 items-center">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="fill-blue" />
            <p className="hover:text-blue font-semibold hover:cursor-pointer transition-all text-xs sm:text-base">
              +91 95607 85589
            </p>
          </div>
          <Button variant="default" className="font-bold" onClick={openModal}>
            Apply Now
            <ChevronRight className="h-4" />
          </Button>
          <EnrollModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
