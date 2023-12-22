import { load } from '@cashfreepayments/cashfree-js';
import { initatePaymentRequest } from '../service/payment.service';
import { API_CONFIG } from '../config/api.config';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useCashfreeCheckout = () => {
  const [paymentLink, setPaymentLink] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (paymentLink) {
      router.push(paymentLink);
    }
  }, [paymentLink, router]);

  let cashfree;
  const initializeSDK = async function () {
    cashfree = await load({
      mode: 'sandbox',
    });
  };
  initializeSDK();

  type Customer = {
    customer_id: string;
    customer_phone: string;
  };

  type Order = {
    order_amount: string;
  };

  interface OrderRequestPayload {
    customer_details: Customer;
    order: Order;
  }

  const performCashfreeCheckout = async ({
    customer_details,
    order,
  }: OrderRequestPayload) => {
    const payload = JSON.stringify({
      customer_details,
      order,
    });
    const response = await initatePaymentRequest(
      API_CONFIG.endpoints.payment.initiate,
      { arg: payload }
    );

    const { payment_link } = response;
    setPaymentLink(payment_link);
  };

  return { performCashfreeCheckout };
};

export default useCashfreeCheckout;
