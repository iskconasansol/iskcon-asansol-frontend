'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TempleSchedule from './temple-schedule';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { nextScheduleWithTime } from '@/lib/temple-schedule';

type Props = {
  className?: string;
};

type TempleTimeStatus = 'open' | 'closed';
type TempleTimings =
  | '4:15 - 13:00'
  | '13:00 - 16:15'
  | '16:15 - 21:00'
  | '21:00 - 4:15';

const TempleTimeStatus: React.FC<Props> = ({ className }) => {
  const [templeStatus, setTempleStatus] = useState<TempleTimeStatus>('open');
  const [templeTiming, setTempleTiming] =
    useState<TempleTimings>('4:15 - 13:00');
  const isOpen = templeStatus === 'open';

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const totalMinutes = hour * 60 + minutes;

    if (totalMinutes >= 4 * 60 + 15 && totalMinutes < 13 * 60) {
      setTempleStatus('open');
      setTempleTiming('4:15 - 13:00');
    } else if (totalMinutes >= 13 * 60 && totalMinutes < 16 * 60 + 15) {
      setTempleStatus('closed');
      setTempleTiming('13:00 - 16:15');
    } else if (totalMinutes >= 16 * 60 + 15 && totalMinutes < 21 * 60) {
      setTempleStatus('open');
      setTempleTiming('16:15 - 21:00');
    } else {
      setTempleStatus('closed');
      setTempleTiming('21:00 - 4:15');
    }
  }, []);

  return (
    <div className='bg-black/40 backdrop-blur-md p-4 rounded-xl text-center'>
      <div className='text-center'>
        <div className='flex gap-2 items-center justify-center md:text-xl'>
          <div
            className={clsx(
              'w-4 h-4 md:w-6 md:h-6 rounded-full border-4',
              isOpen
                ? 'bg-green-500  border-green-300'
                : 'bg-red-500 border-red-300'
            )}
          ></div>
          <div className='uppercase flex items-center'>{templeStatus}</div>
        </div>

        <div className='mt-4'>
          <div className='text-slate-300'>
            Next Schedule: {nextScheduleWithTime()}
          </div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'link'} className='text-purple-300 md:text-lg'>
            View Temple Schedule
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle className='text-left md:text-center'>
              Temple Schedule
            </DialogTitle>
            <DialogDescription>
              <ScrollArea className='h-[450px] md:h-auto'>
                <TempleSchedule />
              </ScrollArea>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className='flex gap-4 justify-center mt-4'>
        <Button>
          <a href='tel:+91 9433320314'>Call Now</a>
        </Button>
        <Button>
          <a href='https://maps.app.goo.gl/nAaXWFALFN4kY7Af8' target='_blank'>
            Get Directions
          </a>
        </Button>
      </div>
    </div>
  );
};

export default TempleTimeStatus;
