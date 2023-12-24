'use client';

import useCalendarApi from '@/app/hooks/useCalendarApi';
import PageHeader from '@/components/page-header';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import VaishnavaCalendar, {
  VaishnavEvent,
} from '@/components/vaishnava-calendar';
import { useState } from 'react';

const VaishnavaCalendarPage = () => {
  const [events, setEvents] = useState<VaishnavEvent[]>([]);
  const { fetchCalendarEventsByMonthAndYear } = useCalendarApi();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<VaishnavEvent[]>([]);

  const handleMonthChange = async (month: number, year: number) => {
    setEvents([]);
    const payload = JSON.stringify({ month, year });
    const response = await fetchCalendarEventsByMonthAndYear(payload);

    if (response) {
      setEvents(response.events || []);
    }
  };

  const handleDateClick = (events: VaishnavEvent[]) => {
    setSelectedEvents(events);
    setShowDialog(true);
  };

  const selectedDate = selectedEvents[0]?.start;
  //format selected Date to show in this format 12th January 2021

  const formattedSelectedDate = new Date(selectedDate).toLocaleDateString(
    'en-GB',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  );

  const handleDialogOpenChange = (open: boolean) => {
    setSelectedEvents([]);
    setShowDialog(open);
  };
  return (
    <main className="bg-teal-50">
      <PageHeader className="bg-teal-100">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-semibold text-slate-700">
            Vaishnava Calendar
          </h1>
          <p className="text-sm mt-2 max-w-md">
            This is a Vaishnava calendar that shows the dates of the festivals
            according to the Vaishnava tradition.
          </p>
        </div>
      </PageHeader>
      <div className="container py-16">
        <VaishnavaCalendar
          events={events}
          onChangeMonth={handleMonthChange}
          onDateClick={handleDateClick}
        />
      </div>

      <Dialog open={showDialog} onOpenChange={handleDialogOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="md:text-2xl text-purple-800">
              {formattedSelectedDate}
            </DialogTitle>
            <ul className="pt-8 md:text-lg list-decimal pl-4">
              {selectedEvents.map((event, idx) => (
                <li key={event.id} className="text-left pl-2">
                  {event.title}
                </li>
              ))}
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default VaishnavaCalendarPage;
