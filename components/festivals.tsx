import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const festivals = [
  {
    name: 'Nityananda Trayodasi',
    image: '/images/nityananda.svg',
    link: '/festivals/nityananda-trayodasi',
    className: 'bg-teal-100',
  },
  {
    name: 'Ratha Yatra',
    image: '/images/temple.svg',
    link: '/festivals/ratha-yatra',
    className: 'bg-orange-100',
  },
  {
    name: 'Sri Krishna Janmashtami',
    image: '/images/janmasthami.svg',
    link: '/festivals/janmashtami',
    className: 'bg-green-100',
  },
  {
    name: 'Sri Radhastami',
    image: '/images/radha_krishna.svg',
    link: '/festivals/radhastami',
    className: 'bg-purple-100',
  },
  {
    name: 'Deepavali',
    image: '/images/lord_ram.svg',
    link: '/festivals/deepavali',
    className: 'bg-yellow-100',
  },
  {
    name: 'Govardhan Puja',
    image: '/images/govardhan.svg',
    link: '/festivals/govardhan-puja',
    className: 'bg-red-100',
  },
  {
    name: 'Guru Purnima',
    image: '/images/guru.svg',
    link: '/festivals/guru-purnima',
    className: 'bg-blue-100',
  },
  {
    name: 'Srila Prabhupada Vyasapuja',
    image: '/images/prabhupada_smiling.svg',
    link: '/festivals/srila-prabhupadas-vyasapuja',
    className: 'bg-pink-100',
  },
  {
    name: 'Srila Prabhupada Disappearance Day',
    image: '/images/prabhupada.svg',
    link: '/festivals/srila-prabhupadas-disappearance',
    className: 'bg-indigo-100',
  },
];

const Festivals = () => {
  return (
    <section>
      <div className="container py-16">
        <h1 className="text-xl md:text-3xl font-semibold text-purple-600">
          Festivals
        </h1>
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

              <h4 className="mt-4 text-sm">{festival.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Festivals;
