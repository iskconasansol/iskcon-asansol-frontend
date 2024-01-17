import CowIcon from '@/components/icons/cow-icon';
import KrishnaIcon from '@/components/icons/krishna-icon';
import GitaIcon from '@/components/icons/gita-icon';
import PrasadamIcon from '@/components/icons/prasadam-icon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const activities = [
  {
    title: 'Deity Worship',
    subtitle: 'Daily worship of the Lord. Join us',
    icon: <KrishnaIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: '#',
    className: 'bg-orange-100',
  },
  {
    title: 'Devotee Prasadam',
    subtitle: 'Daily distribution of prasadam for devotees',
    icon: <PrasadamIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: '#',
    className: 'bg-blue-100',
  },
  {
    title: 'Goshala',
    subtitle: 'Service and care for cows',
    icon: <CowIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: '#',
    className: 'bg-pink-100',
  },
  {
    title: 'Free Gita Classes',
    subtitle: 'Learn the teachings of Bhagavad Gita',
    icon: <GitaIcon className="w-12 h-12 md:w-32 md:h-32" />,
    link: 'activities/gita-classes',
    className: 'bg-teal-100',
  },
];

const Activities = () => {
  return (
    <section className=" py-16 bg-yellow-50">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h3 className="text-3xl">Activities</h3>
            <p className="text-sm md:text-base">
              Explore through our various activities
            </p>
          </div>

          <Link href={'/activities'} className="flex items-center">
            <Button variant={'outline'} className="bg-transparent">
              View All
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={'#'}
              className="bg-white rounded-md p-4 border text-slate-700 shadow hover:shadow-md"
            >
              <div
                className={cn(
                  'mx-auto w-full text-center p-4 rounded-md flex justify-center',
                  activity.className
                )}
              >
                <span>{activity.icon}</span>
              </div>

              <h4 className="mt-2 font-semibold">{activity.title}</h4>
              <p className="text-xs">{activity.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
