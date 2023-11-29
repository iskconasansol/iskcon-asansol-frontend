import { Button } from '@/components/ui/button';
import Link from 'next/link';

const items = [

]

const DonateUs = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl">Donate Us!</h3>
            <p>Your small contribution can make a big difference!</p>
          </div>

          {/* <Button variant={'outline'}>View All</Button> */}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <Link href={'donation/nitya-seva'} className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-purple-300 rounded-md"></div>

            <h4 className="mt-2">Nitya Seva</h4>

            <Button className="mt-2">Donate Now</Button>
          </Link>
          <Link href={'/projects/new-temple'} className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-orange-300 rounded-md"></div>

            <h4 className="mt-2">New Temple Construction</h4>

            <Button className="mt-2">Donate Now</Button>
          </Link>
          <div className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-green-300 rounded-md"></div>

            <h4 className="mt-2">Namhatta Program</h4>

            <Button className="mt-2">Donate Now</Button>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-teal-300 rounded-md"></div>

            <h4 className="mt-2">Bhakti Vriksha</h4>

            <Button className="mt-2">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateUs;
