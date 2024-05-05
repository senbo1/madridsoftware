import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

import rating from '../assets/reviews/Rating.png';
import rating2 from '../assets/reviews/Rating -2.png';
import flashcube from '../assets/reviews/flashcube.svg';
import shilpa from '../assets/reviews/shilpa.png';

import rahul from '../assets/reviews/rahul.png';
import mudita from '../assets/reviews/mudita.png';
import prerna from '../assets/reviews/prerna.png';

import pitch from '../assets/reviews/pitch.svg';
import appnox from '../assets/reviews/appnox.svg';
import comely from '../assets/reviews/comely.svg';

const Reviews: FC = () => {
  return (
    <section className="container max-w-6xl py-12 flex flex-col items-center gap-16">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-bold text-[32px]">
          <span className="text-gradient">Madrid Software</span> Shines Bright
          with <br /> Our Stellar Students!
        </h2>

        <p className="text-xl text-neutral-400">
          Mentees who have achieved remarkable career transitions through
          participation in <br />
          our program stand as testament to the transformative impact of our
          training.
        </p>
      </div>

      <Carousel opts={{ align: 'start' }} className="w-full">
        <CarouselContent>
          <CarouselItem className="basis-1/2 sm:basis-1/4 flex flex-col items-center">
            <img
              src={shilpa}
              alt="shilpa profile picture"
              className="relative top-12 -mt-12"
            />
            <div className="bg-[#33373B] pt-14 pb-5 px-4 text-center rounded-xl h-[272px]">
              <h3 className="font-bold">Shilpa</h3>
              <img
                src={flashcube}
                alt="flashcube"
                className="w-14 h-9 mx-auto"
              />
              <p className="font-bold text-xs text-white/40">
                FlashCube IT Services Pvt. Ltd.
              </p>
              <p className="text-xs text-white/40">(8 LPA)</p>
              <img src={rating} alt="rating" className="w-32 h-6 mx-auto" />
              <p className="text-xs mt-4">
                Madrid Solution catapulted my career journey, equipping me with
                the skills to transition into a successful UX/UI designer.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/4 flex flex-col items-center">
            <img
              src={rahul}
              alt="rahul profile picture"
              className="relative top-12 -mt-12"
            />
            <div className="bg-[#33373B] w-full pt-14 pb-5 px-4 text-center rounded-xl h-[272px]">
              <h3 className="font-bold">Rahul</h3>
              <img
                src={pitch}
                alt="pitch catalyst logo"
                className="w-14 h-9 mx-auto"
              />
              <p className="font-bold text-xs text-white/40">Pitch Catalyst</p>
              <p className="text-xs text-white/40">(12 LPA)</p>
              <img src={rating2} alt="rating" className="w-32 h-6 mx-auto" />
              <p className="text-xs mt-4">
                Learning at Madrid was effortless, thanks to their exceptional
                teaching methods and supportive learning environment.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/4 flex flex-col items-center">
            <img
              src={mudita}
              alt="mudita profile picture"
              className="relative top-12 -mt-12"
            />
            <div className="bg-[#33373B] w-full pt-14 pb-5 px-4 text-center rounded-xl h-[272px]">
              <h3 className="font-bold">Mudita</h3>
              <img
                src={appnox}
                alt="appnox technologies"
                className="w-14 h-9 mx-auto"
              />
              <p className="font-bold text-xs text-white/40">
                Appnox Technologies
              </p>
              <p className="text-xs text-white/40">(10 LPA)</p>
              <img src={rating2} alt="rating" className="w-32 h-6 mx-auto" />
              <p className="text-xs mt-4">An amazing experience indeed!</p>
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/4 flex flex-col items-center">
            <img
              src={prerna}
              alt="prerna profile picture"
              className="relative top-12 -mt-12"
            />
            <div className="bg-[#33373B] w-full pt-14 pb-5 px-4 text-center rounded-xl h-[272px]">
              <h3 className="font-bold">Prerna</h3>
              <img
                src={comely}
                alt="comely enterprises logo"
                className="w-14 h-9 mx-auto"
              />
              <p className="font-bold text-xs text-white/40">
                Comely Enterprises
              </p>
              <p className="text-xs text-white/40">(12 LPA)</p>
              <img src={rating2} alt="rating" className="w-32 h-6 mx-auto" />
              <p className="text-xs mt-4">
                Joining Madrid was a game-changer for me. It provided invaluable
                insights into the real-world landscape of UX design.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/2 sm:basis-1/4 flex flex-col items-center">
            <img
              src={shilpa}
              alt="shilpa profile picture"
              className="relative top-12 -mt-12"
            />
            <div className="bg-[#33373B] w-full pt-14 pb-5 px-4 text-center rounded-xl">
              <h3 className="font-bold">Shilpa</h3>
              <img
                src={flashcube}
                alt="flashcube"
                className="w-14 h-9 mx-auto"
              />
              <p className="font-bold text-xs text-white/40">
                FlashCube IT Services Pvt. Ltd.
              </p>
              <p className="text-xs text-white/40">(8 LPA)</p>
              <img src={rating} alt="rating" className="w-32 h-6 mx-auto" />
              <p className="text-xs mt-4">
                Madrid Solution catapulted my career journey, equipping me with
                the skills to transition into a successful UX/UI designer.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Reviews;
