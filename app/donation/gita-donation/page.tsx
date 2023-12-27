'use client';

import useCashfreeCheckout from '@/app/hooks/useCashfree';
import GitaDonationForm from '@/components/forms/gita-donation-form';
import OfflinePayment from '@/components/offline-payment';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const GitaDonationPage = () => {
  const { performCashfreeCheckout, isCheckoutLoading } = useCashfreeCheckout();

  return (
    <main>
      <PageHeader className="bg-orange-50 bg-[url('/images/ram-mandir.jpg')] lg:h-[600px] bg-cover relative">
        <div className="text-center bg-white w-[300px] md:w-auto p-2 rounded-lg md:p-8 backdrop-blur-sm bg-white/50 md:absolute md:top-6 md:left-4">
          <h1 className="text-xl md:text-4xl font-semibold text-red-600">
            Gita Donation
          </h1>
          <p>Contribute and help us distribute Gita</p>

          <a href="#info">
            <Button className="bg-orange-800 mt-4">Contribute</Button>
          </a>
        </div>
      </PageHeader>

      <section id="info" className=" py-16">
        <div className="container">
          <div className="mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-purple-800">
              প্রিয় ভক্তগণ । হরে কৃষ্ণ
            </h1>

            <p className="mt-4 text-slate-600 text-left text-lg max-w-xl md:max-w-full mx-auto">
              ২৮ শে জানুয়ারি থেকে ২৮শে ফেব্রুয়ারি পর্যন্ত অযোধ্যা রাম মন্দির
              উদ্বোধন অনুষ্ঠান অনুষ্ঠিত হবে, এবং ভারতীয় সরকার বিশেষ ভাবে ইস্কনকে
              এই মহোৎসবে অংশগ্রহণ করার জন্য নিমন্ত্রণ জানিয়েছেন। ইসকন
              উপমহাদেশীয় কমিটর এক সাম্প্রতিক সভায় বিভিন্ন ইসকন মন্দির অধ্যক্ষরা
              সিদ্ধান্ত নিয়েছেন যে তারা ইস্কন এর পক্ষে তিনটি বিশেষ সেবা করবেন -
              প্রসাদ বিতরণ, হরিনাম সংকীর্তন এবং গ্রন্থ বিতরণ। মায়াপুর এবং ডেলহি
              মন্দির কর্তৃপক্ষের উপর গ্রন্থ বিতরণের ভার অর্পণ করা হয়েছে, আমাদের
              লক্ষ্য হচ্ছে <span className="font-semibold">৩০০,০০০</span>{' '}
              শ্রীমদ্ভগবদ্গীতা যথাযত বিনামূল্যে বিতরণ । দাতাদের কাছে এই
              গুরুত্বপূর্ণ উদ্যোগটিকে সমর্থন করার জন্য অনুরোধ করেছেন ।
            </p>

            <p className="text-red-600 text-lg mt-2">
              আপনাদের সার্বিক সহযোগিতার প্রত্যাশায়, আপনাদের সেবায় ইসকন আসানসোল
            </p>
          </div>
        </div>
      </section>

      <section className="bg-orange-50">
        <div className="container py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="flex items-start justify-center">
              <Card className="shadow-md bg-purple-100 p-4 w-content h-content md:sticky md:top-[120px]">
                <CardHeader>
                  <h3 className="font-semibold text-xl lg:text-2xl text text-red-600">
                    গীতা দানের ফলে ব্যক্তি
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc">
                    <li>সমস্ত পাপ থেকে মুক্ত হতে পারেন |</li>
                    <li>ভগবান কে সহজেই সন্তুষ্ট করতে পারেন |</li>
                    <li>ভগদ্ধাম ধাম বাসের সুযোগ লাভ করবেন |</li>
                    <li>জীবনকে কৃত-কৃতার্থ করতে পারবেন |</li>
                  </ul>
                </CardContent>
                <p className="mt-4">
                  প্রত্যেক গীতা দাতার নামে বিশেষ পূজা নিবেদিত হবে |
                </p>
              </Card>
            </div>

            <Card className="bg-yellow-100 p-4 md:px-8 shadow-md md:col-span-3">
              <CardHeader className='px-0'>
                <h3 className="font-semibold text-xl lg:text-2xl text text-red-600">
                  হ্যাঁ! আমি শ্রীমদ ভগবদ্গীতা দান করতে চাই
                </h3>
              </CardHeader>

              <GitaDonationForm
                isLoading={isCheckoutLoading}
                onFormSubmit={async (data) => {
                  performCashfreeCheckout({
                    customer_details: {
                      customer_id: data.phone,
                      customer_phone: data.phone,
                      customer_email: data.email,
                      customer_name: data.name,
                    },
                    order: {
                      order_amount: data.amount,
                      order_tags: {
                        address: `${data?.street_address},${data?.city},${data?.state},${data.postal_code}`,
                        pan_number: data?.pan_number,
                        initiated_name: data?.initiatedName,
                        quantity: data?.qty,
                        type: 'donation',
                        purpose: 'gita_donation',
                      },
                    },
                  });
                }}
                className="md:px-8"
              />
            </Card>
          </div>

          <div className='py-16'>
            <OfflinePayment />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GitaDonationPage;
