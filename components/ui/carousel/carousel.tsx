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
  delay: 4000,
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
              <div className="bg-opacity-70 bg-purple-800 absolute left-8 lg:left-12 top-2/3 transform -translate-y-1/3 py-4 px-4 lg:px-10 rounded-md font-light">
                <div className="text-2xl md:text-4xl lg:text-7xl font-bold text-yellow-400">
                  {slide.title}
                </div>
                <div className="text-sm lg:text-2xl mt-2 text-white">
                  {slide.description}
                </div>

                {slide.callToAction && (
                  <Link href={slide.callToAction.link}>
                    <Button className="mt-2 md:mt-4 text-sm md:text-xl bg-orange-600">
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
