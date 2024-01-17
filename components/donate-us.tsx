import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: 'Gita Donation',
    subtitle: 'Contribute and help us distribute Gita to 3 lakh people',
    imageURL: '/images/ram_mandir.svg',
    link: '/donation/gita-donation',
    className: 'bg-pink-100',
    buttonText: 'Donate',
  },
  {
    title: 'Nitya Seva',
    subtitle: 'Daily worship of the Lord. Join us',
    imageURL: '/images/lord_jagannath_idols.svg',
    link: '/donation/nitya-seva',
    className: 'bg-orange-100',
    buttonText: 'Donate',
  },
  {
    title: 'Projects',
    subtitle: 'Daily distribution of prasadam for devotees',
    imageURL: '/images/temple.svg',
    link: '/donation/projects',
    className: 'bg-blue-100',
    buttonText: 'Donate',
  },

  {
    title: 'Temple Donation',
    subtitle: 'Any other contribution for temple',
    imageURL: '/images/namaste.svg',
    link: '/donation/general-donation',
    className: 'bg-teal-100',
    buttonText: 'Donate',
  },
];

const DonateUs = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex flex-col gap-4 justify-between md:flex-row">
          <div>
            <h3 className="text-3xl">Contribute</h3>
            <p className='text-sm md:text-base'>Your small donation can make a big difference!</p>
          </div>

          <Link href={'/donation'} className="flex items-center">
            <Button variant={'outline'}>View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
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
                  <h4 className="mt-2 font-semibold text-purple-600">
                    {item.title}
                  </h4>

                  <Button className="mt-2" variant={'secondary'}>
                    {item.buttonText}
                  </Button>
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
