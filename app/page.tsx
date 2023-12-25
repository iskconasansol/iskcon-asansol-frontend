import DonateUs from '@/components/donate-us';
import Carousel, { Slide } from '@/components/ui/carousel/carousel';
import Activities from '@/components/activities';
import { Metadata } from 'next';

const slides: Slide[] = [
  {
    title: 'Donate Gita for Ram Mandir',
    description: 'Contribute and help us distribute Gita',
    image: '/images/ram-mandir.jpg',
    callToAction: {
      text: 'Donate',
      link: '/donation/gita-donation',
    },
  },
  {
    title: 'Welcome to Iskcon Asansol',
    description: 'Join us in building our new temple',
    image: '/images/lord_radha_krishna.jpg',
    callToAction: {
      text: 'Contribute',
      link: '/donation/new-temple',
    },
  },
  {
    title: 'Nitya Seva',
    description: 'Daily worship of the Lord. Join us',
    image: '/images/lord_chaitanya.jpg',
    callToAction: {
      text: 'Know More',
      link: '/donation/nitya-seva',
    },
  },

  {
    title: 'Become a Life Member',
    description: 'Embrace the role of a life member today!',
    image: '/images/chaitanya_nityananda.jpg',
    callToAction: {
      text: 'Know More',
      link: '/members',
    },
  },
];

export const metadata: Metadata = {
  title: 'Iskcon Project | Asansol',
  description: 'Official website of Iskcon Asansol',
  creator: 'ISKCON Asansol',
  keywords:
    'iskcon, asansol, hare krishna, jagannath temple asansol, namhatta, iskcon asansol, iskcon project',
};

export default function Home() {
  return (
    <main>
      <section>
        <Carousel
          slides={slides}
          options={{
            loop: true,
          }}
        />
      </section>
      <DonateUs />
      <Activities />
    </main>
  );
}
