import { VaishnavEvent } from '@/components/vaishnava-calendar';
import axios from 'axios';

export const fetchCalendarEvents = async (
  url: string,
  { arg }: { arg: string }
) => {
  const response = await axios.post(url, JSON.parse(arg));
  const events = response.data?.events as VaishnavEvent[];

  return events;
};
