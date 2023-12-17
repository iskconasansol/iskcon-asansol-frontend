'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

import { EventSourceInput } from '@fullcalendar/core/index.js';

export interface VaishnavEvent {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
  text?: string;
  prio?: number;
  dispItem?: number;
  fasttype?: number;
  fastsubject?: string;
  spec?: string;
}

type Props = {
  events: VaishnavEvent[];
  onClickDate: (events: VaishnavEvent[]) => void;
};

const VaishnavaCalendar: React.FC<Props> = ({ events, onClickDate }) => {
  const handleDateClick = (arg: DateClickArg) => {
    const clickedEvents = events.filter((event) => {
      return event.start === arg.dateStr;
    });

    onClickDate(clickedEvents);
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      events={events as EventSourceInput}
      nowIndicator={true}
      height={'900px'}
      dateClick={handleDateClick}
      eventClassNames={(arg) => {
        return arg.event.title.toLowerCase().includes('ekadasi')
          ? ['ekadasi']
          : [''];
      }}
    />
  );
};

export default VaishnavaCalendar;
