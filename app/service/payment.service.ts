import axios from 'axios';

export const initatePaymentRequest = async (
  url: string,
  { arg }: { arg: string }
) => {
  const response = await axios.post(url, JSON.parse(arg));
  const data = response.data;

  return data;
};
