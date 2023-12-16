import {
  TResultCalendar,
  GCLocation,
  GregorianDateTime,
} from './gaurabda-calendar/index.js';

export async function GET() {
  var loc = GCLocation.FindByName('Calcutta');

  const startDate = new GregorianDateTime();

  const tc = new TResultCalendar();
  tc.CalculateCalendar(loc, startDate, 0);

  return Response.json({
    data: tc.m_pData.map((d) => {
      return {
        events: d.dayEvents,
        date: `${d.date.day}/${d.date.month}/${d.date.year}`,
      };
    }),
  });
}
