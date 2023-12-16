import {
  TResultCalendar,
  GCLocation,
  GregorianDateTime,
} from './gaurabda-calendar/index.js';

export async function GET() {
  var loc = GCLocation.FindByName('Calcutta');

  const startDate = new GregorianDateTime();

  const tc = new TResultCalendar();
  tc.CalculateMonth(loc, startDate.year, startDate.month);

  const sortDayEventsByPriority = (a: any, b: any) => {
    if (a.prio < b.prio) return -1;
    if (a.prio > b.prio) return 1;
    return 0;
  };

  const combineAllEventsWithDate = (tc: TResultCalendar) => {
    const events = tc.m_pData.map((e) => {
      return e.dayEvents.map((de: any) => {
        return {
          ...de,
          start: `${e.date.year}-${e.date.month}-${e.date.day}`,
        };
      });
    });

    return events.flat();
  };

  const formatEvent = (e: any) => {
    return {
      title: e.text,
      ...e,
    };
  };

  return Response.json({
    events: combineAllEventsWithDate(tc)
      .map(formatEvent)
      .sort(sortDayEventsByPriority),
  });
}
