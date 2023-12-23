import { EnvelopeIcon, PhoneIcon } from '@/components/icons';
import MapEmbed from '@/components/map-embed';
import PageHeader from '@/components/page-header';

const ContactUs = () => {
  return (
    <main>
      <PageHeader title="Contact Us" />
      <section className="py-16 container">
        <p>Last updated on 23-12-2023 15:52:06</p>
        <p>You may contact us using the information below: </p>

        <div className="mt-2 flex gap-2">
          <div className="flex gap-2">
            <PhoneIcon className="w-4 h-4" />{' '}
            <a href="tel:+919433320314">+91 9433320314</a>
          </div>
          <div className="flex gap-2 items-center">
            <EnvelopeIcon className="w-4 h-4" />
            <a href="mailto:iskconasansol@gmail.com">iskconasansol@gmail.com</a>
          </div>
        </div>
        <div className="my-8">
          <MapEmbed width="100%" height="400px" />
        </div>

        <div>
          <p>Merchant Legal entity name: NAMHATTA DEVELOPMENT TRUST</p>
          <p>
            Registered Address: Garui Village, N.H.2 Bye Pass, Beside Old Toll
            Tax, Asansol, West Bengal, PIN: 713341
          </p>
          <p>
            Operational Address: Garui Village, N.H.2 Bye Pass, Beside Old Toll
            Tax, Asansol, West Bengal, PIN: 713341
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
