import CowIcon from '@/app/icons/cow-icon';
import KrishnaIcon from '@/app/icons/krishna-icon';
import GitaIcon from '@/app/icons/gita-icon';
import PrasadamIcon from '@/app/icons/prasadam-icon';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Deity Worship',
    icon: <KrishnaIcon className="w-20 h-20" />,
    link: '#',
  },
  {
    title: 'Devotee Prasadam',
    icon: <PrasadamIcon className="w-20 h-20" />,
    link: '#',
  },
  {
    title: 'Goshala',
    icon: <CowIcon className="w-20 h-20" />,
    link: '#',
  },
  {
    title: 'Free Gita Classes',
    icon: <GitaIcon className="w-20 h-20" />,
    link: 'activities/gita-classes',
  },
];

const Services = () => {
  return (
    <section className=" py-16 bg-yellow-50">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 md:text-3xl ">
          Our main services
        </h2>
        <p>Explore through our various services</p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {servicesData.map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center">
                {service.icon}
              </div>
              <div className="text-xs md:text-base text-center">
                {service.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
