'use client';

import FutureTempleContributionForm from '@/components/forms/future-temple-contribution-form';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import useCashfreeCheckout from '@/app/hooks/useCashfree';
import OfflinePayment from '@/components/offline-payment';

const NewTemple = () => {
  const { performCashfreeCheckout, isCheckoutLoading } = useCashfreeCheckout();

  return (
    <main className="py-8">
      <div className="container mx-auto">
        <section className="grid md:grid-cols-3  gap-4">
          <div className="col-span-2 bg-purple-200 rounded-lg md:h-52 p-8">
            <p className="text-base md:text-lg lg:text-2xl font-semibold">
              {` Contribute towards our under-construction projects`}
            </p>
            <p className="text-xs md:text-sm lg:text-base mt-2">
              Embark on a sacred journey with us as we construct a magnificent
              temple for Lord Jagannath in Garui Village. Your generous
              contributions, whether in funds or construction materials, are
              pivotal in shaping this divine abode. Open your heart to the
              spirit of giving and join hands in establishing a haven for Lord
              Jagannath. Hare Krishna! Support our under-construction projects
              and be a part of this auspicious endeavor.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden bg-purple-200">
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
            isLoading={isCheckoutLoading}
            onFormSubmit={(data) => {
              console.log(data, 'on submit')
              performCashfreeCheckout({
                customer_details: {
                  customer_name: data.name,
                  customer_id: data.phone,
                  customer_email: data.email,
                  customer_phone: data.phone,
                },
                order: {
                  order_amount: data.amount || '',
                  order_tags: {
                    address: `${data?.street_address},${data?.city},${data?.state},${data.postal_code}`,
                    pan_number: data?.pan_number,
                    initiated_name: data?.initiatedName,
                    type: 'donation',
                    purpose: 'projects',
                  },
                },
              });
            }}
          />
        </Card>
      </div>
      <div className="py-16 container">
        <OfflinePayment />
      </div>
    </main>
  );
};

export default NewTemple;
