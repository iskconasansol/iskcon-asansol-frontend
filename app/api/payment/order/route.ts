import { NextRequest } from 'next/server';
import { getOrderDetails } from '../cashfreePayment';
import { OrderEntity } from 'cashfree-pg';

export async function GET(request: NextRequest) {
  const params = await request.nextUrl.searchParams;
  const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
  const orderId = params.get('order_id');

  if (orderId === null || orderId === undefined || orderId === 'undefined') {
    return Response.redirect(`${BASE_URL}`);
  }

  const response: OrderEntity = await getOrderDetails(orderId);
  const {
    customer_details,
    order_tags,
    order_amount,
    order_currency,
    order_status,
  } = response;

  return Response.json({
    customer_details,
    order_tags,
    order_amount,
    order_currency,
    order_status,
  });
}
