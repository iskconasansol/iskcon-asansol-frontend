import { VaishnavEvent } from '@/components/vaishnava-calendar';
import axiosFetcher from './api.service';

export const fetchCalendarEvents = async (
  url: string,
  { arg }: { arg: string }
) => {
  const events = (await axiosFetcher('POST')(url, { arg })) as {
    events: VaishnavEvent[];
  };

  return events;
};
