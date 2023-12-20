import { initiatePayment } from '../../paytmPayment';

export async function POST(request: Request) {
  const payload = await request.json();
  const { orderId, amount, customerId } = payload;

  if (!orderId || !amount || !customerId) {
    return Response.json({
      error: 'Invalid request',
    });
  }

  const paytmParams = await initiatePayment({
    orderId,
    amount,
    customerId,
  });

  return Response.json({
    ...paytmParams,
  });
}
