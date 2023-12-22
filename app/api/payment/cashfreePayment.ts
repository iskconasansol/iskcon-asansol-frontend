import axios from 'axios';
import { CASHFREE_API_CONFIG } from '../../config/api.config';

import { CreateOrderRequest } from 'cashfree-pg';

const createOrderRequestOptions = ({
  customer_details,
  order_amount,
  order_meta,
  order_tags,
}: CreateOrderRequest) => ({
  method: 'POST',
  url: `${CASHFREE_API_CONFIG.baseURL}${CASHFREE_API_CONFIG.endpoints.order}`,
  headers: CASHFREE_API_CONFIG.headers,
  data: {
    customer_details,
    order_currency: 'INR',
    order_amount,
    order_meta,
    order_tags,
  },
});

const getOrderDetailsRequestOptions = (orderId: string) => ({
  method: 'GET',
  url: `${CASHFREE_API_CONFIG.baseURL}${CASHFREE_API_CONFIG.endpoints.order}/${orderId}`,
  headers: CASHFREE_API_CONFIG.headers,
});

export const createOrder = async (orderRequest: CreateOrderRequest) => {
  try {
    const response = await axios(createOrderRequestOptions(orderRequest));
    return response.data;
  } catch (error) {
    console.log(error, 'error');
    return error;
  }
};

export const getOrderDetails = async (orderId: string) => {
  try {
    const response = await axios(getOrderDetailsRequestOptions(orderId));
    return response.data;
  } catch (error) {
    console.log(error, 'error');
    return error;
  }
};
