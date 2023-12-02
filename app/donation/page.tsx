import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate Us',
};

const Donation = () => {
  return (
    <main className="bg-yellow-50">
      <div className="container mx-auto py-16 ">
        <h1 className="text-xl md:text-4xl text-purple-700 font-semibold">
          Donate Us!
        </h1>
        <p>Your small contribution makes a big difference.</p>

        <p className="mt-4">
          Lord Krishna tells Uddhava: One who offers the Deity gifts of land,
          markets, cities and villages so that the regular daily worship and
          special festivals of the Deity may go on continually will achieve
          opulence equal to My own. (SB 11.27.51)
        </p>
      </div>
    </main>
  );
};

export default Donation;
