'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import './carousel.css';
import { Button } from '../button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CallToAction = {
  text: string;
  link: string;
};

export type Slide = {
  title: string;
  description: string;
  image: string;
  callToAction?: CallToAction;
};

type Props = {
  slides: Slide[];
  options?: EmblaOptionsType;
  showArrows?: boolean;
};

const autoplayOptions = {
  delay: 10000,
  jump: false,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

const Carousel: React.FC<Props> = (props) => {
  const { slides, options, showArrows } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="relative w-full h-[300px] md:h-[600px]">
                <Image
                  className="embla__slide__img object-cover object-top"
                  src={slide.image}
                  alt={slide.description}
                  fill={true}
                />
              </div>
              <div className="md:bg-gradient-to-b from-transparent to-fuchsia-900 bg-fuchsia-800 bg-opacity-70 md:bg-transparent absolute w-full md:w-full md:h-[400px] bottom-0 px-8 py-4 md:py-0 rounded-md font-light">
                <div className="md:transform md:translate-y-60">
                  <h1 className="text-base md:text-3xl lg:text-4xl font-bold text-yellow-300">
                    {slide.title}
                  </h1>
                  <div className="text-xs lg:text-2xl text-white">
                    {slide.description}
                  </div>

                  {slide.callToAction && (
                    <Link href={slide.callToAction.link}>
                      <Button className="mt-2 md:mt-4 text-sm md:text-xl bg-orange-600 hover:bg-orange-800">
                        {slide.callToAction.text}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showArrows && (
        <>
          <button className="embla__prev" onClick={scrollPrev}>
            <ChevronLeft size={48} />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <ChevronRight size={48} />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
