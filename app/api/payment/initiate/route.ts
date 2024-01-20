import { createOrder } from '../razorpayPayment';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export async function POST(request: Request) {
  const payload = await request.json();
  const { amount } = payload;

  // const response = await createOrder({
  //   customer_details,
  //   order_amount,
  //   order_meta: {
  //     return_url: `${BASE_URL}/order-summary/{order_id}/status`,
  //   },
  //   order_currency: 'INR',
  //   order_tags,
  // });

  const response = await createOrder({
    amount: amount,
    currency: 'INR',
    receipt: 'receipt#1',
  });

  return Response.json(response);
}
