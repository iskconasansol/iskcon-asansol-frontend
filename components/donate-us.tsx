import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const items = [];

const DonateUs = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="flex justify-between">
          <div>
            <h3 className="text-3xl">Donate Us!</h3>
            <p>Your small contribution can make a big difference!</p>
          </div>

          <Link href={'/donation'} className="flex items-center">
            <Button variant={'outline'}>View All</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <Link
            href={'donation/nitya-seva'}
            className="bg-white rounded-md p-4 shadow-md border"
          >
            <div className="h-40 bg-purple-100 rounded-md relative">
              <Image
                fill={true}
                src={'/images/jagannath.svg'}
                alt="lord jagannath icon"
                className='object-contain p-4'
              />
            </div>

            <h4 className="mt-2">Nitya Seva</h4>

            <Button className="mt-2">Donate Now</Button>
          </Link>
          <Link
            href={'/activities/new-temple'}
            className="bg-white rounded-md p-4 shadow-md border"
          >
            <div className="h-40 bg-orange-100 rounded-md relative">
              <Image
                fill={true}
                src={'/images/temple.svg'}
                alt="temple icon"
                className='object-contain'
              />
            </div>

            <h4 className="mt-2">Future Temple</h4>

            <Button className="mt-2">Donate Now</Button>
          </Link>
          <div className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-green-100 rounded-md relative">
              <Image
                fill={true}
                src={'/images/shri_krishna.svg'}
                alt="Shri Krishna image"
                className='object-contain p-4'
              />
            </div>

            <h4 className="mt-2">Vigraha Seva</h4>

            <Button className="mt-2">Donate Now</Button>
          </div>
          <div className="bg-white rounded-md p-4 shadow-md border">
            <div className="h-40 bg-teal-100 rounded-md relative">
              <Image
                fill={true}
                src={'/images/namaste.svg'}
                alt="Namaste icon"
                className='object-contain p-4'
              />
            </div>

            <h4 className="mt-2">Temple Donation</h4>

            <Button className="mt-2">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateUs;
