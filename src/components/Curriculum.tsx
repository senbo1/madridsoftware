import { cn } from '@/lib/utils';
import { FC, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';
import { FaLock } from 'react-icons/fa';
import { Button } from './ui/button';
import { FiDownload } from "react-icons/fi";

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
  classes: string[];
}

const testclasses = [
  'Class 1: Orientation',
  'Class 2: LMS Overview',
  'Class 3: LMS Use',
  'Class 4: LMS Overview',
  'Class 5: LMS Overview',
];

const modules: Module[] = [
  { id: 1, title: 'Course Introduction', classes: testclasses },
  { id: 2, title: 'Introduction to Data Science', classes: testclasses },
  { id: 3, title: 'Data Sources', classes: testclasses },
  { id: 4, title: 'Course Intro', classes: testclasses },
  { id: 5, title: 'Course Intro', classes: testclasses },
  { id: 6, title: 'Course Intro', classes: testclasses },
  { id: 7, title: 'Course Intro', classes: testclasses },
  { id: 8, title: 'Course Intro', classes: testclasses },
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

  const renderModules = (modules: Module[]) => {
    return (
      <div className="flex flex-col sm:flex-row w-[350px] sm:w-auto">
        <ul className="max-w-2xl w-full max-h-[475px] flex sm:flex-col overflow-scroll sm:overflow-x-hidden scrollbar">
          {modules.map((mod) => (
            <li
              key={mod.id}
              className={cn(
                'flex items-center justify-between px-7 py-5 border-bottom',
                {
                  'text-blue border-t-[3px] sm:border-l-[3px] sm:border-t-[0px] border-blue':
                    activeModule.id === mod.id,
                }
              )}
              onClick={() => setActiveModule(mod)}
            >
              <div>
                <p className="text-xs font-bold">Module {mod.id}</p>
                <h4
                  className={cn('sm:text-xl font-bold text-[#A1A8AC]', {
                    'text-blue': activeModule.id === mod.id,
                  })}
                >
                  {mod.title}
                </h4>
              </div>
              <FaChevronRight className="hidden sm:inline" />
            </li>
          ))}
        </ul>
        <ul className="max-w-md w-full pt-4 overflow-scroll overflow-x-hidden scrollbar">
          {activeModule.classes.map((cls, index) => (
            <li
              className={cn(
                'flex justify-between items-center text-white w-full p-4 border-b-2 border-[#2A2E31]'
              )}
              key={index}
            >
              {cls}
              <div className="bg-white/20 rounded-full p-1.5">
                <FaLock className="fill-white/50" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section
      id="curriculum"
      className="container max-w-6xl py-12 flex flex-col items-center gap-24"
    >
      <h2 className="text-[32px] font-bold">Curriculum Overview</h2>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col xl:flex-row gap-8">{renderButtons()}</div>
        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.Introduction,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.Python,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.MySQL,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.PowerBI,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.Excel,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.Statistics,
          })}
        >
          {renderModules(modules)}
        </div>

        <div
          className={cn('hidden bg-[#33373B]', {
            block: activeTab === Section.Tools,
          })}
        >
          {renderModules(modules)}
        </div>
      </div>

      <Button size="lg" className="px-10 py-5 font-bold rounded-md">
        Download Curriculum
        <FiDownload className='ml-2 w-6 h-6'/>
      </Button>
    </section>
  );
};

export default Curriculum;
