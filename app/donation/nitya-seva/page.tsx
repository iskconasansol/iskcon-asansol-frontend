'use client';

import NityaSevaForm from '@/components/forms/nitya-seva-form';
import PageHeader from '@/components/page-header';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import OfflinePayment from '@/components/offline-payment';

const NityaSeva = () => {
  const { toast } = useToast();
  return (
    <main>
      <PageHeader className="relative lg:h-[500px]">
        <Image
          src="/images/lord_jagannath_idols.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="lord jagannath idols"
        />

        <div className="absolute w-full tex-center bottom-0 py-4 bg-red-900 bg-opacity-75">
          <h1 className="text-white text-xl lg:text-6xl text-center">
            Nitya Seva
          </h1>
        </div>
      </PageHeader>
      <div className="container mx-auto py-16">
        <div className="space-y-4 lg:w-2/3 mx-auto lg:px-8">
          <p className="text-purple-600 md:text-2xl ">
            {`~ Nitya Seva unfolds as a heartfelt monthly charity initiative,
            inviting devotees to partake in the act of giving within the sacred
            embrace of Krishna's lotus feet. ~`}
          </p>
          <p className="text-xs md:text-sm text-gray-700">
            Kindly take note that Nitya Seva is a beautiful commitment, a
            monthly expression of love and devotion, where your chosen amount
            will gracefully and automatically find its way to the service of the
            divine. We humbly request you to consider this opportunity and
            select a donation amount that resonates with your heart. Your
            generosity will truly make a meaningful difference!
          </p>
        </div>
        <Card className="mt-4 p-4 lg:w-2/3 mx-auto bg-yellow-100">
          <h3 className="font-semibold text-xl lg:text-2xl text-center text-red-600">{`Contribute and receive Krishna's blessings`}</h3>
          <NityaSevaForm
            className="mt-2"
            onFormSubmit={(data) => {
              //console.log('form data', data);
              toast({
                title: 'Hare Krishna! Thank you for your contribution.',
                description: 'We will contact you soon.',
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

export default NityaSeva;
