import * as PaytmChecksum from 'paytmchecksum';
import paytmConfig from './paytmConfig';

export const initiatePayment = async ({
  orderId,
  amount,
  customerId,
}: {
  orderId: string;
  amount: string;
  customerId: string;
}) => {
  const userInfo = {
    custId: customerId,
    mobile: '9898989898',
    email: 'test@gmail.com',
  };

  const params = {
    body: {
      requestType: 'Payment',
      mid: paytmConfig.MID,
      websiteName: paytmConfig.WEBSITE,
      orderId: orderId,
      callbackUrl: paytmConfig.CALLBACK_URL,
      txnAmount: {
        value: amount,
        currency: 'INR',
      },
      userInfo: userInfo,
    },
    head: {
      signature: '',
    },
  };

  console.log(params, 'config');

  try {
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(params.body),
      paytmConfig.MERCHANT_KEY
    );

    params.head.signature = checksum;

    console.log(params, 'params');

    const postPayload = JSON.stringify(params);

    console.log(postPayload, 'postPayload', postPayload.length);

    const response = await fetch(
      `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${paytmConfig.MID}&orderId=${orderId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': `${postPayload.length}`,
        },
        body: postPayload,
      }
    );

    console.log(await response.body, response.status, 'response');

    if (response.ok) {
      const responseData = await response.json();
      // Handle the response data as needed
      console.log('Transaction Token:', responseData.body.txnToken);
      const transactionToken = responseData.body.txnToken;

      if (!transactionToken) throw new Error('Transaction token not found');

      return transactionToken;
    } else {
      console.error('Failed to initiate payment:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error generating checksum or initiating payment:', error);
    return null;
  }
};
