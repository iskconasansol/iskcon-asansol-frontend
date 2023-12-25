import { createOrder } from '../cashfreePayment';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export async function POST(request: Request) {
  const payload = await request.json();
  const { customer_details, order } = payload;
  const { customer_id, customer_phone } = customer_details;
  const { order_amount, order_tags } = order;

  if (!customer_id || !customer_phone || !order_amount) {
    return Response.json({
      error: 'Invalid request',
    });
  }

  const response = await createOrder({
    customer_details,
    order_amount,
    order_meta: {
      return_url: `${BASE_URL}/order-summary/{order_id}/status`,
    },
    order_currency: 'INR',
    order_tags,
  });

  return Response.json(response);
}
