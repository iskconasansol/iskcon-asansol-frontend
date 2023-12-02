import ChartBarIcon from '@/app/icons/chart-bar-icon';
import CurrencyRupeeIcon from '@/app/icons/currency-rupee-icon';
import HomeIcon from '@/app/icons/home-icon';
import PlusIcon from '@/app/icons/plus-icon';
import SparklesIcon from '@/app/icons/sparkles-icon';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from '@/components/ui/popover';
import { X } from 'lucide-react';

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
];

const MobileNav = () => {
  return (
    <nav className="sticky bottom-0 lg:hidden shadow-lg shadow-gray-500 drop-shadow-lg border-gray-100 border-t">
      <div className="flex justify-between items-center bg-white py-4 px-8 text-xs font-light">
        <Link href="/" className="flex justify-center flex-col items-center">
          <HomeIcon />
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
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <PopoverClose
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
