import {
  TResultCalendar,
  GCLocation,
  GregorianDateTime,
} from './gaurabda-calendar/index.js';

export async function POST(request: Request) {
  const payload = await request.json();
  const loc = GCLocation.FindByName('Calcutta');
  const { month, year } = payload;

  const startDate = new GregorianDateTime();

  const tc = new TResultCalendar();
  tc.CalculateMonth(loc, year || startDate.year, month || startDate.month);

  return Response.json({
    events: combineAllEventsWithDate(tc)
      .map(formatEvent)
      .sort(sortDayEventsByPriority),
  });
}

export async function GET() {
  const loc = GCLocation.FindByName('Calcutta');
  const startDate = new GregorianDateTime();

  const tc = new TResultCalendar();
  tc.CalculateMonth(loc, 2023, 12);

  return Response.json({
    events: tc.m_pData,
  });
}

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
        start: `${e.date.year}-${padDigit(e.date.month, 2)}-${padDigit(
          e.date.day,
          2
        )}`,
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

const padDigit = (digit: number, padding: number) => {
  return digit.toString().padStart(padding, '0');
};
