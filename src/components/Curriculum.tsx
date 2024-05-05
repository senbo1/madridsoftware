import { cn } from '@/lib/utils';
import { FC, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';

enum Section {
  Introduction = 'Introduction',
  Python = 'Python',
  MySQL = 'MySQL',
  PowerBI = 'Power BI',
  Excel = 'Excel',
  Statistics = 'Statistics',
  Tools = 'Tools',
}

interface Module {
  id: number;
  title: string;
}

const modules: Module[] = [
  { id: 1, title: 'Course Introduction' },
  { id: 2, title: 'Introduction to Data Science' },
  { id: 3, title: 'Data Sources' },
  { id: 4, title: 'Course Intro' },
  { id: 5, title: 'Course Intro' },
  { id: 6, title: 'Course Intro' },
  { id: 7, title: 'Course Intro' },
  { id: 8, title: 'Course Intro' },
];

const classes = [
  'Class 1: Orientation',
  'Class 2: LMS Overview',
  'Class 3: LMS Use',
  'Class 4: LMS Overview',
  'Class 5: LMS Overview',
];

const Curriculum: FC = () => {
  const [activeTab, setActiveTab] = useState<Section>(Section.Introduction);
  const [activeModule, setActiveModule] = useState<Module>(modules[0]);

  const handleTabClick = (tab: Section) => {
    setActiveTab(tab);
    setActiveModule(modules[0]);
  };

  const renderButtons = () => {
    const buttons = [];

    for (const section in Section) {
      buttons.push(
        <button
          key={section}
          onClick={() =>
            handleTabClick(Section[section as keyof typeof Section])
          }
          className={cn(
            'font-medium py-4 px-8 bg-[#33373B] rounded-lg transition-all duration-300',
            {
              'gradient-2 font-bold':
                activeTab === Section[section as keyof typeof Section],
            }
          )}
        >
          {Section[section as keyof typeof Section]}
        </button>
      );
    }

    return buttons;
  };

  const renderModules = () => {
    return modules.map((mod) => (
      <li
        key={mod.id}
        className={cn(
          'flex items-center justify-between px-7 py-5 border-bottom',
          {
            'text-blue border-l-[3px] border-blue': activeModule.id === mod.id,
          }
        )}
        onClick={() => setActiveModule(mod)}
      >
        <div>
          <p className="text-xs font-bold">Module {mod.id}</p>
          <h4
            className={cn('text-xl font-bold text-[#A1A8AC]', {
              'text-blue': activeModule.id === mod.id,
            })}
          >
            {mod.title}
          </h4>
        </div>
        <FaChevronRight />
      </li>
    ));
  };

  return (
    <section
      id="curriculum"
      className="container max-w-6xl py-12 flex flex-col items-center gap-24"
    >
      <h2 className="text-[32px] font-bold">Curriculum Overview</h2>

      <div className="flex flex-col gap-8">
        <div className="flex gap-8">{renderButtons()}</div>
        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.Introduction,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll overflow-x-hidden scrollbar">
            {renderModules()}
          </ul>
          <ul className='max-w-md w-full pt-4'>
            {classes.map((cls) => (
              <li className="text-white flex justify-between w-full p-4 border-b-2 border-[#2A2E31]">
                {cls}
                <FaLock />
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.Python,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.MySQL,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.PowerBI,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.Excel,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.Statistics,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            flex: activeTab === Section.Tools,
          })}
        >
          <ul className="max-w-2xl w-full max-h-[475px] overflow-scroll">
            {renderModules()}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
