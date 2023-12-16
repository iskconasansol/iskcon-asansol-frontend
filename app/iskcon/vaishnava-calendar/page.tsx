import PageHeader from '@/components/page-header';
import VaishnavaCalendar, {
  VaishnavEvent,
} from '@/components/vaishnava-calendar';

const events: any[] = [
  {
    title: 'Fasting for Utpanna Ekadasi',
    prio: 20,
    dispItem: 17,
    text: 'Fasting for Utpanna Ekadasi',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-9',
  },
  {
    title: 'Fasting for Moksada Ekadasi',
    prio: 20,
    dispItem: 17,
    text: 'Fasting for Moksada Ekadasi',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-23',
  },
  {
    title: 'Break fast 06:05 - 07:15 (LT)',
    prio: 90,
    dispItem: 17,
    text: 'Break fast 06:05 - 07:15 (LT)',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-10',
  },
  {
    title: 'Break fast 06:13 - 06:26 (LT)',
    prio: 90,
    dispItem: 17,
    text: 'Break fast 06:13 - 06:26 (LT)',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-24',
  },
  {
    title: 'Odana sasthi',
    prio: 215,
    dispItem: 221,
    text: 'Odana sasthi',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-18',
  },
  {
    title: 'Advent of Srimad Bhagavad-gita',
    prio: 220,
    dispItem: 221,
    text: 'Advent of Srimad Bhagavad-gita',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-23',
  },
  {
    title: 'Katyayani vrata ends',
    prio: 225,
    dispItem: 221,
    text: 'Katyayani vrata ends',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-26',
  },
  {
    title: 'Sri Narahari Sarakara Thakura -- Disappearance',
    prio: 400,
    dispItem: 223,
    text: 'Sri Narahari Sarakara Thakura -- Disappearance',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-8',
  },
  {
    title: 'Sri Kaliya Krsnadasa -- Disappearance',
    prio: 405,
    dispItem: 223,
    text: 'Sri Kaliya Krsnadasa -- Disappearance',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-10',
  },
  {
    title: 'Sri Saranga Thakura -- Disappearance',
    prio: 410,
    dispItem: 223,
    text: 'Sri Saranga Thakura -- Disappearance',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-11',
  },
  {
    title:
      '  Dhanus Sankranti (Sun enters Sagittarius on 16 December, 15:51) (LT)',
    prio: 920,
    dispItem: 16,
    text: '  Dhanus Sankranti (Sun enters Sagittarius on 16 December, 15:51) (LT)',
    fasttype: 0,
    fastsubject: '',
    spec: 'sankranti',
    start: '2023-12-17',
  },
  {
    title: 'Kshaya tithi: Amavasya -- 12 Dec 06:27 to 13 Dec 05:04 (LT)',
    prio: 965,
    dispItem: 7,
    text: 'Kshaya tithi: Amavasya -- 12 Dec 06:27 to 13 Dec 05:04 (LT)',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-13',
  },
  {
    title: 'Kshaya tithi: Trayodasi -- 24 Dec 06:26 to 25 Dec 05:57 (LT)',
    prio: 965,
    dispItem: 7,
    text: 'Kshaya tithi: Trayodasi -- 24 Dec 06:26 to 25 Dec 05:57 (LT)',
    fasttype: 0,
    fastsubject: '',
    spec: '',
    start: '2023-12-25',
  },
];

const VaishnavaCalendarPage = () => {
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
        <VaishnavaCalendar events={events} />
      </div>
    </main>
  );
};

export default VaishnavaCalendarPage;
