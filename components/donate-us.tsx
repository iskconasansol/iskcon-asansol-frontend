import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: 'Nitya Seva',
    subtitle: 'Daily worship of the Lord. Join us',
    imageURL: '/images/lord_jagannath_idols.svg',
    link: '/donation/nitya-seva',
    className: 'bg-orange-100',
    buttonText: 'Donate',
  },
  {
    title: 'Future Temple',
    subtitle: 'Daily distribution of prasadam for devotees',
    imageURL: '/images/temple.svg',
    link: '/donation/new-temple',
    className: 'bg-blue-100',
    buttonText: 'Donate',
  },
  {
    title: 'Anna Dan Seva',
    subtitle: 'Donate for free prasadam distribution',
    imageURL: '/images/anna_dan.svg',
    link: '#',
    className: 'bg-pink-100',
    buttonText: 'Donate',
  },
  {
    title: 'Temple Donation',
    subtitle: 'Learn the teachings of Bhagavad Gita',
    imageURL: '/images/namaste.svg',
    link: 'activities/gita-classes',
    className: 'bg-teal-100',
    buttonText: 'Donate',
  },
];

const DonateUs = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl">Donate Us!</h3>
            <p>Your small contribution can make a big difference!</p>
          </div>

          <Link href={'/donation'} className="flex items-center">
            <Button variant={'outline'}>View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-4">
          {items.map((item, index) => {
            return (
              <Link
                href={item.link}
                className="bg-white rounded-md p-4 shadow-md border"
                key={index}
              >
                <div className="h-40 bg-purple-100 rounded-md relative">
                  <Image
                    fill={true}
                    src={item.imageURL}
                    alt="lord jagannath icon"
                    className={cn('object-contain p-2', item.className)}
                  />
                </div>

                <div className="flex justify-between items-center mt-2">
                  <h4 className="mt-2">{item.title}</h4>

                  <Button className="mt-2" variant={'secondary'}>{item.buttonText}</Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonateUs;
