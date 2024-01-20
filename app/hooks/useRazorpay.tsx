import { initatePaymentRequest } from '../service/payment.service';
import { API_CONFIG } from '../config/api.config';
import { useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { loadScript } from '@/lib/utils';
import { RAZORPAY_CONFIG } from '../config/paymentGatewayConfig';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RAZAORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

const useRazorpay = () => {
  const [orderId, setOrderId] = useState('');

  const {
    trigger: startCheckout,
    error,
    data,
    isMutating: isCheckoutLoading,
  } = useSWRMutation(
    API_CONFIG.endpoints.payment.initiate,
    initatePaymentRequest
  );

  interface OrderRequestPayload {
    amount: number;
  }

  const performRazorpayCheckout = async ({ amount }: OrderRequestPayload) => {
    const payload = JSON.stringify({
      amount,
    });

    try {
      const response = await startCheckout(payload);
      const { order_id } = response;

      const res = await loadScript(
        RAZAORPAY_SCRIPT
      );

      if (!res) throw new Error('Razorpay is not loaded!');

      const options = {
        key: RAZORPAY_CONFIG.keyId,
        amount,
        currency: 'INR',
        description: 'TEST',
        name: 'TEST',
        order_id,
        notes: {},
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const generatePaymentObject = (options: object) => window.Razorpay(options);

  return {
    performRazorpayCheckout,
    isCheckoutLoading,
    orderId,
    generatePaymentObject,
  };
};

export default useRazorpay;
