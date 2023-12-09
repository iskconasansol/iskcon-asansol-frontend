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
      link: '/activities/new-temple',
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
      link: '/membership',
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
