import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const OfflinePayment = () => {
  return (
    <section className='text-slate-800'>
      <h3 className="text-sm md:text-xl">Donate via NEFT/RTGS/IMPS/PayTm/UPI</h3>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Card className="bg-white p-2 rounded-md shadow-md">
          <CardContent className="py-2">
            <CardTitle className="text-base">NEFT/RTGS/IMPS</CardTitle>
            <div className="mt-2">
              <p>
                <span className="font-semibold">Bank Name</span> : Axis Bank
              </p>
              <p>
                <span className="font-semibold">Account Name</span> : Namhatta
                Development Trust
              </p>
              <p>
                <span className="font-semibold">A/C No</span> : 919010069148882
              </p>
              <p>
                <span className="font-semibold">IFSC Code</span> : UTIB0000150
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white p-2 rounded-md shadow-md">
          <CardContent className="py-2">
            <CardTitle className="text-base">Another account</CardTitle>
            <div className="mt-2">
              <p>
                <span className="font-semibold">Bank Name</span> : ICICI Bank
              </p>
              <p>
                <span className="font-semibold">Account Name</span> : ISKCON
              </p>
              <p>
                <span className="font-semibold">A/C No</span> : 402401000048
              </p>
              <p>
                <span className="font-semibold">IFSC Code</span> : ICIC0004024
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white p-2 rounded-md shadow-md ">
          <CardContent>
            <div className="mt-2 relative h-[200px]">
              <Image
                src={'/images/paytm_qr_code.png'}
                fill
                alt="paytm qr code"
                className="object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OfflinePayment;
