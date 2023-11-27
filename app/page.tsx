import Services from '@/components/services';
import Carousel, { Slide } from '@/components/ui/carousel/carousel';

const slides: Slide[] = [
  {
    title: 'Iskcon Asansol',
    description: 'Food relief program',
    image: '/images/lord_radha_krishna.jpg',
    callToAction: {
      text: 'Donate Now',
      link: '/donation',
    },
  },
  {
    title: 'Nitya Seva',
    description: 'Daily worship of the Lord. Join us',
    image: '/images/lord_chaitanya.jpg',
    callToAction: {
      text: 'Donate',
      link: '/donation',
    },
  },

  {
    title: 'Kartik Utsav',
    description: 'Celebrate with us',
    image: '/images/lord_jagannath.jpg',
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
    </main>
  );
}
