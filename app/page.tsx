import DonateUs from '@/components/donate-us';
import Services from '@/components/services';
import Carousel, { Slide } from '@/components/ui/carousel/carousel';

const slides: Slide[] = [
  {
    title: 'Welcome to Iskcon Asansol',
    description: 'Join us in building our new temple',
    image: '/images/lord_radha_krishna.jpg',
    callToAction: {
      text: 'Contribute',
      link: '/projects/new-temple',
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
    title: 'Perform a house program',
    description: 'Invite the Lord to your home',
    image: '/images/chaitanya_nityananda.jpg',
    callToAction: {
      text: 'Book Now',
      link: '/services/house-program',
    },
  },
];

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
      <Services />
      <DonateUs />
    </main>
  );
}
