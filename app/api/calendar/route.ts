import {
  TResultCalendar,
  GCLocation,
  GregorianDateTime,
} from './gaurabda-calendar/index.js';

export async function POST(request: Request) {
  const payload = await request.json();
  var loc = GCLocation.FindByName('Calcutta');
  const { month, year } = payload;

  const startDate = new GregorianDateTime();

  const padDigit = (digit: number, padding: number) => {
    return digit.toString().padStart(padding, '0');
  };

  const tc = new TResultCalendar();
  tc.CalculateMonth(loc, year || startDate.year, month || startDate.month);

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
          start: `${e.date.year}-${padDigit(e.date.month, 2)}-${e.date.day}`,
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
