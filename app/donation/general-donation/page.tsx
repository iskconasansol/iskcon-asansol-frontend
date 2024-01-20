'use client';

import useCashfree from '@/app/hooks/useCashfree';
import useRazorpay from '@/app/hooks/useRazorpay';
import GeneralDonationForm from '@/components/forms/general-donation-form';
import OfflinePayment from '@/components/offline-payment';
import PageHeader from '@/components/page-header';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useEffect } from 'react';

const GeneralDonationPage = () => {
  // const { performCashfreeCheckout, isCheckoutLoading } = useCashfree();
  const { performRazorpayCheckout, isCheckoutLoading, orderId } = useRazorpay();

  useEffect(() => {
    if(!orderId) return;
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 1000, //  = INR 10
      name: 'ISKCON Asansol',
      description: 'Donation',
      image: '/images/logo.png',
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-summary/${orderId}/status`,
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254'
      }
    };
  }, [orderId])

  return (
    <main>
      <PageHeader className="bg-orange-50 lg:h-[300px] bg-center relative">
        <Image
          src="/images/lord_jagannath_blessing.svg"
          fill
          className="object-contain object-top"
          alt="lord jagannath idols"
        />
      </PageHeader>
      <section className="my-16">
        {/* Write someething about general donation with beautiful quotes from Gita and Shrimad Bhagwatam */}
        <div className="container mx-auto">
          <div className="space-y-4 lg:w-2/3 mx-auto lg:px-8">
            <p className="text-purple-600 md:text-2xl ">
              {`~ Supporting our temple through your generous donations helps foster spiritual growth, community well-being, and outreach programs that positively impact lives. Your contribution empowers the vibrant activities of worship, education, and humanitarian service, creating a ripple effect of positivity and compassion in society.~`}
            </p>
            <p className="text-xs md:text-sm text-gray-700">
              Kindly take note that your donation is a beautiful commitment, a
              monthly expression of love and devotion, where your chosen amount
              will gracefully and automatically find its way to the service of
              the divine. We humbly request you to consider this opportunity and
              select a donation amount that resonates with your heart. Your
              generosity will truly make a meaningful difference!
            </p>

            <Card className="bg-yellow-50 p-4 shadow-md">
              <GeneralDonationForm
                onFormSubmit={(data) => {
                  performRazorpayCheckout({
                    amount: Number(data.amount),
                  });
                }}
                isLoading={isCheckoutLoading}
              />
            </Card>
          </div>
          <div className="py-16">
            <OfflinePayment />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GeneralDonationPage;
