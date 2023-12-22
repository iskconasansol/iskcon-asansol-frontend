export const API_CONFIG = {
  endpoints: {
    calendar: '/api/calendar',
    payment: {
      initiate: '/api/payment/initiate',
      callback: '/api/payment/callback',
      order: '/api/payment/order',
    },
  },
};

export const CASHFREE_API_CONFIG = {
  baseURL: 'https://sandbox.cashfree.com/pg',
  headers: {
    accept: 'application/json',
    'x-api-version': '2021-05-21',
    'content-Type': 'application/json',
    'x-client-id':
      process.env.NEXT_PUBLIC_CASHFREE_APP_ID || process.env.CASHFREE_APP_ID,
    'x-client-secret':
      process.env.NEXT_PUBLIC_CASHFREE_SECRET_KEY ||
      process.env.CASHFREE_SECRET_KEY,
  },
  endpoints: {
    order: '/orders',
    refund: '/refund',
    verify: '/order/validate',
  },
};
