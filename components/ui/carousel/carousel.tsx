'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import './carousel.css';
import { Button } from '../button';
import Link from 'next/link';

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

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
  showArrows?: boolean;
};

const autoplayOptions = {
  delay: 8000,
  jump: false,
  rootNode: (emblaRoot: any) => emblaRoot.parentElement,
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
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
    <div className="embla">
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
              <div className="bg-opacity-60 bg-teal-800 absolute right-8 top-0 mt-4 py-4 px-4 lg:px-8 rounded-md font-light">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300">
                  {slide.title}
                </div>
                <div className="text-sm lg:text-2xl text-white">
                  {slide.description}
                </div>

                {slide.callToAction && (
                  <Link href={slide.callToAction.link}>
                    <Button className="mt-2 md:mt-4 text-sm md:text-xl bg-orange-900">
                      {slide.callToAction.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {props.showArrows && (
        <>
          <button className="embla__prev" onClick={scrollPrev}>
            Prev
          </button>
          <button className="embla__next" onClick={scrollNext}>
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
