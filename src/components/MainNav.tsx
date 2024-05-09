import { FC, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import EnrollModal from './EnrollModal';

const links = [
  { name: 'Overview', href: '#placements' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Projects', href: '#projects' },
  { name: 'Placements', href: '#placements' },
  { name: 'FAQs', href: '#faqs' },
];

const MainNav: FC = () => {
  const [activeLink, setActiveLink] = useState<string>(links[0].name);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId!);
    targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(event.currentTarget.textContent!);
  };

  return (
    <nav className="hidden sticky top-0 z-20 bg-white/10 max-w-[700px] mx-auto mt-12 py-3 rounded-lg lg:flex items-center justify-center gap-8 backdrop-blur-md">
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.name} className="flex flex-col items-center">
            <a
              href={link.href}
              className={cn('text-sm', {
                'font-semibold': activeLink === link.name,
              })}
              onClick={handleClick}
            >
              {link.name}
            </a>
            <p
              className={cn(
                'hidden w-14 bg-blue h-1 relative top-5 rounded-t-lg',
                {
                  block: activeLink === link.name,
                }
              )}
            ></p>
          </li>
        ))}
      </ul>

      <Button
        size="sm"
        className="px-14 py-5 font-bold text-[12px] rounded-lg"
        onClick={openModal}
      >
        Enroll Now
      </Button>
      <EnrollModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default MainNav;
