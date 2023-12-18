import useSWRMutation from 'swr/mutation';
import { API_CONFIG } from '../config/api.config';
import { fetchCalendarEvents } from '../service/calendar.service';

const useCalendarApi = () => {
  const { trigger: fetchCalendarEventsByMonthAndYear, error } = useSWRMutation(
    API_CONFIG.endpoints.calendar,
    fetchCalendarEvents
  );

  return {
    fetchCalendarEventsByMonthAndYear,
    error,
  };
};

export default useCalendarApi;
