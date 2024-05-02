import { FC } from 'react';
import { Button } from './ui/button';

const links = [
  { name: 'Overview', href: '#overview' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Projects', href: '#projects' },
  { name: 'Placements', href: '#placements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'FAQs', href: '#faqs' },
];

const MainNav: FC = () => {
  return (
    <nav className='hidden sticky top-0 z-10 bg-white/10 max-w-3xl mx-auto mt-4 py-3 rounded-lg sm:flex items-center justify-center gap-6'>
      <ul className='flex gap-4'>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className='text-sm'>{link.name}</a>
          </li>
        ))}
      </ul>

      <Button size="sm" className="px-14 py-5 font-bold text-[12px] rounded-lg">
        Enroll Now
      </Button>
    </nav>
  );
};

export default MainNav;
