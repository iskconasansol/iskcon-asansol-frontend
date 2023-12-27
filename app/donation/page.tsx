import OfflinePayment from '@/components/offline-payment';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donate Us',
};

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

const Donation = () => {
  return (
    <main className="">
      <PageHeader className="bg-yellow-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Iskcon Asansol Donation
          </h1>
          <p>Your small contribution can make a big difference!</p>

          <div className="py-8 px-8 space-y-4 text-red-700 md:text-2xl">
            <p>
              दातव्यमिति यद्दानं दीयतेऽनुपकारिणे | देशे काले च पात्रे च तद्दानं
              सात्त्विकं स्मृतम् || 20||
            </p>

            <p>
              dātavyam iti yad dānaṁ dīyate ‘nupakāriṇe deśhe kāle cha pātre cha
              tad dānaṁ sāttvikaṁ smṛitam
            </p>

            <p className="text-gray-600">
              BG 17.20: Charity given to a worthy person simply because it is
              right to give, without consideration of anything in return, at the
              proper time and in the proper place, is stated to be in the mode
              of goodness.
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
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

                  <Button className="mt-2" variant={'secondary'}>
                    {item.buttonText}
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="py-32">
          <OfflinePayment />
        </div>
      </div>
    </main>
  );
};

export default Donation;
