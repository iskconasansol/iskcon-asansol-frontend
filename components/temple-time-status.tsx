import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { MoonIcon, SunIcon } from 'lucide-react';

type TempleTimeStatus = 'open' | 'closed';
type TempleTimings =
  | '4:30-12:30'
  | '12:45 - 16:30'
  | '16:30 - 20:30'
  | '20:30 - 4:30';

const TempleTimeStatus = () => {
  const [templeStatus, setTempleStatus] = useState<TempleTimeStatus>('open');
  const [templeTiming, setTempleTiming] = useState<TempleTimings>('4:30-12:30');
  const isOpen = templeStatus === 'open';
  const isNight = templeTiming === '20:30 - 4:30';

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 4 && hour < 12) {
      setTempleStatus('open');
      setTempleTiming('4:30-12:30');
    } else if (hour >= 12 && hour < 16) {
      setTempleStatus('closed');
      setTempleTiming('12:45 - 16:30');
    } else if (hour >= 16 && hour < 20) {
      setTempleStatus('open');
      setTempleTiming('16:30 - 20:30');
    } else {
      setTempleStatus('closed');
      setTempleTiming('20:30 - 4:30');
    }
  }, []);

  return (
    <div className="flex gap-2 items-center rounded-full p-2 border-gray-100 border-2 shadow-md">
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
  );
};

export default TempleTimeStatus;
