'use client';

import useCalendarApi from '@/app/hooks/useCalendarApi';
import PageHeader from '@/components/page-header';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import VaishnavaCalendar, {
  VaishnavEvent,
} from '@/components/vaishnava-calendar';
import { useState } from 'react';

type VaishnavaCalendarPayload = {
  year: string;
  month: string;
};

const VaishnavaCalendarPage = () => {
  const [events, setEvents] = useState<VaishnavEvent[]>([]);
  const { fetchCalendarEventsByMonthAndYear } = useCalendarApi();
  const [showDialog, setShowDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<VaishnavEvent[]>([]);

  const handleMonthChange = async (month: number, year: number) => {
    const payload = JSON.stringify({ month, year });
    const response = await fetchCalendarEventsByMonthAndYear(payload);

    if (response) {
      setEvents(response || []);
    }
  };

  const handleDateClick = (events: VaishnavEvent[]) => {
    setSelectedEvents(events);
    setShowDialog(true);
  };

  const selectedDate = selectedEvents[0]?.start;

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
            <DialogTitle>{selectedDate?.toString()}</DialogTitle>
            <ul className="pt-8 text-sm list-decimal pl-4">
              {selectedEvents.map((event, idx) => (
                <li key={event.id}>{event.title}</li>
              ))}
            </ul>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default VaishnavaCalendarPage;
