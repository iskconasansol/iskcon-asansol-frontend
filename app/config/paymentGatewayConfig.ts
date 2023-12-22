export const CASHFREE_CONFIG = {
  apiEndPoint: 'https://sandbox.cashfree.com/pg',
  appID: process.env.NEXT_PUBLIC_CASHFREE_APP_ID || process.env.CASHFREE_APP_ID,
  secretKey:
    process.env.NEXT_PUBLIC_CASHFREE_SECRET_KEY ||
    process.env.CASHFREE_SECRET_KEY,
};
