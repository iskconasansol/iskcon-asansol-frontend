import axios from 'axios';

const axiosFetcher = (method: string) => {
  const axiosMethod = axiosFetcherBasedOnMethod(method);

  return async (url: string, options?: { arg: string }) => {
    const payload = options ? JSON.parse(options.arg) : null;
    const response = await axiosMethod(url, payload);
    const data = response.data;

    return data;
  };
};

const axiosFetcherBasedOnMethod = (method: string) => {
  switch (method) {
    case 'GET':
      return axios.get;
    case 'POST':
      return axios.post;
    case 'PUT':
      return axios.put;
    case 'DELETE':
      return axios.delete;
    default:
      return axios.get;
  }
};

export default axiosFetcher;
