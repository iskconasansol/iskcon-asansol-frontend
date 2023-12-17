import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
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

type Props = {
  className?: string;
};

type TempleTimeStatus = 'open' | 'closed';
type TempleTimings =
  | '4:30-12:30'
  | '12:45 - 16:30'
  | '16:30 - 20:30'
  | '20:30 - 4:30';

const TempleTimeStatus: React.FC<Props> = ({ className }) => {
  const [templeStatus, setTempleStatus] = useState<TempleTimeStatus>('open');
  const [templeTiming, setTempleTiming] = useState<TempleTimings>('4:30-12:30');
  const isOpen = templeStatus === 'open';
  const isNight = templeTiming === '20:30 - 4:30';

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();

      const totalMinutes = hour * 60 + minutes;

      if (totalMinutes >= 4 * 60 + 30 && totalMinutes < 12 * 60 + 45) {
        setTempleStatus('open');
        setTempleTiming('4:30-12:30');
      } else if (totalMinutes >= 12 * 60 + 45 && totalMinutes < 16 * 60 + 30) {
        setTempleStatus('closed');
        setTempleTiming('12:45 - 16:30');
      } else if (totalMinutes >= 16 * 60 + 30 && totalMinutes < 20 * 60 + 30) {
        setTempleStatus('open');
        setTempleTiming('16:30 - 20:30');
      } else {
        setTempleStatus('closed');
        setTempleTiming('20:30 - 4:30');
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            'flex gap-2 items-center rounded-full p-2 border-gray-100 border-2 shadow-md text-xs md:text-base',
            className
          )}
        >
          <div
            className={clsx(
              'w-4 h-4 rounded-full border-4',
              isOpen
                ? 'bg-green-500  border-green-300'
                : 'bg-red-500 border-red-300'
            )}
          ></div>
          <div className="capitalize">{templeStatus}</div>
          <div>
            {isNight ? <MoonIcon /> : <SunIcon className="text-gray-500" />}
          </div>
          <div>{templeTiming}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-left md:text-center">
            Temple Schedule
          </DialogTitle>
          <DialogDescription>
            <ScrollArea className="h-[450px] md:h-auto">
              <TempleSchedule />
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TempleTimeStatus;
