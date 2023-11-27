import IskconLogoIcon from '@/app/icons/iskcon-logo-icon';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="min-h-[100px] w-full container mx-auto font-light px-8 md:px-auto border-t">
      <div className="grid gap-4 py-8 md:grid-cols-4">
        <section>
          <div className="flex gap-2 items-center">
            <IskconLogoIcon className="w-20 h-20" />

            <div className="uppercase font-semibold text-lg">
              <span>Iskcon</span>
              <br />
              <span>Asansol</span>
            </div>
          </div>
          <p className="mt-2">
            NH2 Bye-Pass, Garui, Asansol, <br /> West Bengal 713341, India
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <div className="mt-2">
            <div>
              <Link href="#">About</Link>
            </div>
            <div>
              <Link href="#">Projects</Link>
            </div>
            <div>
              <Link href="#">Donate</Link>
            </div>
            <div>
              <Link href="#">Festivals</Link>
            </div>
            <div>
              <Link href="#">Activities</Link>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Timing</h3>
          <div className="mt-2">
            <div>Samadhi Arati : 04:10AM</div>
            <div>Mangala Arati : 04:30AM</div>
            <div>Tulsi-Puja : 05:00AM</div>
            <div>Sringar Darshan : 07:15AM</div>
            <div>Guru Puja : 07:25AM </div>
            <div>Bhagavatam Class : 08:00AM</div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-2">
            <div>
              <a href="tel:+9194340 00000">+91 94340 00000</a>
            </div>
            <div>
              <a href="mailto:iskconasansol@gmail.com">
                iskconasansol@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-between items-center w-full border-t border-gray-200 py-8 text-xs md:text-md">
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
