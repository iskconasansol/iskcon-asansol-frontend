'use client';

import ChartBarIcon from '@/components/icons/chart-bar-icon';
import CurrencyRupeeIcon from '@/components/icons/currency-rupee-icon';
import HomeIcon from '@/components/icons/home-icon';
import PlusIcon from '@/components/icons/plus-icon';
import SparklesIcon from '@/components/icons/sparkles-icon';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from '@/components/ui/popover';
import { X } from 'lucide-react';
import { useRef } from 'react';

const moreItems = [
  {
    name: 'History',
    href: '/iskcon/history',
  },
  {
    name: 'Founder',
    href: '/iskcon/founder',
  },
  {
    name: 'Philosophy',
    href: '/iskcon/philosophy',
  },
  {
    name: 'About Us',
    href: '/iskcon/about-us',
  },
  {
    name: 'Festivals',
    href: '/festivals',
  },
  {
    name: 'Members',
    href: '/members',
  },
  {
    name: 'Learn from Prabhupada',
    href: '/learn-from-prabhupada',
  }
];

const MobileNav = () => {
  const popoverClose = useRef(null);
  return (
    <nav className="sticky bottom-0 lg:hidden bg-yellow-50 text-gray-800">
      <div className="flex justify-between items-center py-4 px-8 text-xs font-light">
        <Link href="/" className="flex justify-center flex-col items-center ">
          <HomeIcon className="" />
          <span>Home</span>
        </Link>

        <Link
          href="/projects"
          className="flex justify-center flex-col items-center"
        >
          <ChartBarIcon />
          <span>Projects</span>
        </Link>
        <Link
          href="/donation"
          className="flex justify-center flex-col items-center"
        >
          <CurrencyRupeeIcon />
          <span>Donate</span>
        </Link>
        <Link
          href="/activities"
          className="flex justify-center flex-col items-center"
        >
          <SparklesIcon />
          <span>Activities</span>
        </Link>
        <a href="#" className="flex justify-center flex-col items-center">
          <Popover>
            <PopoverTrigger>
              <PlusIcon />
              <span>More</span>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col">
                {moreItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    className="py-2 px-4 hover:bg-gray-100"
                    onClick={() => {
                      if (popoverClose.current) {
                        (popoverClose.current as HTMLButtonElement).click();
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <PopoverClose
                ref={popoverClose}
                className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] outline-none cursor-default"
                aria-label="Close"
              >
                <X />
              </PopoverClose>
              <PopoverArrow className="fill-white" />
            </PopoverContent>
          </Popover>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
