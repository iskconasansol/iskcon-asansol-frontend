'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

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
};

const VaishnavaCalendar: React.FC<Props> = ({ events }) => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events as EventSourceInput}
        nowIndicator={true}
      />
    </>
  );
};

export default VaishnavaCalendar;
