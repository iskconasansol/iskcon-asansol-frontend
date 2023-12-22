import { createOrder } from '../../cashfreePayment';

export async function POST(request: Request) {
  const payload = await request.json();
  const { customer_details, order } = payload;
  const { customer_id, customer_phone } = customer_details;
  const { order_amount } = order;

  if (!customer_id || !customer_phone || !order_amount) {
    return Response.json({
      error: 'Invalid request',
    });
  }

  const response = await createOrder({
    customer_details,
    order_amount,
    order_meta: {
      return_url: 'http://localhost:3000/order-summary/{order_id}/status'
    },
    order_currency: 'INR',
  });

  return Response.json(response);
}
