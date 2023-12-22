import axios from 'axios';
import { Order } from '../model/order';
import axiosFetcher from './api.service';

export const initatePaymentRequest = async (
  url: string,
  { arg }: { arg: string }
) => {
  const response = await axios.post(url, JSON.parse(arg));
  const data = response.data;

  return data;
};

export const getOrderDetails = async (url: string) => {
  const orders = await axiosFetcher('GET')(url, { arg: '' });

  return orders;
};

export const getOrders = async (url: string) => {
  const orders = await axios.get(url);
  const data = orders.data;
  return data;
};
