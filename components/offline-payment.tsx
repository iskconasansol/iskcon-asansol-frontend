import { Card, CardContent, CardTitle } from '@/components/ui/card';

const OfflinePayment = () => {
  return (
    <section>
      <h3>Donate via NEFT/RTGS/IMPS/PayTm/UPI</h3>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <CardTitle>NEFT/RTGS/IMPS</CardTitle>
            <div>
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
      </div>
    </section>
  );
};

export default OfflinePayment;
