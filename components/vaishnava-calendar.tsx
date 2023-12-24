'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

import { EventSourceInput } from '@fullcalendar/core/index.js';
import IskconLogoIcon from './icons/iskcon-logo-icon';

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
  onChangeMonth?: (month: number, year: number) => void;
  onDateClick?: (events: VaishnavEvent[]) => void;
};

const VaishnavaCalendar: React.FC<Props> = ({
  events,
  onChangeMonth,
  onDateClick,
}) => {
  const handleDateClick = (arg: DateClickArg) => {
    const clickedEvents = events?.filter((event) => {
      return event.start === arg.dateStr;
    });
    onDateClick && onDateClick(clickedEvents);
  };
  return (
    <div className="relative">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events as EventSourceInput}
        nowIndicator={true}
        height={'1200px'}
        dateClick={handleDateClick}
        eventClassNames={(arg) => {
          return arg.event.title.toLowerCase().includes('ekadasi')
            ? ['ekadasi']
            : [''];
        }}
        datesSet={(arg) => {
          const currentMonth = arg.view.currentStart.getMonth() + 1;
          const currentYear = arg.view.currentStart.getFullYear();
          onChangeMonth && onChangeMonth(currentMonth, currentYear);
        }}
        eventClick={(arg) => {
          const clickedDate = arg.event.startStr;
          const clickedEvents = events.filter((event) => {
            return event.start === clickedDate;
          });

          onDateClick && onDateClick(clickedEvents);
        }}
      />

      {events.length === 0 && (
        <div className="absolute flex w-full h-2/3 justify-center bg-slate-900/60 items-center top-14 left-0 z-10">
          <div className="flex flex-col text-white text-center animate-pulse">
            <IskconLogoIcon className="text-white w-60 h-60 fill-current" />
            <h2 className="uppercase text-3xl font-light">Asansol</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaishnavaCalendar;
