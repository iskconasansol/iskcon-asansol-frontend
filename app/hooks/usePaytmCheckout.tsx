import { API_CONFIG } from '../config/api.config';
import { initatePaymentRequest } from '../service/payment.service';

interface PaytmCheckoutConfig {
  orderId: string;
  txnToken: string;
  amount: string;
  userId: string;
}

declare global {
  interface Window {
    Paytm: any;
  }
}

const usePaytmCheckout = () => {
  const openJsCheckoutPopup = ({
    amount,
    orderId,
    txnToken,
  }: Omit<PaytmCheckoutConfig, 'userId'>) => {
    const paytmConfig = {
      root: '',
      flow: 'DEFAULT',
      data: {
        orderId,
        token: txnToken,
        tokenType: 'TXN_TOKEN',
        amount,
      },
      merchant: {
        redirect: true,
      },
      handler: {
        notifyMerchant: function (eventName: string, data: any) {
          console.log('notifyMerchant handler function called');
          console.log('eventName => ', eventName);
          console.log('data => ', data);
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.init(paytmConfig)
        .then(function onSuccess() {
          // after successfully updating configuration, invoke checkoutjs
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error: Error) {
          console.log('error => ', error);
        });
    }
  };

  const performPaytmCheckout = async ({
    amount,
    orderId,
    userId,
  }: Pick<PaytmCheckoutConfig, 'amount' | 'orderId' | 'userId'>) => {
    const payload = JSON.stringify({ amount, orderId, customerId: userId });
    const res = await initatePaymentRequest(
      API_CONFIG.endpoints.payment.initiate,
      { arg: payload }
    );

    console.log('tranx', res);

    if ('txnToken' in res && res.txnToken) {
      console.log('opening paytm popup');
      openJsCheckoutPopup({
        amount,
        orderId,
        txnToken: res.txnToken,
      });
    }
  };

  return { performPaytmCheckout };
};

export default usePaytmCheckout;
