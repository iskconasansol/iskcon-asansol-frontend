'use client';

import useCashfree from '@/app/hooks/useCashfree';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OrderSummaryPage = () => {
  const { orderDetails, orderDetailsLoading } = useCashfree();

  return (
    <main>
      <section className="container py-16 ">
        <Card className="mx-auto md:max-w-xl bg-yellow-50 py-8 shadow-lg">
          <div className="relative h-40">
            <Image
              src="/images/lord_jagannath_idols.svg"
              fill={true}
              alt="lord jagannath idols"
              className="object-contain p-2"
            />
          </div>

          <CardContent>
            <h1 className="text-2xl font-semibold text-red-600 text-center">
              Hare Krishna Dear Devotee 🙏
            </h1>

            {orderDetailsLoading ? (
              <>
                <div className="space-y-2 max-w-md mx-auto mt-4">
                  <Skeleton className="h-8 w-full rounded-sm bg-gray-300" />
                  <Skeleton className="h-8 w-full rounded-sm bg-gray-300" />
                </div>
              </>
            ) : null}

            {!orderDetailsLoading ? (
              <>
                <div className="text-center space-y-4">
                  <p className="mt-4 ">
                    {'Thank you for contributing to ISKCON Asansol.'}
                  </p>
                  <div className="mt-4">
                    <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    ₹{orderDetails.order_amount}
                  </h3>

                  <p>May Lord Jagannath bless you and your family.</p>

                  <Link href={'/'}>
                    <Button variant={'default'} className="mt-4">
                      Back to home
                    </Button>
                  </Link>
                </div>
              </>
            ) : null}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default OrderSummaryPage;
