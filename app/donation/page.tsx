import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Donate Us',
};

const Donation = () => {
  return (
    <main className="">
      <PageHeader className="bg-yellow-50 h-[auto] md:h-[auto] py-16 md:px-16 text-center">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-600">
            Iskcon Asansol Donation
          </h1>
          <p>Your small contribution can make a big difference!</p>

          <div className="py-8 px-8 space-y-4 text-red-700 md:text-2xl">
            <p>
              दातव्यमिति यद्दानं दीयतेऽनुपकारिणे | देशे काले च पात्रे च तद्दानं
              सात्त्विकं स्मृतम् || 20||
            </p>

            <p>
              dātavyam iti yad dānaṁ dīyate ‘nupakāriṇe deśhe kāle cha pātre cha
              tad dānaṁ sāttvikaṁ smṛitam
            </p>

            <p className="text-gray-600">
              BG 17.20: Charity given to a worthy person simply because it is
              right to give, without consideration of anything in return, at the
              proper time and in the proper place, is stated to be in the mode
              of goodness.
            </p>
          </div>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16 ">
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
                className="object-contain p-4"
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
                className="object-contain"
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
                className="object-contain p-4"
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
                className="object-contain p-4"
              />
            </div>

            <h4 className="mt-2">Temple Donation</h4>

            <Button className="mt-2">Donate Now</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Donation;
