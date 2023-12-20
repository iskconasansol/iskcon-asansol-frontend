import { verifyChecksum } from 'paytmchecksum';
import paytmConfig from '../../paytmConfig';

export async function POST(request: Request) {
  //   const paytmParams = await request.json();
  //   const merchantKey = paytmConfig.MERCHANT_KEY;

  //   console.log('request', request);

  //   const isValidChecksum = await verifyChecksum(paytmParams, merchantKey);

  //   console.log('isValidChecksum', isValidChecksum);

  //   if (!isValidChecksum) {
  //     return Response.json({
  //       error: 'Invalid checksum',
  //     });
  //   }

  return Response.json(request.body);
}
