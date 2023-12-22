import {
  getOrderDetails,
  getOrders,
  initatePaymentRequest,
} from '../service/payment.service';
import { API_CONFIG } from '../config/api.config';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';

const useCashfree = () => {
  const [paymentLink, setPaymentLink] = useState('');
  const router = useRouter();
  const params = useParams();
  const order_id = params?.order_id as string;

  const {
    trigger: startCheckout,
    error,
    data,
    isMutating: isCheckoutLoading,
  } = useSWRMutation(
    API_CONFIG.endpoints.payment.initiate,
    initatePaymentRequest
  );

  const { data: orderDetails, isLoading: orderDetailsLoading } = useSWR(
    `${API_CONFIG.endpoints.payment.order}?order_id=${order_id}`,
    getOrders
  );

  useEffect(() => {
    if (paymentLink) {
      router.push(paymentLink);
    }
  }, [paymentLink, router]);

  type Customer = {
    customer_id: string;
    customer_phone: string;
    customer_email?: string;
    customer_name?: string;
  };

  type Order = {
    order_amount: string;
    order_tags?: Record<string, any>;
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
    const response = await startCheckout(payload);

    const { payment_link } = response;
    setPaymentLink(payment_link);
  };

  return {
    performCashfreeCheckout,
    orderDetails,
    isCheckoutLoading,
    orderDetailsLoading,
  };
};

export default useCashfree;
