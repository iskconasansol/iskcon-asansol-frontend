import { TimeIcon } from "./icons";

const templeSchedule = [
  {
    time: '4:30 AM - 5:00 AM',
    name: 'Mangala Arati',
  },
  {
    time: '5:05 AM - 5:25 AM',
    name: 'Tulsi Arati',
  },
  {
    time: '7:15 AM - 7:45 AM',
    name: 'Shringar Arati',
  },
  {
    time: '7:45 AM - 8:00 AM',
    name: 'Guru Puja',
  },
  {
    time: '8:30 AM - 8:45 AM',
    name: 'Pushpa Arati',
  },
  {
    time: '12:00 PM - 12:20 PM',
    name: 'Raj Bhog Arati',
  },
  {
    time: '12:45 PM - 4:30 PM',
    name: 'Temple Closes',
  },
  {
    time: '4:30 PM - 4:45 PM',
    name: 'Utthapana Arati',
  },
  {
    time: '6:30 PM - 7:00 PM',
    name: 'Sandhya Arati',
  },
  {
    time: '8:30 PM - 8:45 PM',
    name: 'Shayan Arati',
  },
  {
    time: '8:45 PM - 8:45 PM',
    name: 'Temple Closes',
  },
];

const TempleSchedule = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4 mt-4 max-h-fit md:max-h-[400px]">
      {templeSchedule.map((schedule, index) => (
        <div key={index} className="flex gap-2 items-center w-[170px]">
          <TimeIcon/>
          <div className="text-left">
            <div className="font-semibold">{schedule.time}</div>
            <div className="text-sm">{schedule.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TempleSchedule;
