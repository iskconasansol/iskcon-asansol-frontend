import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const festivals = [
  {
    name: 'Ratha Yatra',
    image: '/images/temple.svg',
    link: '/festivals/ratha-yatra',
    className: 'bg-orange-100',
  },
  {
    name: 'Sri Krishna Janmashtami',
    image: '/images/temple.svg',
    link: '/festivals/janmashtami',
    className: 'bg-green-100',
  },
  {
    name: 'Sri Radhastami',
    image: '/images/temple.svg',
    link: '/festivals/radhastami',
    className: 'bg-purple-100',
  },
  {
    name: 'Deepavali',
    image: '/images/temple.svg',
    link: '/festivals/deepavali',
    className: 'bg-yellow-100',
  },
  {
    name: 'Govardhan Puja',
    image: '/images/temple.svg',
    link: '/festivals/govardhan-puja',
    className: 'bg-red-100',
  },
  {
    name: 'Guru Purnima',
    image: '/images/temple.svg',
    link: '/festivals/guru-purnima',
    className: 'bg-blue-100',
  },
  {
    name: 'Srila Prabhupada Vyasapuja',
    image: '/images/temple.svg',
    link: '/festivals/srila-prabhupadas-vyasapuja',
    className: 'bg-pink-100',
  },
  {
    name: 'Srila Prabhupada Disappearance',
    image: '/images/temple.svg',
    link: '/festivals/srila-prabhupadas-disappearance',
    className: 'bg-indigo-100',
  },
];

const Festivals = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-4 mt-4">
          {festivals.map((festival, index) => (
            <Link
              href={festival.link}
              className={`bg-white rounded-md p-4 shadow-md border`}
              key={index}
            >
              <div
                className={cn(festival.className, 'h-40 rounded-md relative')}
              >
                <Image
                  fill={true}
                  src={festival.image}
                  alt="temple icon"
                  className="object-contain"
                />
              </div>

              <h4 className="mt-4">{festival.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Festivals;
