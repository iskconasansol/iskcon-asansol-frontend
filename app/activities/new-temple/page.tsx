'use client';

import FutureTempleContributionForm from '@/components/forms/future-temple-contribution-form';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const NewTemple = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto">
        <section className="grid md:grid-cols-3  gap-4">
          <div className="col-span-2 bg-purple-200 rounded-lg h-52 p-8">
            <p className="text-xl md:text-2xl font-semibold">
              {` Contribute towards construction of Lord Jagannath's temple`}
            </p>
            <p className="mt-2">
              We are building a beautiful temple of Lord Jagannath in Garui
              Village. You can contribute towards the construction of the temple
              by donating funds or by donating construction materials. Hare
              Krishna!
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-yellow-100">
            <Image
              src={'/images/temple.svg'}
              fill={true}
              alt="new temple image"
              className="object-contain"
            />
          </div>
        </section>

        <Card className="md:w-[800px] shadow-md bg-yellow-100 mx-auto p-4 mt-4">
          <h3 className="font-semibold text-xl lg:text-2xl text-center text-red-600">{`Contribute and receive Krishna's blessings`}</h3>

          <FutureTempleContributionForm
            className="mt-4"
            onFormSubmit={(data) => {
              console.log('form data', data);
            }}
          />
        </Card>
      </div>
    </main>
  );
};

export default NewTemple;
