import { FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs: FC = () => {
  return (
    <section id='faqs' className="container max-w-[800px] py-12 flex flex-col items-center gap-16">
      <div className="space-y-4 text-center">
        <h2 className="font-bold text-5xl text-neutral-300">
          Need Further Clarification?
        </h2>
        <p className="text-xl text-neutral-400">
          Discover helpful insights with our comprehensive FAQ section!
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Do I need a laptop to do the course?
          </AccordionTrigger>
          <AccordionContent>
            A laptop is necessary in order to start the course.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What is the duration of this course?
          </AccordionTrigger>
          <AccordionContent>
            Duration of the course will be of 6 months.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            When am I eligible for the Job/Freelance Assistance?
          </AccordionTrigger>
          <AccordionContent>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            How will the Placement Assistance work?
          </AccordionTrigger>
          <AccordionContent>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            What if I miss a UI/UX Design class?
          </AccordionTrigger>
          <AccordionContent>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQs;
