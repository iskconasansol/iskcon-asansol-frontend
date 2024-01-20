import axios from 'axios';

import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id:
    process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ||
    process.env.RAZORPAY_KEY_ID ||
    '',
  key_secret:
    process.env.NEXT_PUBLIC_RAZORPAY_SECRET_KEY ||
    process.env.RAZORPAY_SECRET_KEY,
});

export const createOrder = async (payload: any) => {
  try {
    const response = await razorpay.orders.create(payload);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
