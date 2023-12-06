import {
  TResultCalendar,
  GCLocation,
  GregorianDateTime,
} from './gaurabda-calendar/index.js';

export async function GET() {
  const tc = new TResultCalendar();
  const location = GCLocation.FindByName('Calcutta');
  const startDate = new GregorianDateTime();
  tc.CalculateCalendar(location, startDate, 30);
  const events = tc.m_pData
    .filter((d, index) => index > tc.BEFORE_DAYS)
    .map((d, index) => {
      if (index <= tc.BEFORE_DAYS)
        return {
          event: d['dayEvents'],
        };
    });
  return Response.json({ data: events, length: events.length });
}
