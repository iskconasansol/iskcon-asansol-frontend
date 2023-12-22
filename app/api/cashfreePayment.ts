import axios from 'axios';
import { CASHFREE_API_CONFIG } from '../config/api.config';

import { CreateOrderRequest } from 'cashfree-pg';

const createOptions = ({
  customer_details,
  order_amount,
  order_meta,
}: CreateOrderRequest) => ({
  method: 'POST',
  url: `${CASHFREE_API_CONFIG.baseURL}${CASHFREE_API_CONFIG.endpoints.order}`,
  headers: CASHFREE_API_CONFIG.headers,
  data: {
    customer_details,
    order_currency: 'INR',
    order_amount,
    order_meta,
  },
});

export const createOrder = async (orderRequest: CreateOrderRequest) => {
  try {
    const response = await axios(createOptions(orderRequest));
    return response.data;
  } catch (error) {
    console.log(error, 'error');
    return error;
  }
};
