import Image from 'next/image';
import Link from 'next/link';
import { TimeIcon, EnvelopeIcon, PhoneIcon } from '@/components/icons';
import MahamantraMarquee from './mahamantra-marquee';
import MapEmbed from './map-embed';

const templeSchedule = [
  {
    time: '4:30 AM - 5:00 AM',
    name: 'Mangala Arati',
  },
  {
    time: '5:05 AM - 5:25 AM',
    name: 'Tulsi Arati',
  },
  {
    time: '7:15 AM - 7:45 AM',
    name: 'Shringar Arati',
  },
  {
    time: '7:45 AM - 8:00 AM',
    name: 'Guru Puja',
  },
  {
    time: '8:30 AM - 8:45 AM',
    name: 'Pushpa Arati',
  },
  {
    time: '12:00 PM - 12:20 PM',
    name: 'Raj Bhog Arati',
  },
  {
    time: '12:45 PM - 4:30 PM',
    name: 'Temple Closes',
  },
  {
    time: '4:30 PM - 4:45 PM',
    name: 'Utthapana Arati',
  },
  {
    time: '6:30 PM - 7:00 PM',
    name: 'Sandhya Arati',
  },
  {
    time: '8:30 PM - 8:45 PM',
    name: 'Shayan Arati',
  },
  {
    time: '8:45 PM - 8:45 PM',
    name: 'Temple Closes',
  },
];

const quickLinks = [
  { name: 'About', link: '/about-us' },
  { name: 'Donate', link: '/donation' },
  { name: 'Festivals', link: '/festivals' },
  { name: 'Activities', link: '/activities' },
  {
    name: 'Learn from Prabhupada',
    link: '/learn-from-prabhupada',
  },
];
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="min-h-[100px] w-full container mx-auto font-light px-8 md:px-auto border-t">
      <MahamantraMarquee className="text-lg py-8 text-red-600" />
      <div className="grid gap-8 lg:gap-4 py-16 lg:grid-cols-4 text-gray-600">
        <section>
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Image
                src="/images/logo/iskcon-asansol-logo.svg"
                width={60}
                height={60}
                alt="logo"
              />
            </Link>
            <div>
              <div className="uppercase font-semibold text-lg flex gap-2">
                <span>Iskcon</span>
                <span>Asansol</span>
              </div>
              <div className="text-xs">
                International Society for Krishna Consciousness
              </div>
            </div>
          </div>

          <p className="mt-2 text-sm">
            NH2 Bye-Pass, Garui, Asansol, <br /> West Bengal 713341, India
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="mt-2 flex flex-col gap-2">
            {quickLinks.map(({ name, link }, index) => (
              <Link key={index} href={link} className="hover:text-purple-700">
                {name}
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Timing</h3>
          <div className="mt-2 text-sm flex flex-col gap-2">
            {templeSchedule.map(({ name, time }, index) => (
              <div key={index} className="flex gap-2 items-center">
                <TimeIcon className="w-4 h-4" />
                <span className="font-semibold">{name}</span> : {time}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex gap-2">
              <PhoneIcon className="w-4 h-4" />{' '}
              <a href="tel:+9194340 00000">+91 94340 00000</a>
            </div>
            <div className="flex gap-2 items-center">
              <EnvelopeIcon className="w-4 h-4" />
              <a href="mailto:iskconasansol@gmail.com">
                iskconasansol@gmail.com
              </a>
            </div>

            <MapEmbed width="100%" />
          </div>
        </section>
      </div>
      <div className="flex justify-between items-center w-full border-t border-gray-200 py-8 text-xs md:text-base">
        <div>© {currentYear} ISKCON Asansol</div>

        {/* terms privacy cancellation */}
        <div className="divide-x divide-gray-400">
          <Link href="/terms" className="px-4">
            Terms
          </Link>
          <Link href="/privacy" className="px-4">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
